let score=JSON.parse(localStorage.getItem('score'));
        if (score===null){
        score={
          Wins : 0,
          Losses : 0,
          Ties : 0
        };
      }


      let playing=false;
      let intervalId;

      function interval(){
        if(!playing){
      intervalId=setInterval(
      function ready(){
      let playerMove=compmove();
       play(playerMove);
      }
       ,1000);
       playing=true;
      }
       else{
        clearInterval(intervalId);
          playing=false;
        }
  
    }

 function reset(){
   score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;
    localStorage.removeItem('score');
    updateScore();
 }
document.querySelector('.js-zero-button').addEventListener('click',()=>{
    reset();});

    document.querySelector('.js-paper-button').addEventListener('click',()=>{
      play('Paper');
    });
    document.querySelector('.js-rock-button').addEventListener('click',()=>{
      play('Rock');
    });
    document.querySelector('.js-scissor-button').addEventListener('click',()=>{
      play('Scissor');
    });

    document.body.addEventListener('keydown',(event)=>{ if(event.key==='r'){play('Rock');}
  else if(event.key==='p'){
    play('Paper');
  }
  else if(event.key=='s')
  {
   play('Scissor');
  } 
  else if(event.key=='0')
  {
   reset();
  } 
}
  );
    
    

     function play(option){
        const cmove=compmove();
         let result='';
          if (option==='Rock')
          {
            if ( cmove==='Rock')
      {
        result='Its a tie';
      }
       else if ( cmove==='Paper')
      {
        result='You lose';
      }
       else if ( cmove==='Scissor')
      {
        result='You win';
      }
         }
         else if(option==='Paper')
         {
           if ( cmove==='Rock')
      {
        result='You win';
      }
       else if ( cmove==='Paper')
      {
        result='Its a tie';
      }
       else if ( cmove==='Scissor')
      {
        result='You lose';
      } 
         }
       else if(option==='Scissor'){
        if ( cmove==='Rock')
      {
        result='You lose';
      }
       else if ( cmove==='Paper')
      {
        result='You win';
      }
       else if ( cmove==='Scissor')
      {
        result='Its a tie';
      }

         }
       if (result==='You win')  
       {
        score.Wins += 1;
       }
       else if(result==='You lose')
       {
        score.Losses += 1;
       }
       else if (result==='Its a tie')
       {
        score.Ties +=1;
       }
        

      localStorage.setItem('score',JSON.stringify(score));
       updateScore();
       document.querySelector('.js-moves').innerHTML=`You <img src="${option}-emoji.png" class="move-butt">
      <img src="${cmove}-emoji.png" class="move-butt"> Computer`;

       document.querySelector('.js-result').innerHTML=`${result}`;
        }

        function updateScore()
         { 
            document.querySelector('.js-update').innerHTML=` Wins : ${score.Wins} , Losses : ${score.Losses} , Ties : ${score.Ties} `;
        }  
        
        
       function compmove(){
        let cmove='';

        num=Math.random();
        if(num >= 0 && num < 1 / 3)
       {
        cmove='Rock';
       }
       else if(num >= 1 / 3 && num < 2 / 3)
       {
        cmove='Paper';
       }
       else if(num >= 2 / 3 && num < 1)
       {
        cmove='Scissor';
       }
       return cmove;
       }
