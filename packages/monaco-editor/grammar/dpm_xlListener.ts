// Generated from lib/dpm_xl.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { RowArgContext } from "./dpm_xlParser";
import { ColArgContext } from "./dpm_xlParser";
import { SheetArgContext } from "./dpm_xlParser";
import { IntervalArgContext } from "./dpm_xlParser";
import { DefaultArgContext } from "./dpm_xlParser";
import { AggregateFunctionsContext } from "./dpm_xlParser";
import { NumericFunctionsContext } from "./dpm_xlParser";
import { ComparisonFunctionsContext } from "./dpm_xlParser";
import { FilterFunctionsContext } from "./dpm_xlParser";
import { ConditionalFunctionsContext } from "./dpm_xlParser";
import { TimeFunctionsContext } from "./dpm_xlParser";
import { StringFunctionsContext } from "./dpm_xlParser";
import { MatchExprContext } from "./dpm_xlParser";
import { IsnullExprContext } from "./dpm_xlParser";
import { ExistsExprContext } from "./dpm_xlParser";
import { ParExprContext } from "./dpm_xlParser";
import { FuncExprContext } from "./dpm_xlParser";
import { ClauseExprContext } from "./dpm_xlParser";
import { UnaryExprContext } from "./dpm_xlParser";
import { NumericExprContext } from "./dpm_xlParser";
import { ConcatExprContext } from "./dpm_xlParser";
import { CompExprContext } from "./dpm_xlParser";
import { InExprContext } from "./dpm_xlParser";
import { BoolExprContext } from "./dpm_xlParser";
import { CondExprContext } from "./dpm_xlParser";
import { DimExprContext } from "./dpm_xlParser";
import { VarRefExprContext } from "./dpm_xlParser";
import { LiteralExprContext } from "./dpm_xlParser";
import { CellRefExprContext } from "./dpm_xlParser";
import { UnaryStringFunctionContext } from "./dpm_xlParser";
import { TimeShiftFunctionContext } from "./dpm_xlParser";
import { ExprWithoutPartialSelectionContext } from "./dpm_xlParser";
import { ExprWithSelectionContext } from "./dpm_xlParser";
import { NvlFunctionContext } from "./dpm_xlParser";
import { CommonAggrOpContext } from "./dpm_xlParser";
import { WhereExprContext } from "./dpm_xlParser";
import { GetExprContext } from "./dpm_xlParser";
import { RenameExprContext } from "./dpm_xlParser";
import { TableRefContext } from "./dpm_xlParser";
import { CompRefContext } from "./dpm_xlParser";
import { UnaryNumericFunctionsContext } from "./dpm_xlParser";
import { BinaryNumericFunctionsContext } from "./dpm_xlParser";
import { ComplexNumericFunctionsContext } from "./dpm_xlParser";
import { StartContext } from "./dpm_xlParser";
import { ExpressionContext } from "./dpm_xlParser";
import { ExprContext } from "./dpm_xlParser";
import { FunctionsContext } from "./dpm_xlParser";
import { NumericOperatorsContext } from "./dpm_xlParser";
import { ComparisonFunctionOperatorsContext } from "./dpm_xlParser";
import { FilterOperatorsContext } from "./dpm_xlParser";
import { TimeOperatorsContext } from "./dpm_xlParser";
import { ConditionalOperatorsContext } from "./dpm_xlParser";
import { StringOperatorsContext } from "./dpm_xlParser";
import { AggregateOperatorsContext } from "./dpm_xlParser";
import { GroupingClauseContext } from "./dpm_xlParser";
import { MemberContext } from "./dpm_xlParser";
import { DimensionContext } from "./dpm_xlParser";
import { Dim_setContext } from "./dpm_xlParser";
import { RowElemContext } from "./dpm_xlParser";
import { ColElemContext } from "./dpm_xlParser";
import { SheetElemContext } from "./dpm_xlParser";
import { RowHandlerContext } from "./dpm_xlParser";
import { ColHandlerContext } from "./dpm_xlParser";
import { SheetHandlerContext } from "./dpm_xlParser";
import { IntervalContext } from "./dpm_xlParser";
import { DefaultContext } from "./dpm_xlParser";
import { ArgumentContext } from "./dpm_xlParser";
import { CellRefContext } from "./dpm_xlParser";
import { CellAddressContext } from "./dpm_xlParser";
import { ClauseOperatorsContext } from "./dpm_xlParser";
import { ComparisonOperatorsContext } from "./dpm_xlParser";
import { LiteralContext } from "./dpm_xlParser";
import { GroupElementsContext } from "./dpm_xlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `dpm_xlParser`.
 */
