# Value Classes

The `value` keyword can be used as a class definition to create value classes.

Value classes allow defining classes that should only act as values for properties of other classes.
This can significantly improve the readability, maintainability and efficiency of your programs.

## Example

```gno
value class Temperature(single temperatureInC) {
    InFahrenheit() => 1.8 * temperatureInC + 32
}

// The "class" keyword can be inferred

value Vector2(int x, int y)
```

## Caveats & Differences

- Value classes are not nullable by default
- Value classes can only contain primary type properties
- Value classes cannot contain casting definitions
- Value classes can only inherit from other value classes
- Properties of value classes cannot be instantiated to default values
- All properties of value classes must be open, gettable, and settable
