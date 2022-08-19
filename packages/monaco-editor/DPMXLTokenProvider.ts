import { ANTLRErrorListener } from 'antlr4ts';
import * as monaco from 'monaco-editor';
import IToken = monaco.languages.IToken;
import ILineTokens = monaco.languages.ILineTokens;
import { CharStreams } from 'antlr4ts';
import { dpm_xlLexer } from './grammar/dpm_xlLexer';

const EOF = -1;

export class DPMXLState implements monaco.languages.IState {
  clone(): monaco.languages.IState {
    return new DPMXLState();
  }

  equals(): boolean {
    return true;
  }
}

export class DPMXLTokenProvider implements monaco.languages.TokensProvider {
  getInitialState(): monaco.languages.IState {
    return new DPMXLState();
  }

  tokenize(line: string): monaco.languages.ILineTokens {
    return tokensForLine(line);
  }
}

class DPMXLToken implements IToken {
  scopes: string;
  startIndex: number;

  constructor(ruleName: string, startIndex: number) {
    this.scopes = ruleName.toLowerCase() + '.dpm-xl';
    this.startIndex = startIndex;
  }
}

class DPMXLLineTokens implements ILineTokens {
  endState: monaco.languages.IState;
  tokens: monaco.languages.IToken[];

  constructor(tokens: monaco.languages.IToken[]) {
    this.endState = new DPMXLState();
    this.tokens = tokens;
  }
}

export function tokensForLine(input: string): monaco.languages.ILineTokens {
  const errorStartingPoints: number[] = [];
  class ErrorCollectorListener implements ANTLRErrorListener<any> {
    // tslint:disable-next-line:typedef
    syntaxError(_: any, _offendingSymbol: any, _line: any, column: any, _msg: any, _e: any) {
      errorStartingPoints.push(column);
    }
  }
  const inputStream = CharStreams.fromString(input);
  const lexer = new dpm_xlLexer(inputStream);
  lexer.removeErrorListeners();
  const errorListener = new ErrorCollectorListener();
  lexer.addErrorListener(errorListener);
  let done = false;
  const myTokens: monaco.languages.IToken[] = [];
  do {
    const token = lexer.nextToken();
    if (token == null) {
      done = true;
    } else {
      // We exclude EOF
      if (token.type === EOF) {
        done = true;
      } else {
        const tokenTypeName = lexer.ruleNames[token.type - 1];
        const myToken = new DPMXLToken(tokenTypeName, token.charPositionInLine);
        myTokens.push(myToken);
      }
    }
  } while (!done);
  // Add all errors
  for (const e of errorStartingPoints) {
    myTokens.push(new DPMXLToken('error', e));
  }
  myTokens.sort((a, b) => (a.startIndex > b.startIndex ? 1 : -1));
  console.log(myTokens);
  return new DPMXLLineTokens(myTokens);
}
