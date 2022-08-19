import * as i0 from '@angular/core';
import { InjectionToken, EventEmitter, Component, Inject, Input, Output, forwardRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOCUMENT, CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CharStreams } from 'antlr4ts';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';
import * as Utils from 'antlr4ts/misc/Utils';

const NU_MONACO_EDITOR_CONFIG = new InjectionToken('NU_MONACO_EDITOR_CONFIG');

// Generated from lib/dpm_xl.g4 by ANTLR 4.9.0-SNAPSHOT
class dpm_xlLexer extends Lexer {
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator(dpm_xlLexer._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return dpm_xlLexer.VOCABULARY;
    }
    // @Override
    get grammarFileName() {
        return 'dpm_xl.g4';
    }
    // @Override
    get ruleNames() {
        return dpm_xlLexer.ruleNames;
    }
    // @Override
    // @ts-ignore
    get serializedATN() {
        return dpm_xlLexer._serializedATN;
    }
    // @Override
    get channelNames() {
        return dpm_xlLexer.channelNames;
    }
    // @Override
    get modeNames() {
        return dpm_xlLexer.modeNames;
    }
    static get _ATN() {
        if (!dpm_xlLexer.__ATN) {
            dpm_xlLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(dpm_xlLexer._serializedATN));
        }
        return dpm_xlLexer.__ATN;
    }
}
dpm_xlLexer.BOOLEAN_LITERAL = 1;
dpm_xlLexer.AND = 2;
dpm_xlLexer.OR = 3;
dpm_xlLexer.XOR = 4;
dpm_xlLexer.NOT = 5;
dpm_xlLexer.ASSIGN = 6;
dpm_xlLexer.EQ = 7;
dpm_xlLexer.NE = 8;
dpm_xlLexer.LT = 9;
dpm_xlLexer.LE = 10;
dpm_xlLexer.GT = 11;
dpm_xlLexer.GE = 12;
dpm_xlLexer.MATCH = 13;
dpm_xlLexer.WITH = 14;
dpm_xlLexer.PLUS = 15;
dpm_xlLexer.MINUS = 16;
dpm_xlLexer.MULT = 17;
dpm_xlLexer.DIV = 18;
dpm_xlLexer.MAX_AGGR = 19;
dpm_xlLexer.MIN_AGGR = 20;
dpm_xlLexer.SUM = 21;
dpm_xlLexer.COUNT = 22;
dpm_xlLexer.AVG = 23;
dpm_xlLexer.MEDIAN = 24;
dpm_xlLexer.GROUP_BY = 25;
dpm_xlLexer.ABS = 26;
dpm_xlLexer.ISNULL = 27;
dpm_xlLexer.EXISTS = 28;
dpm_xlLexer.EXP = 29;
dpm_xlLexer.LN = 30;
dpm_xlLexer.SQRT = 31;
dpm_xlLexer.POWER = 32;
dpm_xlLexer.LOG = 33;
dpm_xlLexer.MAX = 34;
dpm_xlLexer.MIN = 35;
dpm_xlLexer.IN = 36;
dpm_xlLexer.COMMA = 37;
dpm_xlLexer.DOUBLE_POINTS = 38;
dpm_xlLexer.LPAREN = 39;
dpm_xlLexer.RPAREN = 40;
dpm_xlLexer.CURLY_BRACKET_LEFT = 41;
dpm_xlLexer.CURLY_BRACKET_RIGHT = 42;
dpm_xlLexer.SQUARE_BRACKET_LEFT = 43;
dpm_xlLexer.SQUARE_BRACKET_RIGHT = 44;
dpm_xlLexer.INTERVAL = 45;
dpm_xlLexer.DEFAULT = 46;
dpm_xlLexer.IF = 47;
dpm_xlLexer.THEN = 48;
dpm_xlLexer.ELSE = 49;
dpm_xlLexer.NVL = 50;
dpm_xlLexer.FILTER = 51;
dpm_xlLexer.WHERE = 52;
dpm_xlLexer.GET = 53;
dpm_xlLexer.RENAME = 54;
dpm_xlLexer.TO = 55;
dpm_xlLexer.TIME_SHIFT = 56;
dpm_xlLexer.LEN = 57;
dpm_xlLexer.CONCAT = 58;
dpm_xlLexer.ROW = 59;
dpm_xlLexer.ROW_RANGE = 60;
dpm_xlLexer.ROW_ALL = 61;
dpm_xlLexer.ROW_HEADING = 62;
dpm_xlLexer.COL = 63;
dpm_xlLexer.COL_RANGE = 64;
dpm_xlLexer.COL_ALL = 65;
dpm_xlLexer.COL_HEADING = 66;
dpm_xlLexer.SHEET = 67;
dpm_xlLexer.SHEET_RANGE = 68;
dpm_xlLexer.SHEET_ALL = 69;
dpm_xlLexer.SHEET_HEADING = 70;
dpm_xlLexer.TABLE = 71;
dpm_xlLexer.VAR_REF = 72;
dpm_xlLexer.PRECONDITION_ELEM = 73;
dpm_xlLexer.TIME_PERIOD = 74;
dpm_xlLexer.EOL = 75;
dpm_xlLexer.WS = 76;
dpm_xlLexer.INTEGER_LITERAL = 77;
dpm_xlLexer.DECIMAL_LITERAL = 78;
dpm_xlLexer.PERCENT_LITERAL = 79;
dpm_xlLexer.STRING_LITERAL = 80;
dpm_xlLexer.EMPTY_LITERAL = 81;
dpm_xlLexer.LETTERS_NUMBERS = 82;
// tslint:disable:no-trailing-whitespace
dpm_xlLexer.channelNames = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN'];
// tslint:disable:no-trailing-whitespace
dpm_xlLexer.modeNames = ['DEFAULT_MODE'];
dpm_xlLexer.ruleNames = [
    'BOOLEAN_LITERAL',
    'AND',
    'OR',
    'XOR',
    'NOT',
    'ASSIGN',
    'EQ',
    'NE',
    'LT',
    'LE',
    'GT',
    'GE',
    'MATCH',
    'WITH',
    'PLUS',
    'MINUS',
    'MULT',
    'DIV',
    'MAX_AGGR',
    'MIN_AGGR',
    'SUM',
    'COUNT',
    'AVG',
    'MEDIAN',
    'GROUP_BY',
    'ABS',
    'ISNULL',
    'EXISTS',
    'EXP',
    'LN',
    'SQRT',
    'POWER',
    'LOG',
    'MAX',
    'MIN',
    'IN',
    'COMMA',
    'DOUBLE_POINTS',
    'LPAREN',
    'RPAREN',
    'CURLY_BRACKET_LEFT',
    'CURLY_BRACKET_RIGHT',
    'SQUARE_BRACKET_LEFT',
    'SQUARE_BRACKET_RIGHT',
    'INTERVAL',
    'DEFAULT',
    'IF',
    'THEN',
    'ELSE',
    'NVL',
    'FILTER',
    'WHERE',
    'GET',
    'RENAME',
    'TO',
    'TIME_SHIFT',
    'LEN',
    'CONCAT',
    'ROW',
    'ROW_RANGE',
    'ROW_ALL',
    'ROW_HEADING',
    'COL',
    'COL_RANGE',
    'COL_ALL',
    'COL_HEADING',
    'SHEET',
    'SHEET_RANGE',
    'SHEET_ALL',
    'SHEET_HEADING',
    'TABLE',
    'VAR_REF',
    'PRECONDITION_ELEM',
    'TIME_PERIOD',
    'EOL',
    'WS',
    'DIGITS0_9',
    'INTEGER_LITERAL',
    'DECIMAL_LITERAL',
    'PERCENT_LITERAL',
    'STRING_LITERAL',
    'EMPTY_LITERAL',
    'LETTERS_NUMBERS',
];
dpm_xlLexer._LITERAL_NAMES = [
    undefined,
    undefined,
    "'and'",
    "'or'",
    "'xor'",
    "'not'",
    "':='",
    "'='",
    "'!='",
    "'<'",
    "'<='",
    "'>'",
    "'>='",
    "'match'",
    "'with'",
    "'+'",
    "'-'",
    "'*'",
    "'/'",
    "'max_aggr'",
    "'min_aggr'",
    "'sum'",
    "'count'",
    "'avg'",
    "'median'",
    "'group by'",
    "'abs'",
    "'isnull'",
    "'exists'",
    "'exp'",
    "'ln'",
    "'sqrt'",
    "'power'",
    "'log'",
    "'max'",
    "'min'",
    "'in'",
    "','",
    "':'",
    "'('",
    "')'",
    "'{'",
    "'}'",
    "'['",
    "']'",
    "'interval'",
    "'default'",
    "'if'",
    "'then'",
    "'else'",
    "'nvl'",
    "'filter'",
    "'where'",
    "'get'",
    "'rename'",
    "'to'",
    "'time_shift'",
    "'len'",
    "'&'",
    undefined,
    undefined,
    "'r*'",
    "'r'",
    undefined,
    undefined,
    "'c*'",
    "'c'",
    undefined,
    undefined,
    "'s*'",
    "'s'",
    undefined,
    undefined,
    undefined,
    undefined,
    "';'",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "''''",
];
dpm_xlLexer._SYMBOLIC_NAMES = [
    undefined,
    'BOOLEAN_LITERAL',
    'AND',
    'OR',
    'XOR',
    'NOT',
    'ASSIGN',
    'EQ',
    'NE',
    'LT',
    'LE',
    'GT',
    'GE',
    'MATCH',
    'WITH',
    'PLUS',
    'MINUS',
    'MULT',
    'DIV',
    'MAX_AGGR',
    'MIN_AGGR',
    'SUM',
    'COUNT',
    'AVG',
    'MEDIAN',
    'GROUP_BY',
    'ABS',
    'ISNULL',
    'EXISTS',
    'EXP',
    'LN',
    'SQRT',
    'POWER',
    'LOG',
    'MAX',
    'MIN',
    'IN',
    'COMMA',
    'DOUBLE_POINTS',
    'LPAREN',
    'RPAREN',
    'CURLY_BRACKET_LEFT',
    'CURLY_BRACKET_RIGHT',
    'SQUARE_BRACKET_LEFT',
    'SQUARE_BRACKET_RIGHT',
    'INTERVAL',
    'DEFAULT',
    'IF',
    'THEN',
    'ELSE',
    'NVL',
    'FILTER',
    'WHERE',
    'GET',
    'RENAME',
    'TO',
    'TIME_SHIFT',
    'LEN',
    'CONCAT',
    'ROW',
    'ROW_RANGE',
    'ROW_ALL',
    'ROW_HEADING',
    'COL',
    'COL_RANGE',
    'COL_ALL',
    'COL_HEADING',
    'SHEET',
    'SHEET_RANGE',
    'SHEET_ALL',
    'SHEET_HEADING',
    'TABLE',
    'VAR_REF',
    'PRECONDITION_ELEM',
    'TIME_PERIOD',
    'EOL',
    'WS',
    'INTEGER_LITERAL',
    'DECIMAL_LITERAL',
    'PERCENT_LITERAL',
    'STRING_LITERAL',
    'EMPTY_LITERAL',
    'LETTERS_NUMBERS',
];
dpm_xlLexer.VOCABULARY = new VocabularyImpl(dpm_xlLexer._LITERAL_NAMES, dpm_xlLexer._SYMBOLIC_NAMES, []);
// @ts-ignore
dpm_xlLexer._serializedATNSegments = 2;
dpm_xlLexer._serializedATNSegment0 = '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02T\u026F\b\x01' +
    '\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06' +
    '\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r' +
    '\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t' +
    '\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t' +
    '\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t' +
    '\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t' +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04" +
    '+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04' +
    '4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04' +
    '=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04' +
    'F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04' +
    'O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x03\x02\x03\x02\x03\x02\x03' +
    '\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02\xB3\n\x02\x03\x03' +
    '\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05' +
    '\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b' +
    '\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03' +
    '\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F' +
    '\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12' +
    '\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14' +
    '\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15' +
    '\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17' +
    '\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19' +
    '\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A' +
    '\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B' +
    '\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D' +
    '\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E' +
    '\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03!\x03!\x03' +
    '!\x03!\x03!\x03!\x03"\x03"\x03"\x03"\x03#\x03#\x03#\x03#\x03$\x03' +
    "$\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03'\x03'\x03(\x03(\x03)\x03)\x03" +
    '*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03.\x03.\x03.\x03.\x03' +
    '.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x030\x030\x030\x03' +
    '1\x031\x031\x031\x031\x032\x032\x032\x032\x032\x033\x033\x033\x033\x03' +
    '4\x034\x034\x034\x034\x034\x034\x035\x035\x035\x035\x035\x035\x036\x03' +
    '6\x036\x036\x037\x037\x037\x037\x037\x037\x037\x038\x038\x038\x039\x03' +
    '9\x039\x039\x039\x039\x039\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03' +
    ';\x03;\x03<\x03<\x05<\u01AC\n<\x03<\x03<\x03<\x03<\x03=\x03=\x05=\u01B4' +
    '\n=\x03=\x03=\x03=\x03=\x03=\x03=\x05=\u01BC\n=\x03=\x03=\x03=\x03=\x03' +
    '>\x03>\x03>\x03?\x03?\x03@\x03@\x05@\u01C9\n@\x03@\x03@\x03@\x03@\x03' +
    'A\x03A\x05A\u01D1\nA\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u01D9\nA\x03A' +
    '\x03A\x03A\x03A\x03B\x03B\x03B\x03C\x03C\x03D\x03D\x05D\u01E6\nD\x03D' +
    '\x03D\x03D\x03D\x03E\x03E\x05E\u01EE\nE\x03E\x03E\x03E\x03E\x03E\x03E' +
    '\x05E\u01F6\nE\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03G\x03G\x03H\x03H' +
    '\x06H\u0203\nH\rH\x0EH\u0204\x03H\x05H\u0208\nH\x03H\x03H\x06H\u020C\n' +
    'H\rH\x0EH\u020D\x03I\x03I\x03I\x03I\x07I\u0214\nI\fI\x0EI\u0217\vI\x03' +
    'I\x03I\x03J\x03J\x03J\x03J\x03J\x06J\u0220\nJ\rJ\x0EJ\u0221\x03J\x05J' +
    '\u0225\nJ\x03J\x03J\x06J\u0229\nJ\rJ\x0EJ\u022A\x03J\x03J\x03K\x03K\x03' +
    'L\x03L\x03M\x06M\u0234\nM\rM\x0EM\u0235\x03M\x03M\x03N\x03N\x03O\x06O' +
    '\u023D\nO\rO\x0EO\u023E\x03O\x03O\x03O\x06O\u0244\nO\rO\x0EO\u0245\x03' +
    'O\x03O\x05O\u024A\nO\x03P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x03' +
    'Q\x05Q\u0256\nQ\x03R\x03R\x06R\u025A\nR\rR\x0ER\u025B\x03R\x03R\x03R\x06' +
    'R\u0261\nR\rR\x0ER\u0262\x03R\x05R\u0266\nR\x03S\x03S\x03S\x03T\x06T\u026C' +
    '\nT\rT\x0ET\u026D\x02\x02\x02U\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02' +
    '\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02' +
    '\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%' +
    "\x02\x14'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B" +
    '5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02"C\x02#E\x02$G\x02' +
    "%I\x02&K\x02'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_" +
    '\x021a\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x029q\x02:s\x02;u\x02' +
    '<w\x02=y\x02>{\x02?}\x02@\x7F\x02A\x81\x02B\x83\x02C\x85\x02D\x87\x02' +
    'E\x89\x02F\x8B\x02G\x8D\x02H\x8F\x02I\x91\x02J\x93\x02K\x95\x02L\x97\x02' +
    'M\x99\x02N\x9B\x02\x02\x9D\x02O\x9F\x02P\xA1\x02Q\xA3\x02R\xA5\x02S\xA7' +
    '\x02T\x03\x02\x12\x03\x02tt\x03\x022;\x03\x02//\x03\x02ee\x03\x02uu\x03' +
    '\x02vv\x03\x02C\\\x04\x02""00\x07\x02002;C\\aac|\x03\x02xx\x04\x02C' +
    '\\c|\x07\x03\x0202;C\\aac|\b\x02CCFFOOSSUUYY\x05\x02\v\f\x0E\x0F""\x03' +
    '\x02$$\x03\x02))\x02\u0287\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02' +
    '\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02' +
    '\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02' +
    '\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02' +
    '\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02' +
    '\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02' +
    "%\x03\x02\x02\x02\x02'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03" +
    '\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02' +
    '\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x02' +
    '9\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02' +
    '\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02' +
    '\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03' +
    '\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02' +
    '\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02' +
    '[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02' +
    '\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02' +
    '\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03' +
    '\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02\x02' +
    '\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x02' +
    '}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02\x02' +
    '\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02\x02' +
    '\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02\x02\x02' +
    '\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02\x93\x03\x02\x02\x02\x02' +
    '\x95\x03\x02\x02\x02\x02\x97\x03\x02\x02\x02\x02\x99\x03\x02\x02\x02\x02' +
    '\x9D\x03\x02\x02\x02\x02\x9F\x03\x02\x02\x02\x02\xA1\x03\x02\x02\x02\x02' +
    '\xA3\x03\x02\x02\x02\x02\xA5\x03\x02\x02\x02\x02\xA7\x03\x02\x02\x02\x03' +
    '\xB2\x03\x02\x02\x02\x05\xB4\x03\x02\x02\x02\x07\xB8\x03\x02\x02\x02\t' +
    '\xBB\x03\x02\x02\x02\v\xBF\x03\x02\x02\x02\r\xC3\x03\x02\x02\x02\x0F\xC6' +
    '\x03\x02\x02\x02\x11\xC8\x03\x02\x02\x02\x13\xCB\x03\x02\x02\x02\x15\xCD' +
    '\x03\x02\x02\x02\x17\xD0\x03\x02\x02\x02\x19\xD2\x03\x02\x02\x02\x1B\xD5' +
    '\x03\x02\x02\x02\x1D\xDB\x03\x02\x02\x02\x1F\xE0\x03\x02\x02\x02!\xE2' +
    "\x03\x02\x02\x02#\xE4\x03\x02\x02\x02%\xE6\x03\x02\x02\x02'\xE8\x03\x02" +
    '\x02\x02)\xF1\x03\x02\x02\x02+\xFA\x03\x02\x02\x02-\xFE\x03\x02\x02\x02' +
    '/\u0104\x03\x02\x02\x021\u0108\x03\x02\x02\x023\u010F\x03\x02\x02\x02' +
    '5\u0118\x03\x02\x02\x027\u011C\x03\x02\x02\x029\u0123\x03\x02\x02\x02' +
    ';\u012A\x03\x02\x02\x02=\u012E\x03\x02\x02\x02?\u0131\x03\x02\x02\x02' +
    'A\u0136\x03\x02\x02\x02C\u013C\x03\x02\x02\x02E\u0140\x03\x02\x02\x02' +
    'G\u0144\x03\x02\x02\x02I\u0148\x03\x02\x02\x02K\u014B\x03\x02\x02\x02' +
    'M\u014D\x03\x02\x02\x02O\u014F\x03\x02\x02\x02Q\u0151\x03\x02\x02\x02' +
    'S\u0153\x03\x02\x02\x02U\u0155\x03\x02\x02\x02W\u0157\x03\x02\x02\x02' +
    'Y\u0159\x03\x02\x02\x02[\u015B\x03\x02\x02\x02]\u0164\x03\x02\x02\x02' +
    '_\u016C\x03\x02\x02\x02a\u016F\x03\x02\x02\x02c\u0174\x03\x02\x02\x02' +
    'e\u0179\x03\x02\x02\x02g\u017D\x03\x02\x02\x02i\u0184\x03\x02\x02\x02' +
    'k\u018A\x03\x02\x02\x02m\u018E\x03\x02\x02\x02o\u0195\x03\x02\x02\x02' +
    'q\u0198\x03\x02\x02\x02s\u01A3\x03\x02\x02\x02u\u01A7\x03\x02\x02\x02' +
    'w\u01A9\x03\x02\x02\x02y\u01B1\x03\x02\x02\x02{\u01C1\x03\x02\x02\x02' +
    '}\u01C4\x03\x02\x02\x02\x7F\u01C6\x03\x02\x02\x02\x81\u01CE\x03\x02\x02' +
    '\x02\x83\u01DE\x03\x02\x02\x02\x85\u01E1\x03\x02\x02\x02\x87\u01E3\x03' +
    '\x02\x02\x02\x89\u01EB\x03\x02\x02\x02\x8B\u01FB\x03\x02\x02\x02\x8D\u01FE' +
    '\x03\x02\x02\x02\x8F\u0200\x03\x02\x02\x02\x91\u020F\x03\x02\x02\x02\x93' +
    '\u021A\x03\x02\x02\x02\x95\u022E\x03\x02\x02\x02\x97\u0230\x03\x02\x02' +
    '\x02\x99\u0233\x03\x02\x02\x02\x9B\u0239\x03\x02\x02\x02\x9D\u0249\x03' +
    '\x02\x02\x02\x9F\u024B\x03\x02\x02\x02\xA1\u0255\x03\x02\x02\x02\xA3\u0265' +
    '\x03\x02\x02\x02\xA5\u0267\x03\x02\x02\x02\xA7\u026B\x03\x02\x02\x02\xA9' +
    '\xAA\x07v\x02\x02\xAA\xAB\x07t\x02\x02\xAB\xAC\x07w\x02\x02\xAC\xB3\x07' +
    'g\x02\x02\xAD\xAE\x07h\x02\x02\xAE\xAF\x07c\x02\x02\xAF\xB0\x07n\x02\x02' +
    '\xB0\xB1\x07u\x02\x02\xB1\xB3\x07g\x02\x02\xB2\xA9\x03\x02\x02\x02\xB2' +
    '\xAD\x03\x02\x02\x02\xB3\x04\x03\x02\x02\x02\xB4\xB5\x07c\x02\x02\xB5' +
    '\xB6\x07p\x02\x02\xB6\xB7\x07f\x02\x02\xB7\x06\x03\x02\x02\x02\xB8\xB9' +
    '\x07q\x02\x02\xB9\xBA\x07t\x02\x02\xBA\b\x03\x02\x02\x02\xBB\xBC\x07z' +
    '\x02\x02\xBC\xBD\x07q\x02\x02\xBD\xBE\x07t\x02\x02\xBE\n\x03\x02\x02\x02' +
    '\xBF\xC0\x07p\x02\x02\xC0\xC1\x07q\x02\x02\xC1\xC2\x07v\x02\x02\xC2\f' +
    '\x03\x02\x02\x02\xC3\xC4\x07<\x02\x02\xC4\xC5\x07?\x02\x02\xC5\x0E\x03' +
    '\x02\x02\x02\xC6\xC7\x07?\x02\x02\xC7\x10\x03\x02\x02\x02\xC8\xC9\x07' +
    '#\x02\x02\xC9\xCA\x07?\x02\x02\xCA\x12\x03\x02\x02\x02\xCB\xCC\x07>\x02' +
    '\x02\xCC\x14\x03\x02\x02\x02\xCD\xCE\x07>\x02\x02\xCE\xCF\x07?\x02\x02' +
    '\xCF\x16\x03\x02\x02\x02\xD0\xD1\x07@\x02\x02\xD1\x18\x03\x02\x02\x02' +
    '\xD2\xD3\x07@\x02\x02\xD3\xD4\x07?\x02\x02\xD4\x1A\x03\x02\x02\x02\xD5' +
    '\xD6\x07o\x02\x02\xD6\xD7\x07c\x02\x02\xD7\xD8\x07v\x02\x02\xD8\xD9\x07' +
    'e\x02\x02\xD9\xDA\x07j\x02\x02\xDA\x1C\x03\x02\x02\x02\xDB\xDC\x07y\x02' +
    '\x02\xDC\xDD\x07k\x02\x02\xDD\xDE\x07v\x02\x02\xDE\xDF\x07j\x02\x02\xDF' +
    '\x1E\x03\x02\x02\x02\xE0\xE1\x07-\x02\x02\xE1 \x03\x02\x02\x02\xE2\xE3' +
    '\x07/\x02\x02\xE3"\x03\x02\x02\x02\xE4\xE5\x07,\x02\x02\xE5$\x03\x02' +
    '\x02\x02\xE6\xE7\x071\x02\x02\xE7&\x03\x02\x02\x02\xE8\xE9\x07o\x02\x02' +
    '\xE9\xEA\x07c\x02\x02\xEA\xEB\x07z\x02\x02\xEB\xEC\x07a\x02\x02\xEC\xED' +
    '\x07c\x02\x02\xED\xEE\x07i\x02\x02\xEE\xEF\x07i\x02\x02\xEF\xF0\x07t\x02' +
    '\x02\xF0(\x03\x02\x02\x02\xF1\xF2\x07o\x02\x02\xF2\xF3\x07k\x02\x02\xF3' +
    '\xF4\x07p\x02\x02\xF4\xF5\x07a\x02\x02\xF5\xF6\x07c\x02\x02\xF6\xF7\x07' +
    'i\x02\x02\xF7\xF8\x07i\x02\x02\xF8\xF9\x07t\x02\x02\xF9*\x03\x02\x02\x02' +
    '\xFA\xFB\x07u\x02\x02\xFB\xFC\x07w\x02\x02\xFC\xFD\x07o\x02\x02\xFD,\x03' +
    '\x02\x02\x02\xFE\xFF\x07e\x02\x02\xFF\u0100\x07q\x02\x02\u0100\u0101\x07' +
    'w\x02\x02\u0101\u0102\x07p\x02\x02\u0102\u0103\x07v\x02\x02\u0103.\x03' +
    '\x02\x02\x02\u0104\u0105\x07c\x02\x02\u0105\u0106\x07x\x02\x02\u0106\u0107' +
    '\x07i\x02\x02\u01070\x03\x02\x02\x02\u0108\u0109\x07o\x02\x02\u0109\u010A' +
    '\x07g\x02\x02\u010A\u010B\x07f\x02\x02\u010B\u010C\x07k\x02\x02\u010C' +
    '\u010D\x07c\x02\x02\u010D\u010E\x07p\x02\x02\u010E2\x03\x02\x02\x02\u010F' +
    '\u0110\x07i\x02\x02\u0110\u0111\x07t\x02\x02\u0111\u0112\x07q\x02\x02' +
    '\u0112\u0113\x07w\x02\x02\u0113\u0114\x07r\x02\x02\u0114\u0115\x07"\x02' +
    '\x02\u0115\u0116\x07d\x02\x02\u0116\u0117\x07{\x02\x02\u01174\x03\x02' +
    '\x02\x02\u0118\u0119\x07c\x02\x02\u0119\u011A\x07d\x02\x02\u011A\u011B' +
    '\x07u\x02\x02\u011B6\x03\x02\x02\x02\u011C\u011D\x07k\x02\x02\u011D\u011E' +
    '\x07u\x02\x02\u011E\u011F\x07p\x02\x02\u011F\u0120\x07w\x02\x02\u0120' +
    '\u0121\x07n\x02\x02\u0121\u0122\x07n\x02\x02\u01228\x03\x02\x02\x02\u0123' +
    '\u0124\x07g\x02\x02\u0124\u0125\x07z\x02\x02\u0125\u0126\x07k\x02\x02' +
    '\u0126\u0127\x07u\x02\x02\u0127\u0128\x07v\x02\x02\u0128\u0129\x07u\x02' +
    '\x02\u0129:\x03\x02\x02\x02\u012A\u012B\x07g\x02\x02\u012B\u012C\x07z' +
    '\x02\x02\u012C\u012D\x07r\x02\x02\u012D<\x03\x02\x02\x02\u012E\u012F\x07' +
    'n\x02\x02\u012F\u0130\x07p\x02\x02\u0130>\x03\x02\x02\x02\u0131\u0132' +
    '\x07u\x02\x02\u0132\u0133\x07s\x02\x02\u0133\u0134\x07t\x02\x02\u0134' +
    '\u0135\x07v\x02\x02\u0135@\x03\x02\x02\x02\u0136\u0137\x07r\x02\x02\u0137' +
    '\u0138\x07q\x02\x02\u0138\u0139\x07y\x02\x02\u0139\u013A\x07g\x02\x02' +
    '\u013A\u013B\x07t\x02\x02\u013BB\x03\x02\x02\x02\u013C\u013D\x07n\x02' +
    '\x02\u013D\u013E\x07q\x02\x02\u013E\u013F\x07i\x02\x02\u013FD\x03\x02' +
    '\x02\x02\u0140\u0141\x07o\x02\x02\u0141\u0142\x07c\x02\x02\u0142\u0143' +
    '\x07z\x02\x02\u0143F\x03\x02\x02\x02\u0144\u0145\x07o\x02\x02\u0145\u0146' +
    '\x07k\x02\x02\u0146\u0147\x07p\x02\x02\u0147H\x03\x02\x02\x02\u0148\u0149' +
    '\x07k\x02\x02\u0149\u014A\x07p\x02\x02\u014AJ\x03\x02\x02\x02\u014B\u014C' +
    '\x07.\x02\x02\u014CL\x03\x02\x02\x02\u014D\u014E\x07<\x02\x02\u014EN\x03' +
    '\x02\x02\x02\u014F\u0150\x07*\x02\x02\u0150P\x03\x02\x02\x02\u0151\u0152' +
    '\x07+\x02\x02\u0152R\x03\x02\x02\x02\u0153\u0154\x07}\x02\x02\u0154T\x03' +
    '\x02\x02\x02\u0155\u0156\x07\x7F\x02\x02\u0156V\x03\x02\x02\x02\u0157' +
    '\u0158\x07]\x02\x02\u0158X\x03\x02\x02\x02\u0159\u015A\x07_\x02\x02\u015A' +
    'Z\x03\x02\x02\x02\u015B\u015C\x07k\x02\x02\u015C\u015D\x07p\x02\x02\u015D' +
    '\u015E\x07v\x02\x02\u015E\u015F\x07g\x02\x02\u015F\u0160\x07t\x02\x02' +
    '\u0160\u0161\x07x\x02\x02\u0161\u0162\x07c\x02\x02\u0162\u0163\x07n\x02' +
    '\x02\u0163\\\x03\x02\x02\x02\u0164\u0165\x07f\x02\x02\u0165\u0166\x07' +
    'g\x02\x02\u0166\u0167\x07h\x02\x02\u0167\u0168\x07c\x02\x02\u0168\u0169' +
    '\x07w\x02\x02\u0169\u016A\x07n\x02\x02\u016A\u016B\x07v\x02\x02\u016B' +
    '^\x03\x02\x02\x02\u016C\u016D\x07k\x02\x02\u016D\u016E\x07h\x02\x02\u016E' +
    '`\x03\x02\x02\x02\u016F\u0170\x07v\x02\x02\u0170\u0171\x07j\x02\x02\u0171' +
    '\u0172\x07g\x02\x02\u0172\u0173\x07p\x02\x02\u0173b\x03\x02\x02\x02\u0174' +
    '\u0175\x07g\x02\x02\u0175\u0176\x07n\x02\x02\u0176\u0177\x07u\x02\x02' +
    '\u0177\u0178\x07g\x02\x02\u0178d\x03\x02\x02\x02\u0179\u017A\x07p\x02' +
    '\x02\u017A\u017B\x07x\x02\x02\u017B\u017C\x07n\x02\x02\u017Cf\x03\x02' +
    '\x02\x02\u017D\u017E\x07h\x02\x02\u017E\u017F\x07k\x02\x02\u017F\u0180' +
    '\x07n\x02\x02\u0180\u0181\x07v\x02\x02\u0181\u0182\x07g\x02\x02\u0182' +
    '\u0183\x07t\x02\x02\u0183h\x03\x02\x02\x02\u0184\u0185\x07y\x02\x02\u0185' +
    '\u0186\x07j\x02\x02\u0186\u0187\x07g\x02\x02\u0187\u0188\x07t\x02\x02' +
    '\u0188\u0189\x07g\x02\x02\u0189j\x03\x02\x02\x02\u018A\u018B\x07i\x02' +
    '\x02\u018B\u018C\x07g\x02\x02\u018C\u018D\x07v\x02\x02\u018Dl\x03\x02' +
    '\x02\x02\u018E\u018F\x07t\x02\x02\u018F\u0190\x07g\x02\x02\u0190\u0191' +
    '\x07p\x02\x02\u0191\u0192\x07c\x02\x02\u0192\u0193\x07o\x02\x02\u0193' +
    '\u0194\x07g\x02\x02\u0194n\x03\x02\x02\x02\u0195\u0196\x07v\x02\x02\u0196' +
    '\u0197\x07q\x02\x02\u0197p\x03\x02\x02\x02\u0198\u0199\x07v\x02\x02\u0199' +
    '\u019A\x07k\x02\x02\u019A\u019B\x07o\x02\x02\u019B\u019C\x07g\x02\x02' +
    '\u019C\u019D\x07a\x02\x02\u019D\u019E\x07u\x02\x02\u019E\u019F\x07j\x02' +
    '\x02\u019F\u01A0\x07k\x02\x02\u01A0\u01A1\x07h\x02\x02\u01A1\u01A2\x07' +
    'v\x02\x02\u01A2r\x03\x02\x02\x02\u01A3\u01A4\x07n\x02\x02\u01A4\u01A5' +
    '\x07g\x02\x02\u01A5\u01A6\x07p\x02\x02\u01A6t\x03\x02\x02\x02\u01A7\u01A8' +
    '\x07(\x02\x02\u01A8v\x03\x02\x02\x02\u01A9\u01AB\t\x02\x02\x02\u01AA\u01AC' +
    '\t\x03\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02' +
    '\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AE\t\x03\x02\x02\u01AE\u01AF\t\x03' +
    '\x02\x02\u01AF\u01B0\t\x03\x02\x02\u01B0x\x03\x02\x02\x02\u01B1\u01B3' +
    '\t\x02\x02\x02\u01B2\u01B4\t\x03\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B3' +
    '\u01B4\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02\u01B5\u01B6\t\x03\x02' +
    '\x02\u01B6\u01B7\t\x03\x02\x02\u01B7\u01B8\t\x03\x02\x02\u01B8\u01B9\x03' +
    '\x02\x02\x02\u01B9\u01BB\t\x04\x02\x02\u01BA\u01BC\t\x03\x02\x02\u01BB' +
    '\u01BA\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BD\x03\x02' +
    '\x02\x02\u01BD\u01BE\t\x03\x02\x02\u01BE\u01BF\t\x03\x02\x02\u01BF\u01C0' +
    '\t\x03\x02\x02\u01C0z\x03\x02\x02\x02\u01C1\u01C2\x07t\x02\x02\u01C2\u01C3' +
    '\x07,\x02\x02\u01C3|\x03\x02\x02\x02\u01C4\u01C5\x07t\x02\x02\u01C5~\x03' +
    '\x02\x02\x02\u01C6\u01C8\t\x05\x02\x02\u01C7\u01C9\t\x03\x02\x02\u01C8' +
    '\u01C7\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CA\x03\x02' +
    '\x02\x02\u01CA\u01CB\t\x03\x02\x02\u01CB\u01CC\t\x03\x02\x02\u01CC\u01CD' +
    '\t\x03\x02\x02\u01CD\x80\x03\x02\x02\x02\u01CE\u01D0\t\x05\x02\x02\u01CF' +
    '\u01D1\t\x03\x02\x02\u01D0\u01CF\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02' +
    '\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D3\t\x03\x02\x02\u01D3\u01D4' +
    '\t\x03\x02\x02\u01D4\u01D5\t\x03\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6' +
    '\u01D8\t\x04\x02\x02\u01D7\u01D9\t\x03\x02\x02\u01D8\u01D7\x03\x02\x02' +
    '\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DB' +
    '\t\x03\x02\x02\u01DB\u01DC\t\x03\x02\x02\u01DC\u01DD\t\x03\x02\x02\u01DD' +
    '\x82\x03\x02\x02\x02\u01DE\u01DF\x07e\x02\x02\u01DF\u01E0\x07,\x02\x02' +
    '\u01E0\x84\x03\x02\x02\x02\u01E1\u01E2\x07e\x02\x02\u01E2\x86\x03\x02' +
    '\x02\x02\u01E3\u01E5\t\x06\x02\x02\u01E4\u01E6\t\x03\x02\x02\u01E5\u01E4' +
    '\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6\u01E7\x03\x02\x02\x02' +
    '\u01E7\u01E8\t\x03\x02\x02\u01E8\u01E9\t\x03\x02\x02\u01E9\u01EA\t\x03' +
    '\x02\x02\u01EA\x88\x03\x02\x02\x02\u01EB\u01ED\t\x06\x02\x02\u01EC\u01EE' +
    '\t\x03\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01ED\u01EE\x03\x02\x02\x02' +
    '\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0\t\x03\x02\x02\u01F0\u01F1\t\x03' +
    '\x02\x02\u01F1\u01F2\t\x03\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F5' +
    '\t\x04\x02\x02\u01F4\u01F6\t\x03\x02\x02\u01F5\u01F4\x03\x02\x02\x02\u01F5' +
    '\u01F6\x03\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F8\t\x03\x02' +
    '\x02\u01F8\u01F9\t\x03\x02\x02\u01F9\u01FA\t\x03\x02\x02\u01FA\x8A\x03' +
    '\x02\x02\x02\u01FB\u01FC\x07u\x02\x02\u01FC\u01FD\x07,\x02\x02\u01FD\x8C' +
    '\x03\x02\x02\x02\u01FE\u01FF\x07u\x02\x02\u01FF\x8E\x03\x02\x02\x02\u0200' +
    '\u0202\t\x07\x02\x02\u0201\u0203\t\b\x02\x02\u0202\u0201\x03\x02\x02\x02' +
    '\u0203\u0204\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0205\x03' +
    '\x02\x02\x02\u0205\u0207\x03\x02\x02\x02\u0206\u0208\t\t\x02\x02\u0207' +
    '\u0206\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0209\x03\x02' +
    '\x02\x02\u0209\u020B\t\x03\x02\x02\u020A\u020C\t\n\x02\x02\u020B\u020A' +
    '\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u020B\x03\x02\x02\x02' +
    '\u020D\u020E\x03\x02\x02\x02\u020E\x90\x03\x02\x02\x02\u020F\u0210\x05' +
    'S*\x02\u0210\u0211\t\v\x02\x02\u0211\u0215\t\f\x02\x02\u0212\u0214\t\r' +
    '\x02\x02\u0213\u0212\x03\x02\x02\x02\u0214\u0217\x03\x02\x02\x02\u0215' +
    '\u0213\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0218\x03\x02' +
    '\x02\x02\u0217\u0215\x03\x02\x02\x02\u0218\u0219\x05U+\x02\u0219\x92\x03' +
    '\x02\x02\x02\u021A\u021B\x05S*\x02\u021B\u021C\x07x\x02\x02\u021C\u021D' +
    '\x07a\x02\x02\u021D\u021F\x03\x02\x02\x02\u021E\u0220\t\b\x02\x02\u021F' +
    '\u021E\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02\u0221\u021F\x03\x02' +
    '\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0224\x03\x02\x02\x02\u0223' +
    '\u0225\t\t\x02';
