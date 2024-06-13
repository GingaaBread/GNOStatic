# Arithmetic Operators

## Increment Operator `++`

> Type: unary operator

Increments the operand by one. Note that the operand needs to be a number.

_Example_:

```gno
int i = 5
i++
print i // 6
```

::: warning
As a design choice, GNO does not have a prefix increment operator.
This is to ease readability and simplicity.

Furthermore, it is not allowed to use the operator in an expression.
:::

_Illegal_ Example:

```gno
int i = 5
print i++ // ERROR

++i // ERROR
```

## Increment Operator `--`

> Type: unary operator

Decrements the operand by one. Note that the operand needs to be a number.

_Example_:

```gno
int i = 5
i--
print i // 4
```

::: warning
As a design choice, GNO does not have a prefix decrement operator.
This is to ease readability and simplicity.

Furthermore, it is not allowed to use the operator in an expression.
:::

_Illegal_ Example:

```gno
int i = 5
print i-- // ERROR

--i // ERROR
```

## Addition Operator `+`

> Type: binary operator

Adds the left operand to the right operand and returns the result.

### Result types

```
int + int: int
single + int: single
single + single: single
double + int: double
double + double: double
single + double: double
```

### Commutative

The operator is commutative.

## Subtraction Operator `-`

> Type: binary operator

Subtracts the left operand from the right operand and returns the result.

### Result types

```
int - int: int
int - single: single
int - double: double
single - int: single
single - single: singleton
double - int: double
single - double: double
double - double: double
```

### Commutative

The operator is **not** commutative.

## Multiplication Operator `*`

> Type: binary operator

Multiplies the left operand by the right operand and returns the result.

### Result types

```
int * int: int
single * int: single
single * single: single
double * int: double
double * double: double
single * double: double
```

### Commutative

The operator is commutative.

## Division Operator `/`

> Type: binary operator

Divides the left operand by the right operand and returns the result.

### Result types

```
int / int: int
all other: double
```

### Commutative

The operator is **not** commutative.

## Modulo

The `mod` keyword is used for modulo expressions:

```gno
5 mod 2 // 1
```

## Arithmetic Assignment

The addition, subtraction, multiplication and division operators can be used in the following
format:

```
variableName [operator]= value
```

which corresponds to an assignment in the following format:

```
variableName = variableName [operator] value
```
