# Operator Overloading

Operators are treated as functions in GNO, which means that classes can implement their own
behaviour for operators. To overload an operator, the `with overridden` keywords are used, followed
by the desired operator. You can then define custom behaviour by using the `as` operator, followed
by the return type of the operator and the parameter list for the operator. Therefore, overloading
an operator is similar to defining a new method in a class. Just like defining methods, all
overloaded operators need to be defined in the class body.

## Structure

```
class SomeClass {
    with overridden [OPERATOR] as [RETURN TYPE] [METHOD BODY]
}
```

::: tip
The method body can either be direct using the curly brackets `{` and `}`, or inline using the
arrow operator `=>`.
:::

## Vector2 Example

Consider the following example of a Vector2, which consists of two variables x and y.

```gno
class Vector2 (
    single x,
    single y
)
```

If we now want to add two Vector2 objects, we need to define an `Add()` method since the `+`
operator is not defined for the Vector2 class that we have just created.

```gno
class Vector2 (
    single x,
    single y
) {
    Add(other) => Vector2(x + other.x, y + other.y)
}
```

::: tip
Here the `other` keyword is used, which is a shorthand for Add(Vector2 otherVector2).
:::

Now we can indeed add two vectors like so:

```gno
v1 = Vector2(2.5, 8.125)
v2 = Vector2(-1.25, 5.95)

print v1.Add(v2)
```

However, if we now want to multiply another vector, it starts to get messy:

```gno
class Vector2 (
    single x,
    single y
) {
    Add(other) => Vector2(x + other.x, y + other.y)

    Multiply(other) => Vector2(x * other.x, y * other.y)
}
```

```gno
v1 = Vector2(2.5, 8.125)
v2 = Vector2(-1.25, 5.95)
v3 = Vector2(3.0, .125)

// Not very readable, we should instead overload the + and * operators
print v1.Add(v2.Multiply(v3))
```

Note how messy this code could eventually get. Instead, let us override the operators:

```gno
class Vector2 (
    single x,
    single y
) {
    with overridden + as Vector2(other) => Vector2(x + other.x, y + other.y)

    with overridden * as Vector2(other) => Vector2(x * other.x, y * other.y)
}
```

Now we can simply use the operators we are already used to for the same behaviour:

```gno
v1 = Vector2(2.5, 8.125)
v2 = Vector2(-1.25, 5.95)
v3 = Vector2(3.0, .125)

// Considerably more readable
print v1 + v2 * v3
```

## Operator Priority

In GNO, you **cannot** override operator priority! This means that no matter what behaviour you
define for operators, they will still follow GNO's priority. For example, `*` will always be
executed before `+`.

## Operator Order

When overriding an operator in a class, the class type is assumed to be the left operand.
If it exists, the right operand is the type of the parameter. An overloaded operator can only
have zero or one parameter / right operand.
