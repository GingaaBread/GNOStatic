# Folders

Folders are locations in your project that contain code. It can be very useful to distribute and
organise your project using folders. Folders are similar to folders on an operating system,
in that they allow a hierarchical distribution of a project.

To declare that the current GNO file should be part of a folder, use the `in` keyword followed by
the folder identifier. A folder name needs be unique in its location. If used, a folder declaration
is the first and top-most part of a GNO file (unless the file contains the program's main section,
which is always the first part of a GNO file).

::: warning
A folder **requires** a non-empty body.
:::

```gno
in Samples {
    class Sample1
    class Sample2
}
```

Folders can contain any struct, including sub-folders, which allows you to nest folders:

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

Folders are named in _UpperCaseCamelCase_. Folders are separated by full-stops `.`:

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

Alternatively, folders can be imported using the `with` keyword:

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

Imports must be placed directly above the importing class.
You **cannot** import a struct without using it in the importing class.

If only one folder is defined in a file, the folder body can be left out. Instead, only
the `in` header is placed at the top of the file.

```gno
in Samples {
    class Sample1
    class Sample2
}
```

```gno
in Samples

class Sample1
class Sample2
```
