let score = JSON.parse(localStorage.getItem('score')) || 
          {
            Wins: 0,
            Losses: 0,
            Ties: 0
          };

        updateScoreElement();
          

        let computer = '';

        function resetScore()
        {
          score.Wins = 0;
          score.Losses = 0;
          score.Ties = 0;
          localStorage.removeItem('score');
          updateScoreElement();
          
        }

        function updateScoreElement ()
        {
          document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
        }

        function pickComputerMove()
        {
          let randomNumber = Math.random();
          if(randomNumber <= 1/3)
          {
            computer = 'rock';

          }
          else if (1/3 < randomNumber && randomNumber <= 2/3)
          {
            computer = 'paper';
          }
          else
          {
            computer = 'scissors';
          }
          
          return computer;
        }

        function printResult(result)
        {
          document.querySelector('.js-result')
            .innerHTML = `${result}`
        }
        function chosenItems(comp,user)
        {
          document.querySelector('.js-items')
            .innerHTML = `You 
            <img src="objects/${user}-emoji.png" class="move-icon">
            <img src="objects/${comp}-emoji.png" class="move-icon">
            Computer`
        }

        function result(user)
        {
          const computer = pickComputerMove();
          let res = '';
          if (computer === user)
          {
            res = 'It is a tie';
          }
          else if (computer === 'rock' && user === 'paper')
          {
            res ='You won';
          }
          else if (computer === 'rock' && user === 'scissors')
          {
            res = 'You lost';
          }
          else if (computer === 'paper' && user === 'scissors')
          {
            res ='You won';
          }
          else if (computer === 'paper' && user === 'rock')
          {
            res = 'You lost';
          }
          else if (computer === 'scissors' && user === 'rock')
          {
            res ='You won';
          }
          else if (computer === 'scissors' && user === 'paper')
          {
            res = 'You lost';
          }

          if (res === 'You won')
          {
            score.Wins += 1;
          }
          else if ( res === 'You lost' )
          {
            score.Losses += 1;
          }
          else
          {
            score.Ties += 1;
          }


          localStorage.setItem('score',JSON.stringify(score));
          printResult(res);
          chosenItems(computer,user);
          updateScoreElement();

          
        } 
       