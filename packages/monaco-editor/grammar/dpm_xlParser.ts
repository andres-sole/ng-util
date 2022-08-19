// Generated from lib/dpm_xl.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { dpm_xlListener } from "./dpm_xlListener";
import { dpm_xlVisitor } from "./dpm_xlVisitor";


export class dpm_xlParser extends Parser {
	public static readonly BOOLEAN_LITERAL = 1;
	public static readonly AND = 2;
	public static readonly OR = 3;
	public static readonly XOR = 4;
	public static readonly NOT = 5;
	public static readonly ASSIGN = 6;
	public static readonly EQ = 7;
	public static readonly NE = 8;
	public static readonly LT = 9;
	public static readonly LE = 10;
	public static readonly GT = 11;
	public static readonly GE = 12;
	public static readonly MATCH = 13;
	public static readonly WITH = 14;
	public static readonly PLUS = 15;
	public static readonly MINUS = 16;
	public static readonly MULT = 17;
	public static readonly DIV = 18;
	public static readonly MAX_AGGR = 19;
	public static readonly MIN_AGGR = 20;
	public static readonly SUM = 21;
	public static readonly COUNT = 22;
	public static readonly AVG = 23;
	public static readonly MEDIAN = 24;
	public static readonly GROUP_BY = 25;
	public static readonly ABS = 26;
	public static readonly ISNULL = 27;
	public static readonly EXISTS = 28;
	public static readonly EXP = 29;
	public static readonly LN = 30;
	public static readonly SQRT = 31;
	public static readonly POWER = 32;
	public static readonly LOG = 33;
	public static readonly MAX = 34;
	public static readonly MIN = 35;
	public static readonly IN = 36;
	public static readonly COMMA = 37;
	public static readonly DOUBLE_POINTS = 38;
	public static readonly LPAREN = 39;
	public static readonly RPAREN = 40;
	public static readonly CURLY_BRACKET_LEFT = 41;
	public static readonly CURLY_BRACKET_RIGHT = 42;
	public static readonly SQUARE_BRACKET_LEFT = 43;
	public static readonly SQUARE_BRACKET_RIGHT = 44;
	public static readonly INTERVAL = 45;
	public static readonly DEFAULT = 46;
	public static readonly IF = 47;
	public static readonly THEN = 48;
	public static readonly ELSE = 49;
	public static readonly NVL = 50;
	public static readonly FILTER = 51;
	public static readonly WHERE = 52;
	public static readonly GET = 53;
	public static readonly RENAME = 54;
	public static readonly TO = 55;
	public static readonly TIME_SHIFT = 56;
	public static readonly LEN = 57;
	public static readonly CONCAT = 58;
	public static readonly ROW = 59;
	public static readonly ROW_RANGE = 60;
	public static readonly ROW_ALL = 61;
	public static readonly ROW_HEADING = 62;
	public static readonly COL = 63;
	public static readonly COL_RANGE = 64;
	public static readonly COL_ALL = 65;
	public static readonly COL_HEADING = 66;
	public static readonly SHEET = 67;
	public static readonly SHEET_RANGE = 68;
	public static readonly SHEET_ALL = 69;
	public static readonly SHEET_HEADING = 70;
	public static readonly TABLE = 71;
	public static readonly VAR_REF = 72;
	public static readonly PRECONDITION_ELEM = 73;
	public static readonly TIME_PERIOD = 74;
	public static readonly EOL = 75;
	public static readonly WS = 76;
	public static readonly INTEGER_LITERAL = 77;
	public static readonly DECIMAL_LITERAL = 78;
	public static readonly PERCENT_LITERAL = 79;
	public static readonly STRING_LITERAL = 80;
	public static readonly EMPTY_LITERAL = 81;
	public static readonly LETTERS_NUMBERS = 82;
	public static readonly RULE_start = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_expr = 2;
	public static readonly RULE_functions = 3;
	public static readonly RULE_numericOperators = 4;
	public static readonly RULE_comparisonFunctionOperators = 5;
	public static readonly RULE_filterOperators = 6;
	public static readonly RULE_timeOperators = 7;
	public static readonly RULE_conditionalOperators = 8;
	public static readonly RULE_stringOperators = 9;
	public static readonly RULE_aggregateOperators = 10;
	public static readonly RULE_groupingClause = 11;
	public static readonly RULE_member = 12;
	public static readonly RULE_dimension = 13;
	public static readonly RULE_dim_set = 14;
	public static readonly RULE_rowElem = 15;
	public static readonly RULE_colElem = 16;
	public static readonly RULE_sheetElem = 17;
	public static readonly RULE_rowHandler = 18;
	public static readonly RULE_colHandler = 19;
	public static readonly RULE_sheetHandler = 20;
	public static readonly RULE_interval = 21;
	public static readonly RULE_default = 22;
	public static readonly RULE_argument = 23;
	public static readonly RULE_cellRef = 24;
	public static readonly RULE_cellAddress = 25;
	public static readonly RULE_clauseOperators = 26;
	public static readonly RULE_comparisonOperators = 27;
	public static readonly RULE_literal = 28;
	public static readonly RULE_groupElements = 29;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "expression", "expr", "functions", "numericOperators", "comparisonFunctionOperators", 
		"filterOperators", "timeOperators", "conditionalOperators", "stringOperators", 
		"aggregateOperators", "groupingClause", "member", "dimension", "dim_set", 
		"rowElem", "colElem", "sheetElem", "rowHandler", "colHandler", "sheetHandler", 
		"interval", "default", "argument", "cellRef", "cellAddress", "clauseOperators", 
		"comparisonOperators", "literal", "groupElements",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'and'", "'or'", "'xor'", "'not'", "':='", "'='", 
		"'!='", "'<'", "'<='", "'>'", "'>='", "'match'", "'with'", "'+'", "'-'", 
		"'*'", "'/'", "'max_aggr'", "'min_aggr'", "'sum'", "'count'", "'avg'", 
		"'median'", "'group by'", "'abs'", "'isnull'", "'exists'", "'exp'", "'ln'", 
		"'sqrt'", "'power'", "'log'", "'max'", "'min'", "'in'", "','", "':'", 
		"'('", "')'", "'{'", "'}'", "'['", "']'", "'interval'", "'default'", "'if'", 
		"'then'", "'else'", "'nvl'", "'filter'", "'where'", "'get'", "'rename'", 
		"'to'", "'time_shift'", "'len'", "'&'", undefined, undefined, "'r*'", 
		"'r'", undefined, undefined, "'c*'", "'c'", undefined, undefined, "'s*'", 
		"'s'", undefined, undefined, undefined, undefined, "';'", undefined, undefined, 
		undefined, undefined, undefined, "''''",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BOOLEAN_LITERAL", "AND", "OR", "XOR", "NOT", "ASSIGN", "EQ", 
		"NE", "LT", "LE", "GT", "GE", "MATCH", "WITH", "PLUS", "MINUS", "MULT", 
		"DIV", "MAX_AGGR", "MIN_AGGR", "SUM", "COUNT", "AVG", "MEDIAN", "GROUP_BY", 
		"ABS", "ISNULL", "EXISTS", "EXP", "LN", "SQRT", "POWER", "LOG", "MAX", 
		"MIN", "IN", "COMMA", "DOUBLE_POINTS", "LPAREN", "RPAREN", "CURLY_BRACKET_LEFT", 
		"CURLY_BRACKET_RIGHT", "SQUARE_BRACKET_LEFT", "SQUARE_BRACKET_RIGHT", 
		"INTERVAL", "DEFAULT", "IF", "THEN", "ELSE", "NVL", "FILTER", "WHERE", 
		"GET", "RENAME", "TO", "TIME_SHIFT", "LEN", "CONCAT", "ROW", "ROW_RANGE", 
		"ROW_ALL", "ROW_HEADING", "COL", "COL_RANGE", "COL_ALL", "COL_HEADING", 
		"SHEET", "SHEET_RANGE", "SHEET_ALL", "SHEET_HEADING", "TABLE", "VAR_REF", 
		"PRECONDITION_ELEM", "TIME_PERIOD", "EOL", "WS", "INTEGER_LITERAL", "DECIMAL_LITERAL", 
		"PERCENT_LITERAL", "STRING_LITERAL", "EMPTY_LITERAL", "LETTERS_NUMBERS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(dpm_xlParser._LITERAL_NAMES, dpm_xlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return dpm_xlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "dpm_xl.g4"; }