export interface dpm_xlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `rowArg`
	 * labeled alternative in `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 */
	enterRowArg?: (ctx: RowArgContext) => void;
	/**
	 * Exit a parse tree produced by the `rowArg`
	 * labeled alternative in `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 */
	exitRowArg?: (ctx: RowArgContext) => void;

	/**
	 * Enter a parse tree produced by the `colArg`
	 * labeled alternative in `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 */
	enterColArg?: (ctx: ColArgContext) => void;
	/**
	 * Exit a parse tree produced by the `colArg`
	 * labeled alternative in `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 */
	exitColArg?: (ctx: ColArgContext) => void;

	/**
	 * Enter a parse tree produced by the `sheetArg`
	 * labeled alternative in `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 */
	enterSheetArg?: (ctx: SheetArgContext) => void;
	/**
	 * Exit a parse tree produced by the `sheetArg`
	 * labeled alternative in `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 */
	exitSheetArg?: (ctx: SheetArgContext) => void;

	/**
	 * Enter a parse tree produced by the `intervalArg`
	 * labeled alternative in `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 */
	enterIntervalArg?: (ctx: IntervalArgContext) => void;
	/**
	 * Exit a parse tree produced by the `intervalArg`
	 * labeled alternative in `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 */
	exitIntervalArg?: (ctx: IntervalArgContext) => void;

	/**
	 * Enter a parse tree produced by the `defaultArg`
	 * labeled alternative in `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 */
	enterDefaultArg?: (ctx: DefaultArgContext) => void;
	/**
	 * Exit a parse tree produced by the `defaultArg`
	 * labeled alternative in `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 */
	exitDefaultArg?: (ctx: DefaultArgContext) => void;

	/**
	 * Enter a parse tree produced by the `aggregateFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterAggregateFunctions?: (ctx: AggregateFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `aggregateFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitAggregateFunctions?: (ctx: AggregateFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `numericFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterNumericFunctions?: (ctx: NumericFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `numericFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitNumericFunctions?: (ctx: NumericFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `comparisonFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterComparisonFunctions?: (ctx: ComparisonFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `comparisonFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitComparisonFunctions?: (ctx: ComparisonFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `filterFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterFilterFunctions?: (ctx: FilterFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `filterFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitFilterFunctions?: (ctx: FilterFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `conditionalFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterConditionalFunctions?: (ctx: ConditionalFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `conditionalFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitConditionalFunctions?: (ctx: ConditionalFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `timeFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterTimeFunctions?: (ctx: TimeFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `timeFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitTimeFunctions?: (ctx: TimeFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `stringFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterStringFunctions?: (ctx: StringFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `stringFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitStringFunctions?: (ctx: StringFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `matchExpr`
	 * labeled alternative in `dpm_xlParser.comparisonFunctionOperators`.
	 * @param ctx the parse tree
	 */
	enterMatchExpr?: (ctx: MatchExprContext) => void;
	/**
	 * Exit a parse tree produced by the `matchExpr`
	 * labeled alternative in `dpm_xlParser.comparisonFunctionOperators`.
	 * @param ctx the parse tree
	 */
	exitMatchExpr?: (ctx: MatchExprContext) => void;

	/**
	 * Enter a parse tree produced by the `isnullExpr`
	 * labeled alternative in `dpm_xlParser.comparisonFunctionOperators`.
	 * @param ctx the parse tree
	 */
	enterIsnullExpr?: (ctx: IsnullExprContext) => void;
	/**
	 * Exit a parse tree produced by the `isnullExpr`
	 * labeled alternative in `dpm_xlParser.comparisonFunctionOperators`.
	 * @param ctx the parse tree
	 */
	exitIsnullExpr?: (ctx: IsnullExprContext) => void;

	/**
	 * Enter a parse tree produced by the `existsExpr`
	 * labeled alternative in `dpm_xlParser.comparisonFunctionOperators`.
	 * @param ctx the parse tree
	 */
	enterExistsExpr?: (ctx: ExistsExprContext) => void;
	/**
	 * Exit a parse tree produced by the `existsExpr`
	 * labeled alternative in `dpm_xlParser.comparisonFunctionOperators`.
	 * @param ctx the parse tree
	 */
	exitExistsExpr?: (ctx: ExistsExprContext) => void;

	/**
	 * Enter a parse tree produced by the `parExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParExpr?: (ctx: ParExprContext) => void;
	/**
	 * Exit a parse tree produced by the `parExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParExpr?: (ctx: ParExprContext) => void;

	/**
	 * Enter a parse tree produced by the `funcExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFuncExpr?: (ctx: FuncExprContext) => void;
	/**
	 * Exit a parse tree produced by the `funcExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFuncExpr?: (ctx: FuncExprContext) => void;

	/**
	 * Enter a parse tree produced by the `clauseExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterClauseExpr?: (ctx: ClauseExprContext) => void;
	/**
	 * Exit a parse tree produced by the `clauseExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitClauseExpr?: (ctx: ClauseExprContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpr?: (ctx: UnaryExprContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpr?: (ctx: UnaryExprContext) => void;

	/**
	 * Enter a parse tree produced by the `numericExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNumericExpr?: (ctx: NumericExprContext) => void;
	/**
	 * Exit a parse tree produced by the `numericExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNumericExpr?: (ctx: NumericExprContext) => void;

	/**
	 * Enter a parse tree produced by the `concatExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterConcatExpr?: (ctx: ConcatExprContext) => void;
	/**
	 * Exit a parse tree produced by the `concatExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitConcatExpr?: (ctx: ConcatExprContext) => void;

	/**
	 * Enter a parse tree produced by the `compExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCompExpr?: (ctx: CompExprContext) => void;
	/**
	 * Exit a parse tree produced by the `compExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCompExpr?: (ctx: CompExprContext) => void;

	/**
	 * Enter a parse tree produced by the `inExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterInExpr?: (ctx: InExprContext) => void;
	/**
	 * Exit a parse tree produced by the `inExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitInExpr?: (ctx: InExprContext) => void;

	/**
	 * Enter a parse tree produced by the `boolExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBoolExpr?: (ctx: BoolExprContext) => void;
	/**
	 * Exit a parse tree produced by the `boolExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBoolExpr?: (ctx: BoolExprContext) => void;

	/**
	 * Enter a parse tree produced by the `condExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCondExpr?: (ctx: CondExprContext) => void;
	/**
	 * Exit a parse tree produced by the `condExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCondExpr?: (ctx: CondExprContext) => void;

	/**
	 * Enter a parse tree produced by the `dimExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterDimExpr?: (ctx: DimExprContext) => void;
	/**
	 * Exit a parse tree produced by the `dimExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitDimExpr?: (ctx: DimExprContext) => void;

	/**
	 * Enter a parse tree produced by the `varRefExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterVarRefExpr?: (ctx: VarRefExprContext) => void;
	/**
	 * Exit a parse tree produced by the `varRefExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitVarRefExpr?: (ctx: VarRefExprContext) => void;

	/**
	 * Enter a parse tree produced by the `literalExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpr?: (ctx: LiteralExprContext) => void;
	/**
	 * Exit a parse tree produced by the `literalExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpr?: (ctx: LiteralExprContext) => void;

	/**
	 * Enter a parse tree produced by the `cellRefExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterCellRefExpr?: (ctx: CellRefExprContext) => void;
	/**
	 * Exit a parse tree produced by the `cellRefExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitCellRefExpr?: (ctx: CellRefExprContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryStringFunction`
	 * labeled alternative in `dpm_xlParser.stringOperators`.
	 * @param ctx the parse tree
	 */
	enterUnaryStringFunction?: (ctx: UnaryStringFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryStringFunction`
	 * labeled alternative in `dpm_xlParser.stringOperators`.
	 * @param ctx the parse tree
	 */
	exitUnaryStringFunction?: (ctx: UnaryStringFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `timeShiftFunction`
	 * labeled alternative in `dpm_xlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	enterTimeShiftFunction?: (ctx: TimeShiftFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `timeShiftFunction`
	 * labeled alternative in `dpm_xlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	exitTimeShiftFunction?: (ctx: TimeShiftFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `exprWithoutPartialSelection`
	 * labeled alternative in `dpm_xlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExprWithoutPartialSelection?: (ctx: ExprWithoutPartialSelectionContext) => void;
	/**
	 * Exit a parse tree produced by the `exprWithoutPartialSelection`
	 * labeled alternative in `dpm_xlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExprWithoutPartialSelection?: (ctx: ExprWithoutPartialSelectionContext) => void;

	/**
	 * Enter a parse tree produced by the `exprWithSelection`
	 * labeled alternative in `dpm_xlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExprWithSelection?: (ctx: ExprWithSelectionContext) => void;
	/**
	 * Exit a parse tree produced by the `exprWithSelection`
	 * labeled alternative in `dpm_xlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExprWithSelection?: (ctx: ExprWithSelectionContext) => void;

	/**
	 * Enter a parse tree produced by the `nvlFunction`
	 * labeled alternative in `dpm_xlParser.conditionalOperators`.
	 * @param ctx the parse tree
	 */
	enterNvlFunction?: (ctx: NvlFunctionContext) => void;
	/**
	 * Exit a parse tree produced by the `nvlFunction`
	 * labeled alternative in `dpm_xlParser.conditionalOperators`.
	 * @param ctx the parse tree
	 */
	exitNvlFunction?: (ctx: NvlFunctionContext) => void;

	/**
	 * Enter a parse tree produced by the `commonAggrOp`
	 * labeled alternative in `dpm_xlParser.aggregateOperators`.
	 * @param ctx the parse tree
	 */
	enterCommonAggrOp?: (ctx: CommonAggrOpContext) => void;
	/**
	 * Exit a parse tree produced by the `commonAggrOp`
	 * labeled alternative in `dpm_xlParser.aggregateOperators`.
	 * @param ctx the parse tree
	 */
	exitCommonAggrOp?: (ctx: CommonAggrOpContext) => void;

	/**
	 * Enter a parse tree produced by the `whereExpr`
	 * labeled alternative in `dpm_xlParser.clauseOperators`.
	 * @param ctx the parse tree
	 */
	enterWhereExpr?: (ctx: WhereExprContext) => void;
	/**
	 * Exit a parse tree produced by the `whereExpr`
	 * labeled alternative in `dpm_xlParser.clauseOperators`.
	 * @param ctx the parse tree
	 */
	exitWhereExpr?: (ctx: WhereExprContext) => void;

	/**
	 * Enter a parse tree produced by the `getExpr`
	 * labeled alternative in `dpm_xlParser.clauseOperators`.
	 * @param ctx the parse tree
	 */
	enterGetExpr?: (ctx: GetExprContext) => void;
	/**
	 * Exit a parse tree produced by the `getExpr`
	 * labeled alternative in `dpm_xlParser.clauseOperators`.
	 * @param ctx the parse tree
	 */
	exitGetExpr?: (ctx: GetExprContext) => void;

	/**
	 * Enter a parse tree produced by the `renameExpr`
	 * labeled alternative in `dpm_xlParser.clauseOperators`.
	 * @param ctx the parse tree
	 */
	enterRenameExpr?: (ctx: RenameExprContext) => void;
	/**
	 * Exit a parse tree produced by the `renameExpr`
	 * labeled alternative in `dpm_xlParser.clauseOperators`.
	 * @param ctx the parse tree
	 */
	exitRenameExpr?: (ctx: RenameExprContext) => void;

	/**
	 * Enter a parse tree produced by the `tableRef`
	 * labeled alternative in `dpm_xlParser.cellAddress`.
	 * @param ctx the parse tree
	 */
	enterTableRef?: (ctx: TableRefContext) => void;
	/**
	 * Exit a parse tree produced by the `tableRef`
	 * labeled alternative in `dpm_xlParser.cellAddress`.
	 * @param ctx the parse tree
	 */
	exitTableRef?: (ctx: TableRefContext) => void;

	/**
	 * Enter a parse tree produced by the `compRef`
	 * labeled alternative in `dpm_xlParser.cellAddress`.
	 * @param ctx the parse tree
	 */
	enterCompRef?: (ctx: CompRefContext) => void;
	/**
	 * Exit a parse tree produced by the `compRef`
	 * labeled alternative in `dpm_xlParser.cellAddress`.
	 * @param ctx the parse tree
	 */
	exitCompRef?: (ctx: CompRefContext) => void;

	/**
	 * Enter a parse tree produced by the `unaryNumericFunctions`
	 * labeled alternative in `dpm_xlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	enterUnaryNumericFunctions?: (ctx: UnaryNumericFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryNumericFunctions`
	 * labeled alternative in `dpm_xlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	exitUnaryNumericFunctions?: (ctx: UnaryNumericFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `binaryNumericFunctions`
	 * labeled alternative in `dpm_xlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	enterBinaryNumericFunctions?: (ctx: BinaryNumericFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryNumericFunctions`
	 * labeled alternative in `dpm_xlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	exitBinaryNumericFunctions?: (ctx: BinaryNumericFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by the `complexNumericFunctions`
	 * labeled alternative in `dpm_xlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	enterComplexNumericFunctions?: (ctx: ComplexNumericFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by the `complexNumericFunctions`
	 * labeled alternative in `dpm_xlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	exitComplexNumericFunctions?: (ctx: ComplexNumericFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	enterFunctions?: (ctx: FunctionsContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 */
	exitFunctions?: (ctx: FunctionsContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	enterNumericOperators?: (ctx: NumericOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.numericOperators`.
	 * @param ctx the parse tree
	 */
	exitNumericOperators?: (ctx: NumericOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.comparisonFunctionOperators`.
	 * @param ctx the parse tree
	 */
	enterComparisonFunctionOperators?: (ctx: ComparisonFunctionOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.comparisonFunctionOperators`.
	 * @param ctx the parse tree
	 */
	exitComparisonFunctionOperators?: (ctx: ComparisonFunctionOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.filterOperators`.
	 * @param ctx the parse tree
	 */
	enterFilterOperators?: (ctx: FilterOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.filterOperators`.
	 * @param ctx the parse tree
	 */
	exitFilterOperators?: (ctx: FilterOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	enterTimeOperators?: (ctx: TimeOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.timeOperators`.
	 * @param ctx the parse tree
	 */
	exitTimeOperators?: (ctx: TimeOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.conditionalOperators`.
	 * @param ctx the parse tree
	 */
	enterConditionalOperators?: (ctx: ConditionalOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.conditionalOperators`.
	 * @param ctx the parse tree
	 */
	exitConditionalOperators?: (ctx: ConditionalOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.stringOperators`.
	 * @param ctx the parse tree
	 */
	enterStringOperators?: (ctx: StringOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.stringOperators`.
	 * @param ctx the parse tree
	 */
	exitStringOperators?: (ctx: StringOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.aggregateOperators`.
	 * @param ctx the parse tree
	 */
	enterAggregateOperators?: (ctx: AggregateOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.aggregateOperators`.
	 * @param ctx the parse tree
	 */
	exitAggregateOperators?: (ctx: AggregateOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.groupingClause`.
	 * @param ctx the parse tree
	 */
	enterGroupingClause?: (ctx: GroupingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.groupingClause`.
	 * @param ctx the parse tree
	 */
	exitGroupingClause?: (ctx: GroupingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.member`.
	 * @param ctx the parse tree
	 */
	enterMember?: (ctx: MemberContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.member`.
	 * @param ctx the parse tree
	 */
	exitMember?: (ctx: MemberContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.dimension`.
	 * @param ctx the parse tree
	 */
	enterDimension?: (ctx: DimensionContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.dimension`.
	 * @param ctx the parse tree
	 */
	exitDimension?: (ctx: DimensionContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.dim_set`.
	 * @param ctx the parse tree
	 */
	enterDim_set?: (ctx: Dim_setContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.dim_set`.
	 * @param ctx the parse tree
	 */
	exitDim_set?: (ctx: Dim_setContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.rowElem`.
	 * @param ctx the parse tree
	 */
	enterRowElem?: (ctx: RowElemContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.rowElem`.
	 * @param ctx the parse tree
	 */
	exitRowElem?: (ctx: RowElemContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.colElem`.
	 * @param ctx the parse tree
	 */
	enterColElem?: (ctx: ColElemContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.colElem`.
	 * @param ctx the parse tree
	 */
	exitColElem?: (ctx: ColElemContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.sheetElem`.
	 * @param ctx the parse tree
	 */
	enterSheetElem?: (ctx: SheetElemContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.sheetElem`.
	 * @param ctx the parse tree
	 */
	exitSheetElem?: (ctx: SheetElemContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.rowHandler`.
	 * @param ctx the parse tree
	 */
	enterRowHandler?: (ctx: RowHandlerContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.rowHandler`.
	 * @param ctx the parse tree
	 */
	exitRowHandler?: (ctx: RowHandlerContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.colHandler`.
	 * @param ctx the parse tree
	 */
	enterColHandler?: (ctx: ColHandlerContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.colHandler`.
	 * @param ctx the parse tree
	 */
	exitColHandler?: (ctx: ColHandlerContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.sheetHandler`.
	 * @param ctx the parse tree
	 */
	enterSheetHandler?: (ctx: SheetHandlerContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.sheetHandler`.
	 * @param ctx the parse tree
	 */
	exitSheetHandler?: (ctx: SheetHandlerContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.interval`.
	 * @param ctx the parse tree
	 */
	enterInterval?: (ctx: IntervalContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.interval`.
	 * @param ctx the parse tree
	 */
	exitInterval?: (ctx: IntervalContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.default`.
	 * @param ctx the parse tree
	 */
	enterDefault?: (ctx: DefaultContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.default`.
	 * @param ctx the parse tree
	 */
	exitDefault?: (ctx: DefaultContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.cellRef`.
	 * @param ctx the parse tree
	 */
	enterCellRef?: (ctx: CellRefContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.cellRef`.
	 * @param ctx the parse tree
	 */
	exitCellRef?: (ctx: CellRefContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.cellAddress`.
	 * @param ctx the parse tree
	 */
	enterCellAddress?: (ctx: CellAddressContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.cellAddress`.
	 * @param ctx the parse tree
	 */
	exitCellAddress?: (ctx: CellAddressContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.clauseOperators`.
	 * @param ctx the parse tree
	 */
	enterClauseOperators?: (ctx: ClauseOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.clauseOperators`.
	 * @param ctx the parse tree
	 */
	exitClauseOperators?: (ctx: ClauseOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperators?: (ctx: ComparisonOperatorsContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperators?: (ctx: ComparisonOperatorsContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `dpm_xlParser.groupElements`.
	 * @param ctx the parse tree
	 */
	enterGroupElements?: (ctx: GroupElementsContext) => void;
	/**
	 * Exit a parse tree produced by `dpm_xlParser.groupElements`.
	 * @param ctx the parse tree
	 */
	exitGroupElements?: (ctx: GroupElementsContext) => void;
}

