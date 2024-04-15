# Events

Objects can subscribe to events in order to execute code when the event is invoked.
In GNO, events are declared in the body of a class using the `event` keyword.
All events are written in CamelCase and can have an optional generic value, which needs to be
passed when invoking the event. If no generic value is given, there may not be an argument when
invoking the event either.

```gno
single class OrderService {
    event {
        OnNewOrder<Order>,
        OnCancelOrder<Order>,
        OnCancelAllOrders
    }
}
```

The example above defines three events. The first two events require an object _Order_, the last
event does not require an object as an argument.

## Event Visibility

Events are `gettable`, but not `settable`. They are not part of the object's constructor.
Event names must be unique within their class, no other member may share that name.

By default, members can both subscribe to events and invoke them.
To only allow subscriptions, but not invocation functionality, the `sealed` keyword is used.

```gno
single class OrderService {
    event {
        sealed OnNewOrder<Order>,
        OnCancelOrder<Order>,
        OnCancelAllOrders
    }
}
```

## Subscribing To Events

Objects can subscribe to events by using the `+=` operator, followed by either a lambda expression,
or the name of a method. The lambda expression / method needs to adhere to the generic value of
the event if the event uses a generic value. Lambda expressions are defined in the chapter
_Lambdas_.

```gno
OrderService.OnNewOrder += order => print "New order received. Order: $order"
OrderService.OnCancelOrder += NotifyOfCancelledOrder

NotifyOfCancelledOrder(Order order) {
    order.customer.WriteMail("Your order has been cancelled. Order: $order")
}
```

When subscribing to an event, methods may waive the event arguments, which can help reduce
boilerplate code in certain scenarios. To do so, the `empty` keyword is appended before the method
name. It is recommended to be careful when using this approach.

```gno
// Supplies the current turn as an integer
TurnService.OnNewTurn += SampleSpawnHandCard
TurnService.OnNewTurn += empty SpawnHandCard

// This method is not actually interested in the specific event arguments
SampleSpawnHandCard(int currentTurn) {
    print "Spawned a new hand card!"
}

SpawnHandCard() {
    print "Spawned a new hand card!"
}
```

## Unsubscribing From Events

Objects can unsubscribe from by using the `-=` operator, followed by the name of the referenced
method.

```gno
OrderService.OnCancelOrder += NotifyOfCancelledOrder
OrderService.OnCancelOrder -= NotifyOfCancelledOrder

NotifyOfCancelledOrder(Order order) {
    order.customer.WriteMail("Your order has been cancelled. Order: $order")
}
```

Note that this unsubscribes all instances of the referenced methods, meaning that if a
single method subscribes to an event multiple times, whether different parameters are passed or not,
unsubscribing from the event will unsubscribe all method instances.

```gno
NotifyOfCancelledOrder(Order order, int id) {
    printin id
    order.customer.WriteMail(" Your order has been cancelled. Order: $order")
}

// Subscribe to the OnCancelOrder event three times
OrderService.OnCancelOrder += NotifyOfCancelledOrder(it, 1)
OrderService.OnCancelOrder += NotifyOfCancelledOrder(it, 2)
OrderService.OnCancelOrder += NotifyOfCancelledOrder(it, 3)

// Invoke the event to see the outputs
OrderService.OnCancelOrder(Order("Example Order"))
// 1 Your order has been cancelled. Order: Example Order
// 2 Your order has been cancelled. Order: Example Order
// 3 Your order has been cancelled. Order: Example Order

OrderService.OnCancelOrder -= NotifyOfCancelledOrder

// Invoke the event again, now that we unsubscribed from the event
OrderService.OnCancelOrder(Order("Example Order"))
// [No output]
```

## Invoking Events

Events are invoked in the same way like how methods are called.
If the event uses a generic value, it must be passed as a generic argument.
The order of arguments needs to be in matching order if multiple generic values are defined.

```gno
// Create an example Order object
currentOrder = Order()

// When a cancel button is clicked, invoke the cancel event
OnCancelButtonClicked() => OrderService.OnCancelOrder(currentOrder)
```
