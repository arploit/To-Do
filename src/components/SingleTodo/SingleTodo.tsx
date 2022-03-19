import React, { useState, useRef, useEffect } from 'react'
import './SingleTodo.css'
import { Todo } from "../../model"
import { AiFillDelete, AiFillEdit, AiOutlineSave } from 'react-icons/ai';
import { MdDone, MdRemoveDone } from 'react-icons/md'
import { Draggable } from 'react-beautiful-dnd';



interface Props {
    todo: Todo;
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>
    index: number;
}


const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos, index }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const onDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? {
            ...todo, isDone:
                !todo.isDone
        } : todo))
    }

    const onDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => {
            return todo.id === id ? { ...todo, todo: editTodo } : todo
        }))
        setEdit(false)
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])


    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <Draggable draggableId={todo.id?.toString()} index={index}>
            {(provided, snapshot) => (
                <form className={`todo__single 
                ${snapshot.isDragging ? "isDragging" : ""}`} onSubmit={(e) => handleEdit(e, todo.id)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    {edit ? (
                        <input ref={inputRef}
                            value={editTodo}
                            onChange={(e) => setEditTodo(e.target.value)}
                            className="todo__single--text" />
                    ) : (
                        !todo.isDone ? (

                            <span className='todo__single--text'>
                                {todo.todo}
                            </span>
                        ) : (
                            <s className='todo__single--text' >
                                {todo.todo}
                            </s>
                        )
                    )}
                    <div>
                        <span className="icon" onClick={() => {
                            if (!edit && !todo.isDone) {
                                setEdit(!edit)
                            }
                        }
                        }>
                            {edit ?
                                <AiOutlineSave
                                    onClick={(e) => handleEdit(e, todo.id)} /> :

                                <AiFillEdit />
                            }
                        </span>
                        <span className="icon" onClick={() => onDelete(todo.id)}>
                            <AiFillDelete />
                        </span>
                        <span className="icon" onClick={() => onDone(todo.id)}>
                            {todo.isDone ?
                                (
                                    <MdRemoveDone />
                                ) : (

                                    <MdDone />
                                )}
                        </span>
                    </div>
                </form >
            )}
        </Draggable>
    )
}

export default SingleTodo