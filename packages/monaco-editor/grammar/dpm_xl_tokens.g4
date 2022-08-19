lexer grammar dpm_xl_tokens;
// ------------ Individual tokens -----------
// Boolean
BOOLEAN_LITERAL:
    'true'
    | 'false'
    ;
AND:                    'and';
OR:                     'or';
XOR:                    'xor';
NOT:                    'not';
// Assign
ASSIGN:                 ':=';
// Comparison
EQ:                     '=';
NE:                     '!=';
LT:                     '<';
LE:                     '<=';
GT:                     '>';
GE:                     '>=';
// Matches
MATCH:                'match';
// With
WITH:                   'with';
// Arithmetic
PLUS:                   '+';
MINUS:                  '-';
MULT:                   '*';
DIV:                    '/';
// Aggregate
MAX_AGGR:                       'max_aggr';
MIN_AGGR:                       'min_aggr';
SUM:                            'sum';
COUNT:                          'count';
AVG:                            'avg';
MEDIAN:                         'median';
// Grouping
GROUP_BY:               'group by';
// Unary
ABS:                    'abs';
ISNULL:                 'isnull';
EXISTS:                 'exists';
EXP:                    'exp';
LN:                     'ln';
SQRT:                   'sqrt';
// Binary
POWER:                          'power';
LOG:                            'log';
MAX:                            'max';
MIN:                            'min';
// Belonging
IN:                     'in';
// Punctuation elements
COMMA:                  ',';
DOUBLE_POINTS:          ':';
// Parenthesis
LPAREN:                 '(';
RPAREN:                 ')';
// Brackets
CURLY_BRACKET_LEFT:     '{';
CURLY_BRACKET_RIGHT:    '}';
SQUARE_BRACKET_LEFT:    '[';
SQUARE_BRACKET_RIGHT:   ']';
// Arguments
INTERVAL: 'interval';
DEFAULT: 'default';
// Conditional
IF:                     'if';
THEN:                   'then';
ELSE:                   'else';
NVL:                    'nvl';
// Filter
FILTER:                 'filter';
// Clause
WHERE:                  'where';
GET:                    'get';
RENAME:                 'rename';
TO:                     'to';
// Reference date
TIME_SHIFT:             'time_shift';
// String
LEN:                    'len';
CONCAT:                 '&';
// Regex
ROW:                    [r]([0-9]?[0-9][0-9][0-9]);
ROW_RANGE:              [r]([0-9]?[0-9][0-9][0-9])[-]([0-9]?[0-9][0-9][0-9]);
ROW_ALL:                'r*';
ROW_HEADING:            'r';
COL:                    [c]([0-9]?[0-9][0-9][0-9]);
COL_RANGE:              [c]([0-9]?[0-9][0-9][0-9])[-]([0-9]?[0-9][0-9][0-9]);
COL_ALL:                'c*';
COL_HEADING:            'c';
SHEET:                  [s]([0-9]?[0-9][0-9][0-9]);
SHEET_RANGE:            [s]([0-9]?[0-9][0-9][0-9])[-]([0-9]?[0-9][0-9][0-9]);
SHEET_ALL:              's*';
SHEET_HEADING:          's';
TABLE:                  [t][A-Z]+([ ]|[.])?[0-9][._0-9A-Za-z]+;
VAR_REF:                CURLY_BRACKET_LEFT [v][A-Za-z][_0-9A-Za-z-.]* CURLY_BRACKET_RIGHT;
PRECONDITION_ELEM:      CURLY_BRACKET_LEFT 'v_'[A-Z]+([ ]|[.])?[0-9][._0-9A-Za-z]+ CURLY_BRACKET_RIGHT;
// Time periods
TIME_PERIOD:            'A'
                        | 'S'
                        | 'Q'
                        | 'M'
                        | 'W'
                        | 'D'
                        ;
// End of line
EOL:                    ';';
// Skip all whitespaces, line returns, etc.
WS:                     [ \t\r\n\u000C]+ -> channel(2);
// ------------ Literals ---------------
fragment
DIGITS0_9:              '0'..'9';
INTEGER_LITERAL:        DIGITS0_9+
                        | LPAREN MINUS DIGITS0_9+ RPAREN;
DECIMAL_LITERAL:        INTEGER_LITERAL '.' INTEGER_LITERAL;
PERCENT_LITERAL:        INTEGER_LITERAL '%'
                        | DECIMAL_LITERAL '%'
                        ;
STRING_LITERAL:         '"' (~'"')+ '"' | '\'' (~'\'')+ '\'';
EMPTY_LITERAL:          '\'\'';
LETTERS_NUMBERS:        [A-Za-z0-9_.]+;
//QNAME_LITERAL:          SQUARE_BRACKET_LEFT 'eba_' LETTERS_NUMBERS SQUARE_BRACKET_RIGHT;
//MEMBER_CODE_LITERAL:    SQUARE_BRACKET_LEFT LETTERS_NUMBERS SQUARE_BRACKET_RIGHT;