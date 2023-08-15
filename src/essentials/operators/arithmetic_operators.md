# Arithmetic Operators

## Increment Operator `++`

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
The increment operator can only be used alone.
:::

_Illegal_ Example:

```gno
int i = 5
print i++ // ERROR

++i // ERROR
```

## Increment Operator `--`

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
The decrement operator can only be used alone.
:::

_Illegal_ Example:

```gno
int i = 5
print i-- // ERROR

--i // ERROR
```

## Addition Operator `+`

## Subtraction Operator `-`

## Multiplication Operator `*`

## Division Operator `/`

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
