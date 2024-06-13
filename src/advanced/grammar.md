# Grammar

This section contains information about GNO's internal grammar rules.

## Expressions

GNO expressions are sets of words that evaluate to a value.
They can either be direct value representations (numbers, strings, true & false literals) or
indirect representations by ending up with a value after an execution.

These are the expression types from lowest to highest priority:

## Logical Operator Precedence

### Logical Comparison Expressions

Logical comparison expressions use the comparison operators `is`, `equals` and `is not`, and have
the lowest priority.

```gno
x is y and z // x is (y and z)
```

### OR Expressions

Example:

```gno
A or B and C // A or (B and C)
```

### XOR Expressions

An XOR expressions binds with a higher priority than OR expressions.

Example:

```gno
A xor B or C // (A xor B) or C
```

### AND Expression

An expression binds with a higher priority than OR and XOR expressions.

```gno
x and y xor z // (x and y) xor z
```

### NOT Expression

A NOT expression binds with the highest logical operand priority.

Example:

```gno
not x and y // (not x) and y
```

### Type Equals Expression

A type equals expression has the same priority as a NOT expression.
It can be used for object types.

```gno
myObject is of single and x is 5 // (myObject is of single) and x is 5
```

### Grouped Expression

A grouped expression is an expression within parenthesis `( and )`.
It is used to provide the highest priority to expressions with low priority.

Example:

```gno
(A or B) and C // (A or B) and C
```

### Literal Expressions

A literal expression is a single literal, such as a number, string, character, default value, or literal keyword.

Examples:

```gno
4
2L
1.3d
4.3
.25
"Hello World"
'A'
null
true
false
empty
default of int
```

## Arithmetic Expression Precedence

> Note that the unary increment and decrement operators are inline statements

### Numerical Comparison Expressions

Numerical comparison expressions use the comparison operators `<`, `<=`, `>`, `>=`, `is`, `equals` and `is not`, and have the
lowest priority.

```gno
5 < 2 + 1 // 5 < (2 + 1)
```

### Addition & Subtraction Expressions

Their priority is determined left to write.

Example:

```gno
1 + 3 - 2 // (1 + 3) - 2
3 - 1 + 2 // (3 - 1) + 2
```

### Multiplication & Division Expressions

Their priority is determined left to write.
They have a higher priority than addition and subtraction expressions.

Example:

```gno
1 + 3 * 2 // 1 + (3 * 2)
1 + 3 / 2 // 1 + (3 / 2)
2 * 5 / 3 // (2 * 5) / 3
2 / 5 * 3 // (2 / 5) * 3
```

### Modulo Expressions

Modulo expressions have a higher priority than the default arithmetic expressions, but lower than
power expressions.

Example:

```gno
5 mod 2 * 3 // (5 mod 2) * 3
```

### Power Expressions

Power expressions have the second highest priority, only surpassed by unary sign expressions.

```gno
5 ** 3 * 2 // (5 ** 3) * 2
```

## Unary Sign Expressions

Unary sign expressions have the highest priority.

```gno
3 ** -x // 3 ** (-x)
3 ** +x // 3 ** (+x)
```

### Grouped Expression

A grouped expression is an expression within parenthesis `( and )`.
It is used to provide the highest priority to expressions with low priority.

Example:

```gno
(A + B) * C // (A + B) * C
```

## Statements

GNO statements are sets of expressions that do some particular task.