dpm_xlLexer._serializedATNSegment1 = '\x02\u0224\u0223\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0226' +
    '\x03\x02\x02\x02\u0226\u0228\t\x03\x02\x02\u0227\u0229\t\n\x02\x02\u0228' +
    '\u0227\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u0228\x03\x02' +
    '\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C' +
    '\u022D\x05U+\x02\u022D\x94\x03\x02\x02\x02\u022E\u022F\t\x0E\x02\x02\u022F' +
    '\x96\x03\x02\x02\x02\u0230\u0231\x07=\x02\x02\u0231\x98\x03\x02\x02\x02' +
    '\u0232\u0234\t\x0F\x02\x02\u0233\u0232\x03\x02\x02\x02\u0234\u0235\x03' +
    '\x02\x02\x02\u0235\u0233\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236' +
    '\u0237\x03\x02\x02\x02\u0237\u0238\bM\x02\x02\u0238\x9A\x03\x02\x02\x02' +
    '\u0239\u023A\x042;\x02\u023A\x9C\x03\x02\x02\x02\u023B\u023D\x05\x9BN' +
    '\x02\u023C\u023B\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u023C' +
    '\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u024A\x03\x02\x02\x02' +
    '\u0240\u0241\x05O(\x02\u0241\u0243\x05!\x11\x02\u0242\u0244\x05\x9BN\x02' +
    '\u0243\u0242\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0243\x03' +
    '\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247' +
    '\u0248\x05Q)\x02\u0248\u024A\x03\x02\x02\x02\u0249\u023C\x03\x02\x02\x02' +
    '\u0249\u0240\x03\x02\x02\x02\u024A\x9E\x03\x02\x02\x02\u024B\u024C\x05' +
    '\x9DO\x02\u024C\u024D\x070\x02\x02\u024D\u024E\x05\x9DO\x02\u024E\xA0' +
    "\x03\x02\x02\x02\u024F\u0250\x05\x9DO\x02\u0250\u0251\x07'\x02\x02\u0251" +
    "\u0256\x03\x02\x02\x02\u0252\u0253\x05\x9FP\x02\u0253\u0254\x07'\x02" +
    '\x02\u0254\u0256\x03\x02\x02\x02\u0255\u024F\x03\x02\x02\x02\u0255\u0252' +
    '\x03\x02\x02\x02\u0256\xA2\x03\x02\x02\x02\u0257\u0259\x07$\x02\x02\u0258' +
    '\u025A\n\x10\x02\x02\u0259\u0258\x03\x02\x02\x02\u025A\u025B\x03\x02\x02' +
    '\x02\u025B\u0259\x03\x02\x02\x02\u025B\u025C\x03\x02\x02\x02\u025C\u025D' +
    '\x03\x02\x02\x02\u025D\u0266\x07$\x02\x02\u025E\u0260\x07)\x02\x02\u025F' +
    '\u0261\n\x11\x02\x02\u0260\u025F\x03\x02\x02\x02\u0261\u0262\x03\x02\x02' +
    '\x02\u0262\u0260\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0264' +
    '\x03\x02\x02\x02\u0264\u0266\x07)\x02\x02\u0265\u0257\x03\x02\x02\x02' +
    '\u0265\u025E\x03\x02\x02\x02\u0266\xA4\x03\x02\x02\x02\u0267\u0268\x07' +
    ')\x02\x02\u0268\u0269\x07)\x02\x02\u0269\xA6\x03\x02\x02\x02\u026A\u026C' +
    '\t\n\x02\x02\u026B\u026A\x03\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D' +
    '\u026B\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\xA8\x03\x02\x02' +
    '\x02\x1D\x02\xB2\u01AB\u01B3\u01BB\u01C8\u01D0\u01D8\u01E5\u01ED\u01F5' +
    '\u0204\u0207\u020D\u0215\u0221\u0224\u022A\u0235\u023E\u0245\u0249\u0255' +
    '\u025B\u0262\u0265\u026D\x03\x02\x04\x02';