	// @Override
	public get ruleNames(): string[] { return dpm_xlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return dpm_xlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(dpm_xlParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, dpm_xlParser.RULE_start);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dpm_xlParser.BOOLEAN_LITERAL) | (1 << dpm_xlParser.NOT) | (1 << dpm_xlParser.MATCH) | (1 << dpm_xlParser.WITH) | (1 << dpm_xlParser.PLUS) | (1 << dpm_xlParser.MINUS) | (1 << dpm_xlParser.MAX_AGGR) | (1 << dpm_xlParser.MIN_AGGR) | (1 << dpm_xlParser.SUM) | (1 << dpm_xlParser.COUNT) | (1 << dpm_xlParser.AVG) | (1 << dpm_xlParser.MEDIAN) | (1 << dpm_xlParser.ABS) | (1 << dpm_xlParser.ISNULL) | (1 << dpm_xlParser.EXISTS) | (1 << dpm_xlParser.EXP) | (1 << dpm_xlParser.LN) | (1 << dpm_xlParser.SQRT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (dpm_xlParser.POWER - 32)) | (1 << (dpm_xlParser.LOG - 32)) | (1 << (dpm_xlParser.MAX - 32)) | (1 << (dpm_xlParser.MIN - 32)) | (1 << (dpm_xlParser.LPAREN - 32)) | (1 << (dpm_xlParser.CURLY_BRACKET_LEFT - 32)) | (1 << (dpm_xlParser.SQUARE_BRACKET_LEFT - 32)) | (1 << (dpm_xlParser.IF - 32)) | (1 << (dpm_xlParser.NVL - 32)) | (1 << (dpm_xlParser.FILTER - 32)) | (1 << (dpm_xlParser.TIME_SHIFT - 32)) | (1 << (dpm_xlParser.LEN - 32)))) !== 0) || ((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (dpm_xlParser.VAR_REF - 72)) | (1 << (dpm_xlParser.PRECONDITION_ELEM - 72)) | (1 << (dpm_xlParser.INTEGER_LITERAL - 72)) | (1 << (dpm_xlParser.DECIMAL_LITERAL - 72)) | (1 << (dpm_xlParser.PERCENT_LITERAL - 72)) | (1 << (dpm_xlParser.STRING_LITERAL - 72)) | (1 << (dpm_xlParser.EMPTY_LITERAL - 72)))) !== 0)) {
				{
				{
				this.state = 60;
				this.expression();
				this.state = 61;
				this.match(dpm_xlParser.EOL);
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 68;
			this.match(dpm_xlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, dpm_xlParser.RULE_expression);
		try {
			this.state = 76;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dpm_xlParser.BOOLEAN_LITERAL:
			case dpm_xlParser.NOT:
			case dpm_xlParser.MATCH:
			case dpm_xlParser.PLUS:
			case dpm_xlParser.MINUS:
			case dpm_xlParser.MAX_AGGR:
			case dpm_xlParser.MIN_AGGR:
			case dpm_xlParser.SUM:
			case dpm_xlParser.COUNT:
			case dpm_xlParser.AVG:
			case dpm_xlParser.MEDIAN:
			case dpm_xlParser.ABS:
			case dpm_xlParser.ISNULL:
			case dpm_xlParser.EXISTS:
			case dpm_xlParser.EXP:
			case dpm_xlParser.LN:
			case dpm_xlParser.SQRT:
			case dpm_xlParser.POWER:
			case dpm_xlParser.LOG:
			case dpm_xlParser.MAX:
			case dpm_xlParser.MIN:
			case dpm_xlParser.LPAREN:
			case dpm_xlParser.CURLY_BRACKET_LEFT:
			case dpm_xlParser.SQUARE_BRACKET_LEFT:
			case dpm_xlParser.IF:
			case dpm_xlParser.NVL:
			case dpm_xlParser.FILTER:
			case dpm_xlParser.TIME_SHIFT:
			case dpm_xlParser.LEN:
			case dpm_xlParser.VAR_REF:
			case dpm_xlParser.PRECONDITION_ELEM:
			case dpm_xlParser.INTEGER_LITERAL:
			case dpm_xlParser.DECIMAL_LITERAL:
			case dpm_xlParser.PERCENT_LITERAL:
			case dpm_xlParser.STRING_LITERAL:
			case dpm_xlParser.EMPTY_LITERAL:
				_localctx = new ExprWithoutPartialSelectionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 70;
				this.expr(0);
				}
				break;
			case dpm_xlParser.WITH:
				_localctx = new ExprWithSelectionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 71;
				this.match(dpm_xlParser.WITH);
				this.state = 72;
				this.cellRef();
				this.state = 73;
				this.match(dpm_xlParser.DOUBLE_POINTS);
				this.state = 74;
				this.expr(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, dpm_xlParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				_localctx = new ParExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 79;
				this.match(dpm_xlParser.LPAREN);
				this.state = 80;
				this.expr(0);
				this.state = 81;
				this.match(dpm_xlParser.RPAREN);
				}
				break;

			case 2:
				{
				_localctx = new FuncExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 83;
				this.functions();
				}
				break;

			case 3:
				{
				_localctx = new UnaryExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 84;
				(_localctx as UnaryExprContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dpm_xlParser.NOT) | (1 << dpm_xlParser.PLUS) | (1 << dpm_xlParser.MINUS))) !== 0))) {
					(_localctx as UnaryExprContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 85;
				this.expr(14);
				}
				break;

			case 4:
				{
				_localctx = new CondExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 86;
				this.match(dpm_xlParser.IF);
				this.state = 87;
				(_localctx as CondExprContext)._conditionalExpr = this.expr(0);
				this.state = 88;
				this.match(dpm_xlParser.THEN);
				this.state = 89;
				(_localctx as CondExprContext)._thenExpr = this.expr(0);
				this.state = 90;
				this.match(dpm_xlParser.ELSE);
				this.state = 91;
				(_localctx as CondExprContext)._elseExpr = this.expr(6);
				}
				break;

			case 5:
				{
				_localctx = new CondExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 93;
				this.match(dpm_xlParser.IF);
				this.state = 94;
				(_localctx as CondExprContext)._conditionalExpr = this.expr(0);
				this.state = 95;
				this.match(dpm_xlParser.THEN);
				this.state = 96;
				(_localctx as CondExprContext)._thenExpr = this.expr(5);
				}
				break;

			case 6:
				{
				_localctx = new DimExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 98;
				this.dimension();
				}
				break;

			case 7:
				{
				_localctx = new VarRefExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 99;
				this.match(dpm_xlParser.VAR_REF);
				}
				break;

			case 8:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 100;
				this.literal();
				}
				break;

			case 9:
				{
				_localctx = new CellRefExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 101;
				this.cellRef();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 133;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 131;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new NumericExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as NumericExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, dpm_xlParser.RULE_expr);
						this.state = 104;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 105;
						(_localctx as NumericExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === dpm_xlParser.MULT || _la === dpm_xlParser.DIV)) {
							(_localctx as NumericExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 106;
						(_localctx as NumericExprContext)._right = this.expr(14);
						}
						break;

					case 2:
						{
						_localctx = new NumericExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as NumericExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, dpm_xlParser.RULE_expr);
						this.state = 107;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 108;
						(_localctx as NumericExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === dpm_xlParser.PLUS || _la === dpm_xlParser.MINUS)) {
							(_localctx as NumericExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 109;
						(_localctx as NumericExprContext)._right = this.expr(13);
						}
						break;

					case 3:
						{
						_localctx = new ConcatExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ConcatExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, dpm_xlParser.RULE_expr);
						this.state = 110;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 111;
						(_localctx as ConcatExprContext)._op = this.match(dpm_xlParser.CONCAT);
						this.state = 112;
						(_localctx as ConcatExprContext)._right = this.expr(12);
						}
						break;

					case 4:
						{
						_localctx = new CompExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as CompExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, dpm_xlParser.RULE_expr);
						this.state = 113;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 114;
						(_localctx as CompExprContext)._op = this.comparisonOperators();
						this.state = 115;
						(_localctx as CompExprContext)._right = this.expr(11);
						}
						break;

					case 5:
						{
						_localctx = new BoolExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as BoolExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, dpm_xlParser.RULE_expr);
						this.state = 117;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 118;
						(_localctx as BoolExprContext)._op = this.match(dpm_xlParser.AND);
						this.state = 119;
						(_localctx as BoolExprContext)._right = this.expr(9);
						}
						break;

					case 6:
						{
						_localctx = new BoolExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as BoolExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, dpm_xlParser.RULE_expr);
						this.state = 120;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 121;
						(_localctx as BoolExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === dpm_xlParser.OR || _la === dpm_xlParser.XOR)) {
							(_localctx as BoolExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 122;
						(_localctx as BoolExprContext)._right = this.expr(8);
						}
						break;

					case 7:
						{
						_localctx = new ClauseExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, dpm_xlParser.RULE_expr);
						this.state = 123;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 124;
						this.match(dpm_xlParser.SQUARE_BRACKET_LEFT);
						this.state = 125;
						this.clauseOperators();
						this.state = 126;
						this.match(dpm_xlParser.SQUARE_BRACKET_RIGHT);
						}
						break;

					case 8:
						{
						_localctx = new InExprContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InExprContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, dpm_xlParser.RULE_expr);
						this.state = 128;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 129;
						(_localctx as InExprContext)._op = this.match(dpm_xlParser.IN);
						this.state = 130;
						this.dim_set();
						}
						break;
					}
					}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functions(): FunctionsContext {
		let _localctx: FunctionsContext = new FunctionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, dpm_xlParser.RULE_functions);
		try {
			this.state = 143;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dpm_xlParser.MAX_AGGR:
			case dpm_xlParser.MIN_AGGR:
			case dpm_xlParser.SUM:
			case dpm_xlParser.COUNT:
			case dpm_xlParser.AVG:
			case dpm_xlParser.MEDIAN:
				_localctx = new AggregateFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 136;
				this.aggregateOperators();
				}
				break;
			case dpm_xlParser.ABS:
			case dpm_xlParser.EXP:
			case dpm_xlParser.LN:
			case dpm_xlParser.SQRT:
			case dpm_xlParser.POWER:
			case dpm_xlParser.LOG:
			case dpm_xlParser.MAX:
			case dpm_xlParser.MIN:
				_localctx = new NumericFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 137;
				this.numericOperators();
				}
				break;
			case dpm_xlParser.MATCH:
			case dpm_xlParser.ISNULL:
			case dpm_xlParser.EXISTS:
				_localctx = new ComparisonFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 138;
				this.comparisonFunctionOperators();
				}
				break;
			case dpm_xlParser.FILTER:
				_localctx = new FilterFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 139;
				this.filterOperators();
				}
				break;
			case dpm_xlParser.NVL:
				_localctx = new ConditionalFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 140;
				this.conditionalOperators();
				}
				break;
			case dpm_xlParser.TIME_SHIFT:
				_localctx = new TimeFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 141;
				this.timeOperators();
				}
				break;
			case dpm_xlParser.LEN:
				_localctx = new StringFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 142;
				this.stringOperators();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericOperators(): NumericOperatorsContext {
		let _localctx: NumericOperatorsContext = new NumericOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, dpm_xlParser.RULE_numericOperators);
		let _la: number;
		try {
			this.state = 168;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dpm_xlParser.ABS:
			case dpm_xlParser.EXP:
			case dpm_xlParser.LN:
			case dpm_xlParser.SQRT:
				_localctx = new UnaryNumericFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 145;
				(_localctx as UnaryNumericFunctionsContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dpm_xlParser.ABS) | (1 << dpm_xlParser.EXP) | (1 << dpm_xlParser.LN) | (1 << dpm_xlParser.SQRT))) !== 0))) {
					(_localctx as UnaryNumericFunctionsContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 146;
				this.match(dpm_xlParser.LPAREN);
				this.state = 147;
				this.expr(0);
				this.state = 148;
				this.match(dpm_xlParser.RPAREN);
				}
				break;
			case dpm_xlParser.POWER:
			case dpm_xlParser.LOG:
				_localctx = new BinaryNumericFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 150;
				(_localctx as BinaryNumericFunctionsContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === dpm_xlParser.POWER || _la === dpm_xlParser.LOG)) {
					(_localctx as BinaryNumericFunctionsContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 151;
				this.match(dpm_xlParser.LPAREN);
				this.state = 152;
				(_localctx as BinaryNumericFunctionsContext)._left = this.expr(0);
				this.state = 153;
				this.match(dpm_xlParser.COMMA);
				this.state = 154;
				(_localctx as BinaryNumericFunctionsContext)._right = this.expr(0);
				this.state = 155;
				this.match(dpm_xlParser.RPAREN);
				}
				break;
			case dpm_xlParser.MAX:
			case dpm_xlParser.MIN:
				_localctx = new ComplexNumericFunctionsContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 157;
				(_localctx as ComplexNumericFunctionsContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === dpm_xlParser.MAX || _la === dpm_xlParser.MIN)) {
					(_localctx as ComplexNumericFunctionsContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 158;
				this.match(dpm_xlParser.LPAREN);
				this.state = 159;
				this.expr(0);
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 160;
					this.match(dpm_xlParser.COMMA);
					this.state = 161;
					this.expr(0);
					}
					}
					this.state = 164;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === dpm_xlParser.COMMA);
				this.state = 166;
				this.match(dpm_xlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonFunctionOperators(): ComparisonFunctionOperatorsContext {
		let _localctx: ComparisonFunctionOperatorsContext = new ComparisonFunctionOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, dpm_xlParser.RULE_comparisonFunctionOperators);
		try {
			this.state = 187;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dpm_xlParser.MATCH:
				_localctx = new MatchExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 170;
				this.match(dpm_xlParser.MATCH);
				this.state = 171;
				this.match(dpm_xlParser.LPAREN);
				this.state = 172;
				this.expr(0);
				this.state = 173;
				this.match(dpm_xlParser.COMMA);
				this.state = 174;
				this.literal();
				this.state = 175;
				this.match(dpm_xlParser.RPAREN);
				}
				break;
			case dpm_xlParser.ISNULL:
				_localctx = new IsnullExprContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 177;
				this.match(dpm_xlParser.ISNULL);
				this.state = 178;
				this.match(dpm_xlParser.LPAREN);
				this.state = 179;
				this.expr(0);
				this.state = 180;
				this.match(dpm_xlParser.RPAREN);
				}
				break;
			case dpm_xlParser.EXISTS:
				_localctx = new ExistsExprContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 182;
				this.match(dpm_xlParser.EXISTS);
				this.state = 183;
				this.match(dpm_xlParser.LPAREN);
				this.state = 184;
				this.cellRef();
				this.state = 185;
				this.match(dpm_xlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filterOperators(): FilterOperatorsContext {
		let _localctx: FilterOperatorsContext = new FilterOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, dpm_xlParser.RULE_filterOperators);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.match(dpm_xlParser.FILTER);
			this.state = 190;
			this.match(dpm_xlParser.LPAREN);
			this.state = 191;
			this.expr(0);
			this.state = 192;
			this.match(dpm_xlParser.COMMA);
			this.state = 193;
			this.expr(0);
			this.state = 194;
			this.match(dpm_xlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeOperators(): TimeOperatorsContext {
		let _localctx: TimeOperatorsContext = new TimeOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, dpm_xlParser.RULE_timeOperators);
		try {
			_localctx = new TimeShiftFunctionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(dpm_xlParser.TIME_SHIFT);
			this.state = 197;
			this.match(dpm_xlParser.LPAREN);
			this.state = 198;
			this.cellRef();
			this.state = 199;
			this.match(dpm_xlParser.COMMA);
			this.state = 200;
			this.match(dpm_xlParser.LETTERS_NUMBERS);
			this.state = 201;
			this.match(dpm_xlParser.COMMA);
			this.state = 202;
			this.match(dpm_xlParser.TIME_PERIOD);
			this.state = 203;
			this.match(dpm_xlParser.COMMA);
			this.state = 204;
			this.match(dpm_xlParser.INTEGER_LITERAL);
			this.state = 205;
			this.match(dpm_xlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conditionalOperators(): ConditionalOperatorsContext {
		let _localctx: ConditionalOperatorsContext = new ConditionalOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, dpm_xlParser.RULE_conditionalOperators);
		try {
			_localctx = new NvlFunctionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.match(dpm_xlParser.NVL);
			this.state = 208;
			this.match(dpm_xlParser.LPAREN);
			this.state = 209;
			this.expr(0);
			this.state = 210;
			this.match(dpm_xlParser.COMMA);
			this.state = 211;
			this.expr(0);
			this.state = 212;
			this.match(dpm_xlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringOperators(): StringOperatorsContext {
		let _localctx: StringOperatorsContext = new StringOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, dpm_xlParser.RULE_stringOperators);
		try {
			_localctx = new UnaryStringFunctionContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(dpm_xlParser.LEN);
			this.state = 215;
			this.match(dpm_xlParser.LPAREN);
			this.state = 216;
			this.expr(0);
			this.state = 217;
			this.match(dpm_xlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregateOperators(): AggregateOperatorsContext {
		let _localctx: AggregateOperatorsContext = new AggregateOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, dpm_xlParser.RULE_aggregateOperators);
		let _la: number;
		try {
			_localctx = new CommonAggrOpContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			(_localctx as CommonAggrOpContext)._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dpm_xlParser.MAX_AGGR) | (1 << dpm_xlParser.MIN_AGGR) | (1 << dpm_xlParser.SUM) | (1 << dpm_xlParser.COUNT) | (1 << dpm_xlParser.AVG) | (1 << dpm_xlParser.MEDIAN))) !== 0))) {
				(_localctx as CommonAggrOpContext)._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 220;
			this.match(dpm_xlParser.LPAREN);
			this.state = 221;
			this.expr(0);
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dpm_xlParser.GROUP_BY) {
				{
				this.state = 222;
				this.groupingClause();
				}
			}

			this.state = 225;
			this.match(dpm_xlParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupingClause(): GroupingClauseContext {
		let _localctx: GroupingClauseContext = new GroupingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, dpm_xlParser.RULE_groupingClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.match(dpm_xlParser.GROUP_BY);
			this.state = 228;
			this.groupElements();
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === dpm_xlParser.COMMA) {
				{
				{
				this.state = 229;
				this.match(dpm_xlParser.COMMA);
				this.state = 230;
				this.groupElements();
				}
				}
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member(): MemberContext {
		let _localctx: MemberContext = new MemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, dpm_xlParser.RULE_member);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(dpm_xlParser.LETTERS_NUMBERS);
			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === dpm_xlParser.DOUBLE_POINTS) {
				{
				this.state = 237;
				this.match(dpm_xlParser.DOUBLE_POINTS);
				this.state = 238;
				this.match(dpm_xlParser.LETTERS_NUMBERS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimension(): DimensionContext {
		let _localctx: DimensionContext = new DimensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, dpm_xlParser.RULE_dimension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.match(dpm_xlParser.SQUARE_BRACKET_LEFT);
			this.state = 242;
			this.member();
			this.state = 243;
			this.match(dpm_xlParser.SQUARE_BRACKET_RIGHT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dim_set(): Dim_setContext {
		let _localctx: Dim_setContext = new Dim_setContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, dpm_xlParser.RULE_dim_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.match(dpm_xlParser.CURLY_BRACKET_LEFT);
			this.state = 246;
			this.dimension();
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === dpm_xlParser.COMMA) {
				{
				{
				this.state = 247;
				this.match(dpm_xlParser.COMMA);
				this.state = 248;
				this.dimension();
				}
				}
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 254;
			this.match(dpm_xlParser.CURLY_BRACKET_RIGHT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rowElem(): RowElemContext {
		let _localctx: RowElemContext = new RowElemContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, dpm_xlParser.RULE_rowElem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			_la = this._input.LA(1);
			if (!(((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (dpm_xlParser.ROW - 59)) | (1 << (dpm_xlParser.ROW_RANGE - 59)) | (1 << (dpm_xlParser.ROW_ALL - 59)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public colElem(): ColElemContext {
		let _localctx: ColElemContext = new ColElemContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, dpm_xlParser.RULE_colElem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			_la = this._input.LA(1);
			if (!(((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (dpm_xlParser.COL - 63)) | (1 << (dpm_xlParser.COL_RANGE - 63)) | (1 << (dpm_xlParser.COL_ALL - 63)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sheetElem(): SheetElemContext {
		let _localctx: SheetElemContext = new SheetElemContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, dpm_xlParser.RULE_sheetElem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			_la = this._input.LA(1);
			if (!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (dpm_xlParser.SHEET - 67)) | (1 << (dpm_xlParser.SHEET_RANGE - 67)) | (1 << (dpm_xlParser.SHEET_ALL - 67)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rowHandler(): RowHandlerContext {
		let _localctx: RowHandlerContext = new RowHandlerContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, dpm_xlParser.RULE_rowHandler);
		let _la: number;
		try {
			this.state = 273;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dpm_xlParser.ROW:
			case dpm_xlParser.ROW_RANGE:
			case dpm_xlParser.ROW_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 262;
				this.rowElem();
				}
				break;
			case dpm_xlParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 263;
				this.match(dpm_xlParser.LPAREN);
				this.state = 264;
				this.match(dpm_xlParser.ROW);
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === dpm_xlParser.COMMA) {
					{
					{
					this.state = 265;
					this.match(dpm_xlParser.COMMA);
					this.state = 266;
					this.match(dpm_xlParser.ROW);
					}
					}
					this.state = 271;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 272;
				this.match(dpm_xlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public colHandler(): ColHandlerContext {
		let _localctx: ColHandlerContext = new ColHandlerContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, dpm_xlParser.RULE_colHandler);
		let _la: number;
		try {
			this.state = 286;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dpm_xlParser.COL:
			case dpm_xlParser.COL_RANGE:
			case dpm_xlParser.COL_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 275;
				this.colElem();
				}
				break;
			case dpm_xlParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 276;
				this.match(dpm_xlParser.LPAREN);
				this.state = 277;
				this.match(dpm_xlParser.COL);
				this.state = 282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === dpm_xlParser.COMMA) {
					{
					{
					this.state = 278;
					this.match(dpm_xlParser.COMMA);
					this.state = 279;
					this.match(dpm_xlParser.COL);
					}
					}
					this.state = 284;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 285;
				this.match(dpm_xlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sheetHandler(): SheetHandlerContext {
		let _localctx: SheetHandlerContext = new SheetHandlerContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, dpm_xlParser.RULE_sheetHandler);
		let _la: number;
		try {
			this.state = 299;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dpm_xlParser.SHEET:
			case dpm_xlParser.SHEET_RANGE:
			case dpm_xlParser.SHEET_ALL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 288;
				this.sheetElem();
				}
				break;
			case dpm_xlParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 289;
				this.match(dpm_xlParser.LPAREN);
				this.state = 290;
				this.match(dpm_xlParser.SHEET);
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === dpm_xlParser.COMMA) {
					{
					{
					this.state = 291;
					this.match(dpm_xlParser.COMMA);
					this.state = 292;
					this.match(dpm_xlParser.SHEET);
					}
					}
					this.state = 297;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 298;
				this.match(dpm_xlParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public interval(): IntervalContext {
		let _localctx: IntervalContext = new IntervalContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, dpm_xlParser.RULE_interval);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(dpm_xlParser.INTERVAL);
			this.state = 302;
			this.match(dpm_xlParser.DOUBLE_POINTS);
			this.state = 303;
			this.match(dpm_xlParser.BOOLEAN_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public default(): DefaultContext {
		let _localctx: DefaultContext = new DefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, dpm_xlParser.RULE_default);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(dpm_xlParser.DEFAULT);
			this.state = 306;
			this.match(dpm_xlParser.DOUBLE_POINTS);
			this.state = 307;
			this.literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, dpm_xlParser.RULE_argument);
		try {
			this.state = 314;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				_localctx = new RowArgContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 309;
				this.rowHandler();
				}
				break;

			case 2:
				_localctx = new ColArgContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 310;
				this.colHandler();
				}
				break;

			case 3:
				_localctx = new SheetArgContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 311;
				this.sheetHandler();
				}
				break;

			case 4:
				_localctx = new IntervalArgContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 312;
				this.interval();
				}
				break;

			case 5:
				_localctx = new DefaultArgContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 313;
				this.default();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cellRef(): CellRefContext {
		let _localctx: CellRefContext = new CellRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, dpm_xlParser.RULE_cellRef);
		try {
			this.state = 321;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dpm_xlParser.CURLY_BRACKET_LEFT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 316;
				this.match(dpm_xlParser.CURLY_BRACKET_LEFT);
				this.state = 317;
				_localctx._address = this.cellAddress();
				this.state = 318;
				this.match(dpm_xlParser.CURLY_BRACKET_RIGHT);
				}
				break;
			case dpm_xlParser.PRECONDITION_ELEM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 320;
				this.match(dpm_xlParser.PRECONDITION_ELEM);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cellAddress(): CellAddressContext {
		let _localctx: CellAddressContext = new CellAddressContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, dpm_xlParser.RULE_cellAddress);
		let _la: number;
		try {
			this.state = 339;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dpm_xlParser.TABLE:
				_localctx = new TableRefContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 323;
				this.match(dpm_xlParser.TABLE);
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === dpm_xlParser.COMMA) {
					{
					{
					this.state = 324;
					this.match(dpm_xlParser.COMMA);
					this.state = 325;
					this.argument();
					}
					}
					this.state = 330;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case dpm_xlParser.LPAREN:
			case dpm_xlParser.INTERVAL:
			case dpm_xlParser.DEFAULT:
			case dpm_xlParser.ROW:
			case dpm_xlParser.ROW_RANGE:
			case dpm_xlParser.ROW_ALL:
			case dpm_xlParser.COL:
			case dpm_xlParser.COL_RANGE:
			case dpm_xlParser.COL_ALL:
			case dpm_xlParser.SHEET:
			case dpm_xlParser.SHEET_RANGE:
			case dpm_xlParser.SHEET_ALL:
				_localctx = new CompRefContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 331;
				this.argument();
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === dpm_xlParser.COMMA) {
					{
					{
					this.state = 332;
					this.match(dpm_xlParser.COMMA);
					this.state = 333;
					this.argument();
					}
					}
					this.state = 338;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clauseOperators(): ClauseOperatorsContext {
		let _localctx: ClauseOperatorsContext = new ClauseOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, dpm_xlParser.RULE_clauseOperators);
		try {
			this.state = 351;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case dpm_xlParser.WHERE:
				_localctx = new WhereExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 341;
				this.match(dpm_xlParser.WHERE);
				this.state = 342;
				this.match(dpm_xlParser.LETTERS_NUMBERS);
				this.state = 343;
				this.match(dpm_xlParser.EQ);
				this.state = 344;
				this.dimension();
				}
				break;
			case dpm_xlParser.GET:
				_localctx = new GetExprContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 345;
				this.match(dpm_xlParser.GET);
				this.state = 346;
				this.match(dpm_xlParser.LETTERS_NUMBERS);
				}
				break;
			case dpm_xlParser.RENAME:
				_localctx = new RenameExprContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 347;
				this.match(dpm_xlParser.RENAME);
				this.state = 348;
				this.match(dpm_xlParser.LETTERS_NUMBERS);
				this.state = 349;
				this.match(dpm_xlParser.TO);
				this.state = 350;
				this.match(dpm_xlParser.LETTERS_NUMBERS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperators(): ComparisonOperatorsContext {
		let _localctx: ComparisonOperatorsContext = new ComparisonOperatorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, dpm_xlParser.RULE_comparisonOperators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 353;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << dpm_xlParser.EQ) | (1 << dpm_xlParser.NE) | (1 << dpm_xlParser.LT) | (1 << dpm_xlParser.LE) | (1 << dpm_xlParser.GT) | (1 << dpm_xlParser.GE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, dpm_xlParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			_la = this._input.LA(1);
			if (!(_la === dpm_xlParser.BOOLEAN_LITERAL || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (dpm_xlParser.INTEGER_LITERAL - 77)) | (1 << (dpm_xlParser.DECIMAL_LITERAL - 77)) | (1 << (dpm_xlParser.PERCENT_LITERAL - 77)) | (1 << (dpm_xlParser.STRING_LITERAL - 77)) | (1 << (dpm_xlParser.EMPTY_LITERAL - 77)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupElements(): GroupElementsContext {
		let _localctx: GroupElementsContext = new GroupElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, dpm_xlParser.RULE_groupElements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			_la = this._input.LA(1);
			if (!(((((_la - 62)) & ~0x1F) === 0 && ((1 << (_la - 62)) & ((1 << (dpm_xlParser.ROW_HEADING - 62)) | (1 << (dpm_xlParser.COL_HEADING - 62)) | (1 << (dpm_xlParser.SHEET_HEADING - 62)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 15);

		case 7:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03T\u016A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x03\x02\x07\x02" +
		"B\n\x02\f\x02\x0E\x02E\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03O\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04i\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x07\x04\x86\n\x04\f\x04\x0E\x04\x89\v\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\x92\n" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06" +
		"\x06\xA5\n\x06\r\x06\x0E\x06\xA6\x03\x06\x03\x06\x05\x06\xAB\n\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xBE" +
		"\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\xE2\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x07\r\xEA\n\r\f\r\x0E\r" +
		"\xED\v\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xF2\n\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xFC\n\x10\f\x10\x0E" +
		"\x10\xFF\v\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u010E\n\x14\f" +
		"\x14\x0E\x14\u0111\v\x14\x03\x14\x05\x14\u0114\n\x14\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x07\x15\u011B\n\x15\f\x15\x0E\x15\u011E\v\x15\x03" +
		"\x15\x05\x15\u0121\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16" +
		"\u0128\n\x16\f\x16\x0E\x16\u012B\v\x16\x03\x16\x05\x16\u012E\n\x16\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x05\x19\u013D\n\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\u0144\n\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0149" +
		"\n\x1B\f\x1B\x0E\x1B\u014C\v\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0151" +
		"\n\x1B\f\x1B\x0E\x1B\u0154\v\x1B\x05\x1B\u0156\n\x1B\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0162" +
		"\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x02\x02" +
		"\x03\x06 \x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02\x02\x10\x04" +
		"\x02\x07\x07\x11\x12\x03\x02\x13\x14\x03\x02\x11\x12\x03\x02\x05\x06\x04" +
		"\x02\x1C\x1C\x1F!\x03\x02\"#\x03\x02$%\x03\x02\x15\x1A\x03\x02=?\x03\x02" +
		"AC\x03\x02EG\x03\x02\t\x0E\x04\x02\x03\x03OS\x05\x02@@DDHH\x02\u017C\x02" +
		"C\x03\x02\x02\x02\x04N\x03\x02\x02\x02\x06h\x03\x02\x02\x02\b\x91\x03" +
		"\x02\x02\x02\n\xAA\x03\x02\x02\x02\f\xBD\x03\x02\x02\x02\x0E\xBF\x03\x02" +
		"\x02\x02\x10\xC6\x03\x02\x02\x02\x12\xD1\x03\x02\x02\x02\x14\xD8\x03\x02" +
		"\x02\x02\x16\xDD\x03\x02\x02\x02\x18\xE5\x03\x02\x02\x02\x1A\xEE\x03\x02" +
		"\x02\x02\x1C\xF3\x03\x02\x02\x02\x1E\xF7\x03\x02\x02\x02 \u0102\x03\x02" +
		"\x02\x02\"\u0104\x03\x02\x02\x02$\u0106\x03\x02\x02\x02&\u0113\x03\x02" +
		"\x02\x02(\u0120\x03\x02\x02\x02*\u012D\x03\x02\x02\x02,\u012F\x03\x02" +
		"\x02\x02.\u0133\x03\x02\x02\x020\u013C\x03\x02\x02\x022\u0143\x03\x02" +
		"\x02\x024\u0155\x03\x02\x02\x026\u0161\x03\x02\x02\x028\u0163\x03\x02" +
		"\x02\x02:\u0165\x03\x02\x02\x02<\u0167\x03\x02\x02\x02>?\x05\x04\x03\x02" +
		"?@\x07M\x02\x02@B\x03\x02\x02\x02A>\x03\x02\x02\x02BE\x03\x02\x02\x02" +
		"CA\x03\x02\x02\x02CD\x03\x02\x02\x02DF\x03\x02\x02\x02EC\x03\x02\x02\x02" +
		"FG\x07\x02\x02\x03G\x03\x03\x02\x02\x02HO\x05\x06\x04\x02IJ\x07\x10\x02" +
		"\x02JK\x052\x1A\x02KL\x07(\x02\x02LM\x05\x06\x04\x02MO\x03\x02\x02\x02" +
		"NH\x03\x02\x02\x02NI\x03\x02\x02\x02O\x05\x03\x02\x02\x02PQ\b\x04\x01" +
		"\x02QR\x07)\x02\x02RS\x05\x06\x04\x02ST\x07*\x02\x02Ti\x03\x02\x02\x02" +
		"Ui\x05\b\x05\x02VW\t\x02\x02\x02Wi\x05\x06\x04\x10XY\x071\x02\x02YZ\x05" +
		"\x06\x04\x02Z[\x072\x02\x02[\\\x05\x06\x04\x02\\]\x073\x02\x02]^\x05\x06" +
		"\x04\b^i\x03\x02\x02\x02_`\x071\x02\x02`a\x05\x06\x04\x02ab\x072\x02\x02" +
		"bc\x05\x06\x04\x07ci\x03\x02\x02\x02di\x05\x1C\x0F\x02ei\x07J\x02\x02" +
		"fi\x05:\x1E\x02gi\x052\x1A\x02hP\x03\x02\x02\x02hU\x03\x02\x02\x02hV\x03" +
		"\x02\x02\x02hX\x03\x02\x02\x02h_\x03\x02\x02\x02hd\x03\x02\x02\x02he\x03" +
		"\x02\x02\x02hf\x03\x02\x02\x02hg\x03\x02\x02\x02i\x87\x03\x02\x02\x02" +
		"jk\f\x0F\x02\x02kl\t\x03\x02\x02l\x86\x05\x06\x04\x10mn\f\x0E\x02\x02" +
		"no\t\x04\x02\x02o\x86\x05\x06\x04\x0Fpq\f\r\x02\x02qr\x07<\x02\x02r\x86" +
		"\x05\x06\x04\x0Est\f\f\x02\x02tu\x058\x1D\x02uv\x05\x06\x04\rv\x86\x03" +
		"\x02\x02\x02wx\f\n\x02\x02xy\x07\x04\x02\x02y\x86\x05\x06\x04\vz{\f\t" +
		"\x02\x02{|\t\x05\x02\x02|\x86\x05\x06\x04\n}~\f\x11\x02\x02~\x7F\x07-" +
		"\x02\x02\x7F\x80\x056\x1C\x02\x80\x81\x07.\x02\x02\x81\x86\x03\x02\x02" +
		"\x02\x82\x83\f\v\x02\x02\x83\x84\x07&\x02\x02\x84\x86\x05\x1E\x10\x02" +
		"\x85j\x03\x02\x02\x02\x85m\x03\x02\x02\x02\x85p\x03\x02\x02\x02\x85s\x03" +
		"\x02\x02\x02\x85w\x03\x02\x02\x02\x85z\x03\x02\x02\x02\x85}\x03\x02\x02" +
		"\x02\x85\x82\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02\x87\x85\x03\x02\x02" +
		"\x02\x87\x88\x03\x02\x02\x02\x88\x07\x03\x02\x02\x02\x89\x87\x03\x02\x02" +
		"\x02\x8A\x92\x05\x16\f\x02\x8B\x92\x05\n\x06\x02\x8C\x92\x05\f\x07\x02" +
		"\x8D\x92\x05\x0E\b\x02\x8E\x92\x05\x12\n\x02\x8F\x92\x05\x10\t\x02\x90" +
		"\x92\x05\x14\v\x02\x91\x8A\x03\x02\x02\x02\x91\x8B\x03\x02\x02\x02\x91" +
		"\x8C\x03\x02\x02\x02\x91\x8D\x03\x02\x02\x02\x91\x8E\x03\x02\x02\x02\x91" +
		"\x8F\x03\x02\x02\x02\x91\x90\x03\x02\x02\x02\x92\t\x03\x02\x02\x02\x93" +
		"\x94\t\x06\x02\x02\x94\x95\x07)\x02\x02\x95\x96\x05\x06\x04\x02\x96\x97" +
		"\x07*\x02\x02\x97\xAB\x03\x02\x02\x02\x98\x99\t\x07\x02\x02\x99\x9A\x07" +
		")\x02\x02\x9A\x9B\x05\x06\x04\x02\x9B\x9C\x07\'\x02\x02\x9C\x9D\x05\x06" +
		"\x04\x02\x9D\x9E\x07*\x02\x02\x9E\xAB\x03\x02\x02\x02\x9F\xA0\t\b\x02" +
		"\x02\xA0\xA1\x07)\x02\x02\xA1\xA4\x05\x06\x04\x02\xA2\xA3\x07\'\x02\x02" +
		"\xA3\xA5\x05\x06\x04\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02" +
		"\xA6\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02" +
		"\xA8\xA9\x07*\x02\x02\xA9\xAB\x03\x02\x02\x02\xAA\x93\x03\x02\x02\x02" +
		"\xAA\x98\x03\x02\x02\x02\xAA\x9F\x03\x02\x02\x02\xAB\v\x03\x02\x02\x02" +
		"\xAC\xAD\x07\x0F\x02\x02\xAD\xAE\x07)\x02\x02\xAE\xAF\x05\x06\x04\x02" +
		"\xAF\xB0\x07\'\x02\x02\xB0\xB1\x05:\x1E\x02\xB1\xB2\x07*\x02\x02\xB2\xBE" +
		"\x03\x02\x02\x02\xB3\xB4\x07\x1D\x02\x02\xB4\xB5\x07)\x02\x02\xB5\xB6" +
		"\x05\x06\x04\x02\xB6\xB7\x07*\x02\x02\xB7\xBE\x03\x02\x02\x02\xB8\xB9" +
		"\x07\x1E\x02\x02\xB9\xBA\x07)\x02\x02\xBA\xBB\x052\x1A\x02\xBB\xBC\x07" +
		"*\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD\xAC\x03\x02\x02\x02\xBD\xB3\x03" +
		"\x02\x02\x02\xBD\xB8\x03\x02\x02\x02\xBE\r\x03\x02\x02\x02\xBF\xC0\x07" +
		"5\x02\x02\xC0\xC1\x07)\x02\x02\xC1\xC2\x05\x06\x04\x02\xC2\xC3\x07\'\x02" +
		"\x02\xC3\xC4\x05\x06\x04\x02\xC4\xC5\x07*\x02\x02\xC5\x0F\x03\x02\x02" +
		"\x02\xC6\xC7\x07:\x02\x02\xC7\xC8\x07)\x02\x02\xC8\xC9\x052\x1A\x02\xC9" +
		"\xCA\x07\'\x02\x02\xCA\xCB\x07T\x02\x02\xCB\xCC\x07\'\x02\x02\xCC\xCD" +
		"\x07L\x02\x02\xCD\xCE\x07\'\x02\x02\xCE\xCF\x07O\x02\x02\xCF\xD0\x07*" +
		"\x02\x02\xD0\x11\x03\x02\x02\x02\xD1\xD2\x074\x02\x02\xD2\xD3\x07)\x02" +
		"\x02\xD3\xD4\x05\x06\x04\x02\xD4\xD5\x07\'\x02\x02\xD5\xD6\x05\x06\x04" +
		"\x02\xD6\xD7\x07*\x02\x02\xD7\x13\x03\x02\x02\x02\xD8\xD9\x07;\x02\x02" +
		"\xD9\xDA\x07)\x02\x02\xDA\xDB\x05\x06\x04\x02\xDB\xDC\x07*\x02\x02\xDC" +
		"\x15\x03\x02\x02\x02\xDD\xDE\t\t\x02\x02\xDE\xDF\x07)\x02\x02\xDF\xE1" +
		"\x05\x06\x04\x02\xE0\xE2\x05\x18\r\x02\xE1\xE0\x03\x02\x02\x02\xE1\xE2" +
		"\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x07*\x02\x02\xE4\x17" +
		"\x03\x02\x02\x02\xE5\xE6\x07\x1B\x02\x02\xE6\xEB\x05<\x1F\x02\xE7\xE8" +
		"\x07\'\x02\x02\xE8\xEA\x05<\x1F\x02\xE9\xE7\x03\x02\x02\x02\xEA\xED\x03" +
		"\x02\x02\x02\xEB\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\x19\x03" +
		"\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xEE\xF1\x07T\x02\x02\xEF\xF0\x07" +
		"(\x02\x02\xF0\xF2\x07T\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02" +
		"\x02\x02\xF2\x1B\x03\x02\x02\x02\xF3\xF4\x07-\x02\x02\xF4\xF5\x05\x1A" +
		"\x0E\x02\xF5\xF6\x07.\x02\x02\xF6\x1D\x03\x02\x02\x02\xF7\xF8\x07+\x02" +
		"\x02\xF8\xFD\x05\x1C\x0F\x02\xF9\xFA\x07\'\x02\x02\xFA\xFC\x05\x1C\x0F" +
		"\x02\xFB\xF9\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02" +
		"\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0100\x03\x02\x02\x02\xFF\xFD\x03\x02" +
		"\x02\x02\u0100\u0101\x07,\x02\x02\u0101\x1F\x03\x02\x02\x02\u0102\u0103" +
		"\t\n\x02\x02\u0103!\x03\x02\x02\x02\u0104\u0105\t\v\x02\x02\u0105#\x03" +
		"\x02\x02\x02\u0106\u0107\t\f\x02\x02\u0107%\x03\x02\x02\x02\u0108\u0114" +
		"\x05 \x11\x02\u0109\u010A\x07)\x02\x02\u010A\u010F\x07=\x02\x02\u010B" +
		"\u010C\x07\'\x02\x02\u010C\u010E\x07=\x02\x02\u010D\u010B\x03\x02\x02" +
		"\x02\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F\u0110" +
		"\x03\x02\x02\x02\u0110\u0112\x03\x02\x02\x02\u0111\u010F\x03\x02\x02\x02" +
		"\u0112\u0114\x07*\x02\x02\u0113\u0108\x03\x02\x02\x02\u0113\u0109\x03" +
		"\x02\x02\x02\u0114\'\x03\x02\x02\x02\u0115\u0121\x05\"\x12\x02\u0116\u0117" +
		"\x07)\x02\x02\u0117\u011C\x07A\x02\x02\u0118\u0119\x07\'\x02\x02\u0119" +
		"\u011B\x07A\x02\x02\u011A\u0118\x03\x02\x02\x02\u011B\u011E\x03\x02\x02" +
		"\x02\u011C\u011A\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011F" +
		"\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011F\u0121\x07*\x02\x02" +
		"\u0120\u0115\x03\x02\x02\x02\u0120\u0116\x03\x02\x02\x02\u0121)\x03\x02" +
		"\x02\x02\u0122\u012E\x05$\x13\x02\u0123\u0124\x07)\x02\x02\u0124\u0129" +
		"\x07E\x02\x02\u0125\u0126\x07\'\x02\x02\u0126\u0128\x07E\x02\x02\u0127" +
		"\u0125\x03\x02\x02\x02\u0128\u012B\x03\x02\x02\x02\u0129\u0127\x03\x02" +
		"\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u012C\x03\x02\x02\x02\u012B" +
		"\u0129\x03\x02\x02\x02\u012C\u012E\x07*\x02\x02\u012D\u0122\x03\x02\x02" +
		"\x02\u012D\u0123\x03\x02\x02\x02\u012E+\x03\x02\x02\x02\u012F\u0130\x07" +
		"/\x02\x02\u0130\u0131\x07(\x02\x02\u0131\u0132\x07\x03\x02\x02\u0132-" +
		"\x03\x02\x02\x02\u0133\u0134\x070\x02\x02\u0134\u0135\x07(\x02\x02\u0135" +
		"\u0136\x05:\x1E\x02\u0136/\x03\x02\x02\x02\u0137\u013D\x05&\x14\x02\u0138" +
		"\u013D\x05(\x15\x02\u0139\u013D\x05*\x16\x02\u013A\u013D\x05,\x17\x02" +
		"\u013B\u013D\x05.\x18\x02\u013C\u0137\x03\x02\x02\x02\u013C\u0138\x03" +
		"\x02\x02\x02\u013C\u0139\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C" +
		"\u013B\x03\x02\x02\x02\u013D1\x03\x02\x02\x02\u013E\u013F\x07+\x02\x02" +
		"\u013F\u0140\x054\x1B\x02\u0140\u0141\x07,\x02\x02\u0141\u0144\x03\x02" +
		"\x02\x02\u0142\u0144\x07K\x02\x02\u0143\u013E\x03\x02\x02\x02\u0143\u0142" +
		"\x03\x02\x02\x02\u01443\x03\x02\x02\x02\u0145\u014A\x07I\x02\x02\u0146" +
		"\u0147\x07\'\x02\x02\u0147\u0149\x050\x19\x02\u0148\u0146\x03\x02\x02" +
		"\x02\u0149\u014C\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B" +
		"\x03\x02\x02\x02\u014B\u0156\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02" +
		"\u014D\u0152\x050\x19\x02\u014E\u014F\x07\'\x02\x02\u014F\u0151\x050\x19" +
		"\x02\u0150\u014E\x03\x02\x02\x02\u0151\u0154\x03\x02\x02\x02\u0152\u0150" +
		"\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0156\x03\x02\x02\x02" +
		"\u0154\u0152\x03\x02\x02\x02\u0155\u0145\x03\x02\x02\x02\u0155\u014D\x03" +
		"\x02\x02\x02\u01565\x03\x02\x02\x02\u0157\u0158\x076\x02\x02\u0158\u0159" +
		"\x07T\x02\x02\u0159\u015A\x07\t\x02\x02\u015A\u0162\x05\x1C\x0F\x02\u015B" +
		"\u015C\x077\x02\x02\u015C\u0162\x07T\x02\x02\u015D\u015E\x078\x02\x02" +
		"\u015E\u015F\x07T\x02\x02\u015F\u0160\x079\x02\x02\u0160\u0162\x07T\x02" +
		"\x02\u0161\u0157\x03\x02\x02\x02\u0161\u015B\x03\x02\x02\x02\u0161\u015D" +
		"\x03\x02\x02\x02\u01627\x03\x02\x02\x02\u0163\u0164\t\r\x02\x02\u0164" +
		"9\x03\x02\x02\x02\u0165\u0166\t\x0E\x02\x02\u0166;\x03\x02\x02\x02\u0167" +
		"\u0168\t\x0F\x02\x02\u0168=\x03\x02\x02\x02\x1BCNh\x85\x87\x91\xA6\xAA" +
		"\xBD\xE1\xEB\xF1\xFD\u010F\u0113\u011C\u0120\u0129\u012D\u013C\u0143\u014A" +
		"\u0152\u0155\u0161";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!dpm_xlParser.__ATN) {
			dpm_xlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(dpm_xlParser._serializedATN));
		}

		return dpm_xlParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(dpm_xlParser.EOF, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dpm_xlParser.EOL);
		} else {
			return this.getToken(dpm_xlParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_start; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExprWithoutPartialSelectionContext extends ExpressionContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterExprWithoutPartialSelection) {
			listener.enterExprWithoutPartialSelection(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitExprWithoutPartialSelection) {
			listener.exitExprWithoutPartialSelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitExprWithoutPartialSelection) {
			return visitor.visitExprWithoutPartialSelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprWithSelectionContext extends ExpressionContext {
	public WITH(): TerminalNode { return this.getToken(dpm_xlParser.WITH, 0); }
	public cellRef(): CellRefContext {
		return this.getRuleContext(0, CellRefContext);
	}
	public DOUBLE_POINTS(): TerminalNode { return this.getToken(dpm_xlParser.DOUBLE_POINTS, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterExprWithSelection) {
			listener.enterExprWithSelection(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitExprWithSelection) {
			listener.exitExprWithSelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitExprWithSelection) {
			return visitor.visitExprWithSelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class ParExprContext extends ExprContext {
	public LPAREN(): TerminalNode { return this.getToken(dpm_xlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(dpm_xlParser.RPAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterParExpr) {
			listener.enterParExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitParExpr) {
			listener.exitParExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitParExpr) {
			return visitor.visitParExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FuncExprContext extends ExprContext {
	public functions(): FunctionsContext {
		return this.getRuleContext(0, FunctionsContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterFuncExpr) {
			listener.enterFuncExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitFuncExpr) {
			listener.exitFuncExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitFuncExpr) {
			return visitor.visitFuncExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClauseExprContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SQUARE_BRACKET_LEFT(): TerminalNode { return this.getToken(dpm_xlParser.SQUARE_BRACKET_LEFT, 0); }
	public clauseOperators(): ClauseOperatorsContext {
		return this.getRuleContext(0, ClauseOperatorsContext);
	}
	public SQUARE_BRACKET_RIGHT(): TerminalNode { return this.getToken(dpm_xlParser.SQUARE_BRACKET_RIGHT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterClauseExpr) {
			listener.enterClauseExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitClauseExpr) {
			listener.exitClauseExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitClauseExpr) {
			return visitor.visitClauseExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryExprContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.MINUS, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.NOT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterUnaryExpr) {
			listener.enterUnaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitUnaryExpr) {
			listener.exitUnaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitUnaryExpr) {
			return visitor.visitUnaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericExprContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MULT(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.MULT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.DIV, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.MINUS, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterNumericExpr) {
			listener.enterNumericExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitNumericExpr) {
			listener.exitNumericExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitNumericExpr) {
			return visitor.visitNumericExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConcatExprContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public CONCAT(): TerminalNode { return this.getToken(dpm_xlParser.CONCAT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterConcatExpr) {
			listener.enterConcatExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitConcatExpr) {
			listener.exitConcatExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitConcatExpr) {
			return visitor.visitConcatExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CompExprContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: ComparisonOperatorsContext;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public comparisonOperators(): ComparisonOperatorsContext {
		return this.getRuleContext(0, ComparisonOperatorsContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterCompExpr) {
			listener.enterCompExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitCompExpr) {
			listener.exitCompExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitCompExpr) {
			return visitor.visitCompExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InExprContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public dim_set(): Dim_setContext {
		return this.getRuleContext(0, Dim_setContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public IN(): TerminalNode { return this.getToken(dpm_xlParser.IN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterInExpr) {
			listener.enterInExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitInExpr) {
			listener.exitInExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitInExpr) {
			return visitor.visitInExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolExprContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.OR, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.XOR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterBoolExpr) {
			listener.enterBoolExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitBoolExpr) {
			listener.exitBoolExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitBoolExpr) {
			return visitor.visitBoolExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CondExprContext extends ExprContext {
	public _conditionalExpr!: ExprContext;
	public _thenExpr!: ExprContext;
	public _elseExpr!: ExprContext;
	public IF(): TerminalNode { return this.getToken(dpm_xlParser.IF, 0); }
	public THEN(): TerminalNode { return this.getToken(dpm_xlParser.THEN, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.ELSE, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterCondExpr) {
			listener.enterCondExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitCondExpr) {
			listener.exitCondExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitCondExpr) {
			return visitor.visitCondExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DimExprContext extends ExprContext {
	public dimension(): DimensionContext {
		return this.getRuleContext(0, DimensionContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterDimExpr) {
			listener.enterDimExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitDimExpr) {
			listener.exitDimExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitDimExpr) {
			return visitor.visitDimExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarRefExprContext extends ExprContext {
	public VAR_REF(): TerminalNode { return this.getToken(dpm_xlParser.VAR_REF, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterVarRefExpr) {
			listener.enterVarRefExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitVarRefExpr) {
			listener.exitVarRefExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitVarRefExpr) {
			return visitor.visitVarRefExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExprContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterLiteralExpr) {
			listener.enterLiteralExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitLiteralExpr) {
			listener.exitLiteralExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitLiteralExpr) {
			return visitor.visitLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CellRefExprContext extends ExprContext {
	public cellRef(): CellRefContext {
		return this.getRuleContext(0, CellRefContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterCellRefExpr) {
			listener.enterCellRefExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitCellRefExpr) {
			listener.exitCellRefExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitCellRefExpr) {
			return visitor.visitCellRefExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_functions; }
	public copyFrom(ctx: FunctionsContext): void {
		super.copyFrom(ctx);
	}
}
export class AggregateFunctionsContext extends FunctionsContext {
	public aggregateOperators(): AggregateOperatorsContext {
		return this.getRuleContext(0, AggregateOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterAggregateFunctions) {
			listener.enterAggregateFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitAggregateFunctions) {
			listener.exitAggregateFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitAggregateFunctions) {
			return visitor.visitAggregateFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericFunctionsContext extends FunctionsContext {
	public numericOperators(): NumericOperatorsContext {
		return this.getRuleContext(0, NumericOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterNumericFunctions) {
			listener.enterNumericFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitNumericFunctions) {
			listener.exitNumericFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitNumericFunctions) {
			return visitor.visitNumericFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonFunctionsContext extends FunctionsContext {
	public comparisonFunctionOperators(): ComparisonFunctionOperatorsContext {
		return this.getRuleContext(0, ComparisonFunctionOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterComparisonFunctions) {
			listener.enterComparisonFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitComparisonFunctions) {
			listener.exitComparisonFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitComparisonFunctions) {
			return visitor.visitComparisonFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FilterFunctionsContext extends FunctionsContext {
	public filterOperators(): FilterOperatorsContext {
		return this.getRuleContext(0, FilterOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterFilterFunctions) {
			listener.enterFilterFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitFilterFunctions) {
			listener.exitFilterFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitFilterFunctions) {
			return visitor.visitFilterFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConditionalFunctionsContext extends FunctionsContext {
	public conditionalOperators(): ConditionalOperatorsContext {
		return this.getRuleContext(0, ConditionalOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterConditionalFunctions) {
			listener.enterConditionalFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitConditionalFunctions) {
			listener.exitConditionalFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitConditionalFunctions) {
			return visitor.visitConditionalFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TimeFunctionsContext extends FunctionsContext {
	public timeOperators(): TimeOperatorsContext {
		return this.getRuleContext(0, TimeOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterTimeFunctions) {
			listener.enterTimeFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitTimeFunctions) {
			listener.exitTimeFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitTimeFunctions) {
			return visitor.visitTimeFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringFunctionsContext extends FunctionsContext {
	public stringOperators(): StringOperatorsContext {
		return this.getRuleContext(0, StringOperatorsContext);
	}
	constructor(ctx: FunctionsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterStringFunctions) {
			listener.enterStringFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitStringFunctions) {
			listener.exitStringFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitStringFunctions) {
			return visitor.visitStringFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_numericOperators; }
	public copyFrom(ctx: NumericOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryNumericFunctionsContext extends NumericOperatorsContext {
	public _op!: Token;
	public LPAREN(): TerminalNode { return this.getToken(dpm_xlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(dpm_xlParser.RPAREN, 0); }
	public ABS(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.ABS, 0); }
	public EXP(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.EXP, 0); }
	public LN(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.LN, 0); }
	public SQRT(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.SQRT, 0); }
	constructor(ctx: NumericOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterUnaryNumericFunctions) {
			listener.enterUnaryNumericFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitUnaryNumericFunctions) {
			listener.exitUnaryNumericFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitUnaryNumericFunctions) {
			return visitor.visitUnaryNumericFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryNumericFunctionsContext extends NumericOperatorsContext {
	public _op!: Token;
	public _left!: ExprContext;
	public _right!: ExprContext;
	public LPAREN(): TerminalNode { return this.getToken(dpm_xlParser.LPAREN, 0); }
	public COMMA(): TerminalNode { return this.getToken(dpm_xlParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(dpm_xlParser.RPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public POWER(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.POWER, 0); }
	public LOG(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.LOG, 0); }
	constructor(ctx: NumericOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterBinaryNumericFunctions) {
			listener.enterBinaryNumericFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitBinaryNumericFunctions) {
			listener.exitBinaryNumericFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitBinaryNumericFunctions) {
			return visitor.visitBinaryNumericFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComplexNumericFunctionsContext extends NumericOperatorsContext {
	public _op!: Token;
	public LPAREN(): TerminalNode { return this.getToken(dpm_xlParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(dpm_xlParser.RPAREN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.MAX, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.MIN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dpm_xlParser.COMMA);
		} else {
			return this.getToken(dpm_xlParser.COMMA, i);
		}
	}
	constructor(ctx: NumericOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterComplexNumericFunctions) {
			listener.enterComplexNumericFunctions(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitComplexNumericFunctions) {
			listener.exitComplexNumericFunctions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitComplexNumericFunctions) {
			return visitor.visitComplexNumericFunctions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonFunctionOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_comparisonFunctionOperators; }
	public copyFrom(ctx: ComparisonFunctionOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class MatchExprContext extends ComparisonFunctionOperatorsContext {
	public MATCH(): TerminalNode { return this.getToken(dpm_xlParser.MATCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(dpm_xlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public COMMA(): TerminalNode { return this.getToken(dpm_xlParser.COMMA, 0); }
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(dpm_xlParser.RPAREN, 0); }
	constructor(ctx: ComparisonFunctionOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterMatchExpr) {
			listener.enterMatchExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitMatchExpr) {
			listener.exitMatchExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitMatchExpr) {
			return visitor.visitMatchExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IsnullExprContext extends ComparisonFunctionOperatorsContext {
	public ISNULL(): TerminalNode { return this.getToken(dpm_xlParser.ISNULL, 0); }
	public LPAREN(): TerminalNode { return this.getToken(dpm_xlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(dpm_xlParser.RPAREN, 0); }
	constructor(ctx: ComparisonFunctionOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterIsnullExpr) {
			listener.enterIsnullExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitIsnullExpr) {
			listener.exitIsnullExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitIsnullExpr) {
			return visitor.visitIsnullExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExistsExprContext extends ComparisonFunctionOperatorsContext {
	public EXISTS(): TerminalNode { return this.getToken(dpm_xlParser.EXISTS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(dpm_xlParser.LPAREN, 0); }
	public cellRef(): CellRefContext {
		return this.getRuleContext(0, CellRefContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(dpm_xlParser.RPAREN, 0); }
	constructor(ctx: ComparisonFunctionOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterExistsExpr) {
			listener.enterExistsExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitExistsExpr) {
			listener.exitExistsExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitExistsExpr) {
			return visitor.visitExistsExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilterOperatorsContext extends ParserRuleContext {
	public FILTER(): TerminalNode { return this.getToken(dpm_xlParser.FILTER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(dpm_xlParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(dpm_xlParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(dpm_xlParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_filterOperators; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterFilterOperators) {
			listener.enterFilterOperators(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitFilterOperators) {
			listener.exitFilterOperators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitFilterOperators) {
			return visitor.visitFilterOperators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_timeOperators; }
	public copyFrom(ctx: TimeOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class TimeShiftFunctionContext extends TimeOperatorsContext {
	public TIME_SHIFT(): TerminalNode { return this.getToken(dpm_xlParser.TIME_SHIFT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(dpm_xlParser.LPAREN, 0); }
	public cellRef(): CellRefContext {
		return this.getRuleContext(0, CellRefContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dpm_xlParser.COMMA);
		} else {
			return this.getToken(dpm_xlParser.COMMA, i);
		}
	}
	public LETTERS_NUMBERS(): TerminalNode { return this.getToken(dpm_xlParser.LETTERS_NUMBERS, 0); }
	public TIME_PERIOD(): TerminalNode { return this.getToken(dpm_xlParser.TIME_PERIOD, 0); }
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(dpm_xlParser.INTEGER_LITERAL, 0); }
	public RPAREN(): TerminalNode { return this.getToken(dpm_xlParser.RPAREN, 0); }
	constructor(ctx: TimeOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterTimeShiftFunction) {
			listener.enterTimeShiftFunction(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitTimeShiftFunction) {
			listener.exitTimeShiftFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitTimeShiftFunction) {
			return visitor.visitTimeShiftFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_conditionalOperators; }
	public copyFrom(ctx: ConditionalOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class NvlFunctionContext extends ConditionalOperatorsContext {
	public NVL(): TerminalNode { return this.getToken(dpm_xlParser.NVL, 0); }
	public LPAREN(): TerminalNode { return this.getToken(dpm_xlParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(dpm_xlParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(dpm_xlParser.RPAREN, 0); }
	constructor(ctx: ConditionalOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterNvlFunction) {
			listener.enterNvlFunction(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitNvlFunction) {
			listener.exitNvlFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitNvlFunction) {
			return visitor.visitNvlFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_stringOperators; }
	public copyFrom(ctx: StringOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class UnaryStringFunctionContext extends StringOperatorsContext {
	public LEN(): TerminalNode { return this.getToken(dpm_xlParser.LEN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(dpm_xlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(dpm_xlParser.RPAREN, 0); }
	constructor(ctx: StringOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterUnaryStringFunction) {
			listener.enterUnaryStringFunction(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitUnaryStringFunction) {
			listener.exitUnaryStringFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitUnaryStringFunction) {
			return visitor.visitUnaryStringFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AggregateOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_aggregateOperators; }
	public copyFrom(ctx: AggregateOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class CommonAggrOpContext extends AggregateOperatorsContext {
	public _op!: Token;
	public LPAREN(): TerminalNode { return this.getToken(dpm_xlParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(dpm_xlParser.RPAREN, 0); }
	public MAX_AGGR(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.MAX_AGGR, 0); }
	public MIN_AGGR(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.MIN_AGGR, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.SUM, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.COUNT, 0); }
	public AVG(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.AVG, 0); }
	public MEDIAN(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.MEDIAN, 0); }
	public groupingClause(): GroupingClauseContext | undefined {
		return this.tryGetRuleContext(0, GroupingClauseContext);
	}
	constructor(ctx: AggregateOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterCommonAggrOp) {
			listener.enterCommonAggrOp(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitCommonAggrOp) {
			listener.exitCommonAggrOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitCommonAggrOp) {
			return visitor.visitCommonAggrOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupingClauseContext extends ParserRuleContext {
	public GROUP_BY(): TerminalNode { return this.getToken(dpm_xlParser.GROUP_BY, 0); }
	public groupElements(): GroupElementsContext[];
	public groupElements(i: number): GroupElementsContext;
	public groupElements(i?: number): GroupElementsContext | GroupElementsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupElementsContext);
		} else {
			return this.getRuleContext(i, GroupElementsContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dpm_xlParser.COMMA);
		} else {
			return this.getToken(dpm_xlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_groupingClause; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterGroupingClause) {
			listener.enterGroupingClause(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitGroupingClause) {
			listener.exitGroupingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitGroupingClause) {
			return visitor.visitGroupingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberContext extends ParserRuleContext {
	public LETTERS_NUMBERS(): TerminalNode[];
	public LETTERS_NUMBERS(i: number): TerminalNode;
	public LETTERS_NUMBERS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dpm_xlParser.LETTERS_NUMBERS);
		} else {
			return this.getToken(dpm_xlParser.LETTERS_NUMBERS, i);
		}
	}
	public DOUBLE_POINTS(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.DOUBLE_POINTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_member; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterMember) {
			listener.enterMember(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitMember) {
			listener.exitMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitMember) {
			return visitor.visitMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DimensionContext extends ParserRuleContext {
	public SQUARE_BRACKET_LEFT(): TerminalNode { return this.getToken(dpm_xlParser.SQUARE_BRACKET_LEFT, 0); }
	public member(): MemberContext {
		return this.getRuleContext(0, MemberContext);
	}
	public SQUARE_BRACKET_RIGHT(): TerminalNode { return this.getToken(dpm_xlParser.SQUARE_BRACKET_RIGHT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_dimension; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterDimension) {
			listener.enterDimension(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitDimension) {
			listener.exitDimension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitDimension) {
			return visitor.visitDimension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dim_setContext extends ParserRuleContext {
	public CURLY_BRACKET_LEFT(): TerminalNode { return this.getToken(dpm_xlParser.CURLY_BRACKET_LEFT, 0); }
	public dimension(): DimensionContext[];
	public dimension(i: number): DimensionContext;
	public dimension(i?: number): DimensionContext | DimensionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DimensionContext);
		} else {
			return this.getRuleContext(i, DimensionContext);
		}
	}
	public CURLY_BRACKET_RIGHT(): TerminalNode { return this.getToken(dpm_xlParser.CURLY_BRACKET_RIGHT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dpm_xlParser.COMMA);
		} else {
			return this.getToken(dpm_xlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_dim_set; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterDim_set) {
			listener.enterDim_set(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitDim_set) {
			listener.exitDim_set(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitDim_set) {
			return visitor.visitDim_set(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowElemContext extends ParserRuleContext {
	public ROW(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.ROW, 0); }
	public ROW_RANGE(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.ROW_RANGE, 0); }
	public ROW_ALL(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.ROW_ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_rowElem; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterRowElem) {
			listener.enterRowElem(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitRowElem) {
			listener.exitRowElem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitRowElem) {
			return visitor.visitRowElem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColElemContext extends ParserRuleContext {
	public COL(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.COL, 0); }
	public COL_RANGE(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.COL_RANGE, 0); }
	public COL_ALL(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.COL_ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_colElem; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterColElem) {
			listener.enterColElem(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitColElem) {
			listener.exitColElem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitColElem) {
			return visitor.visitColElem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SheetElemContext extends ParserRuleContext {
	public SHEET(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.SHEET, 0); }
	public SHEET_RANGE(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.SHEET_RANGE, 0); }
	public SHEET_ALL(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.SHEET_ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_sheetElem; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterSheetElem) {
			listener.enterSheetElem(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitSheetElem) {
			listener.exitSheetElem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitSheetElem) {
			return visitor.visitSheetElem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RowHandlerContext extends ParserRuleContext {
	public rowElem(): RowElemContext | undefined {
		return this.tryGetRuleContext(0, RowElemContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.LPAREN, 0); }
	public ROW(): TerminalNode[];
	public ROW(i: number): TerminalNode;
	public ROW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dpm_xlParser.ROW);
		} else {
			return this.getToken(dpm_xlParser.ROW, i);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dpm_xlParser.COMMA);
		} else {
			return this.getToken(dpm_xlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_rowHandler; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterRowHandler) {
			listener.enterRowHandler(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitRowHandler) {
			listener.exitRowHandler(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitRowHandler) {
			return visitor.visitRowHandler(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ColHandlerContext extends ParserRuleContext {
	public colElem(): ColElemContext | undefined {
		return this.tryGetRuleContext(0, ColElemContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.LPAREN, 0); }
	public COL(): TerminalNode[];
	public COL(i: number): TerminalNode;
	public COL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dpm_xlParser.COL);
		} else {
			return this.getToken(dpm_xlParser.COL, i);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dpm_xlParser.COMMA);
		} else {
			return this.getToken(dpm_xlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_colHandler; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterColHandler) {
			listener.enterColHandler(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitColHandler) {
			listener.exitColHandler(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitColHandler) {
			return visitor.visitColHandler(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SheetHandlerContext extends ParserRuleContext {
	public sheetElem(): SheetElemContext | undefined {
		return this.tryGetRuleContext(0, SheetElemContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.LPAREN, 0); }
	public SHEET(): TerminalNode[];
	public SHEET(i: number): TerminalNode;
	public SHEET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dpm_xlParser.SHEET);
		} else {
			return this.getToken(dpm_xlParser.SHEET, i);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dpm_xlParser.COMMA);
		} else {
			return this.getToken(dpm_xlParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_sheetHandler; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterSheetHandler) {
			listener.enterSheetHandler(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitSheetHandler) {
			listener.exitSheetHandler(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitSheetHandler) {
			return visitor.visitSheetHandler(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntervalContext extends ParserRuleContext {
	public INTERVAL(): TerminalNode { return this.getToken(dpm_xlParser.INTERVAL, 0); }
	public DOUBLE_POINTS(): TerminalNode { return this.getToken(dpm_xlParser.DOUBLE_POINTS, 0); }
	public BOOLEAN_LITERAL(): TerminalNode { return this.getToken(dpm_xlParser.BOOLEAN_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_interval; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterInterval) {
			listener.enterInterval(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitInterval) {
			listener.exitInterval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitInterval) {
			return visitor.visitInterval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(dpm_xlParser.DEFAULT, 0); }
	public DOUBLE_POINTS(): TerminalNode { return this.getToken(dpm_xlParser.DOUBLE_POINTS, 0); }
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_default; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterDefault) {
			listener.enterDefault(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitDefault) {
			listener.exitDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitDefault) {
			return visitor.visitDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_argument; }
	public copyFrom(ctx: ArgumentContext): void {
		super.copyFrom(ctx);
	}
}
export class RowArgContext extends ArgumentContext {
	public rowHandler(): RowHandlerContext {
		return this.getRuleContext(0, RowHandlerContext);
	}
	constructor(ctx: ArgumentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterRowArg) {
			listener.enterRowArg(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitRowArg) {
			listener.exitRowArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitRowArg) {
			return visitor.visitRowArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColArgContext extends ArgumentContext {
	public colHandler(): ColHandlerContext {
		return this.getRuleContext(0, ColHandlerContext);
	}
	constructor(ctx: ArgumentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterColArg) {
			listener.enterColArg(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitColArg) {
			listener.exitColArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitColArg) {
			return visitor.visitColArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SheetArgContext extends ArgumentContext {
	public sheetHandler(): SheetHandlerContext {
		return this.getRuleContext(0, SheetHandlerContext);
	}
	constructor(ctx: ArgumentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterSheetArg) {
			listener.enterSheetArg(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitSheetArg) {
			listener.exitSheetArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitSheetArg) {
			return visitor.visitSheetArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntervalArgContext extends ArgumentContext {
	public interval(): IntervalContext {
		return this.getRuleContext(0, IntervalContext);
	}
	constructor(ctx: ArgumentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterIntervalArg) {
			listener.enterIntervalArg(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitIntervalArg) {
			listener.exitIntervalArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitIntervalArg) {
			return visitor.visitIntervalArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DefaultArgContext extends ArgumentContext {
	public default(): DefaultContext {
		return this.getRuleContext(0, DefaultContext);
	}
	constructor(ctx: ArgumentContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterDefaultArg) {
			listener.enterDefaultArg(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitDefaultArg) {
			listener.exitDefaultArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitDefaultArg) {
			return visitor.visitDefaultArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CellRefContext extends ParserRuleContext {
	public _address!: CellAddressContext;
	public CURLY_BRACKET_LEFT(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.CURLY_BRACKET_LEFT, 0); }
	public CURLY_BRACKET_RIGHT(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.CURLY_BRACKET_RIGHT, 0); }
	public cellAddress(): CellAddressContext | undefined {
		return this.tryGetRuleContext(0, CellAddressContext);
	}
	public PRECONDITION_ELEM(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.PRECONDITION_ELEM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_cellRef; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterCellRef) {
			listener.enterCellRef(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitCellRef) {
			listener.exitCellRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitCellRef) {
			return visitor.visitCellRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CellAddressContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_cellAddress; }
	public copyFrom(ctx: CellAddressContext): void {
		super.copyFrom(ctx);
	}
}
export class TableRefContext extends CellAddressContext {
	public TABLE(): TerminalNode { return this.getToken(dpm_xlParser.TABLE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dpm_xlParser.COMMA);
		} else {
			return this.getToken(dpm_xlParser.COMMA, i);
		}
	}
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	constructor(ctx: CellAddressContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterTableRef) {
			listener.enterTableRef(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitTableRef) {
			listener.exitTableRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitTableRef) {
			return visitor.visitTableRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CompRefContext extends CellAddressContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dpm_xlParser.COMMA);
		} else {
			return this.getToken(dpm_xlParser.COMMA, i);
		}
	}
	constructor(ctx: CellAddressContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterCompRef) {
			listener.enterCompRef(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitCompRef) {
			listener.exitCompRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitCompRef) {
			return visitor.visitCompRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClauseOperatorsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_clauseOperators; }
	public copyFrom(ctx: ClauseOperatorsContext): void {
		super.copyFrom(ctx);
	}
}
export class WhereExprContext extends ClauseOperatorsContext {
	public WHERE(): TerminalNode { return this.getToken(dpm_xlParser.WHERE, 0); }
	public LETTERS_NUMBERS(): TerminalNode { return this.getToken(dpm_xlParser.LETTERS_NUMBERS, 0); }
	public EQ(): TerminalNode { return this.getToken(dpm_xlParser.EQ, 0); }
	public dimension(): DimensionContext {
		return this.getRuleContext(0, DimensionContext);
	}
	constructor(ctx: ClauseOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterWhereExpr) {
			listener.enterWhereExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitWhereExpr) {
			listener.exitWhereExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitWhereExpr) {
			return visitor.visitWhereExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GetExprContext extends ClauseOperatorsContext {
	public GET(): TerminalNode { return this.getToken(dpm_xlParser.GET, 0); }
	public LETTERS_NUMBERS(): TerminalNode { return this.getToken(dpm_xlParser.LETTERS_NUMBERS, 0); }
	constructor(ctx: ClauseOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterGetExpr) {
			listener.enterGetExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitGetExpr) {
			listener.exitGetExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitGetExpr) {
			return visitor.visitGetExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameExprContext extends ClauseOperatorsContext {
	public RENAME(): TerminalNode { return this.getToken(dpm_xlParser.RENAME, 0); }
	public LETTERS_NUMBERS(): TerminalNode[];
	public LETTERS_NUMBERS(i: number): TerminalNode;
	public LETTERS_NUMBERS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(dpm_xlParser.LETTERS_NUMBERS);
		} else {
			return this.getToken(dpm_xlParser.LETTERS_NUMBERS, i);
		}
	}
	public TO(): TerminalNode { return this.getToken(dpm_xlParser.TO, 0); }
	constructor(ctx: ClauseOperatorsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterRenameExpr) {
			listener.enterRenameExpr(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitRenameExpr) {
			listener.exitRenameExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitRenameExpr) {
			return visitor.visitRenameExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorsContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.EQ, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.NE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.LT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.GE, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.LE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_comparisonOperators; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterComparisonOperators) {
			listener.enterComparisonOperators(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitComparisonOperators) {
			listener.exitComparisonOperators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitComparisonOperators) {
			return visitor.visitComparisonOperators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.INTEGER_LITERAL, 0); }
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.DECIMAL_LITERAL, 0); }
	public PERCENT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.PERCENT_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.STRING_LITERAL, 0); }
	public BOOLEAN_LITERAL(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.BOOLEAN_LITERAL, 0); }
	public EMPTY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.EMPTY_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_literal; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GroupElementsContext extends ParserRuleContext {
	public ROW_HEADING(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.ROW_HEADING, 0); }
	public COL_HEADING(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.COL_HEADING, 0); }
	public SHEET_HEADING(): TerminalNode | undefined { return this.tryGetToken(dpm_xlParser.SHEET_HEADING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return dpm_xlParser.RULE_groupElements; }
	// @Override
	public enterRule(listener: dpm_xlListener): void {
		if (listener.enterGroupElements) {
			listener.enterGroupElements(this);
		}
	}
	// @Override
	public exitRule(listener: dpm_xlListener): void {
		if (listener.exitGroupElements) {
			listener.exitGroupElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: dpm_xlVisitor<Result>): Result {
		if (visitor.visitGroupElements) {
			return visitor.visitGroupElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


