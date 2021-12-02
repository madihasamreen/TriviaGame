import { useEffect, useState } from 'react';
export default function Game() {

    const [game, setGame] = useState([]);
    const [answer, setAnswer] = useState("")
    const [validateAnswer,setvalidateAnswer] =useState(false)
    const [isSubmit,setisSubmit] =useState(false)
    const [nextQ,setnextQ] =useState(false);
    
   

     useEffect(() => {
        fetch("https://jservice.io/api/random")
            .then((res) => res.json())
            .then((data) => setGame(data))        
    }, [nextQ])
    
    const res = game.map((q) => q.answer)
        
    
 
    const handleSubmit = () => {
        setisSubmit(true);
        
        if (answer == res[0]){
            console.log("right!")
            setvalidateAnswer(true)
        }
        else {
            console.log("wrong!")
            setvalidateAnswer(false)
        }    

    }

    const handleNext= ()=>{
        setnextQ(true)
    }
    return (
        <div>
            <h1>{game.map((e) => (
                e.answer
            ))}
                

            </h1>
            <h2>Trivia Game</h2>
            <h3>The question is</h3>
            <p>
                {game.map((q) => (
                    q.question
                ))}
            </p>
            <br />
            <p>Your answer </p>
            <input type="text" onChange={(event) => {
                setAnswer(event.target.value)
                
                }} />
            <button onClick={handleSubmit}>Submit</button>
            {answer.length==0 && isSubmit && <p> Please enter a answer</p>}
            
            {validateAnswer  && isSubmit &&  <p>{`Your answer is ${ validateAnswer ? 'right' : 'wrong' }`}</p  > }
            
            <button onClick={handleNext}>Next Question</button>
            
                    
        </div>

    )
}
