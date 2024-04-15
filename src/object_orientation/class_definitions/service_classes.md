# Service Classes

Service classes in GNO are a way to implement data based patterns like MVC, MVVC, and so on.

A class is considered a service, if it is designated with the `service` class definition.

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

service class for Calendar {
    IncrementDay() {
        if day < DaysInMonth() {
            day++
        } else {
            day = 1
            if month < 12 {
                month++
            } else {
                month = 1
                year++
            }
        }
        weekday = GetNextWeekday(weekday)
    }

    DaysInMonth() => switch month {
        case 4, 6, 9, 11 => 30
        case 2 => IsLeapYear() then 29 else 28
        default => 31
    }

    IsLeapYear() {
        get year mod 4 is 0 and
            year mod 100 is not 0 or
            year mod 400 is 0
    }

    GetNextWeekday() => if weekday is SUNDAY then Weekday.MONDAY else weekday + 1
}
```

## Class Keyword

If used, the `class` keyword can be dropped. This makes for a more precise syntax:

_Example:_

```gno
service for Calendar {
    // ...
}
```

## Identifier

Note that service classes do not have an identifier.
They just refer to the entity class that they should manage using the `for` keyword.

## Singletons

Service classes are singletons managed by GNO.
For more information about singletons in GNO, read the chapter about the `single` keyword.

## Differences

1. service classes are automatically `single`. You cannot use the already-implied `single` class
   definition when defining a service class.
2. service classes reference a single entity using the `for` keyword, followed by the name of the
   entity class.
3. service classes automatically generate an instance of the managed entity when instantiated.
   The name of the object is the name of the type in `_lowerCamelCase`.
4. service classes have read and write access to all fields of the managed entity without having
   to explicitly refer to the entity instance, similar to inheriting classes.
