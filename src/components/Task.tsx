import styled from "styled-components";

export default function Task(){
    return(
        <SCTask>
            <td>Tarefa A</td>
            <td>Pendente</td>
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