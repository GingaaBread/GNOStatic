# Data Types

GNO is a statically-typed language, where every variable has a type that is already known during
compilation. In GNO, variables can have three types:

1. primitive data types
2. objects
3. enumeration constants

GNO utilises the following primitive data types:

- **int**: 32-bit signed integers
- **long**: 64-bit signed integers
- **single**: single-precision IEEE-754 floating point
- **double**: double-precision IEEE-754 floating point
- **char**: UTF-16 character
- **string**: A string of UTF-16 characters
- **boolean**: Either _true_ or _false_

## Nullable Types

By default, variables of primitive types and enumeration constants, are not nullable cannot be
assigned `null`. To declare them as nullable, the `?` operator is used directly after the type.

```gno
string name = null // <--- this will not compile because string is not nullable
string? name = null
```

Objects are nullable.
Non-null assertions can be used to automatically throw an AssertionException when a variable is
expected to be not null, but is evaluated to null at compile-time.

```gno
Address a1 = null
Example.ValidateAddress(a1) // <--- throws an AssertionException

class Example {
    static ValidateAddress(Address! address) {
        // ...
    }
}
```

## Assignments

In GNO variables are assigned using the assignment operator `=`, followed by the desired value.

```gno
int age = 5
```

GNO is statically typed, which means the type of a variable is known during compile time.
You can let GNO infer a variable type. When declaring a primitive variable, it is automatically
initialised to its default value.

```gno
boolean thisIsFalse

print thisIsFalse // false
```

## Overview

In the following, you can find an overview of all data types in GNO.

### Integer (int)

The integer _int_ is a 32 bit signed two's complement integer.

The value ranges from -2^31 to 2^31-1.

The default value of an integer is zero.

Example:

```gno
print default of int // 0

int x = 15
```

### Long Integer (long)

The long integer _long_ is a 64 bit signed two's complement integer.

The value ranges from -2^33 to 2^33-1.

The default value of an integer is zero.

To indicate that an integer is a long integer, an uppercase `L` needs to be inserted after the
integer.

Example:

```gno
print default of long // 0L

long x = 25891942890786L
```

### Single Precision Decimal (single)

The single-precision decimal _single_ is a 32-bit signed IEEE-754 floating point.

The default value of a single is 0.0.

Example:

```gno
print default of single // 0.0

single weight = 85.5
```

### Double Precision Decimal (double)

The double-precision decimal _double_ is a 64-bit signed IEEE-754 floating point.

The default value of a double is 0.0d.

To indicate that a double is a double-precision decimal, a lowercase `d` needs to be inserted
after the decimal.

Example:

```gno
print default of double // 0.0d

double x = 1.25d
```

::: danger
Do not use singles or doubles in scenarios where critical accuracy is required (for example, never
to represent a money balance for banking applications).
:::

### Single Character (char)

The character _char_ is a UTF-16 character enclosed by single quotes `'`.

The default value of a double is '?'.

Example:

```gno
print default of char // '?'

char x = '🛩️'
char y = 'x'
char z = '5'
```

### Character String (string)

A _string_ is a sequence of UTF-16 characters enclosed by double quotes `"`.

The default value of a double is "", the empty string.
The empty string can also be yielded using `string.empty`

Example:

```gno
print default of string // ""

string x = "Hello, World!"
```

The dollar character `$` is used to interpolate a variable or expression in a string.
Note that the dollar character must be escaped in a string because of this.

Expressions are further wrapped in curly brackets `{}`.

```gno
randomNumber = select any from [1, 2, 3, 4,5]
print "The new random number is $randomNumber"

print "What will this print? It will print: ${Foo()}"

Foo() {
    get "Hello World"
}
```

### Boolean (boolean)

A _boolean_ is either the literal `true`, or the literal `false`.

The default value of a boolean is false.

Example:

```gno
print default of boolean // false

boolean x = true
```
