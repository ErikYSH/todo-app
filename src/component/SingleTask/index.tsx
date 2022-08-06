import React from 'react'
import { Task } from '../Task';

interface Props {
    task: Task
    taskList: Task[]
    setTaskList: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTask = ({task, taskList, setTaskList}:Props) => {
    return(
        <div>
            <form className='singleTodo'>
                <span className='singleTaskText'> {task.task}</span>
            </form>
        </div>
    )
}

export default SingleTask;