# Constructors

Constructors specify what happens when an object is instantiated.
By default, a primary constructor is created expecting all properties of the class in the same
order. If the class does not have any properties, the primary constructor is empty as well.

_Example_:

```gno
class A {

}

class B (
    int a,
    int b
)

A()
B(1, 2)
```

## Custom Constructors

You can overload constructors in the class body by using the `constructor` keyword.
In it, you can define any parameters you like, even non-property parameters, as long as the
constructor signature is unique.

```gno
class A {
    constructor(int a) {
        print a
    }

    constructor(int a, string b) {
        print b
        print a * a
    }
}
```

## Hiding Properties

Properties can also be hidden from the primary constructor by preceding the data type of the
property with the variety operator `:`. If done so, they are not part of the primary constructor.

```gno
class A (
    int a,
    :int b,
    string c
)

A(1, "Example")
```

Notice how no value for b is specified because it has been hidden from the primary constructor.

## Constructor Calls

Constructors can also call other constructors of the same class. This makes it easy to reuse code,
but only change certain parts of another constructor. If used, the constructor call must be the
first part of a constructor, and there can only be one constructor call in each constructor.

```gno
class A (
    int a,
    :int b,
    string c
) {
    constructor(int a, string c, single d) {
        constructor(a, c)
        print d**2
    }
}

A(1, "Example", 2.5)
```

## Referring To The Primary Constructor

When defining custom constructors, you can refer to the primary constructor by using the `default`
keyword as a parameter with no data type or variable name given. This refers to the properties of
the primary constructor in the exact same order. If used, no other constructor can be called.

The example from above could therefore be:

```gno
class A (
    int a,
    :int b,
    string c
) {
    constructor(default, single d) {
        print d**2
    }
}

A(1, "Example", 2.5)
```

## Constructor Overloading

Constructors are overloaded the same way that methods are overloaded.
All parameter lists of all constructors must be unique.
Method overloading is defined in the chapter _Methods_.

## Optional Values

Constructors can take on optional values the same way that methods can.
Optional values are defined in the chapter _Methods_.

```gno
class A {
    constructor(optional string debugMessage) {
        if debugMessage exists {
            Logger.Log(debugMessage)
        }
    }
}
```

## Anonymous Instantiation

When the type of a variable is already known, it can be instantiated anonymously without the need
to refer to its type again. Consider the following example:

```gno
class A (
    SomeVeryLongClassName example
) {
    constructor() {
        example = SomeVeryLongClassName()
    }
}
```

In the example, the class `SomeVeryLongClassName` is either passed as an argument for class A, or
is created automatically. However, at all times, the type is known. Therefore it can be instantiated
anonymously:

```gno
class A (
    SomeVeryLongClassName example
) {
    constructor() {
        example = ()
    }
}
```
