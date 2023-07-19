# Special Operators

## Member Access Operator `.`

Used to access a member of a structure.

_Example:_

```gno
print A.TEST // Accessing the constant of class A

a = A()
a.Foo() // Accessing the method Foo() of object a

with SomeFolder.SomeClass // Accessing the class SomeClass of the folder SomeFolder
class A
(
    int TEST = 5
)
{
    Foo() {}
}
```

::: tip
When accessing a class member, the operator can be prefixed by the `?` operator. Then, the operation
will only be executed if the operand is not null.
:::

_Example_:

```gno
example = MyObj()
MyObj otherExample

example?.Foo() // Executes Foo() because example is not null
otherExample?.Foo() // Does not execute Foo() because otherExample is null
```

## Array Access Operator `[]`

Accesses the value of an array at the specified index. Note that the index must be an integer.

_Example_:

```gno
arr = [1,2,3,4,5]
print arr[0] // 1
```

Note that you **cannot** use the array access operator on anonymous arrays.

## Contains Operator "is in"

The `is in` keyword operator is used to evaluate if a set contains a certain element.
It returns `true`, if the elements exists in the set, and `false` if it does not.

_Example_:

```gno
arr = [1,2,3]
print 2 is in arr // true
print 9 is in arr // false
print "?" is in arr // ERROR: Left operand must be an int

Item[,] shoppingList = ["Apple", "Milk", "Butter"]
print "Butter" is in shoppingList // true
print "Flour" is in shoppingList // false
```

## Cardinality Operator `||`

The cardinality operator is wrapped around sets to return their size.

_Example_:

```gno
arr = [1, 2, 3]
print |arr| // 3

Item[,] shoppingList = ["Apple", "Milk", "Butter", "Flour"]
print |shoppingList|
```

## Arrow Operator `=>`

The arrow operator is used for lamda functions, and inline method bodies.

## Identity Operator `#`

The identity operator is used in lamdas, loops, and enumerations.
