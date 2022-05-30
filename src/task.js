import React from 'react';

const Task = (props) => {
    return (
        <div>
            <div className='task'>
                {props.title}
                <i class="fa fa-pencil"></i>

            </div>
            

        </div>
    );
};

export default Task;