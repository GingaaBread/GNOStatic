# If Condition

The if condition is used to execute code, but only if a certain condition is met.
The condition is expressed as a boolean, which can only evaluate to either `true` or `false`.
If the condition equals `true`, the body of the condition will be executed, and if it equals `false`
it will be skipped.

Example:

```gno
User user = createRandomUser()
if user.HasWishlist() and user.accountAgeInYears >= 5 {
    MailService.SendMailToUser(user, "Thank you for staying with us for so long!")
    user.GiftGame(user.wishlist[0])
}
```

In the example above, the randomly selected user will only receive a mail with a gift if the user's
account is five years old or older and the user has at least one game on their wishlist. If either
the account is not five years old or older or the user does not have any games on their wishlist,
the condition is not met, and the code inside the body will not be executed.

## Structure

An if-condition is structured like so:

```gno
if BOOLEAN_EXPRESSION {

} else if OTHER_BOOLEAN_EXPRESSION_1 {

} ... {

} else if OTHER_BOOLEAN_EXPRESSION_n {

} else {

}
```

## If-Else Condition

An `else` condition can be used in an if-condition, which is used to execute code if the condition
is **not** met.

Example:

```gno
int x = 5

if x is 3 {
    print "x is 3!"
} else {
    print "x is not 3!"
}

// "x is not 3!"
```

## If-Else-If Condition

An `else if` condition can be used in an if-condition, which is used to execute if the condition(s)
above are **not** met, but the condition of the `else if` **are** met. Once a condition in this
construction has been met, no other conditions will be checked anymore, and the code continues after
the condition.

Example:

```gno
int x = 5

if x is 3 {
    print "x is 3!"
} else if x is 4 {
    print "x is 4!"
} else if x is 5 {
    print "x is 5!"
} else if true {
    print "This is always true!"
}

// "x is 5!"
```

Note how in the example above, `"This is always true!"` is not printed despite the fact that the
condition is always met. This is because the condition `x is 5` has already been evaluated to
`true`, and the if condition is skipped after executing its body.

## If-Else-If-Else Condition

The prior construction can also contain a final `else`, which is executed if **no** other conditions
are met.

```gno
int x = 1

if x is 3 {
    print "x is 3!"
} else if x is 4 {
    print "x is 4!"
} else if x is 5 {
    print "x is 5!"
} else {
    print "x is something else!"
}

// "x is something else!"
```
