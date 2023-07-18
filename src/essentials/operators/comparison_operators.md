# Comparison Operators

## Lesser Than Operator <

The `<` operator returns `true` if the left operand is lesser than the right operand. Else, it returns `false`.

Example:

```gno
print 3 < 5 // true
print 5 < 3 // false
print 3 < 3 // false
```

## Lesser Than Or Equal Operator <=

The `<=` operator returns `true` if the left operand is lesser than or equal to the right operand. Else, it returns `false`.

Example:

```gno
print 3 <= 5 // true
print 5 <= 3 // false
print 3 <= 3 // true
```

## Greater Than Operator >

The `>` operator returns `true` if the left operand is greater than the right operand. Else, it returns `false`.

Example:

```gno
print 5 > 3 // true
print 3 > 5 // false
print 3 > 3 // false
```

## Greater Than Or Equal Operator >=

The `>=` operator returns `true` if the left operand is greater than or equal to the right operand. Else, it returns `false`.

Example:

```gno
print 5 >= 3 // true
print 3 >= 5 // false
print 3 >= 3 // false
```

## Divides Operator |

The `|` operator returns `true` if the left integer operand divides the right integer operand. Else, it returns `false`.

Example:

```gno
print 3 | 6 // true
print 3 | 5 // false
print 1.5 | 3 // ERROR: 1.5 is a single
```

## Equal To Operator "is"

The `is` keyword operator returns `true` if the left operand equals the right operand. Else, it returns `false`.

Example:

```gno
print 3 is 3 // true
print 3 is 5 // false
print 1.5 is 3 // false
```

::: tip
A boolean in itself is already a boolean expression.
Therefore, in GNO booleans **cannot** be compared to either the `true` or `false` literal using the equal to operator.
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

The `is` keyword can be combined with the `of` keyword to create the type equals operator. The operator returns `true` if the type of the left operand equals the type of the right operand. Else, it returns `false`.

Example:

```gno
print 3 is of int // true
print 3 is of string // false

myObj = MyObj()

print myObj is of single // false
print myObj is of MyObj // true
```

## Could Equal To Operator "equals"

The `equals` keyword operator returns `true` if the left operand equals the right operand after casting the type of the right operand to the type of the left operand. Else, it returns `false`.

```gno
print 3 equals 5 // false
print "5" equals 5 // true
print 5.5 equals 5 // true
print 5 equals 5.5 // false
```

Note that this is syntactic sugar for a simple cast:

```gno
print 5.5 as int is 5 // true
print 5 as single is 5.5 // false
```
