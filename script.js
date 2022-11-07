var again = true;
while( again ) {
    var playerChoice = prompt('Choose: rock, paper, scissors');
    var computerChoice = Math.random();

    if( computerChoice < 0.34 ) {
        computerChoice = 'rock';
    } else if( computerChoice >= 0.34 && computerChoice < 0.67) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    var result ='';

    if( playerChoice == computerChoice ) {
        result = 'DRAW!';
    } else if( playerChoice == 'rock' ) {
        result = ( computerChoice == 'scissors' ) ? 'YOU WIN!' : 'YOU LOSE!';
    } else if( playerChoice == 'paper' ) {
        result = ( computerChoice == 'rock' ) ? 'YOU WIN!' : 'YOU LOSE!';
    } else if( playerChoice == 'scissors' ) {
        result = ( computerChoice == 'paper' ) ? 'YOU WIN!' : 'YOU LOSE!';
    } else {
        result = 'nothing because you entered the wrong choice!';
    }

    alert('Your choice: ' + playerChoice + '. ' + 'Computer choice: ' + computerChoice + '.\n' + 'The result is ' + result);
    
    again = confirm('Try Again?');
}

alert('Ok. See ya.')