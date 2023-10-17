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

Events are `gettable`, but not `settable`. They are `unsealed`, and not included in the object's
constructor. Method names defined in the class must not have the same identifier as the event name.

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

However, sometimes you might want to only unsubscribe from a single instance. In this case, you
must use the `as` operator to define a subscription as a method variable.
Note that in GNO method variables are globally accessible, no matter where declared.

```gno
NotifyOfCancelledOrder(Order order, int id) {
    printin id
    order.customer.WriteMail(" Your order has been cancelled. Order: $order")
}

// Subscribe to the OnCancelOrder event three times
OrderService.OnCancelOrder += NotifyOfCancelledOrder(it, 1) as cancelOrder1
OrderService.OnCancelOrder += NotifyOfCancelledOrder(it, 2) as cancelOrder2
OrderService.OnCancelOrder += NotifyOfCancelledOrder(it, 3) as cancelOrder3

// Invoke the event to see the outputs
OrderService.OnCancelOrder(Order("Example Order"))
// 1 Your order has been cancelled. Order: Example Order
// 2 Your order has been cancelled. Order: Example Order
// 3 Your order has been cancelled. Order: Example Order

OrderService.OnCancelOrder -= cancelOrder1

// Invoke the event again, now that we unsubscribed from the event
OrderService.OnCancelOrder(Order("Example Order"))
// 2 Your order has been cancelled. Order: Example Order
// 3 Your order has been cancelled. Order: Example Order
```

## Invoking Events

Objects can invoke events just like how methods are called.
If the event uses a generic value, it must be passed as an argument.
The order of arguments needs to be the same as the generic values if multiple generic values are
defined.

```gno
// Create an example Order object
currentOrder = Order()

// When a cancel button is clicked, invoke the cancel event
OnCancelButtonClicked() => OrderService.OnCancelOrder(currentOrder)
```
