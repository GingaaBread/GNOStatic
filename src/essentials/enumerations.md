# Enumerations

Enumerations are sets of constants. To define an enumeration use the `enum` keyword.
The enumeration body is optional. If left out, the enumeration contains no constants.
Enumeration constants are separated by a comma `,` and, like variable constants, must be written
in _UPPER_SNAKE_CASE_.

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

To reference enumeration constants, specify the enumeration followed by the access operator `.`
and then the constant identifier.

```gno
month = Month.FEBRUARY

if month is Month.JANUARY {
    print "Happy new year! 🥳"
}
```

## Identities

An enumeration identity is a value assigned to an enumeration constant. By default, each constant
is assigned an `int` type, starting at 0, incremented for each defined constant. To reference an
identity, the identity operator `it` is used directly after the access operator `.`.

```gno
print Animals.DOG.it // Output: 0
print Animals.CAT.it // Output: 1
print Animals.BIRD.it // Output: 2
print Animals.APE.it // Output: 3

enum Animals {
    DOG,
    CAT,
    BIRD,
    APE
}
```

To change the identity value of a constant, the assignment operator `=` is used, followed by the
value.

```gno
print Animals.DOG.it // Output: 5
print Animals.CAT.it // Output: 14
print Animals.BIRD.it // Output: -1
print Animals.APE.it // Output: 14

enum Animals {
    DOG = 5,
    CAT = 14,
    BIRD = -1,
    APE = 14
}
```

::: warning
Note that all overridden values need to match the type defined by the enumeration. In the prior
example, we could not assign a string to any constant because the expected type is an integer.
:::

## Ranges

Ranges can be used to let the compiler automatically generate constants and set the identity values
of each created constant to its integer.

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
 * Internally evaluates to:
 *
 * enum CardValue {
 *   TWO = 2,
 *   THREE = 3,
 *   ...
 *   TEN = 10,
 *   JACK = 10,
 *   QUEEN = 10,
 *   KING = 10,
 *   ACE = 11
 * }
 */
```

If used, the constant uses the English spelling of the integer in _UPPER_SNAKE_CASE_. Note that this
is just syntactic sugar, you cannot define constant enumeration values twice and, if multiple ranges
are used, their values **cannot** intersect. For example, you cannot use `1..5` and `TWO` in the
same enumeration.
