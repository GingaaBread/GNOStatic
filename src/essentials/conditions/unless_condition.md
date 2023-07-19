# Unless Condition

An unless condition is syntactic sugar for a negated if condition.

It is logically equivalent to:

```gno
if not BOOLEAN_EXPRESSION {

}

// =

unless BOOLEAN_EXPRESSION {

}
```

It can be used to increase legibility.

_Example:_

```gno
Player player = GetRandomPlayer()

unless player.IsInGuild() {
    MailService.SendMailToPlayer(player, "New feature available: Join guilds!")
}
```

::: tip
Note that the unless condition does not have variations like `if-else`, `if-else-if`, etc. because
in these cases using an if condition is always preferred!
:::