dpm_xlLexer._serializedATN = Utils.join([dpm_xlLexer._serializedATNSegment0, dpm_xlLexer._serializedATNSegment1], '');

const EOF = -1;
class DPMXLState {
    clone() {
        return new DPMXLState();
    }
    equals() {
        return true;
    }
}
class DPMXLTokenProvider {
    getInitialState() {
        return new DPMXLState();
    }
    tokenize(line) {
        return tokensForLine(line);
    }
}
class DPMXLToken {
    constructor(ruleName, startIndex) {
        this.scopes = ruleName.toLowerCase() + '.dpm-xl';
        this.startIndex = startIndex;
    }
}
class DPMXLLineTokens {
    constructor(tokens) {
        this.endState = new DPMXLState();
        this.tokens = tokens;
    }
}
function tokensForLine(input) {
    const errorStartingPoints = [];
    class ErrorCollectorListener {
        // tslint:disable-next-line:typedef
        syntaxError(_, _offendingSymbol, _line, column, _msg, _e) {
            errorStartingPoints.push(column);
        }
    }
    const inputStream = CharStreams.fromString(input);
    const lexer = new dpm_xlLexer(inputStream);
    lexer.removeErrorListeners();
    const errorListener = new ErrorCollectorListener();
    lexer.addErrorListener(errorListener);
    let done = false;
    const myTokens = [];
    do {
        const token = lexer.nextToken();
        if (token == null) {
            done = true;
        }
        else {
            // We exclude EOF
            if (token.type === EOF) {
                done = true;
            }
            else {
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

let loadedMonaco = false;
let loadPromise;
// eslint-disable-next-line @angular-eslint/component-class-suffix
class NuMonacoEditorBase {
    constructor(el, config, doc, ngZone) {
        this.el = el;
        this.doc = doc;
        this.ngZone = ngZone;
        this._resize$ = null;
        this.height = `200px`;
        this.delay = 0;
        this.event = new EventEmitter();
        this._config = Object.assign({ baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor/min' }, config);
        this.options = this._config.defaultOptions;
    }
    set disabled(val) {
        this._disabled = typeof val === 'string' ? true : val;
        this.setDisabled();
    }
    set options(val) {
        this._options = Object.assign(Object.assign({}, this._config.defaultOptions), val);
    }
    get options() {
        return this._options;
    }
    notifyEvent(type, other) {
        this.ngZone.run(() => this.event.emit(Object.assign({ type, editor: this._editor }, other)));
    }
    setDisabled() {
        if (this._editor) {
            this._editor.updateOptions({ readOnly: this._disabled });
        }
        return this;
    }
    init() {
        if (loadedMonaco) {
            loadPromise.then(() => this.initMonaco(this.options, true));
            return;
        }
        loadedMonaco = true;
        loadPromise = new Promise((resolve, reject) => {
            const win = window;
            if (win == null) {
                resolve();
                return;
            }
            if (win.monaco) {
                resolve();
                return;
            }
            const baseUrl = this._config.baseUrl;
            const amdLoader = () => {
                win.require.config({ paths: { vs: `${baseUrl}/vs` } });
                this.options = Object.assign({ theme: 'dpm-xl-black' }, this.options);
                const getDpmXlCompletionProvider = (monaco) => {
                    return {
                        provideCompletionItems: () => {
                            var suggestions = [
                                {
                                    label: 'with',
                                    kind: monaco.languages.CompletionItemKind.Text,
                                    insertText: 'with',
                                },
                                {
                                    label: 'sum',
                                    kind: monaco.languages.CompletionItemKind.Keyword,
                                    insertText: 'sum(${1:operand} group by ${2:group_by})',
                                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                                },
                                {
                                    label: 'cell_reference',
                                    kind: monaco.languages.CompletionItemKind.Snippet,
                                    insertText: '{t${1:table}, r${2:row}, c${2:col}, s${2:sht}}',
                                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                                    documentation: 'cell_reference',
                                },
                                {
                                    label: 'with',
                                    kind: monaco.languages.CompletionItemKind.Snippet,
                                    insertText: 'with ${1:partial expression}: ${2:expression};',
                                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                                    documentation: 'cell_reference',
                                },
                            ];
                            return { suggestions: suggestions };
                        },
                    };
                };
                this._config.monacoLoad = monaco => {
                    const id = 'dpm-xl';
                    monaco.languages.register({ id });
                    monaco.languages.setTokensProvider(id, new DPMXLTokenProvider());
                    const literalFg = '3b8737';
                    //const idFg = '344482';
                    const symbolsFg = '344482';
                    const keywordFg = '7132a8';
                    const errorFg = 'ff0000';
                    monaco.editor.defineTheme('dpm-xl-black', {
                        base: 'vs',
                        rules: [
                            { token: 'with.dpm-xl', foreground: keywordFg },
                            { token: 'group_by.dpm-xl', foreground: keywordFg },
                            { token: 'abs.dpm-xl', foreground: keywordFg },
                            { token: 'isnull.dpm-xl', foreground: keywordFg },
                            { token: 'boolean_literal.dpm-xl', foreground: literalFg },
                            { token: 'integer_literal.dpm-xl', foreground: literalFg },
                            { token: 'decimal_literal.dpm-xl', foreground: literalFg },
                            { token: 'percent_literal.dpm-xl', foreground: literalFg },
                            { token: 'string_literal.dpm-xl', foreground: literalFg },
                            { token: 'letters_numbers.dpm-xl', foreground: literalFg },
                            { token: 'and.dpm-xl', foreground: symbolsFg },
                            { token: 'or.dpm-xl', foreground: symbolsFg },
                            { token: 'xor.dpm-xl', foreground: symbolsFg },
                            { token: 'not.dpm-xl', foreground: symbolsFg },
                            { token: 'assign.dpm-xl', foreground: symbolsFg },
                            { token: 'eq.dpm-xl', foreground: symbolsFg },
                            { token: 'ne.dpm-xl', foreground: symbolsFg },
                            { token: 'lt.dpm-xl', foreground: symbolsFg },
                            { token: 'le.dpm-xl', foreground: symbolsFg },
                            { token: 'gt.dpm-xl', foreground: symbolsFg },
                            { token: 'ge.dpm-xl', foreground: symbolsFg },
                            { token: 'error.dpm-xl', foreground: errorFg },
                        ],
                        colors: {
                            'editor.foreground': '#000000',
                        },
                    });
                    monaco.languages.registerCompletionItemProvider('dpm-xl', getDpmXlCompletionProvider(monaco));
                };
                if (typeof this._config.monacoPreLoad === 'function') {
                    this._config.monacoPreLoad();
                }
                win.require(['vs/editor/editor.main'], () => {
                    if (typeof this._config.monacoLoad === 'function') {
                        this._config.monacoLoad(win.monaco);
                    }
                    this.initMonaco(this.options, true);
                    resolve();
                }, () => {
                    reject(`Unable to load editor/editor.main module, please check your network environment.`);
                });
            };
            if (!win.require) {
                const loaderScript = this.doc.createElement('script');
                loaderScript.type = 'text/javascript';
                loaderScript.src = `${baseUrl}/vs/loader.js`;
                loaderScript.onload = amdLoader;
                loaderScript.onerror = () => reject(`Unable to load ${loaderScript.src}, please check your network environment.`);
                this.doc.getElementsByTagName('head')[0].appendChild(loaderScript);
            }
            else {
                amdLoader();
            }
        }).catch(error => this.notifyEvent('load-error', { error }));
    }
    cleanResize() {
        if (this._resize$) {
            this._resize$.unsubscribe();
        }
        return this;
    }
    registerResize() {
        this.cleanResize();
        this._resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(100))
            .subscribe(() => {
            this._editor.layout();
            this.notifyEvent('resize');
        });
        return this;
    }
    updateOptions() {
        if (!this._editor)
            return;
        this.ngZone.runOutsideAngular(() => {
            this._editor.dispose();
            this.initMonaco(this._options, false);
        });
    }
    ngAfterViewInit() {
        this.ngZone.runOutsideAngular(() => setTimeout(() => this.init(), +this.delay));
    }
    ngOnChanges(changes) {
        const allKeys = Object.keys(changes);
        if (allKeys.length === 1 && allKeys[0] === 'disabled')
            return;
        this.updateOptions();
    }
    ngOnDestroy() {
        this.cleanResize();
        if (this._editor) {
            this._editor.dispose();
            this._editor = undefined;
        }
    }
}
/** @nocollapse */ NuMonacoEditorBase.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NuMonacoEditorBase, deps: [{ token: i0.ElementRef }, { token: NU_MONACO_EDITOR_CONFIG }, { token: DOCUMENT }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ NuMonacoEditorBase.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.3", type: NuMonacoEditorBase, isStandalone: true, selector: "nu-monaco-base", inputs: { height: "height", delay: "delay", disabled: "disabled", options: "options" }, outputs: { event: "event" }, usesOnChanges: true, ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NuMonacoEditorBase, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-monaco-base',
                    template: ``,
                    standalone: true,
                }]
        }], ctorParameters: function () {
        return [{ type: i0.ElementRef }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [NU_MONACO_EDITOR_CONFIG]
                    }] }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }, { type: i0.NgZone }];
    }, propDecorators: { height: [{
                type: Input
            }], delay: [{
                type: Input
            }], disabled: [{
                type: Input
            }], options: [{
                type: Input
            }], event: [{
                type: Output
            }] } });

