import React from 'react';
import Header from '../components/Header';
import Joke from '../components/Joke';

function JokeBook() {

  const jokes = [
    {
    prompt:"Do you think electric bills are expensive?",
    option1:"Yes",
    option2:"No",
    rsp1:"You should see chimneys, they're through the roof!",
    rsp2:"Shocking...",
    id:0
  },
  {
    prompt:"Why did Cinderella get kicked off of the baseball team?",
    option1:"Option A",
    option2:"Option B",
    rsp1:"She kept running away from the ball.",
    rsp2:"She wondered why the ball kept getting bigger, then it hit her.",
    id:1
  },
  {
    prompt:"Which word would you like to know the translation of?",
    option1:"Constipation",
    option2:"Bra",
    rsp1:"Farfrompoopin",
    rsp2:"Stopemfromfloppin",
    id:2
  },
  {
    prompt:"Which teacher did the biology teacher choose to date?",
    option1:"Geology",
    option2:"Physics",
    rsp1:"nope, geology rocks but geography is where it's at",
    rsp2:"Not him, there was no chemistry",
    id:3
  },
{
  prompt:"Guess who I saw today?",
  option1:"Option A",
  option2:"Option B",
  rsp1:"Everyone I looked at. Don't like my joke? Too bad, that's how EYE ROLL",
  rsp2:"The master and his pupil. What, are my jokes to CORNEA for you?",
  id:4
},
]

  return (
    <div className="App">
      <Header title="Joke Book"/>
        {
          jokes.map((item)=>(
            <Joke
            key={item.id}
            prompt={item.prompt}
            option1={item.option1}
            option2={item.option2}
            rsp1={item.rsp1}
            rsp2={item.rsp2}
            id={item.id}
          />)
        )}   
    </div>
    
  );
};

export default JokeBook;
