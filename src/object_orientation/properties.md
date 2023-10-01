# Properties

Properties are attributes that you can define in classes. Example properties for a class _Car_
could be _maxSpeed_, _colour_, _amountOfWheels_, etc.

Properties **cannot** be placed inside the body of a class, but **must** be placed in the class
property block, located within its parentheses `(` `)`, separated by commas `,`.

_Example_:

```gno
class Car (
    int maxSpeed,
    Color colour,
    int amountOfWheels
)
```

::: warning
Note how unlike in other other languages, there are no explicit private, package, protected or
public keywords. To know more about this see the chapter _Protection Levels_.
:::

## Getters

A getter method is a method that simply returns a property. In GNO, there is no need to write an
explicit getter method as all properties are by default gettable. Consider the prior example:

_Example_:

```gno
class Car (
    int maxSpeed,
    Color colour,
    int amountOfWheels
)
```

We can now get any value from a `Car` object. Objects are defined in the chapter _Objects_.

```gno
class CarPark {
    Enter(Car car) {
        if car.colour is RED {
            print "Red car entering the car park!"
        }
    }
}
```

Note how we can access `car.colour`. This refers to the property's getter.

## Setter

A setter method is a method that simply assigns a value to a property. In GNO, there is no need to
write an explicit getter method as all properties are by default settable. Consider the prior
example:

_Example_:

```gno
class Car (
    int maxSpeed,
    Color colour,
    int amountOfWheels
)
```

We can now set any value from a `Car` object. Objects are defined in the chapter _Objects_.

```gno
class Workshop {
    PaintCar(Car car) {
        car.colour = Color.GRAY
    }
}
```

Note how the colour property is set to gray.

## Hiding Setters & Getters

There are cases where you don't want to have publicly accessible getters or setters.
To hide a getter, you can either:

- only provide a setter, or
- provide neither a getter nor a setter

To hide a setter, you can either:

- only provide a getter, or
- provide neither a getter nor a setter

### Setter-Only

To only provide a setter, specify `:set` after the property's data type like so:

```gno
class Car (
    int:set maxSpeed,
    Color colour,
    int amountOfWheels
)
```

Note how the `maxSpeed` property now has `int:set` instead of just `int`.
Now the max speed can only be set in other classes, but they cannot get the property.

```gno
class Sample {
    Test() {
        car = Car(120, Color.BLACK, 4)
        car.maxSpeed = 250
    }
}
```

Note how the `maxSpeed` property can still be changed.

```gno
class Sample {
    Test() {
        car = Car(120, Color.BLACK, 4)
        /* ILLEGAL EXAMPLE */
        print car.maxSpeed // DOES NOT COMPILE
    }
}
```

Note, however, how the `maxSpeed` property cannot be accessed.

### Getter-Only

Only providing a getter is done using the `:get` suffix, and works just the same, but it only
provides a getter, but not the setter.

## No getters and setters

Providing neither a getter, nor a setter is done using the `:` suffix.

## Custom Getter

This behaviour is fine for simple getters, but sometimes it is necessary to perform more complex
code before getting a property.
For these cases, a custom getter can be used instead of the default getter:

```gno
class Car (
    int maxSpeed with get {
        Logger.Log("Getting car's max speed.")
        get it
    },
    Color colour,
    int amountOfWheels
)
```

Note how a custom getter is specified using the keywords `with` and `get` and behaves like a method.
A custom getter must have a get statement in all branches, yielding the respective value.
The identity operator `it` inside a custom getter always refers to the property.

::: tip
The identity operator can be left out if it is the only or last part of the expression.
:::

## Custom Setter

This also works with custom setters:

```gno
class Car (
    int maxSpeed with set {
        if it > 120 {
            print "Car is too fast to be set!"
        } else set it
    },
    Color colour,
    int amountOfWheels
)
```

Note how a custom setter is specified using the keywords `with` and `set` and behaves like a method.
A custom setter must have a set statement in at least one branch.
The identity operator `it` inside a custom setter always refers to the property.
The `set` keyword inside a custom setter always refers to the entered new value.

::: tip
The identity operator can be left out if it is the only or leftmost part of an expression.
The expression `set it` can be shortened down to just `set`.
The expression `get it` can be shortened down to just `get`.
:::

## Custom Getter and Setter

You can also use both a custom getter and setter for properties:

```gno
class Car (
    int maxSpeed with {
        set {
            if > 120 {
                print "Car is too fast to be set!"
            } else set
        }

        get {
            Logger.Log("Getting car's max speed.")
            get
        }
    },
    Color colour,
    int amountOfWheels
)
```

Note how the example uses both a custom getter and setter, and the shorter notation explained
above.

## Setter Assertions

You can also use assertions in setters. Assertions are described in the chapter _Assertions_.
This allows you to validate the input before actually assigning it to the property.
If the assertion evaluates to `false`, an `AssertionException` is thrown.

_Example_:

```gno
class Car (
    int maxSpeed with set < 800,
    Color colour with set is not null,
    int amountOfWheels
)
```

Note how in the example above, maxSpeed can only be set to values under 800.

## Properties in Constructors

By default, all properties are required parts of the default constructor. Constructors are defined
in the chapter _Constructors_.

To exclude a property from the default constructor, preface it with the variety operator `:`.

_Example_:

```gno
class Car (
    Color colour,
    :int maxSpeed,
    :int amountOfWheels
)

car = Car(Color.GREEN)
```

Note how in the example above, the properties `maxSpeed` and `amountOfWheels` are excluded from the
default constructor, but `colour` is not.
