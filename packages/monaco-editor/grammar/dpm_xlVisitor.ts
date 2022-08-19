// Generated from lib/dpm_xl.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `dpm_xlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface dpm_xlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `rowArg`
	 * labeled alternative in `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowArg?: (ctx: RowArgContext) => Result;

	/**
	 * Visit a parse tree produced by the `colArg`
	 * labeled alternative in `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColArg?: (ctx: ColArgContext) => Result;

	/**
	 * Visit a parse tree produced by the `sheetArg`
	 * labeled alternative in `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSheetArg?: (ctx: SheetArgContext) => Result;

	/**
	 * Visit a parse tree produced by the `intervalArg`
	 * labeled alternative in `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalArg?: (ctx: IntervalArgContext) => Result;

	/**
	 * Visit a parse tree produced by the `defaultArg`
	 * labeled alternative in `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultArg?: (ctx: DefaultArgContext) => Result;

	/**
	 * Visit a parse tree produced by the `aggregateFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregateFunctions?: (ctx: AggregateFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `numericFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericFunctions?: (ctx: NumericFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparisonFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonFunctions?: (ctx: ComparisonFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `filterFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilterFunctions?: (ctx: FilterFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `conditionalFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalFunctions?: (ctx: ConditionalFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeFunctions?: (ctx: TimeFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringFunctions`
	 * labeled alternative in `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringFunctions?: (ctx: StringFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `matchExpr`
	 * labeled alternative in `dpm_xlParser.comparisonFunctionOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchExpr?: (ctx: MatchExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `isnullExpr`
	 * labeled alternative in `dpm_xlParser.comparisonFunctionOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsnullExpr?: (ctx: IsnullExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `existsExpr`
	 * labeled alternative in `dpm_xlParser.comparisonFunctionOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistsExpr?: (ctx: ExistsExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `parExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParExpr?: (ctx: ParExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `funcExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncExpr?: (ctx: FuncExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `clauseExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClauseExpr?: (ctx: ClauseExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpr?: (ctx: UnaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `numericExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericExpr?: (ctx: NumericExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `concatExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConcatExpr?: (ctx: ConcatExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `compExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompExpr?: (ctx: CompExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `inExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInExpr?: (ctx: InExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolExpr?: (ctx: BoolExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `condExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondExpr?: (ctx: CondExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `dimExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimExpr?: (ctx: DimExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `varRefExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarRefExpr?: (ctx: VarRefExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `literalExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpr?: (ctx: LiteralExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `cellRefExpr`
	 * labeled alternative in `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCellRefExpr?: (ctx: CellRefExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryStringFunction`
	 * labeled alternative in `dpm_xlParser.stringOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryStringFunction?: (ctx: UnaryStringFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `timeShiftFunction`
	 * labeled alternative in `dpm_xlParser.timeOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeShiftFunction?: (ctx: TimeShiftFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `exprWithoutPartialSelection`
	 * labeled alternative in `dpm_xlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprWithoutPartialSelection?: (ctx: ExprWithoutPartialSelectionContext) => Result;

	/**
	 * Visit a parse tree produced by the `exprWithSelection`
	 * labeled alternative in `dpm_xlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprWithSelection?: (ctx: ExprWithSelectionContext) => Result;

	/**
	 * Visit a parse tree produced by the `nvlFunction`
	 * labeled alternative in `dpm_xlParser.conditionalOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNvlFunction?: (ctx: NvlFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `commonAggrOp`
	 * labeled alternative in `dpm_xlParser.aggregateOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommonAggrOp?: (ctx: CommonAggrOpContext) => Result;

	/**
	 * Visit a parse tree produced by the `whereExpr`
	 * labeled alternative in `dpm_xlParser.clauseOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereExpr?: (ctx: WhereExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `getExpr`
	 * labeled alternative in `dpm_xlParser.clauseOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetExpr?: (ctx: GetExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameExpr`
	 * labeled alternative in `dpm_xlParser.clauseOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameExpr?: (ctx: RenameExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `tableRef`
	 * labeled alternative in `dpm_xlParser.cellAddress`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRef?: (ctx: TableRefContext) => Result;

	/**
	 * Visit a parse tree produced by the `compRef`
	 * labeled alternative in `dpm_xlParser.cellAddress`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompRef?: (ctx: CompRefContext) => Result;

	/**
	 * Visit a parse tree produced by the `unaryNumericFunctions`
	 * labeled alternative in `dpm_xlParser.numericOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryNumericFunctions?: (ctx: UnaryNumericFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryNumericFunctions`
	 * labeled alternative in `dpm_xlParser.numericOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryNumericFunctions?: (ctx: BinaryNumericFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by the `complexNumericFunctions`
	 * labeled alternative in `dpm_xlParser.numericOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexNumericFunctions?: (ctx: ComplexNumericFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.functions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctions?: (ctx: FunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.numericOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericOperators?: (ctx: NumericOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.comparisonFunctionOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonFunctionOperators?: (ctx: ComparisonFunctionOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.filterOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilterOperators?: (ctx: FilterOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.timeOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeOperators?: (ctx: TimeOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.conditionalOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalOperators?: (ctx: ConditionalOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.stringOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringOperators?: (ctx: StringOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.aggregateOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregateOperators?: (ctx: AggregateOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.groupingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingClause?: (ctx: GroupingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember?: (ctx: MemberContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.dimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimension?: (ctx: DimensionContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.dim_set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDim_set?: (ctx: Dim_setContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.rowElem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowElem?: (ctx: RowElemContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.colElem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColElem?: (ctx: ColElemContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.sheetElem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSheetElem?: (ctx: SheetElemContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.rowHandler`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowHandler?: (ctx: RowHandlerContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.colHandler`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColHandler?: (ctx: ColHandlerContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.sheetHandler`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSheetHandler?: (ctx: SheetHandlerContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterval?: (ctx: IntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefault?: (ctx: DefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.cellRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCellRef?: (ctx: CellRefContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.cellAddress`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCellAddress?: (ctx: CellAddressContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.clauseOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClauseOperators?: (ctx: ClauseOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.comparisonOperators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperators?: (ctx: ComparisonOperatorsContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `dpm_xlParser.groupElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupElements?: (ctx: GroupElementsContext) => Result;
}

