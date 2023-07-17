# Enumerations

Enumerations are sets of constants. To define a new enumeration use the `enum` keyword. The enumeration body is optional. If left out, the enumeration contains no constants. Enumeration constants are separated by a comma `,` and, like variable constants, must be written in _UPPER_CAMEL_CASE_.

```gno
enum EmptyEnumeration

enum Month {
    JANUARY,
    FEBRUARY,
    MARCH,
    APRIL,
    JUNE,
    AUGUST,
    SEPTEMBER,
    OCTOBER,
    NOVEMBER,
    DECEMBER
}
```

## Constants

To reference enumeration constants, specify the enumeration followed by the access operator `.` and then the constant identifier.

```gno
month = Month.FEBRUARY

if month is Month.JANUARY {
    print "Happy new year!"
}
```

## Identities

An enumeration identity is a value assigned to an enumeration constant. By default, each constant is assigned an `int` type, starting at 0, counting up for each defined constant. To reference an identity, the identity operator `#` is used directly after the constant identifier.

```gno
print Animals.DOG# // Output: 0
print Animals.CAT# // Output: 1
print Animals.BIRD# // Output: 2
print Animals.APE# // Output: 3

enum Animals {
    DOG,
    CAT,
    BIRD,
    APE
}
```

To change the identity value of a constant, the assignment operator `=` is used, followed by the value.

```gno
print Animals.DOG# // Output: 5
print Animals.CAT# // Output: 14
print Animals.BIRD# // Output: -1
print Animals.APE# // Output: 14

enum Animals {
    DOG = 5,
    CAT = 14,
    BIRD = -1,
    APE = 14
}
```

::: warning
Note that all overridden values need to match the type defined by the enumeration. In the prior example, we could not assign a string to any constant because the expected type is an integer.
:::

To specify the expected identity type of an enumeration use the `of` keyword followed by the type.

```gno
print Animals.DOG# // Output: true
print Animals.CAT# // Output: false
print Animals.BIRD# // Output: true
print Animals.APE# // Output: false

enum Animals of boolean {
    DOG = true,
    CAT = false,
    BIRD = true,
    APE = false
}
```

If there is a specified enumeration identity type, the identity values of all constants with no overridden values, fall back to the default value of the enumeration type. If the value does not have a default value, the program will not compile.

```gno
// The default value of the type "boolean" is false

print Animals.DOG# // Output: true
print Animals.CAT# // Output: false
print Animals.BIRD# // Output: true
print Animals.APE# // Output: false

enum Animals of boolean {
    DOG = true,
    CAT,
    BIRD = true,
    APE
}
```

Enumeration types can be primary types as seen in the examples before or enumerations.

::: tip
If the integer type is explicitly specified as the enumeration type, the identities of all constants without specified constant values will fall back to the default value of an integer (0), instead of counting up for each defined type.
:::

## Ranges

Ranges can be used to let the compiler automatically generate constants and set the identity values of each created constant to its integer.

```gno
// A card can have values from 2 to 10, Jack, Queen, King
enum CardValue {
    2..10,
    JACK = 10,
    QUEEN = 10,
    KING = 10,
    ACE = 11
}

/*
 * Internally evalutes to:
 *
 * enum CardValue {
 *   2 = 2,
 *   3 = 3,
 *   ...
 *   JACK = 10,
 *   QUEEN = 10,
 *   KING = 10,
 *   ACE = 11
 * }
 */
```
