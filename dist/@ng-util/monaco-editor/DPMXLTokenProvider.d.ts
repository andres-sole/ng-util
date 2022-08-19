import * as monaco from 'monaco-editor';
export declare class DPMXLState implements monaco.languages.IState {
    clone(): monaco.languages.IState;
    equals(): boolean;
}
export declare class DPMXLTokenProvider implements monaco.languages.TokensProvider {
    getInitialState(): monaco.languages.IState;
    tokenize(line: string): monaco.languages.ILineTokens;
}
export declare function tokensForLine(input: string): monaco.languages.ILineTokens;
