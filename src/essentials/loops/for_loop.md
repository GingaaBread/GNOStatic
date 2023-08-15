# For Loop

## Declarative For-Loop

```gno
for int i = 0; i < 5; i++ {
    print i // 0, 1, 2, 3, 4
}
```

## Transitory For-Loop

```gno
for < 200; += 2 {
    print it // 0, 2, 4, ...
}
```

## Incremental For-Loop

```gno
for it < 200 {
    print it // 0, 1, ..., 199
}
```

## In-Range For-Loop

```gno
for 1..200 {
    print it // 1, 2, ..., 200
}
```
