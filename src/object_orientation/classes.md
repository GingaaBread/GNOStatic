# Classes

Classes are templates of data that you can create and manipulate. In GNO, classes follow the
following layout:

```gno
[Class Definitions] class [Class Identifier] [Class Inheritance] (
    [Class Properties]
) {
    [Class Body]
}
```

## Class Definitions

Class definitions define the type of the class. There are the following class definitions:

- abstract
- single
- iterable

The definitions are explained in detail in the chapter _Class Definitions_.

## Class Identifier

A class identifier needs to be in _UpperCamelCase_. A class identifier needs to be unique in its
folder. Identifier definitions are explained in detail in the chapter _Identifiers_.

## Class Inheritance

A class can inherit from exactly one parent class. To inherit from a class, the `of` keyword is
used.

_Example_:

```gno
class A
class B of A
```

Inheritance is explained in detail in the chapter _Inheritance_.

## Class Header

The optional class header contains the properties of the class. Properties are explained in detail
in the chapter _Properties_.

## Class Body

The optional class body can contain methods, constructors, and the default value of the class.
For information about any of these class body parts, check out their respective chapter.

## Example

The following example creates a calendar.

```gno
enum Weekday {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
}

class Calendar (
    int year,
    int month,
    int day,
    Weekday weekday
) {
    IncrementDay() {
        if day < DaysInMonth(month, year) {
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

    DaysInMonth(int month, int year) => switch month {
        case 4, 6, 9, 11 => 30
        case 2 => IsLeapYear(year) then 29 else 28
        default => 31
    }

    IsLeapYear(int year) {
        get year mod 4 is 0 and
            year mod 100 is not 0 or
            year mod 400 is 0
    }

    GetNextWeekday() => if weekday is SUNDAY then Weekday.MONDAY else weekday + 1
}
```
