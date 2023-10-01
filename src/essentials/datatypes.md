# Data Types

GNO utilises the following data types:

- **int**: 32-bit signed integers
- **long**: 64-bit signed integers
- **single**: single-precision IEEE-754 floating point
- **double**: double-precision IEEE-754 floating point
- **char**: UTF-16 character
- **string**: A string of UTF-16 characters
- **boolean**: Either _true_ or _false_

## Assignments

In GNO values are assigned using the assignment operator `=`, followed by the desired value.

```gno
int age = 5
```

GNO is statically typed, which means the type of a variable is known during compile time.
You can let GNO infer a variable type. When declaring a primitive variable, it is automatically
initialised to its default value. Primitive types cannot be `null`.

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

### Double Precision Decimal (single)

The double-precision decimal _single_ is a 64-bit signed IEEE-754 floating point.

The default value of a double is 0.0d.

To indicate that a double is a double-precision decimal, a lowercase `d` needs to be inserted
after the decimal.

Example:

```gno
print default of double // 0.0d

double x = 1.25d
```

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

### Multiple Characters (string)

The string _string_ is a sequence of UTF-16 characters enclosed by double quotes `"`.

The default value of a double is "".

Example:

```gno
print default of string // ""

string x = "Hello, World!"
```

### Boolean (boolean)

The boolean _boolean_ is either the literal `true`, or the literal `false`.

The default value of a boolean is false.

Example:

```gno
print default of boolean // false

boolean x = true
```
