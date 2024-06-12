# Interface

An interface defines methods an inheriting class **MUST** implement.
A class can implement any number of interfaces, in addition to a potential inherited class.

## Header Definition

An interface **MUST** start with the _I_ (interface) prefix. To define an interface, the `interface`
keyword is used.

```gno
interface IConsumable {

}
```

## Body Definition

The body of an interface may define any number of interface methods. Interface methods do not
declare a method body. It is up to the implementing class to implement interface methods.

```gno
interface IConsumable {
    ConsumeInteger(int integer)
}
```

## Implementing Interfaces

To implement an interface, the `is` keyword is used. If a class implements an interface it **MUST**
implement all of its methods.

To implement a method, the `implemented` keyword is used, followed by the desired interface method
implementation.

```gno
class SampleConsumer is IConsumable {
    implemented ConsumeInteger(int integer) {
        print "This consumer simply prints the integer to the console: $integer"
    }
}
```

::: tip
In the examples above, the return type "void" is inferred, just as it would be in class methods.
:::
