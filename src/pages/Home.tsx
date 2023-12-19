import styled from "styled-components";
import Task from "../components/Task";
import { useEffect, useState } from "react";
import CreateTask from "../components/CreateTask";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasksRequest } from '../actions/taskActions';

export default function Home(){
    const [createNewTask, setCreateNewTask] = useState(false);
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task.tasks);

    useEffect(() => {
        dispatch(fetchTasksRequest()); // Dispare a ação para buscar tarefas ao montar o componente
    }, [dispatch]);

    function handleNewTask(){
        setCreateNewTask(true);
    }

    return(
        <SCHome>
            {createNewTask &&
                <CreateTask setCreateNewTask={setCreateNewTask}/>
            }     
            <SCDivNewTask>
                <SCBtnNewTask onClick={() => handleNewTask()}>Nova</SCBtnNewTask>
            </SCDivNewTask>
            <SCTasks>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task) => (
                            <Task key={task.id} task={task}/>
                        ))
                    }
                </tbody>
            </SCTasks>
        </SCHome>
    );
}

const SCHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100dvh;
`

const SCDivNewTask = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: 15px;

    @media (min-width: 768px) {
        width: 80%;
    }
`

const SCBtnNewTask = styled.button`
    width: 12vw;
    height: 30px;
    color: #fff;
    font-weight: bolder;
    font-size: 14px;
    background-color: var(--color-bg-button);
    border: none;
    border-radius: 3px;
    cursor: pointer;
`

const SCTasks = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    background-color: #ffffff;

    td {
        padding: 10px;
        border-bottom: 2px solid #c0bfbf;
    }
    th {
        text-align: left;
        padding: 10px;
        background-color: #f0f0f0;
    }

    @media (min-width: 768px) {
        width: 80%;
    }
`