class NuMonacoEditorComponent extends NuMonacoEditorBase {
    constructor() {
        super(...arguments);
        this._value = '';
        this.autoFormat = true;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    get editor() {
        return this._editor;
    }
    initMonaco(options, initEvent) {
        const hasModel = !!this.model;
        if (hasModel) {
            const model = monaco.editor.getModel(this.model.uri || '');
            if (model) {
                options.model = model;
                options.model.setValue(this._value);
            }
            else {
                const { value, language, uri } = this.model;
                options.model = monaco.editor.createModel(value || this._value, language, uri);
            }
        }
        if (this._disabled != null)
            options.readOnly = this._disabled;
        const editor = (this._editor = monaco.editor.create(this.el.nativeElement, options));
        if (!hasModel) {
            editor.setValue(this._value);
        }
        editor.onDidChangeModelContent(() => {
            const value = editor.getValue();
            this.ngZone.run(() => {
                this._value = value;
                this.onChange(value);
            });
        });
        editor.onDidBlurEditorWidget(() => this.onTouched());
        this.registerResize();
        if (this.autoFormat) {
            editor
                .getAction('editor.action.formatDocument')
                .run()
                .then(() => this.notifyEvent(initEvent ? 'init' : 're-init'));
            return;
        }
        this.notifyEvent(initEvent ? 'init' : 're-init');
    }
    writeValue(value) {
        this._value = value || '';
        if (this._editor) {
            this._editor.setValue(this._value);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(_isDisabled) {
        this.disabled = _isDisabled;
        this.setDisabled();
    }
}
/** @nocollapse */ NuMonacoEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NuMonacoEditorComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ NuMonacoEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.3", type: NuMonacoEditorComponent, isStandalone: true, selector: "nu-monaco-editor", inputs: { model: "model", autoFormat: "autoFormat" }, host: { properties: { "style.display": "'block'", "style.height": "height" } }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef((() => NuMonacoEditorComponent)),
            multi: true,
        },
    ], exportAs: ["nuMonacoEditor"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NuMonacoEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-monaco-editor',
                    template: ``,
                    exportAs: 'nuMonacoEditor',
                    host: {
                        '[style.display]': `'block'`,
                        '[style.height]': 'height',
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((() => NuMonacoEditorComponent)),
                            multi: true,
                        },
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                }]
        }], propDecorators: { model: [{
                type: Input
            }], autoFormat: [{
                type: Input
            }] } });

