# Objects

Objects are the most essential part of object-oriented languages. The concept refers to first
providing blueprints for how data should be formed, and then creating instances of those blueprints.
These instances are called objects.

For example, if we consider humans as blueprints or classes, each individual human who ever lived
can similarly be considered as an object or instance of that human blueprint / class.

## Creating / Instantiating Objects

Objects can be created by referencing the class that the object belongs to.

To stick with the prior example, let's consider a class _Human_:

```gno
class Human
```

We can now declare an object of that class by giving the object variable a name:

```gno
Human me
```

Note that just like other variables, this object variable has merely been declared, but is not
yet instantiated to an object. To do so, we use the class name followed by a legal class
constructor.

```gno
Human me
me = Human()
```

> Since the human class does not define properties or a custom constructor, the object instantiation
> has an empty constructor

Just like primary variable types, we can inline object declaration and instantiation, and infer
object types:

```gno
Human me = Human()
otherHuman = Human()
```

To see how objects with non-empty constructors are instantiated, read the chapter on _classes_
and _constructors_.

## Instantiating Null

Unlike primary types, objects are nullable. This allows you to explicitly instantiate an object
as `null`. Objects are null if they have not been instantiated.

```gno
class A

// Implicit
A a1

print a1 is null // "true"

// Explicit
A a2 = null

print a2 is null // "true"
```

## Instantiating Sets

Sets are objects, which contain multiple elements. They are automatically instantiated to `empty`
when declared. This is in contrast to other objects, which are automatically instantiated to `null`.

```gno
// Implicit
Sample[,] sample

print sample is null // "false"

// Explicit
Other[,] other = empty

print other is null // "false"
```

## Inferred Instantiation

In non-declarative contexts, object instantiations can be inferred by using the `of` keyword.

```gno
class SampleClass

SampleClass[,] sampleList

// Without inferred instantiation
sampleList += SampleClass()

// With inferred instantiation
sampleList += of()
```

::: tip
This is especially useful when working with generic classes
:::
