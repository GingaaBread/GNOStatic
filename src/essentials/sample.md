# Sample

The following example contains code for the card game _Mau Mau_.

```gno
/**
*  The following example codes the card game 'Mau Mau'
*/

// Create the root service, which manages the other services
root = RootService()

// Gather the player names from the given input
string[] playerNames
playersCreated = false

until playersCreated {
    print "Please add 2-5 player names, separated by a comma without spaces."
    print "Example Input: Red,Blue,Green"

    try {
        playerNames = input() \ ","

        if |playerNames| is in 2..5 {
            success = true
        }
    } catch {
        printin "That was not quite right. Please adhere to the format and try again."
    }
}

// Start the game
root.gameService.Setup(playerNames)

in Sample.Entities {

    // A card can have one of these four card suits
    enum CardSuit {
        CLUBS,
        HEARTS,
        DIAMONDS,
        SPADES
    }

    // A card can have values from 2 to 10, Jack, Queen, King or Ace
    enum CardValue {
        2..10, // Ranges can be used in enums to define multiple constants at once
        JACK = 11, // Enum constants can be assigned a constant value
        QUEEN = 12,
        KING = 13,
        ACE = 14
    }

    // Interfaces are implemented using the 'is' keyword
    entity Card is Comparable
    (
        CardSuit suit
        CardValue value
    )
    {
        // the identity operator (#) refers to the constant value of an enum constant
        implemented CompareTo(Card other) => value# - other.value#
    }

    // An entity is a special class that already includes equality checks, not null checks, etc.
    entity Player
    (
        // The 'with' keyword can be used to provide code checks
        string name with is not empty
        List<Card> handCards with |#| is 8
    )
    {
        HasWon() => handCards is empty
    }

    entity Game
    (
        Stack<Card>:get deck
        Stack<Card>: discardPile
        Card:get centreCard
        // Here, we're checking if the cardinality of the players list is in the range of 2 to 5
        List<Player> players with |#| is in 2..5
    )
    {
        // We can add an exclamation mark (!) suffix to add a not-null check
        Discard(Card! cardToDiscard) => discardPile.Push(cardToDiscard)

        // methods can also use code checks in their signatures
        ReshuffleDiscardPileIntoDeck() with deck is empty {
            discardPile.over.All(deck.Push(#Pop))
            ShuffleDeck()
        }

        RevealCentreCard() => centreCard = deck.Pop()

        Play(Card! cardToPlay) with suit is centreCard.suit or value is centreCard.value {
            centreCard = cardToPlay
        }
    }
}

in Sample.Services {

    class GameService
    (
        RootService:get rootService
        :Player:get currentPlayer
        :Game:get currentGame
        :int: turnNumber
    )
    {
        // Flags are global booleans used to assert the state of your code
        Setup(List<string> playerNames) flags hasBeenSetup {
            deck = Stack()

            // Create a deck with all possible value / suit combinations
            CardSuit.over.All(CardValue.over.All(deck.Push(Card(#0, #1))))
            deck.Shuffle()

            // Create all players with their names and empty hand cards
            players = playerNames.over.Mapped(Player(#, List()))
            players.Shuffle()

            currentPlayer = players[turnNumber]

            currentGame = Game(deck, Stack(), null, players)
        }

        DrawStartingCards() with hasBeenSetup {
            currentGame.players.over.All {
                // Give all players eight cards
                repeat(8) => #.handCards.Add(currentGame.deck.Pop())
            }
        }

        InitiateNextTurn() with hasBeenSetup {
            turnNumber++
            currentPlayer = players[turnNumber + 1 % |players|]
        }
    }
}

class PlayerActionService(RootService rootService) {

    PlayHighestIfPossible() with hasBeenSetup {
        currentPlayer = rootService.gameService.currentPlayer
        cards = currentPlayer.handCards
        game = rootService.gameService.currentGame

        // Check if the player has a card that can be played
        if cards.over.Any(game.centreCard.value is #.value or game.centreCard.suit is #.suit) {
            highestCard = cards.Max()
            game.Play(highestCard)

            if currentPlayer.HasWon() {
                print("${currentPlayer.name} has won the game!")
            } else {
                rootService.gameService.InitiateNextTurn()
            }
        } else {
            // If not, the player has to draw one card
            cardToDraw = game.deck.Pop()
            cards.Push(cardToDraw)

            // If the player just drew the last card, reshuffle the deck
            if game.deck.IsEmpty() {
                game.ReshuffleDiscardPileIntoDeck()
            }

            // The player has one more chance to use the drawn card
            if cardToDraw.value is game.centreCard.value or cardToDraw.suit is game.centreCard.suit {
                game.Play(cardToDraw)
                currentPlayer.handCards.Remove(cardToDraw)
            }

            rootService.gameService.InitiateNextTurn()
        }
    }
}

class RootService (
    :GameService:get gameService (this)
    :PlayerActionService:get playerActionService (this)
)
```
