import React, { useState } from 'react';
import Card from './card';

const Main = () => {

    const [input_value , setinput_value] = useState('')
    const change_input = (event) =>{
        
        const value = event.target.value
        setinput_value(value)
    }

    const [mycard_list, newmycard_list] = useState([]);
    
    const add_card = () =>{

        const cards = input_value
        setinput_value('')
        if(cards !== '' & cards !== null){

            newmycard_list(mycard => [...mycard, cards])
        }
    }



    return (
        <div className='main-container'>
            <div className='card-list'>
            {
                mycard_list.map(mynewcard =>{
                return  <Card title={mynewcard} />
                })
            }
                 <div className='add-card'>
                    <input placeholder='+ Add a card' value={input_value} id='add-input2' onChange={change_input}></input>
                    <button onClick={add_card}>Add</button>
                 </div>
            </div>
        </div>
    );
};

export default Main;