# Logical Operators

## Not Operator "not"

The `not` keyword is an operator returning the negated right boolean operand.

::: tip
Note that the result is not applied to the operand, but returned.
If you want to apply the negated operation, use the boolean's `Flip()` method, instead.
:::

Example:

```gno
print not true // false
print not false // true
print not (true or false and true) // false
```

> The example also shows that the not operator only affects the operand to its right. Use
> Use `(` and `)` to structure operands.

## And Operator "and"

The `and` keyword operator returns `true` if **both** operands are `true`. If either or both are
`false`, it returns `false`, instead.

Example:

```gno
print true and true // true
print false and false // false
print true and false // false
```

## Or Operator "or"

The `or` keyword operator returns `true` if **at least one** operand is `true`. If both are
`false`, it returns `false`, instead.

Example:

```gno
print true or true // true
print false or false // false
print true or false // true
```

::: danger
Note that `and` and `or` are short-circuiting, meaning that they only evaluate the second operand if necessary, and behave like `&&` and `||` in other languages. There is no eager variants of
`and` and `or` in GNO like `&` and `|` in other languages!
:::

## Either Or Operator "xor"

The `xor` keyword operator returns `true` if **one** operand is `true`. If both are `false` or both
are `true`, it returns `false`, instead.

Example:

```gno
print true xor true // false
print false or false // false
print true or false // true
```

## Logical Operator Order

1. parentheses to change evaluation order
2. and
3. xor
4. or
