# Errors & Exceptions

Exceptions signalise exceptional situations occurring in a program. When they occur, the program will
be instantly terminated completely disrupting the normal program flow.

Examples for such situations could be:

- A variable has a null value, but the programmer attempts to access a field of the null value
- A programmer calls a method with a negative method argument, but the method requires positive arguments
- A programmer attempts to access the seventh item of an array with only four elements

These cases are clearly indicators of something being wrong. But how should GNO deal with these
situations? It could stop the program immediately. It could also ignore these errors and try to move
on. But both ideas do not seem ideal.

## Exceptions vs. Errors

GNO uses exceptions and errors for these scenarios. GNO _throws_ either an exception or an error
in such situations, indicating that there has been some sort of mistake. The programmer can choose
to _catch_ this exception or error, or not. If it is not caught, the program will halt and disrupt
the default program flow.

### Exceptions

An exception can be thrown by the programmer at any time without expecting it to be caught.
It _can_ be caught, but a method calling another method that throws an exception, does not _have_
to catch the exception.

### Errors

An error can be thrown by the programmer at any time, but it has to be caught.
Therefore, it signalises a graver exceptional situation that needs to be dealt with.
A method calling another method that throws an error, _has_ to catch the exception.

## Throwing Exceptions and Errors

To throw both exceptions and errors, the `throw` keyword is used, followed by an `Error` or
`Exception` object or a string for generic exceptions. In GNO, all exceptions are simply classes
that can freely be extended and used like all other classes.

_Exception Example_:

```gno
Example ex = Example()
ex.Test() // Throws IllegalStateException

class Example {
    Test() {
        int i = 4
        if i is not 5 {
            throw IllegalStateException("i must be 5")
        }
    }
}
```

Note how the method `Test()` does not force the caller to catch the IllegalStateException.

_Exception Example_:

```gno
Example ex = Example()
try {
    ex.Test() // Throws IllegalStateError
} catch {
    print "There has been an error"
}

class Example {
    Test() with IllegalStateError {
        int i = 4
        if i is not 5 {
            throw IllegalStateError("i must be 5")
        }
    }
}
```

Note how `Test()` declares that it may throw an IllegalStateError, thus forcing the caller to
catch the error, should it occur.

## Reading Exceptions

When an exception is thrown and not caught, the message will look something like this:

::: danger
gno.err.Exception: "This is an example exception" at Test.testExceptions(2) in Example.gno
:::

`gno.err` means that the exception that was thrown stems from the internal exceptions and error
folder. `.Exception` shows that the exception object that was thrown is simply called `Exception`.
There are many types of exceptions in GNO's internal exception folder (see below).

`"This is an example exception"` means that the description of the exception was the message
`This is an example exception`.

`at Test.TestExceptions(2)` means that the exception was thrown in a class called `Test` in a method
called `TestExceptions` in line 2.

`in Example.gno` means that the exception was thrown in a file called `Example.gno`.

GNO also prints a stack trace for all exceptions, which can be useful for debugging.

## Internal Exceptions & Errors

It is recommended to use exceptions that fit semantically to the respective problem. You can use a
multitude of predefined exceptions that are all located in the `gno.err` folder.

### Exceptions

| Folder                            | Description                                         | Example                                                 |
| --------------------------------- | --------------------------------------------------- | ------------------------------------------------------- |
| gno.err.Exception                 | The default exception type                          | Not recommended for use                                 |
| gno.err.OutOfBoundsException      | A value is not within bounds of a range             | Array Access                                            |
| gno.err.IllegalArgumentException  | An argument is not allowed                          | A method argument has a faulty value                    |
| gno.err.IllegalStateException     | A program state is not allowed                      | Closing a system before starting it                     |
| gno.err.IllegalOperationException | An operation is not allowed                         | Dividing by zero                                        |
| gno.err.IllegalFormatException    | A value format is not allowed                       | Leaving out the # in a hexadecimal color representation |
| gno.err.CastException             | A cast cannot be performed                          | Illegal casting definition                              |
| gno.err.NullAccessException       | Trying to access a member of `null`                 | Not instantiating an object but calling its method      |
| gno.err.NotImplementedException   | A feature does not exist, yet, but trying to use it | A placeholder method that will be implemented later     |
| gno.err.StackOverflowException    | An overflow occurred on the stack                   | Infinite recursion                                      |

## Creating Exceptions

To create custom exceptions, inherit from another exception.

```gno
class MyCustomException of Exception
```

## Automatic Throws

You can automatically throw `IllegalArgumentExceptions` using the `with` keyword. This is explained
in chapter _Chapter_.

```gno
void SetTime(int hours, int minutes) with hours, minutes is in 0..59 {
    // ...
}

SetTime(-1, 0) // IllegalArgumentException
```

You can use the not null operator `!` after the type of a parameter in a method to throw an
`IllegalArgumentException` when a passed argument is null.

```gno
void SetConfiguration(Configuration! config) {
    // ...
}

SetConfiguration(null) // IllegalArgumentException
```

## Catching Exceptions & Errors

Exceptions can be caught, using the `try` and `catch` keyword. The `try` blocks contains the
statements(s) that may throw an exception or error.
The `catch` block contains the statements(s) that will be executed upon the event of an exception or
error.

```gno
try {
    dataService = DataService()
    data = dataService.RetrieveAllData()
    print "Successfully retrieved all data: $data"
} catch IOException {
    print "Unfortunately, there was an error"
}

// Output:
// (in the event of an exception):
// "Unfortunately, there was an error"
// (if there is no exception):
// "Successfully retrieved all data: [DATA]"
```

An optional `then` block contains additional statements that will be executed after the try-catch
blocks, no matter if an error or exceptions has occurred or not.

```gno
try {
    dataService = DataService()
    data = dataService.RetrieveAllData()
    print "Successfully retrieved all data: $data"
} catch IOException {
    print "Unfortunately, there was an error"
} then {
    print "Anyway, I'm done."
}

// Output:
// (in the event of an exception):
// "Unfortunately, there was an error"
// "Anyway, I'm done."
// (if there is no exception):
// "Successfully retrieved all data: [DATA]"
// "Anyway, I'm done."
```

The exception class may be omitted to catch the occurrence of any exception.

```gno
try {
    dataService = DataService()
    data = dataService.RetrieveAllData()
    print "Successfully retrieved all data: $data"
} catch {
    print "Unfortunately, there was an error"
}
```

Multiple exceptions and errors may be caught in a single statement by separating them with a comma `,`:

```gno
try {
    dataService = DataService()
    data = dataService.RetrieveAllData()
    print "Successfully retrieved all data: $data"
} catch IOException, ExampleException {
    print "Unfortunately, there was an error"
}
```

Similarly to conditions, inline versions exist to simplify try-catch and try-catch-then statements
for simple expressions:

```gno
// A string may throw a CastingException when not an int
try {
    int number = "Nonsense" as int
} catch {
    print "That is not a number"
}

// Output: "That is not a number"

// A string may throw a CastingException when not an int
int number = try "Nonsense" as int catch {
    print "That is not a number"
}

// Output: "That is not a number"
```

Similarly, the `then` block may be added to the inline variant:

```gno
// A string may throw a CastingException when not an int
int number = try "Nonsense" as int catch {
    print "That is not a number"
} then {
    print "Anyway..."
}

// Output:
// "That is not a number"
// "Anyway..."
```

::: tip
The arrow operator may be used for an inline try-catch statement
:::
