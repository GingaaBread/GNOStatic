# Methods

Methods allow defining behaviour for classes.
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

It is optional to provide a data type to ensure that the returned type is the required type.
If it is left out, the type is inferred by using the type of the first `get` declaration in the
method. If there is no `get` declaration, the method is inferred to be a `void` method.

It is recommended to use an explicit return type for complex methods and to ensure future
compatibility. In simple and readable methods it can be helpful to let the type be inferred.

_Inferred Example_:

```gno
class A {
    Foo() { }

    Bar() => 0
}
```

_Explicit Example_:

```gno
class B {
    void Foo() { }

    int Bar() => 5
}
```

The data type needs to be returned using the `get` keyword, unless the method is a void method.
If the method is a void method, `get` exits out of the method call. If used, the type must not be
inferred, however. but must be explicitly specified.

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

Note that visibility (see below) has no effect on method overloading. Therefore, you cannot have
both a method `Foo()` and `foo()`, or `foo()` and `:foo()`.

## Hidden Method

GNO does not use explicit protection modifiers like `private`, `public`, etc.
By default, all classes can call all methods of all other classes in the same folder.

A method can be hidden from other classes by declaring its name in _lowerCamelCase_, instead of
_UpperCamelCase_.
This works similar to `private` in other languages.

```gno
class A {
    foo() {

    }
}

class B {
    Foo() {

    }
}

A().foo() // Illegal
B().Foo() // Legal
```

Sometimes, you want to hide a method from outside classes, but not from child-classes (this concept
is explained in the chapter _Inheritance_). To do this, add the colon operator `:` before the name
of the method. This works similar to `protected` in many other languages.

```gno
class A {
    :foo() {

    }
}
```

When calling this class, the colon operator is not specified, however.

```gno
class B of A {
    Test() {
        parent.foo()
    }
}
```

::: tip
The `parent` keyword is used to refer to the context of the parent class.
:::

## Empty Parameters

Methods without parameters do not require the parentheses `(` and `)` in their definitions.

```gno
class A {
    Foo() { }
}

class B {
    Foo { }
}
```

## Method Calls

When calling a method, it needs to be accessible to the caller, and the arguments need to match
the parameter list of the method.

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
