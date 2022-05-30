import React, { useState } from 'react';
import './css/main.min.css'
import Task from './task';
function Card(props) {

    const [input_value , setinput_value] = useState('')
    const change_input = (event) =>{
        
        const value = event.target.value
        setinput_value(value)
    }

    const [mytask_list, newmytask_list] = useState([]);

    const add_task = () =>{
        
        const tasks = input_value
        setinput_value('')
        if(tasks !== '' & tasks !== null){

            newmytask_list(mytask => [...mytask, tasks])
        }

    }



        return (
        <div className='card'  >
            <div>
            <span>{props.title}</span>
            <i class="fa fa-ellipsis-h"></i>
            </div>
            <div className='task-list' >
                    {
                        mytask_list.map(mynewtask =>{
                        return  <Task title={mynewtask} />
                        })
                    }
            </div>


            <div className='add-task'>
                <input placeholder='+ Add a task' id='add-input' value={input_value} onChange={change_input}></input>
                <button onClick={add_task}>Add</button>
            </div>
            
        </div>
    )
  }





export default Card;


