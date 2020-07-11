const game = () =>{
    let pScore=0;
    let cScore=0;

    //start the game
    const startGame=()=>{
        const playBtn= document.querySelector('.intro button');
        const introScreen=document.querySelector('.intro');
        const match= document.querySelector('.match');

        playBtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');

        });
    };

    //play the match
    const playMatch = ()=>{
        const options=document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const  computerHand = document.querySelector('.computer-hand');
        //computer options
        const computerOptions =['rock','paper','scissors'];
        
        options.forEach((option)=>{
            option.addEventListener('click', function(){
                console.log(this);
                //computer choice
                const computerNumber= Math.floor(Math.random() * 3);
                const computerChoice= computerOptions[computerNumber];
                //here we call the compare hands
                compareHands(this.textContent, computerChoice);


                //update images
                playerHand.src = `./assests/${this.textContent}.png`;
                computerHand.src = `./assests/${computerChoice}.png`;


            });
            
        });
        
        
        //console.log(computerNumber);
        

    };


    const compareHands = (playerChoice,computerChoice)=>{
        const winner= document.querySelector('.winner');
        //checking for a tie
        if(playerChoice === computerChoice)
        {
            winner.textContent= "It is a tie";
            return;

        }
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                return;
            }else{
                winner.textContent = 'Computer Wins';
                return;
            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                return;
            }else{
                winner.textContent = 'Player Wins';
                return;
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                return;
            }else{
                winner.textContent = 'Player Wins';
                return;
            }
        }

    };


    startGame();
    playMatch();
};

game();