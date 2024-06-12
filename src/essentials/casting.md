# Casting

Values can be cast from one data type to another data type using the `as` keyword.
Consider the following example where `a` is an integer, but `b` is a string.

```gno
b = "125"
int a = b as int
```

If a class does not have a casting definition for the required type, the program will not compile.
If the cast is not allowed, on the other hand, a `CastingException` is thrown.

_Example Illegal Program_:

```gno
class A

print A() as int
```

Note how the object `A()` cannot be cast to an int because class A has no casting definition for an
int. In other words, GNO does not know how to redefine the object appropriately as an integer.

_Example Illegal Cast_:

```gno
b = "abc"
int a = b as int
```

Note how the string _could_ be cast into an integer, but the string specified in `b` is not a
number. Therefore, the program can be compiled, but a `CastingException` is thrown at runtime.

## Creating Casting Definitions

Create a casting definition in the body of a class using the `as` keyword.
You can use the arrow operator `=>` to return a type inline without the need
to use the `get` keyword, or define complex functions to represent the type. Casting definitions
defined as functions do not receive parentheses or arguments. Like all other methods, casting
definitions need to return the defined type or thrown an exception.

```gno
class Circle (
    int radius
) {
    as {
        int => radius
        string => "Radius of the circle is $radius"
        CustomClass {
            if radius > 100 {
                get CustomClass()
            } else throw CastingException()
        }
    }
}
```

You can only throw `CastingException` exceptions in casting definitions. You can use the string
shorthand `throw ""`, which will throw a `CastingException` with the string as the exception
message.

## Cast Access Operator :

The cast access operator `:` allows easy member access when using a cast.

The default access operator `.` requires the use of parentheses like so:

```gno
(rectangle as Square).PrintSquareInfo()
```

However, the cast access operator can be used as an alternative:

```gno
rectangle as Square: PrintSquareInfo()
```
