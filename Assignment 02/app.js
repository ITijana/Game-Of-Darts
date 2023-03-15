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

function fistPlayerHit() {
    const randomHit = Math.floor(Math.random() * 6) + 15;
    firstArr.push(randomHit);
           
    let score = 501;
    
    for (let i = 0; i < firstArr.length; i++) {
        score -= firstArr[i];
    }
    scoreOne.innerText = `${score}`;

    ballOne++;
    if(ballOne >= 3) {
            secondPlayer.checked = true; 
            ballOne = 0;
    }
}

function secondPlayerHit() {
    const randomHit = Math.floor(Math.random() * 6) + 15;
    secondArr.push(randomHit);
        
    let score = 501;
    for (let i = 0; i < secondArr.length; i++) {
        score -= secondArr[i];
    }
    scoreTwo.innerText = `${score}`;

    ballTwo++;
    if(ballTwo >= 3) {
        firstPlayer.checked = true;
        ballTwo = 0;
    } 
}

function getHit() {
    if(firstPlayer.checked) {
        fistPlayerHit();
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