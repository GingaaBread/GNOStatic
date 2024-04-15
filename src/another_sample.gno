game = RockPaperScissors()
game.NewRound()

class RockPaperScissors {
    NewRound {
        choices = ["r", "p", "s"]

        print "Rock, Paper or Scissors? $choices"
        result = input() // blocks until input is given

        until result is in choices {
            print "Illegal input, please only supply $choices"
            print "Rock, Paper or Scissors? $choices"
            result = input() // blocks until input is given
        }
        
        cpuDecision = select any from choices

        HandleDecisions(result, cpuDecision)
    }

    HandleDecisions(string playerDecision, string cpuDecision) {
        if playerDecision is cpuDecision then print "Draw!"
        else {
            if playerDecision is "r" {
                if cpuDecision is "p" then print "CPU wins!"
                else print "You win!"
            } else if playerDecision is "p" {
                if cpuDecision is "r" then print "You win!"
                else print "CPU wins!"
            } else {
                if cpuDecision is "r" then print "CPU wins!"
                else print "You win!"
            }
        }
    }
}