# Switch

The switch construction is used to evaluate an expression and execute code based on the evaluation
of that expression.

Consider the following example, which assigns a different value to `y`, depending on the value of
the variable `x`.

_Example:_

```gno
int x = 5
int y

switch x {
    case 1 {
        y = 2
    }

    case 3 {
        y = 1
    }

    case 5 {
        y = 0
    }
}

print y // 0
```

Note that you can provide any boolean expression in a case header.

_Example:_

```gno
int x = 5
int y

switch x {
    case int.IsEven(it) {
        y = 2
    }

    case it > 5 {
        y = 1
    }

    case it + 1 is not 1 {
        y = 0
    }
}

print y // 0
```

::: tip
In the example, above the identity operator `it` is used to refer to the evaluated member.
However, it can be dropped in the following cases:

1. the identity is used as a method argument of a method with exactly one parameter, which does not
   have a method with the same name with no parameters
2. the identity is the left operand of a single operational expression

:::

Based on this, the same example can be simplified to:

_Example:_

```gno
int x = 5
int y

switch x {
    case int.IsEven() {
        y = 2
    }

    case > 5 {
        y = 1
    }

    case + 1 is not 1 {
        y = 0
    }
}

print y // 0
```

::: tip
If the case body consists of one line, it can be shortened down using the arrow operator `=>`
:::

Based on this, the same example can be simplified to:

_Example:_

```gno
int x = 5
int y

switch x {
    case int.IsEven() => y = 2
    case > 5 => y = 1
    case + 1 is not 1 => y = 0
}

print y // 0
```

## Default

The `default` keyword is used to provide a fallback option in a switch statement, which is executed
if no other options have been selected. In that regard it behaves like an `else` in an if-condition.

Example:

```gno
int x
int y

switch x {
    case int.IsEven() => y = 2
    case > 5 => y = 1
    case + 1 is not 1 => y = 0
    default => y = -1
}

print y // -1
```

## Switch Assignment

A switch can be used in an assignment to assign a different value depending on the specified
options. The examples above always assigned y to a value depending on what case evaluated to true.
We can use an assignment to do this.

Example:

```gno
int x
int y = switch x {
    case int.IsEven() => 2
    case > 5 => 1
    case + 1 is not 1 => 0
    default => -1
}

print y // -1
```

In switch assignments the `case` keywords can be left out, if an inline case is used.

```gno
int x
int y = switch x {
    int.IsEven() => 2
    > 5 => 1
    + 1 is not 1 => 0
    default => -1
}

print y // -1
```

## Case List

In both a switch and a switch assignment, you can list more than one evaluation in each case.
If used, this is logically equivalent to the `or` operator.
Separate the list items by using the `,` operator.

```gno
x = 5

switch x {
    case 1, 2, 3 => print "Small"
    case 4, 5, 6 => print "Medium"
    default => print "Large"
}
```
