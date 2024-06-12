# Assertions

Assertions allow reviewing if the program is working as intended.
In GNO, assertions come in two forms:

1. explicit asserting using the `assert` keyword
2. implicit asserting using shorthand operators

## 1. Explicit Asserting

The `assert` keyword is used to check if the passed boolean expression is true or false.
If the expression evaluates to true, the program will continue normally.
If the expression evaluates to false, the program will halt with an `AssertionException`,
displaying the expected value, and the actual value. This is a very powerful mechanic to make sure
programs are in a correct state at any particular moment.

_Example:_

```gno
void HandleTransaction() {
    assert SystemHasBeenSetUp()

    // ...
}
```

In the example above, the program should only handle a transaction, if the system has already
been set up and is ready to handle transactions. If it is not, the method should never be called.
The assertion makes sure that the program will stop with an exception if the program tries to handle
a transaction at any point, even though the system has not been set up, yet.

### Messages

In many cases, programmers may want to share an additional message that should be displayed along
with the exception should the assertion fail. To do this, pass a string after the assertion,
separated by the comma `,` operator, just like you would in a method call.

_Example:_

```gno
void HandleTransaction() {
    assert SystemHasBeenSetUp(), "The system has not been set up yet"

    // ...
}
```

### Methods

Just like primitive data types, the assert keyword provides methods that can be used in a static
context. These methods allow a more convenient and readable way to use assertions.
All methods contain an optional `message` string as its last parameter that can be used for
messages as before.

#### Unary Assertion Methods

- `IsTrue`: fails if the argument evaluates to false
- `IsFalse`: fails if the argument evaluates to true
- `IsNull`: fails if the argument evaluates to any value other than `null`
- `IsNotNull`: fails if the argument evaluates to `null`
- `IsEmpty`: fails if the argument does not evaluate to `empty`
- `IsNotEmpty`: fails if the argument evaluates to `empty`
- `IsPositive`: fails if the numerical argument is zero or negative
- `IsNegative`: fails if the numerical argument is zero or positive
- `IsZero`: fails if the numerical argument is positive or negative

#### Binary Assertion Methods

- `AreEqual`: fails if both arguments are not equal
- `AreNotEqual`: fails if both arguments are equal
- `AreSame`: fails if both arguments are not the same object
- `AreNotSame`: fails if both arguments are the same object
- `Contains`: fails if the first argument object is not contained in the second argument set
- `NotContains`: fails if the first argument object is contained in the second argument set
- `IsGreaterThan`: fails if the first argument is less than or equal than the second argument
- `IsGreaterOrEqualThan`: fails if the first argument is less than the second argument
- `IsLessThan`: fails if the first argument is greater or equal than the second argument
- `IsLessOrEqualThan`: fails if the first argument is greater than the second argument

#### Exception Assertion Methods

- `Throws<? of Exception>`: fails if the passed operation does not throw the given exception
- `DoesNotThrow<? of Exception>`: fails if the passed operation throws the given exception

#### Examples

```gno
RevivePlayer() {
    assert.IsZero(_playerHealth)
}

HandleStatusEffects() {
    assert.IsNotEmpty(_statusEffectList)
}

TestIfNotOutOfBounds() {
    assert.DoesNotThrow<OutOfBoundsException>(==> GetBoundsAt(2));
}
```

## 2. Explicit Assertions

GNO provides numerous ways to assert your program flow without having to implicitly use the
`assert` keyword.

### Not Null Parameter Assertions

The `!` operator can be used to add a not-null assertion to parameters.
It is a shorthand for using `assert.IsNotNull(paramName)` at the start of the method.

_Example:_

```gno
void AttachFile(File! fileToAttach) {
    // ...
}

AttachFile(null) // Throws an `AssertionException` because fileToAttach is null
AttachFile(File("sample.pdf")) // Does not throw an exception
```

### Not Null Equals

The `!!=` operator can be used to assign a variable, but only if the value to assign is not null.
It is a shorthand for using `assert.IsNotNull(value)` before the assignment.

_Example:_

```gno
void LocalizeFile() {
    localeToLocalizeIn !!= Localization.SelectedLocale
}
```

### Property Assertions

Properties can define assertions in their headers using the `with` keyword.

```gno
Car (
    Colour carColour with set is in [Colour.RED, Colour.BLUE, Colour.GREEN]
    int maxSpeed with set is > 0
)
```

### Not Null Property Assertions

The `!` operator can be used to add a not-null assertion to a property setter.
It is a shorthand for using `assert.IsNotNull(setterValue)` before setting the value.

_Example:_

```gno
Item (
    HashID! id,
    string itemName
)
```
