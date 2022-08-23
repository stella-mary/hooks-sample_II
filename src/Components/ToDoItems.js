import React from "react";
import { RiCloseCircleLine } from "react-icons/ri"
import { AiFillCheckCircle } from "react-icons/ai"


const ToDoItems = (props) => {
    const { todo, removeTodo } = props
    return(
            <div className="props">
            {props.text}
            <RiCloseCircleLine onClick={() => removeTodo(todo.id)}/>
            <AiFillCheckCircle />
        </div>
        
    )
}

export default ToDoItems