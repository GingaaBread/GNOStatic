# For Loop

## Declarative For-Loop

The declarative for-loop is the most for-loop commonly found in other programming languages.
It expects a declaration of a new variable, followed by the `;` operator. Then, the condition
is defined, which determines if the loop is continued or not, followed by the `;` operator again.
Finally, a variable value modification is defined.

```gno
for int i = 0; i < 5; i++ {
    print i // 0, 1, 2, 3, 4
}
```

By default, the declared variable is only accessible within the loop. To make it visible, use the
`:` operator before the variable type.

```gno
for int i = 0; i < 5; i++ {
    print i // 0, 1, 2, 3, 4
}

print i // ERROR: i does not exist in this context
```

```gno
for :int i = 0; i < 5; i++ {
    print i // 0, 1, 2, 3, 4
}

print i // 4
```

Similarly, the variable modification can only refer to the variable declared in the for-loop, unless
the `:` operator is used before it.

```gno
int i = 5

for int j = 0; i < 5; i++ { // ERROR: i cannot be modified
    print j
}
```

```gno
int i = 5

for int j = 0; i < 5; :i++ {
    print j
}
```

## Transitory For-Loop

The transitory for-loop leaves out the variable declaration, thus providing a shorthand version
for cases where you do not need to work with a variable, but just need to repeat code.
You can use the identity operator `it` to refer to the current iteration value.

```gno
for < 200; += 2 {
    print it // 0, 2, 4, ...
}
```

## Inline Loop

As a design decision, it is not allowed to use any of these for-loops as an inline loop as this
decreases readability significantly.
