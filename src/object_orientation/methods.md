# Methods

A method must be declared in the body of a class and is structured like so:

```gno
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
- maybe

## Data Type

It is optional to provide a data type to ensure that the returned type is of the desired type.
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
If the method is a void method, `get` exits out of the method call.

## Method Identifier

Identifiers are explained in detail in the chapter _Identifiers_.
Methods visible to other classes **MUST** be written in _UpperCamelCase_, methods only visible to
the same class they are defined in **MUST** be written in _lowerCamelCase_.

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

## Inferred Object Name Parameters

When using a parameter of an object or enumeration constant type, the parameter does not require an
explicit name if that type only appears once in the method signature. GNO will use its name in
_lowerCamelCase_ as the inferred parameter name.

_Explicit Example:_

```gno
DeleteUser(User user) {
    users.Remove(user)
}
```

_Inferred Example:_

```gno
DeleteUser(User) {
    users.Remove(user)
}
```

_Illegal Example:_

```gno
// This does not compile because there is more than one
// parameter of type 'User'
DeleteUser(User, int id, User subUser) {
    // ...
}
```

### Settable Parameters

Methods can contain parameters that are used to set properties. To do that, use the `set` keyword,
followed by the name of the property.

```gno
class Sample (
    :Controller controller
) {
    SetController(set controller, boolean doDebugStatement)
    {
        if doDebugStatement then print "Set the controller instance"
    }
}

class Sample (
    :Controller controller
) {
    SetController(Controller controller, boolean doDebugStatement)
    {
        this.controller = controller
        if doDebugStatement then print "Set the controller instance"
    }
}
```

### Parameter List

You can omit the type of a parameter when listing parameters of the same type using the semi-colon
`;`.

```gno
class Sample {
    Example(int a; b; c) {}
}

class Sample {
    Example(int a, int b, int c) {}
}
```

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

## Maybe Methods

Sometimes, methods need to return a certain value, but in rare cases need to alert the caller about
the absence of that value. An example would be an imaginary data structure, which has a _Get_
operation to access an element from that data structure. However, if the element does not exist,
the data structure needs to alert the caller of that by throwing an exception or returning a
predefined value like `null`.

_A Sample Implementation Using Exceptions:_

```gno
class SomeDataStructure<T> {
    T Get(int atIndex) {
        T foundElement = SomeLookUp(atIndex)
        if foundElement is null then throw NoSuchElementException()
        else get foundElement
    }
}
```

_A Sample Implementation Using A Predefined Value:_

```gno
class SomeDataStructure<T> {
    class ReturnType (
        T elementToYield
    ) {
        constructor() {}
    }

    T Get(int atIndex) {
        T foundElement = SomeLookUp(atIndex)
        if foundElement is null then get ReturnType()
        else get ReturnType(foundElement)
    }
}
```

GNO offers a way to provide a _maybe_ mechanism to alert method callers of potential cases, where
the return type might not be the expected one. This is preferred over exceptions only if these
cases happen commonly and are by definition no exceptional cases.

The `maybe` keyword is added to the method signature before the returned type that might not be
returned, or before the method identifier if the method return type is inferred.
Values are returned as usual using the `get` keyword followed by the variable that should be
returned. To alert the absence of a return value, the `not` keyword is added before the `get`
keyword. Consider the following example:

```gno
class SomeDataStructure<T> {
    maybe T Get(int atIndex) {
        T foundElement = SomeLookUp(atIndex)
        if foundElement is null then not get
        else get foundElement
    }
}
```

> `maybe` cannot used in _void_ methods

Method callers **MUST** indicate that the yielded value might not exist by also prefacing the
`maybe` keyword before the type if the value is not being inferred.

_Inferred Example:_

```gno
structure = SomeDataStructure<int>()
element = structure.Get(1) // Does not exist

if element exists then print element
else print "There is no number at index 1"
```

_Explicit Example:_

```gno
structure = SomeDataStructure<int>()
maybe int element = structure.Get(1) // Does not exist

if element exists then print element
else print "There is no number at index 1"
```

Note that `maybe` variables cannot be accessed outside `exists` blocks.
This prevents access violations and provides a readable code structure that indicates what happens
when the variable exists, and what happens what happens if the variable does not exist.
