import React, { useState } from 'react';

const Joke = (props) => {
    const [showPrompt, setShowPrompt]= useState(true);
    const [showWhichRsp, setShowWhichRsp] = useState(0);
    
    const handleOnClick = (btnCLicked) => {
        if(btnCLicked === 'btn1'){
            setShowPrompt(false)
            setShowWhichRsp(1)
    
        }else if (btnCLicked === 'btn2'){
            setShowPrompt(false)
            setShowWhichRsp(2)
    
        }else if (btnCLicked === 'reset'){
            setShowPrompt(true)
        }
      };
  return (
    
    <div className="gen-joke">
        {showPrompt && (
        <div>
            <h2>{props.prompt}</h2>
            <ul>
                <li><button onClick={()=>(handleOnClick ('btn1'))}>{props.option1}</button></li>
                <li><button onClick={()=>(handleOnClick ('btn2'))}>{props.option2}</button></li>
            </ul>
        </div>)}
        {!showPrompt && showWhichRsp === 1 &&(
            <div>
                <h2>{props.rsp1}</h2>
                <button onClick={()=>(handleOnClick('reset'))}>Reset</button> 

            </div>      
        )}
        
        {!showPrompt && showWhichRsp === 2 &&(
            <div>
            <h2>{props.rsp2}</h2>
            <button onClick={()=>(handleOnClick('reset'))}>Reset</button>
        </div>
    )}
            
    </div>
  );
};

export default Joke;