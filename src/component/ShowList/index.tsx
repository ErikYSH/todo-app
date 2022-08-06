import React from 'react'
import {Task} from '../Task'
import SingleTask from "../SingleTask"

interface Props {
    taskList: Task[];
    setTaskList: React.Dispatch<React.SetStateAction<Task[]>>
}

const ShowList:React.FC<Props> = ({taskList, setTaskList}:Props) => {
    return (
        <div className='showList'>
            {
                taskList.map((task) => (
                    <SingleTask 
                        task={task}
                        // id = {task.id}
                        taskList = {taskList}
                        setTaskList = {setTaskList}
                    />
                ))
            }
        </div>
    )

}

export default ShowList;