# Identifiers

GNO enforces strict syntax rules for identifiers.

## Constants

Constants must be defined in **UPPER_CAMEL_CASE**.
They must start with a letter and may only use uppercase letters, numbers, and the underscore `_`.

## Properties

### Open Properties

Open properties (properties that are either `gettable`, `settable` or both) are defined in
**pascalCase**. They must start with a lowercase letter, and may only use letters, numbers, and
the underscore `_`.

### Closed Properties

Closed properties (properties that are neither `gettable` nor `settable`, or sealed) are defined in
**\_pascalCase**. They must start with an underscore, and may only use letters, numbers, and
the underscore `_`.

## Methods

## Literal Member Identifiers

The dollar character `$` can be used to use GNO keywords as identifiers.
This is useful for generated or automated scripts, but is **NOT** recommended for normal GNO
files. The dollar character is not included in the identifier name.

```gno
// Does NOT compile
class class {

}


// Compiles
class $class {

}
```
