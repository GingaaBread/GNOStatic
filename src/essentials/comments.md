# Comments

GNO uses single- and multi-line comments. Comments are ignored by the compiler.
It is recommended to use comments often to explain your code.

## Single Line Comment

Single-line comments use the `//` operator.
Code after this operator is ignored until the start of the next line.

```gno
i = 0 // everything from here is ignored
```

## Multi Line Comment

Multi-line comments use the `/*` operator to define the start of the comment, and the `*/` operator
to define the end of the comment.

```gno
/* this line is ignored
just as this line
and this line */
```

::: warning
GNO does not support commenting out the `*/` operator!
:::
