# Entity Classes

Entity classes in GNO are a way to implement data based patterns like MVC, MVVC, and so on.

A class is considered an entity, if it is designated with the `entity` class definition.

_Example:_

```gno
enum Weekday {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
}

entity class Calendar (
    Weekday weekday,
    int year,
    int month,
    int day
)
```

## Class Keyword

If used, the `class` keyword can be dropped. This makes for a more precise syntax:

_Example:_

```gno
enum Weekday {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
}

entity Calendar (
    Weekday weekday,
    int year,
    int month,
    int day
)
```

## Differences

Entity classes do not _add_ any functionality, but do the exact opposite:

1. entity classes can only define builtin and entity properties

> Builtins are defined in the chapter Advanced/Builtins, but examples include primitive types,
> arrays, lists, and enumerations.

2. entity classes cannot change the values of their properties
3. entity classes cannot reference other members
4. the default protection level of entity properties are `:set`
