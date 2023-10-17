# Singleton Classes

Singleton classes are classes that have exactly one object. This is a very useful pattern that can
be applied to many types of classes like managers, services, etc.

In GNO, a class receives a singleton by designating the class with the `single` class definition.

_Example_:

```gno
single class AttachmentService {
    void HandleAttachment(Attachment attachment) {
        // Some concrete implementation
    }
}
```

In the example, the class `AttachmentService` has exactly one object, which is instantiated
automatically by GNO in your program's lifecycle.
Similar to abstract classes, singleton classes cannot be instantiated as they already have the
single instance they should have.

Singleton classes cannot have static members.

## Accessing Singleton Classes

To access a singleton class, access it as you are accessing ordinary static members using first the
identifier of the singleton class, followed by the access operator `.`, and then the member you
want to access.

_Example_:

```gno
single class AttachmentService {
    void HandleAttachment(Attachment attachment) {
        // Some concrete implementation
    }
}
```

```gno
AttachmentService.HandleAttachment(Attachment("important.pdf"))
```

## Invoking Singletons

It can be beneficial to enforce lazy initialization of a singleton before allowing its methods to
be called. To do this, use the `invoke single` class definition, instead.

If used, a singleton can only be called after it has been invoked.

```gno
invoke single class AttachmentService {
    void HandleAttachment(Attachment attachment) {
        // Some concrete implementation
    }
}
```

```gno
// Error: AttachmentService has not been invoked, yet
AttachmentService.HandleAttachment(Attachment("important.pdf"))

invoke AttachmentService

// Now, the singleton can be used
AttachmentService.HandleAttachment(Attachment("important.pdf"))
```
