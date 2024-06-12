# Sets

GNO uses the concept of sets for all structures that contain multiple entries. Users from other
languages may know this under the different name (i.e _collections_), but it is essentially the same
concept.

> Note that sets can contain duplicate entries

## Example Sets

Although sets can be used on their own, there are other common example data structures that all
inherit from GNO's set structure. Examples include:

- lists
- pairs
- dictionaries
- stacks
- queues

## Set Conversions

Every data structure that inherits from GNO's set structure can instantly access that data structure
as a set by using the gettable `over` property. This allows an easier and more efficient access,
compared to casting to a set and using pattern matching to create a new variable.

```gno
class SampleSet : set {

}

sampleSet = SampleSet()
asSet1 = sampleSet.over
asSet2 = sampleSet as set

// Useful for functional method chains:

sampleSet
    .over
    .ForEach(==> print "Example")

```

## Set Methods

### All

Executes the given function for all elements in the set.

_Example:_

```gno
ReplenishActions() {
    actionBank
        .gameActions
        .over
        .All(it.currentUserCounter = GameAction.START_AMOUNT_OF_USE_COUNTER)
}
```

### First

Yields the first element in the set.

_Example:_

```gno
numbers = 1..5

firstNumber = numbers
    .over
    .First()

print firstNumber // "1"

firstNumber = numbers
    .over
    .Reversed()
    .First()

print firstNumber // "5"
```

### FirstWhere

Yields the first element in the set that matches the given predicate.

_Example:_

```gno
    IncreaseMaxAmountOfUses(GameActionType actionType) {
        actionBank
            .gameActions
            .over
            .FirstWhere(it.GameActionType is actionType)
            .currentAmountOfMaxUses++
    }
```

### Last

Yields the last element in the set.

### LastWhere

Yields the last element in the set that matches the given predicate.

### Mapped

Converts all elements depending on the specified function.

_Example:_

```gno
class Car (
    Color color
    int maxSpeed
)

cars = [of(Color.RED, 220), of(Color.GREEN, 300)]
print cars
    .over
    .Mapped(it.color as string:ToLower())
// "[red, green]"
```

### ToArray

Converts the set into an array of the same type.

_Example:_

```gno
string[,] nameList
amountOfTimes = select any from 1..50
do amountOfTimes => nameList += "John Doe"

nameList
    .over
    .ToArray()
```

### TrueForAll

Yields `true` if the given predicate is true for all elements in the set and `false` if one or more
elements in the set do not fulfil the predicate.

_Example:_

```gno
numbers = 1..5

print numbers
    .over
    .TrueForAll(it mod 2 is 0) // "false"

print numbers
    .over
    .TrueForAll(it > 0) // "true"
```

### Reversed

Yields the set in reversed order.

_Example:_

```gno
numbers = 1..5

print firstNumber
    .over
    .Reversed() // "[5, 4, 3, 2, 1]"
```
