import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { editTaskRequest } from '../actions/taskActions';
import { Task as TaskType}  from "../reducers/taskReducer";
import React, { useState } from "react";

interface CreateTaskProps {
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    task: TaskType;
}

export default function EditTask(props: CreateTaskProps){
    const { setIsEditing, task } = props;
    const dispatch = useDispatch();

    const [description, setDescription] = useState(task.description);
    const [selectedStatus, setSelectedStatus] = useState(task.status);
    const [selectedFile, setSelectedFile] = useState(task.image);

    function handleSaveTask(e){
        e.preventDefault();
        // Certifique-se de ajustar isso conforme necessário
        const taskData = {id: task.id, description, status: selectedStatus, image: selectedFile };

        // Disparar a ação de criar tarefa
        dispatch(editTaskRequest(taskData));

        setIsEditing(false);
    }

    const handleFileChange = (event) => {
        // Verifica se algum arquivo foi selecionado
        if (event.target.files.length > 0) {
          const file = event.target.files[0];
          setSelectedFile(file);
        }
    };
    
    return(
        <SCDivEditTask>
            <div>
                <h1>Editar Tarefa</h1>
                <SCFormEditTask>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="description" placeholder="Descrição" required/>
                    <select name="" id="" value={selectedStatus} onChange={e => setSelectedStatus(e.target.value)}>
                        <option value="pending">Pendente</option>
                        <option value="finished">Finalizada</option>
                    </select>
                    <div className="div-image-upload">
                        <input type="file" id="image-upload" onChange={handleFileChange}/>
                        <label htmlFor="image-upload">
                            <span className="material-symbols-outlined">start</span>
                            <p>Imagem</p>
                        </label>
                    </div>
                    <button onClick={(e) => handleSaveTask(e)}>Salvar</button>
                </SCFormEditTask>
            </div>
        </SCDivEditTask>
    );
}

const SCDivEditTask = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    
    div{
        background-color: #fff;
        width: 70%;
        height: 60%;
        border-radius: 4px;
        h1{
            font-size: 18px;
            margin-top: 30px;
            margin-left: 40px;
        }
    }
`

const SCFormEditTask = styled.form`
    width: fit-content;
    display: flex;
    flex-direction: column;
    margin: 30px auto;

    .description{
        width: 80%;
        height: 40px;
        margin-bottom: 20px;

        @media (min-width: 768px) {
            width: 500px;
        }
    }

    .description::placeholder{
        color: #000;
    }

    select{
        width: 80%;
        height: 40px;

        @media (min-width: 768px) {
            width: 500px;
        }
    }

    .div-image-upload{
        width: fit-content;
        margin-top: 30px;
    }

    input[type="file"] {
        display: none;
        width: 200px;
        height: 150px;
        margin: 0 auto;
        padding: 10px;
        font-size: 16px;
        color: #fff;
    }
    label{
        cursor: pointer;
        background-color: #f7f0f0;
        width: 80px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span.material-symbols-outlined {
            margin: 6px auto;
            transform: rotate(-90deg);
        }
    }
    button{
        width: 120px;
        height: 35px;
        margin: 100px auto;
        background-color: var(--color-bg-button);
        border: none;
        border-radius: 3px;
        color: #fff;
        font-weight: bolder;
        cursor: pointer;
    }
`