class NuMonacoEditorDiffComponent extends NuMonacoEditorBase {
    get editor() {
        return this._editor;
    }
    initMonaco(options, initEvent) {
        if (!this.old || !this.new) {
            throw new Error('old or new not found for nu-monaco-diff-editor');
        }
        const theme = options.theme;
        if (this._disabled != null)
            options.readOnly = this._disabled;
        const editor = (this._editor = monaco.editor.createDiffEditor(this.el.nativeElement, options));
        options.theme = theme;
        editor.setModel({
            original: monaco.editor.createModel(this.old.code, this.old.language || options.language),
            modified: monaco.editor.createModel(this.new.code, this.new.language || options.language),
        });
        // this.setDisabled();
        editor.onDidUpdateDiff(() => this.notifyEvent('update-diff', { diffValue: editor.getModifiedEditor().getValue() }));
        this.registerResize();
        if (initEvent)
            this.notifyEvent('init');
    }
}
/** @nocollapse */ NuMonacoEditorDiffComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NuMonacoEditorDiffComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ NuMonacoEditorDiffComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.3", type: NuMonacoEditorDiffComponent, isStandalone: true, selector: "nu-monaco-diff-editor", inputs: { old: "old", new: "new" }, host: { properties: { "style.display": "'block'", "style.height": "height" } }, exportAs: ["nuMonacoDiffEditor"], usesInheritance: true, ngImport: i0, template: ``, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NuMonacoEditorDiffComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nu-monaco-diff-editor',
                    template: ``,
                    exportAs: 'nuMonacoDiffEditor',
                    host: {
                        '[style.display]': `'block'`,
                        '[style.height]': 'height',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    standalone: true,
                }]
        }], propDecorators: { old: [{
                type: Input
            }], new: [{
                type: Input
            }] } });

const COMPONENTS = [NuMonacoEditorComponent, NuMonacoEditorDiffComponent];
class NuMonacoEditorModule {
    static forRoot(config) {
        return {
            ngModule: NuMonacoEditorModule,
            providers: [{ provide: NU_MONACO_EDITOR_CONFIG, useValue: config }],
        };
    }
}
/** @nocollapse */ NuMonacoEditorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NuMonacoEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ NuMonacoEditorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.3", ngImport: i0, type: NuMonacoEditorModule, imports: [CommonModule, NuMonacoEditorComponent, NuMonacoEditorDiffComponent], exports: [NuMonacoEditorComponent, NuMonacoEditorDiffComponent] });
/** @nocollapse */ NuMonacoEditorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NuMonacoEditorModule, imports: [CommonModule, COMPONENTS] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: NuMonacoEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...COMPONENTS],
                    exports: COMPONENTS,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NU_MONACO_EDITOR_CONFIG, NuMonacoEditorComponent, NuMonacoEditorDiffComponent, NuMonacoEditorModule };
//# sourceMappingURL=ng-util-monaco-editor.mjs.map
