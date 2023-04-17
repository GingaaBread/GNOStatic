# Get Started

GNO is a strongly typed, object-oriented programming language designed to be convenient and readable. It's three main focuses are:

- Simplicity
- Readability
- Conciseness

Despite its object-oriented approach, GNO was created with functional programming in mind.

## Hello, World!

Create a blank .gno file on your computer like `Welcome.gno`. Using a text-editor of your choice,
add the following line to your file:

```gno
print "Hello World! 💜"
```

Finally, compile and run the program. If the console displays `Hello World! 💜`, you're all set!

## Less Is More

### Statically Typed

GNO is statically typed, which means that the type of a variable is always known during compilation.
However, one of the main principles of GNO is type inference, which allows you to declare a
variable and let GNO infer its type on its own.

```gno
// Type inference
food = "Water Melon 🍉"

// No type inference
string drink = "Water 🌊"

print "My favourite food is $food" // Output: "My favourite food is Water Melon 🍉"
print "My favourite drink is $drink" // Output: "My favourite drink is Water 🌊"
```

### Semicolon-less

There are no semicolons in GNO. Instead, it uses line ends to determine how to interpret your code.
GNO still uses brackets, however, as it is **not** an indentation-focused language.

### Optional Brackets

It is completely optional to provide brackets in method calls, conditions, loops, and other constructs. This way, you're not forced to use
them, but you still can if you think it improves readability.

```gno
print "Hello World!" // Output: "Hello World!"
print("Hello World!") // Output: "Hello World!"

if (x is 5) {
    // ...
}

if x is 5 {
    // ...
}
```

## Readability-Oriented

GNO uses a multitude of text alternatives to traditional operators, such as the `and` keyword,
instead of the `&&` operator in many other languages, for example. Other examples include `is`
instead of `==`, `not` instead of `!`, or `exists` instead of `!= null`.

```gno
animal = "Lion 🦁"

if animal is "Panda 🐼" {
    print "You have encountered a wild panda!"
} else if animal is "Lion 🦁" {
    print "You'd better run!"
}
```

## Comfortable Object-Orientation

GNO is designed to be an object-oriented programming language that, despite its focus on
readability, tries to eliminate the typical _writing mania_ of object-oriented languages. It
emphasises simplicity and attempts to minimise the amount of _'thoughtless'_ object-oriented code,
such as constructors, getter & setter methods, fields, equality methods, and so on...

### Protection Levels

GNO does not have protection levels (public, private, protected, package-level, etc.) in the
traditional sense. Consider the following example:

```gno
class Car
```

The class `Car` does not have a preceding `public` or `private` keyword, but can be accessed by all
other classes in the same folder. Let's add some properties to our cars:

```gno
class Car
(
    double weight
    int maxVelocity
    Colour colour
)
```

Again, note how none of these properties have an explicit protection level. Nonetheless, classes can
use these properties by accessing their internal `get`-methods and change their properties by
accessing their internal `set`-methods:

```gno
car1 = Car(1400.50, 200, Colour.RED)
car2 = Car(2400.50, 180, Colour.Black)

print car1.maxVelocity // Output: "200"

car2.weight = 1200.25
```

As you can see, by default, properties behave like `public` members in a lot of other languages. But
what if we don't want other classes to be able to access a certain property? Well, we simply tell
GNO to only provide the `set` method:

```gno
carTest = Car(1000d, 220, Colour.RED)
print carTest.weight // Compilation Error: Cannot access `get` method of carTest

class Car
(
    double:set weight
    int maxVelocity
    Colour colour
)
```

And if we don't want other classes to change properties? You've guessed it: We tell GNO to only provide
the `get` method:

```gno
class Car
(
    double:get weight
    int maxVelocity
    Colour colour
)
```

And of course, we can completely cut them off from other classes by telling GNO to supply neither
method (thus, behaving like `private` members in a lot of other languages):

```gno
class Car
(
    double: weight
    int maxVelocity
    Colour colour
)
```

### Constructors

The prior example has also shown how easy it is to create objects. GNO will automatically create a
primary constructor that expects all specified properties. But what if you want to exclude certain
properties from the primary constructor? Simply tell GNO by preceding it with the colon `:` (one of
the most important GNO operators, by the way!):

```gno
carTest = Car(1000d, 220, Colour.RED)
class Car
(
    double: weight
    int maxVelocity
    Colour colour
    :Person owner
)
```

And of course, you can also tell GNO that an excluded variable should not have a `get`-method,
`set`-method or neither, just as we have seen above.

```gno
class Car
(
    double: weight
    :int:get maxVelocity
    :Colour:set colour
    :Person: owner
)
```

In the body of the class, you can specify further constructors, using the `constructor` keyword:

```gno
class Car
(
    double: weight
    int maxVelocity
    Colour colour
)
{
    constructor() {
        print "This constructor expects no arguments, at all!"
    }
}
```
