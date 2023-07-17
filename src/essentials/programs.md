# Programs

## Program Structure

A GNO program consists of one or more `.gno` files.

A GNO file contains zero or more structs. Structs are folders, classes, interfaces, or enumerations.

The following example outlines a sample file:

```gno
    in Example {
        class ExampleClass
        interface ExampleInterface
        enum ExampleEnumeration
        in Example.ExampleFolder { }
    }

    // Another empty class in the same file
    class AnotherClass

    // Another folder in the same file
    in AnotherFolder { }
```

## Main Class

In order to run the program, there needs to be exactly one main class that gets called when the
program is run. The main section needs to be located at the top of a file with no other members
preceding it. The main section is executed when the program is run.

```gno
a = A()
b = B()
print("Hello World!")

class A
class B
```

## Program Arguments

To access a program argument in a main class, the internal `args` array can be used.
It expects the index of the argument as its parameter and returns the argument as a string if it
exists, or throws an OutOfBoundsException if it doesn't.

Example:

```gno
// Starting the program with the following arguments: ["Ping", "Pong", "123"]
argument = args[0]

print("Additional argument is: $argument") // "Additional argument is Ping"

print(args[5 - 2] as int / 2) // 61
```
