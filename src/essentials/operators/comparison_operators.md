# Comparison Operators

## Lesser Than Operator <

> Type: binary

The `<` operator returns `true` if the left operand is lesser than the right operand.
Else, it returns `false`.

_Example:_

```gno
print 3 < 5 // true
print 5 < 3 // false
print 3 < 3 // false
```

## Lesser Than Or Equal Operator <=

> Type: binary

The `<=` operator returns `true` if the left operand is lesser than or equal to the right operand.
Else, it returns `false`.

_Example:_

```gno
print 3 <= 5 // true
print 5 <= 3 // false
print 3 <= 3 // true
```

## Greater Than Operator >

> Type: binary

The `>` operator returns `true` if the left operand is greater than the right operand.
Else, it returns `false`.

_Example:_

```gno
print 5 > 3 // true
print 3 > 5 // false
print 3 > 3 // false
```

## Greater Than Or Equal Operator >=

> Type: binary

The `>=` operator returns `true` if the left operand is greater than or equal to the right operand.
Else, it returns `false`.

_Example:_

```gno
print 5 >= 3 // true
print 3 >= 5 // false
print 3 >= 3 // true
```

## Equal To Operator "is"

> Type: binary keyword operator

The `is` keyword operator returns `true` if the left operand equals the right operand.
Else, it returns `false`.

If the right operand is a type, this checks for type equality of both operands. It returns `true` if
the type of the left operand is the type of the right operand. Else, it returns `false`. Note that
it does not return true, if the type of the left operand is derived of the right operand.

_Example:_

```gno
print 3 is 3 // true
print 3 is 5 // false
print 1.5 is 3 // false

print 3 is int // true
print 3 is bool // false

class A
class B of A
a = A()
b = B()

print a is A // true
print b is A // false
```

::: tip
A boolean in itself is already a boolean expression.
Therefore, in GNO booleans **cannot** be compared to either the `true` or `false` literal using
the equal to operator.
:::

_Illegal_ Example:

```gno
boolean isMarried = true
print isMarried is true // ERROR: isMarried is a boolean
```

_Legal_ Example:

```gno
boolean isMarried = true
print isMarried // true
```

## Type Equals Operator "is of"

> Type: binary keyword operator

The `is` keyword can be combined with the `of` keyword to create the type equals operator.
The operator returns `true` if the type of the left operand equals or is derived of the right type operand. Else, it
returns `false`.

_Example:_

```gno
print 3 is of int // true
print 3 is of string // false

myObj = MyObj()

print myObj is of single // false
print myObj is of MyObj // true

class A
class B of A
a = A()
b = B()

print a is of A // true
print b is A // false
print b is of A // true
```

## Cast Equal To Operator "equals"

> Type: binary keyword operator

The `equals` keyword operator returns `true` if the left operand equals the right operand after
casting the type of the left operand to the type of the right operand. Else, it returns `false`.

```gno
print 3 equals 5 // false
print 5 equals "5" // true
print 5 equals 5.5 // false
print 5.5 equals 5 // true
```

Note that this is syntactic sugar for a simple cast:

```gno
print 3 as int equals 5 // false
print 5 as string equals "5" // true
print 5 as double equals 5.5 // false
print 5.5 as int equals 5 // true
```

## Constant Matching

When dealing with constant values, it is often necessary to repeat an expression:

```gno
enum WeekDay { MONDAY, TUESDAY, WEDNESDAY, FRIDAY, SATURDAY, SUNDAY }
weekDay = WeekDay.TUESDAY

if weekDay is WeekDay.SATURDAY or weekDay is WeekDay.SUNDAY {
    print "It's finally weekend!"
}
```

GNO allows the use of the `either` keyword to list constants without having to repeat the operator:

```gno
enum WeekDay { MONDAY, TUESDAY, WEDNESDAY, FRIDAY, SATURDAY, SUNDAY }
weekDay = WeekDay.TUESDAY

if weekDay is either WeekDay.SATURDAY or WeekDay.SUNDAY {
    print "It's finally weekend!"
}
```

Items are separated using the `or` operator.
