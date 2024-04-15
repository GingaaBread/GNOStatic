# Sample

This sample is an example implementation of Texas Hold 'Em Poker written in GNO.
It starts with an overview of what will be written, and then contains the source code step-by-step.

## Overview

Implementing Texas Hold 'Em in GNO presents a valuable learning opportunity.
It involves tackling fundamental programming concepts such as data structures, algorithms, and
object-oriented design. Through this project, we aim to showcase how GNO can elegantly handle the
complexities of a real-world application.

## Goals

1. Player Addition:

- Allow the addition of two or more players to a game session.
- Capture essential player information, such as names and initial chip counts.

2. Game Initialization:

- Initialize a deck of cards and shuffle it before the start of each game.
- Distribute a set number of cards to each player, simulating the initial deal in Texas Hold 'Em.

3. Gameplay Mechanics:

- Implement the core gameplay mechanics of Texas Hold 'Em, including betting rounds and card
  exchanges.
- Enable players to make bets, check, or fold based on the state of the game.

4. Winner Determination:

- Develop logic to determine the winner at the end of each hand by evaluating the best hand
  combination according to poker rules.

5. Chips and Betting:

- Manage player chips throughout the game, updating chip counts after each betting round.
- Enforce minimum and maximum betting limits to ensure a fair and engaging experience.

## Entities

We will use a `Player` entity to encapsulate the names and chips of all players, a `Card` entity,
composed of a `CardSuit` and `CardValue` enumeration, which represents a typical poker card.
We will use a `Deck` entity, which contains all cards, and a `PlayerHand` entity, which contains
the cards in the players' hands. We will use a `Board` entity that contains the five cards
on the game board (at the start of the game, there will be no cards, the flop will reveal three
cards, the turn will reveal an additional card, and the river will reveal the last card).
Finally, we will use one entity `Group`, which contains all players of the current game.

```gno
in Sample.Poker {

    in Sample.Poker.Entity {

        entity Player (
            string:get name,
            int currentAmountOfChips,
            :PlayerHand hand
        )

        with Sample.Poker.Entity.Card
        entity PlayerHand (
            Card! first,
            Card! second
        )

        in Sample.Poker.Entity.Card {

            enum CardSuit {
                CLUBS,
                SPADES,
                DIAMONDS,
                HEARTS
            }

            enum CardValue {
                2..10,
                JACK,
                QUEEN,
                KING,
                ACE
            }

            entity Card (
                CardSuit! suit,
                CardValue! value
            )

        }

        with Sample.Poker.Entity.Card
        entity Deck (
            :Stack<Card> deck = empty
        )

        with Sample.Poker.Entity.Card
        entity Board (
            :Card[] cards = 5 // there will be a maximum of five cards on the board
        )

        entity Group (
            :Player[,] players = empty
        )

        entity Bet (
            int currentBet,
            Player currentPlayerWhoMustBet
        )
    }
}
```

## Services

Services will provide the actual business logic for our poker application.
In contrast to the entities, we will define the required services one after another.

### Deck Service

The deck service should be able to add all required cards for poker, offer a method for shuffling
the deck, and retrieving the top card from the deck.

```gno
in Sample.Poker.Service {

    with Sample.Poker.Entity
    service for Deck {
        Create() {
            foreach suit in CardSuit.constants {
                deck.Push(Card(suit, CardValue.TWO))
                deck.Push(Card(suit, CardValue.THREE))
                deck.Push(Card(suit, CardValue.FOUR))
                deck.Push(Card(suit, CardValue.FIVE))
                deck.Push(Card(suit, CardValue.SIX))
                deck.Push(Card(suit, CardValue.SEVEN))
                deck.Push(Card(suit, CardValue.EIGHT))
                deck.Push(Card(suit, CardValue.NINE))
                deck.Push(Card(suit, CardValue.TEN))
                deck.Push(Card(suit, CardValue.JACK))
                deck.Push(Card(suit, CardValue.QUEEN))
                deck.Push(Card(suit, CardValue.KING))
                deck.Push(Card(suit, CardValue.ACE))
            }
        }

        Shuffle() with deck is not empty {
            deck = Stack<>(deck.ToList().Shuffle())
        }

        DrawFromTop() with deck is not empty => deck.Pop()
    }

}
```

### Group Service

The game service should be able to add new players to the game and deal out cards to all players.

```gno
in Sample.Poker.Service {

    with Sample.Poker.Entity
    service for Group {
        AddPlayer(Player! newPlayer) => players += newPlayer

        DealOutCards() with players is not empty {
            foreach in players {
                players.hand !!= (DeckService.DrawFromTop(), DeckService.DrawFromTop())
            }
        }
    }

}
```

### Round Setup Service

The round setup service is responsible for informing the deck service that it should shuffle the
deck and the group service that it should deal out cards to all players.

```gno
in Sample.Poker.Service {

    with Sample.Poker.Entity
    service RoundSetup {
        SetupRound() {
            DeckService.Shuffle()
            GroupService.DealOutCards()
        }
    }

}
```

```gno
in Sample.Poker.Service {

    with Sample.Poker.Entity
    service Bet {
        TakeNextBet() {
            DeckService.Shuffle()
            GroupService.DealOutCards()
        }
    }

}
```
