# Abstract Classes

Abstract classes are classes that cannot be instantiated, but only inherited from.
This way you can provide a template of what a class should be, but know that it will never be
instantiated, hence the name _abstract_.

An example use case would be a library that allows borrowing all kinds of media like books,
films, video games, etc.
Here, you could have the classes `Book`, `Film`, and `Video game`. But surely all of these media
have some common behaviour. Maybe all of these mediums share a common MediaID, for example.

We could certainly use inheritance in GNO to make all medias extend from a parent class like so:

```gno
class Media(
    long:get mediaID,
    Date:get acquiringDate
)

class Book of Media
class Film of Media
class VideoGame of Media
```

This works, but annoyingly we could now also instantiate the Media class despite the fact that it
merely represents _any_ type of media, but itself is not actually a type of media.

```gno
Media book = Book(1_452_523L, Date())
Media media = Media(0L, Date())
```

Not only is this prone to error (what happens if you automatically call a method for all Media
objects, for example?), but it is also not very readable and generally bad practice.

In GNO, a class is abstract if it is designated with the `abstract` class definition.

```gno
abstract class Media(
    long:get mediaID,
    Date:get acquiringDate
)

class Book of Media
class Film of Media
class VideoGame of Media
```

## Abstract Methods

In all other regards, abstract classes behave like default classes, except that they can contain
abstract methods.

Abstract methods allow specifying that subclasses should implement them without defining
them in the abstract class. In other words, the actual implementation of the method is pushed to the
child classes.

Methods are abstract if they are designated with the `abstract` method definition.
Abstract methods do not contain a method body.
They **must** be implemented by all children using the `overridden` method definition followed
by the name of the implemented method.

```gno
abstract class Media(
    long:get mediaID,
    Date:get acquiringDate
) {
    abstract RequiredMembershipToBorrow()
}

class Book of Media (
    Author:get author
) {
    GetSuggestions() => author.works.over.Sorted().Until(3).ToArray()

    overridden RequiredMembershipToBorrow() => Membership.ANY
}

class Film of Media {
    overridden RequiredMembershipToBorrow() => Membership.PREMIUM
}

class VideoGame of Media {
    overridden RequiredMembershipToBorrow() => Membership.PREMIUM
}
```

The example also shows that normal methods can be used as usual.
