# Folders

Folders are locations in your project that contain code. It can be very useful to distribute and organise your project using folders. Folders are similar to folders on your operating system, in that they allow a hierarchical distribution of your project.

To declare that the current GNO file should be part of a folder, use the `in` keyword followed by the folder identifier. A folder name needs be unique in its location. If used, a folder declaration is the first and top-most part of a GNO file (unless the file contains the program's main section, which is always the first part of a GNO file).

::: warning
A folder contains inner code. Therefore, unlike all other structs, it **requires** a body.
:::

```gno
in Samples {
    class Sample1
    class Sample2
}
```

Folders can contain structs, which allows you to nest folders:

```gno
in Samples {
    class Sample1
    class Sample2

    in Animals {
        class Dog
        class Cat
    }

    interface SampleInterface
    enum SampleEnumeration
}
```

Folders are named in UpperCaseCamelCase and when used, are separated by full-stops `.`:

```gno
in Samples {
    class Sample1
    class Sample2

    in Animals {
        class Dog
        class Cat

        in Birds {
            class MockingBird
            class Seagull
        }
    }

    class Sample3 {
        constructor() {
            /*
             * Needs to reference the birds folder because
             * it is not in the folder layer of Sample3
             */
            seagull = Animals.Birds.Seagull()
        }
    }

    interface SampleInterface
    enum SampleEnumeration
}
```

Alternatively, folders can be referenced using the `with` keyword:

```gno
in Samples {
    class Sample1
    class Sample2

    in Animals {
        class Dog
        class Cat

        in Birds {
            class MockingBird
            class Seagull
        }
    }

    /*
     * Using "with" allows you to reference all structs
     * inside the Animals.Birds folder
     */
    with Animals.Birds
    class Sample3 {
        constructor() {
            seagull = Seagull()
        }
    }

    interface SampleInterface
    enum SampleEnumeration
}
```
