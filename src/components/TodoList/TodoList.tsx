import React from 'react';
import "./TodoList.css";
import { Todo } from '../../model'
import SingleTodo from '../SingleTodo/SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>
    completedTodos: Array<Todo>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}


const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }) => {
    return (
        <div className="container">
            <Droppable droppableId='TodoList'>
                {(provided, snapshot) => (
                    <div
                        className={`todos ${snapshot.isDraggingOver ? "dragActive" : ""}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        <span className="todos__heading">
                            Active Task
                        </span>
                        {todos?.map((todo, index) => {
                            return (
                                <SingleTodo
                                    index={index}
                                    todo={todo} key={todo.id}
                                    todos={todos} setTodos={setTodos} />
                            )
                        })}
                        {provided.placeholder}
                    </div>
                )
                }
            </Droppable>
            <Droppable droppableId='TodosRemoved'>
                {(provided, snapshot) => (
                    <div
                        className={`todos remove
                     ${snapshot.isDraggingOver ? "dragComplete" : ""}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                        <span className="todos__heading">
                            Completed Task
                        </span>
                        {completedTodos?.map((todo, index) => {
                            return (
                                <SingleTodo todo={todo} key={todo.id}
                                    index={index}
                                    todos={completedTodos} setTodos={setCompletedTodos} />
                            )
                        })}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}

export default TodoList