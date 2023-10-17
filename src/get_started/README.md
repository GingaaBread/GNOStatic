# Get Started

GNO is a strongly typed, object-oriented programming language designed to be convenient and readable.
It's three main focuses are:

- Simplicity
- Readability
- Conciseness

## Hello, World!

Create a blank .gno file on your computer like `Welcome.gno`. Using a text-editor of your choice,
add the following line to your file:

```gno
print "Hello World! 💜"
```

Finally, compile and run the program. If the console displays `Hello World! 💜`, you're all set!

## Less Is More

### Statically Typed

GNO is statically typed, which means that the type of a variable is already known during compilation.
One of the main principles of GNO is type inference, which allows you to declare a variable and let
GNO infer its type on its own.

```gno
// Type inference
food = "Water Melon 🍉"

// No type inference
string drink = "Water 🌊"

print "My favourite food is $food" // Output: "My favourite food is Water Melon 🍉"
print "My favourite drink is $drink" // Output: "My favourite drink is Water 🌊"
```

::: tip
GNO recommends using type inference for simple types where the context of the type is clear, and
explicitly declaring variable types in more complex scenarios.
:::

### No Semicolons

There are no semicolons in GNO. Instead, it uses line ends to determine how to interpret your code.
You can use the `\` operator to continue onto the next line without ending the current expression.

```gno
print "Hello World!"
print "Hello World!"; // <-- does NOT compile!

longExpression = select all from userData where it.name.StartsWith("Adm")
longExpression2 = select all from userData \
    where it.name.StartsWith("Adm")
```

### Brackets

GNO uses curly brackets for member bodies. It is **NOT** an indented language.

```gno
class A {

}

switch type {

}
```

Round brackets are optional in loops, conditions, builtin method calls, and many other members.

```gno
print "Hello World!" // Output: "Hello World!"
print("Hello World!") // Output: "Hello World!"

if x is 5 {
    // ...
}

foreach item in items {
    AddItemToInventory(item)
}
```

## Focus On Readability

GNO uses a multitude of keywords instead of traditional operators, such as `and`,
instead of the `&&` operator in many other languages, for example. Other examples include `is`
instead of `==`, `not` instead of `!`, or `exists` instead of `!= null`.

```gno
animal = "Lion 🦁"

if animal is "Panda 🐼" {
    print "You have encountered a wild panda!"
}
```

## Comfortable Object-Orientation

GNO is designed to be an object-oriented programming language that, despite its focus on
readability, tries to eliminate the typical boilerplate code of object-oriented languages.

### Protection Levels

GNO does not have explicit protection levels (public, private, protected, package-level, etc.).
Consider the following example:

```gno
class Car
```

The class `Car` does not have a preceding `public` or `private` keyword, but can be accessed by all
other classes in the same folder. Let's add some properties to our car class:

```gno
class Car
(
    Colour colour,
    double weight,
    int maxVelocity
)
```

Again, note how none of these properties have an explicit protection level. Nonetheless, classes can
use these properties by accessing their internal `get`-methods and change their properties by
accessing their internal `set`-methods, which all properties receive automatically in GNO:

```gno
car1 = Car(1400.50, 200, Colour.RED) // Creating a red car
car2 = Car(2400.50, 180, Colour.BLACK) // Creating a black car

print car1.maxVelocity // Output: "200"

car2.weight = 1200.25
```

Note how, by default, properties behave like `public` members in a lot of other languages. But
what if we don't want other classes to be able to access a certain property? Well, we simply tell
GNO to only share the `set` method:

```gno
carTest = Car(1000d, 220, Colour.RED)
print carTest.weight // <--- Will not compile

class Car
(
    double:set weight,
    int maxVelocity,
    Colour colour
)
```

And of course, we can completely cut them off from other classes by telling GNO to supply neither
method (thus, behaving like `protected` members in a lot of other languages):

```gno
class Car
(
    double: weight,
    int maxVelocity,
    Colour colour
)
```

GNO uses identifiers to add additional features to properties. For example, to hide properties
from child classes, the identifier must start with an underscore (thus, behaving like `private`
members in a lot of other languages):

```gno
class Car
(
    double: _weight,
    int maxVelocity,
    Colour colour
)
```

### Constructors

The prior example has also shown how easy it is to create objects. GNO will automatically create a
primary constructor that expects all specified properties. But what if you want to exclude certain
properties from the primary constructor? Simply tell GNO by preceding it with the colon `:`.

```gno
carTest = Car(1000d, 220, Colour.RED)
class Car
(
    double: weight,
    int maxVelocity,
    Colour colour,
    :Person owner
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
