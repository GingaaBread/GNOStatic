# Do Loop

A do-loop is used to repeat code numerous times. It expects a positive integer, and will execute
the code within the loop by that amount.

```gno
do 5 {
    print "Hello World!" // "Hello World" (5x)
}
```

This example prints "Hello World" to the console five times.

## Inline Loop

The do-loop also supports the arrow operator for an inline execution:

```gno
do 5 => print "Hello World!" // "Hello World" (5x)
```
