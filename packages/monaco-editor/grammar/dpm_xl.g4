grammar dpm_xl;
import dpm_xl_tokens;
// Added rule for expr management and EOF
start:
   (expression EOL)* EOF
    ;
expression:
    expr                                                      #exprWithoutPartialSelection
    | WITH cellRef DOUBLE_POINTS expr                         #exprWithSelection
//    | cellRef ASSIGN expr                                     #assignExpr
;
expr:
    LPAREN expr RPAREN                                                                                  #parExpr
    | functions                                                                                         #funcExpr
    | expr SQUARE_BRACKET_LEFT clauseOperators SQUARE_BRACKET_RIGHT                                     #clauseExpr
    | op=(PLUS|MINUS|NOT) expr                                                                          #unaryExpr
    | left=expr op=(MULT|DIV) right=expr                                                                #numericExpr
    | left=expr op=(PLUS|MINUS) right=expr                                                              #numericExpr
    | left=expr op=CONCAT right=expr                                                                    #concatExpr
    | left=expr op=comparisonOperators right=expr                                                       #compExpr
    | left=expr op=IN dim_set                                                                           #inExpr
//    | IF conditionalExpr=parExpression THEN thenExpr=parExpression (ELSE elseExpr=parExpression)?       #condExpr
    | left=expr op=AND right=expr                                                                       #boolExpr
    | left=expr op=(OR|XOR) right=expr                                                                  #boolExpr
    | IF conditionalExpr=expr THEN thenExpr=expr ELSE elseExpr=expr                                     #condExpr
    | IF conditionalExpr=expr THEN thenExpr=expr                                                        #condExpr
    | dimension                                                                                         #dimExpr
    | VAR_REF                                                                                           #varRefExpr
    | literal                                                                                           #literalExpr
    | cellRef                                                                                           #cellRefExpr
;
functions:
    aggregateOperators                                              #aggregateFunctions
    | numericOperators                                              #numericFunctions
    | comparisonFunctionOperators                                   #comparisonFunctions
    | filterOperators                                               #filterFunctions
    | conditionalOperators                                          #conditionalFunctions
    | timeOperators                                                 #timeFunctions
    | stringOperators                                               #stringFunctions
;
numericOperators:
    op=(ABS|EXP|LN|SQRT) LPAREN expr RPAREN                                 #unaryNumericFunctions
    | op=(POWER|LOG) LPAREN left=expr COMMA right=expr RPAREN               #binaryNumericFunctions
    | op=(MAX|MIN) LPAREN expr (COMMA expr)+ RPAREN                         #complexNumericFunctions
    ;
comparisonFunctionOperators:
    MATCH LPAREN expr COMMA literal RPAREN                  #matchExpr
    | ISNULL LPAREN expr RPAREN                             #isnullExpr
    | EXISTS LPAREN cellRef RPAREN                          #existsExpr
;
filterOperators:
    FILTER LPAREN expr COMMA expr RPAREN
    ;
timeOperators:
    TIME_SHIFT LPAREN cellRef COMMA LETTERS_NUMBERS COMMA TIME_PERIOD COMMA INTEGER_LITERAL RPAREN  #timeShiftFunction
    ;
conditionalOperators:
    NVL LPAREN expr COMMA expr RPAREN           #nvlFunction
    ;
stringOperators:
    LEN LPAREN expr RPAREN          #unaryStringFunction
    ;
aggregateOperators:
    op=(MAX_AGGR
        |MIN_AGGR
        |SUM
        |COUNT
        |AVG
        |MEDIAN) LPAREN expr (groupingClause)? RPAREN        #commonAggrOp
    ;
groupingClause:
    GROUP_BY groupElements (COMMA groupElements)*
;
// Dimension management and members
member: LETTERS_NUMBERS (DOUBLE_POINTS LETTERS_NUMBERS)?;
dimension: SQUARE_BRACKET_LEFT member SQUARE_BRACKET_RIGHT;
dim_set: CURLY_BRACKET_LEFT dimension (COMMA dimension)* CURLY_BRACKET_RIGHT;
// Cell Address and table management
rowElem:
    ROW
    | ROW_RANGE
    | ROW_ALL
;
colElem:
    COL
    | COL_RANGE
    | COL_ALL
;
sheetElem:
    SHEET
    | SHEET_RANGE
    | SHEET_ALL
;
rowHandler:
    rowElem
    | LPAREN ROW (COMMA ROW)* RPAREN;
colHandler:
    colElem
    | LPAREN COL (COMMA COL)* RPAREN;
sheetHandler:
    sheetElem
    | LPAREN SHEET (COMMA SHEET)* RPAREN
;
interval:
    INTERVAL DOUBLE_POINTS BOOLEAN_LITERAL
;
default:
    DEFAULT DOUBLE_POINTS literal
;
argument:
    rowHandler                          #rowArg
    | colHandler                        #colArg
    | sheetHandler                      #sheetArg
    | interval                          #intervalArg
    | default                           #defaultArg
;
cellRef:
    CURLY_BRACKET_LEFT address=cellAddress CURLY_BRACKET_RIGHT
    | PRECONDITION_ELEM
    ;
cellAddress:
    TABLE (COMMA argument)*               #tableRef
    | argument (COMMA argument)*          #compRef;
clauseOperators:
    WHERE LETTERS_NUMBERS EQ dimension                          #whereExpr
    | GET LETTERS_NUMBERS                                       #getExpr
    | RENAME LETTERS_NUMBERS TO LETTERS_NUMBERS                 #renameExpr
    ;
// Always on grammar, not on tokens. Order is important (top ones should be the enclosing ones)
comparisonOperators:
    EQ
    |NE
    |GT
    |LT
    |GE
    |LE;
literal:
    INTEGER_LITERAL
    | DECIMAL_LITERAL
    | PERCENT_LITERAL
    | STRING_LITERAL
    | BOOLEAN_LITERAL
    | EMPTY_LITERAL
;
groupElements:
    ROW_HEADING
    |COL_HEADING
    |SHEET_HEADING
;