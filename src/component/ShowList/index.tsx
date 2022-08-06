import React from 'react'
import {Task} from '../Task'

interface Props {
    taskList: Task[];
    setTaskList: React.Dispatch<React.SetStateAction<Task[]>>
}

const ShowList:React.FC<Props> = ({taskList, setTaskList}:Props) => {
    return (
        <div className='showList'>
            {
                taskList.map(task =>(
                    <li>{task.task}</li>
                ))
            }
        </div>
    )

}

export default ShowList;