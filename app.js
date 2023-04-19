// dodavanje novog igraca

let newPlayerInput = document.getElementById('player-name');
let addPlayerButton = document.getElementById('add-player-button');
let chosenPlayersSpan = document.getElementById('players');
let numberOfPlayers = 0;

addPlayerButton.addEventListener('click', players);

function players() {
    let inpValue = newPlayerInput.value;
    if (inpValue.trim() === '') {
        confirm('Please add new player.');
        return;
      }
    else if (inpValue.length <= 15) {
        let br = document.createElement('br');
        chosenPlayersSpan.append(br);
        chosenPlayersSpan.innerHTML += inpValue;
        newPlayerInput.value = '';
    } else {
        confirm('Please eneter valid name.');
    }
    numberOfPlayers++;
    if (numberOfPlayers >= 4) {
        addPlayerButton.disabled = true;
    }
}

///// start game ////// 

let startGameButton = document.getElementById('start-game-button');
startGameButton.addEventListener('click', start);
let divPlayers = document.getElementById('chosen-players');
let playersDiv = document.getElementById('players-div');

function start() {
    if (numberOfPlayers === 1 || numberOfPlayers === 3) {
        confirm('this game can play 2 or 4 players');
    }
    btn.style.display = 'flex';
}

////// igra ///////

let ballOne = 0;
let ballTwo = 0;

let firstArr = [];
let secondArr = [];

let firstPlayer = document.getElementById('first');
let secondPlayer = document.getElementById('second');

let scoreOne = document.getElementById('scoreOne');
let scoreTwo = document.getElementById('scoreTwo');

let repeatedOne = document.getElementById('repeatedOne');
let repeatedTwo = document.getElementById('repeatedTwo');

let btn = document.getElementById('hit');
btn.style.display = 'none';

function firstPlayerHit() {
    let randomHit = Math.floor(Math.random() * 6) + 15;
    firstArr.push(randomHit);
           
    let scoreFirstPlayer = 501;
    
    for (let i = 0; i < firstArr.length; i++) {
        scoreFirstPlayer -= firstArr[i];
    }
    scoreOne.innerText = `${scoreFirstPlayer}`;

    ballOne++;
    if(ballOne >= 3) {
            secondPlayer.checked = true; 
            ballOne = 0;
    }
}

function secondPlayerHit() {
    let randomHit = Math.floor(Math.random() * 6) + 15;
    secondArr.push(randomHit);
        
    let scoreSecondPlayer = 501;
    for (let i = 0; i < secondArr.length; i++) {
        scoreSecondPlayer -= secondArr[i];
    }
    scoreTwo.innerText = `${scoreSecondPlayer}`;

    ballTwo++;
    if(ballTwo >= 3) {
        firstPlayer.checked = true;
        ballTwo = 0;
    } 
}

function getHit() {
    if(firstPlayer.checked) {
        firstPlayerHit();
        let firstRepeatedNums = [];
        for (let i = 0; i < firstArr.length; i++) {
        let num = firstArr[i];
        if (!firstRepeatedNums[num]) {
            firstRepeatedNums[num] = 1;
        } else {
            firstRepeatedNums[num]++;
            if (firstRepeatedNums[num] >= 3) {
            repeatedOne.innerText = (`Zatvoren broj kod prvog igraca je ${num}`);
            if (secondArr.filter(n => n === num).length >= 3) {
                console.log(`Broj ${num} se pojavio tri puta u oba niza!`);
              }
              else if (secondArr.filter(n => n === num).length < 3 && firstRepeatedNums[num] > 3) {
                console.log(`dodaj ${num} u drugi niz`);
              }
            }
        }
        }
        console.log(firstArr);
    }
    else {
        secondPlayerHit();
        let secondRepeatedNums = [];
        for (let i = 0; i < secondArr.length; i++) {
        let num = secondArr[i];
        if (!secondRepeatedNums[num]) {
            secondRepeatedNums[num] = 1;
        } else {
            secondRepeatedNums[num]++;
            if (secondRepeatedNums[num] >= 3) {
                repeatedTwo.innerText = (`Zatvoren broj kod drugog igraca je ${num}`);

                if (firstArr.filter(n => n === num).length >= 3) {
                    console.log(`Broj ${num} se pojavio tri puta u oba niza!`);
                  }
                  else if (firstArr.filter(n => n === num).length < 3 &&secondRepeatedNums[num] > 3) {
                    console.log(`dodaj ${num} u prvi niz`);
                  }
            }
        }
        }
        console.log(secondArr);
    }
}

btn.addEventListener('click', getHit);


