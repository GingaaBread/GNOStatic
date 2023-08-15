# Casting

Values can be casted from one data type to another data type using the `as` keyword.
Consider the following example where `a` is an integer, but `b` is a string.

```gno
b = "125"
int a = b as int
```

If a class does not have a casting definition for the required type, the program will not compile.
If the cast is not allowed, a `CastingException` is thrown.

_Example Illegal Program_:

```gno
class A

print A() as int
```

Note how the class a cannot be cast to an int because class A has no casting definition for an int.

_Example Illegal Cast_:

```gno
b = "abc"
int a = b as int
```

Note how the string cannot be cast into an integer. An exception is thrown.

## Creating Casting Definitions

Create a casting definition in the body of a class using the `as` keyword. Separate the casting
types by a comma. You can also use complex functions to represent the type.

```gno
class Circle(
    int radius
) {
    as {
        int => radius,
        string => "Radius of the circle is $radius",
        CustomClass {
            if radius > 100 {
                return CustomClass()
            } else throw CastingError()
        }
    }
}
```
