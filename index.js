'use strict'


/*
console.log(document.querySelector(`.message`)); //can use '' or `` document(object) querySelector(object's method) 
                                                // it selects the whole p

 console.log(document.querySelector(`.message`).textContent);p's text
 document.querySelector('.score').textContent=10;
 document.querySelector('.highscore').textContent=`u can't beat!`;
 const valueEntered=document.querySelector('.guess').value;//input field's value


    document.querySelector('.score').textContent++; //can't do +=5 as it will take it as string
    document.querySelector('.message').textContent='CORRECT!';

*/

//eventListener is a special method(function).

//NOTE: We always get the value by user in input as string

let highs=0;
let score=document.querySelector('.score').textContent;
let secret=Math.trunc(Math.random()*20)+1;
document.querySelector('.check').addEventListener('click',function(){
    const x=document.querySelector('.guess').value;
    
    if(score==0)
    {
        document.querySelector('.message').textContent='KAL ANA KAL';
    }
    else
    {   
        if(x=='')
        {
            document.querySelector('.message').textContent='NO NUMBER ENTERED!✨'
        }
        else if(x==secret)
        {
            document.querySelector('.message').textContent='CORRECT!';
            score++;
            if(highs < score)
            {
            document.querySelector('.highscore').textContent=score;
            highs=score;
            }
            document.querySelector('.number').textContent=secret;
            document.querySelector('.score').textContent=score;
            document.querySelector('.guess').style.width='40rem'; // has to be specified as string with unit
            document.querySelector('body').style.backgroundColor='#60b347'; //CSS Property
        }
        else if(x < secret){
            document.querySelector('.message').textContent='low';
            score--;
            document.querySelector('.score').textContent=score;

        }
        else if(x > secret)
        {
            document.querySelector('.message').textContent='high';
            score--;
            document.querySelector('.score').textContent=score;        }
    }
    
    document.querySelector('.again').addEventListener('click',function(){
        score=20;
        
        document.querySelector('.message').textContent="Start guessing..";
        document.querySelector('.score').textContent=score;
        document.querySelector('.guess').value='';
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').textContent='?';
        secret=Math.trunc(Math.random()*20)+1;
    });

    
});


