import styled from "styled-components";
import { Task as TaskType}  from "../reducers/taskReducer";

type TaskProps = {
    task: TaskType;
}

export default function Task(props: TaskProps){
    const { task } = props;
    console.log('io')
    return(
        <SCTask>
            <td>{task.description}</td>
            <td>{task.finished}</td>
            <td>
                <span className="material-symbols-outlined">image</span>
            </td>
            <td className="pencil-icon">
                <span className="material-symbols-outlined">edit</span>
            </td>
            <td>
                <button>Concluir</button>
            </td>
        </SCTask>
    );
}

const SCTask = styled.tr`


    .pencil-icon{
        text-align: right;
    }
    
    :last-child{
        width: 15%;

        button{
            width: 100%;
            height: 30px;
            background-color: var(--color-bg-button);
            border: none;
            border-radius: 3px;
            color: #fff;
        }
    }

`