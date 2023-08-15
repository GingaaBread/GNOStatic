# Methods

Methods allow executing code outside of the main class.
A method must be declared in the body of a class and is structured like so:

```
[Method Definitions] [Optional Data Type] [Method Identifier] ([Parameters]) {
    [Method Body]
}
```

## Method Definitions

Methods definitions are explained in detail in the chapter _Method Definitions_.
There are the following method definitions:

- abstract
- overridden
- implemented
- static

## Data Type

You can provide a data type to ensure that the returned type is the required type.
However, it is optional and is left out in the documentation.

```gno
class A {
    Foo() { }

    Bar() => 0
}

class B {
    void Foo() { }

    int Bar() = 5
}
```

The data type needs to be returned using the `return` keyword, unless the method is a void method.
If the method is a void method, `return` exits out of the method call.

## Method Identifier

Identifiers are explained in detail in the chapter _Identifiers_.
Methods **must** be written in UpperCamelCase.

## Parameters

Parameters can be added to methods and are separated by a comma `,`.
When calling a method, it then expects arguments that match the specified parameters.

```gno
DeleteUser(User user) {
    users.Remove(user)
}

Foo(int a, int b, int c) { }

Foo(3, 5, 9)
```

Method names combined with their specified parameters must be unique in a class.
This means that you can have a method `Foo(int a)` and a method `Foo(string b)`, but not both a
method `Foo(int a)` and a method `Foo(int b)`.

This is known as method overloading.

## Optional Parameters

The `optional` keyword can be used before a parameter's data type to declare the parameter as
optional, meaning that it can be omitted when called.

It can only be used once for each type of all parameters.

```gno
// Allowed
Foo(int a, optional int b, int c)

// Allowed
Foo(optional int a, int b, int c)

// Not allowed (How does GNO know if a or b is used here: Foo(1, 0))
Foo(optional int a, optional int b, int c)
```

If used, the optional values are included in all method combinations, meaning that in the example
`Foo(int a, optional int b, int c)`, there could neither be a method
`Foo(int a, int b, int c)`, nor `Foo(int a, int c)`.

Use the keyword `exists` on optional parameters to check if they have been omitted or not.

```gno
Foo(optional string example) {
    if example exists {
        print example
    }
}
```

## Hidden Method

GNO does not use explicit protection modifiers like `private`, `public`, etc.
By default, all classes can call all methods of all classes.

A method can be hidden from other classes by using the variety operator `:` before the method name.
This works similar to `private` in other languages.

```gno
class A {
    :Foo() {

    }
}

class B {
    Foo() {

    }
}

A().Foo() // Illegal
B().Foo() // Legal
```

Similarly, you can open a method for children of a class by using the variety operator `:` after
the name of the method. This works similar to `protected` in many other languages.

```gno
class A {
    Foo:() {

    }
}
```

## Empty Parameters

Empty parameters do not require the parentheses `(` and `).`

```gno
class A {
    Foo() { }
}

class B {
    Foo { }
}
```

## Method Calls

When calling a method, it needs to be accessible and the arguments need to match the method's
parameter list.

If the method call is the last part of an expression, the parentheses `(` and `)` can be left out.

```gno
class A {
    Foo(string a, int b) {}
    Bar()
}

A a = A()
a.Foo "a", 3
a.Bar
```
