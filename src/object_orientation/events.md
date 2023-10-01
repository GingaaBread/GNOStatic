# Events

Objects can subscribe to events to execute code when the event occurs.
In GNO, events are declared in the body of a class using the `event` keyword.
All events are written in CamelCase and can have an optional generic value, which needs to be
passed when invoking the event.

```gno
single class OrderService {
    event {
        OnNewOrder<Order>,
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
OrderService.OnNewOrder += print "New order received. Order: $it"
OrderService.OnCancelOrder += NotifyOfCancelledOrder

NotifyOfCancelledOrder(Order order) {
    order.customer.WriteMail("Your order has been cancelled. Order: $order")
}
```

## Unsubscribing From Events

Objects can unsubscribe from by using the `-=` operator, followed by the name of the subscribing
method.

```gno
OrderService.OnCancelOrder += NotifyOfCancelledOrder
OrderService.OnCancelOrder -= NotifyOfCancelledOrder

NotifyOfCancelledOrder(Order order) {
    order.customer.WriteMail("Your order has been cancelled. Order: $order")
}
```

## Invoking Events

Objects can invoke events similar to how methods are called.

```gno
currentOrder = Order()

OnCancelButtonClicked() => OrderService.OnCancelOrder(currentOrder)
```
