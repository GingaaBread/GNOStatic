# Programs

A GNO program consists of one or more `.gno` files.

In order to run the program, there needs to be exactly one main section that is executed when the program is run. A file contains zero or more structs. Structs are folders, classes, interfaces, or enumerations. The following example outlines a sample file:

```gno
in Example {

    class ExampleClass

    interface ExampleInterface

    enum ExampleEnumeration

    in Example.ExampleFolder { }

    // Another empty class in the same file
    class AnotherClass

    // Another folder in the same file
    in AnotherFolder {
        class ChildClass
    }
}
```

To run a program, exactly one GNO file may start with a main section. The main section needs to be located at the top of the file with no other structs preceding it. The main section is executed when the program is run.

```gno
a = A()
b = B()

print "Hello World!"

class A
class B
```

To access a program argument in a main section, the internal `args` method is used. Similar to an array, it expects the index of the argument as its parameter and returns the argument as a string if it exists, or throws an `OutOfBoundsException` if it does not.

```gno
// Starting the program with the following arguments: ["Ping", "Pong", "123"]
argument = args(0)

print "Additional argument is: $argument" // Output: "Additional argument is Ping"

print args(5 - 3) as int + 2 // Output: 125
```
