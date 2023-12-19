import styled from "styled-components";
import { Task as TaskType}  from "../reducers/taskReducer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { finishTaskRequest } from "../actions/taskActions";
import EditTask from "./EditTask";

type TaskProps = {
    task: TaskType;
}

export default function Task(props: TaskProps){
    const { task } = props;
    const status = task.status;
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        renderImg();
      }, []);

    function showStaus(){
        if(status === "PENDING"){
            return "Pendente"
        }else{
            return "Finalizada"
        }
    }

    function renderImg(){
        if(task.image){
            try {
                // Se a imagem está em bytes, converta para Blob
                const blob = new Blob([task.image], { type: 'image/jpeg' });
          
                // Cria a URL temporária para o Blob
                const imageUrl = URL.createObjectURL(blob);
          
                // Atualiza o estado apenas se a URL da imagem for diferente
                if (imageUrl !== imageSrc) {
                  setImageSrc(imageUrl);
                }
            } catch (error) {
            console.error('Erro ao renderizar a imagem:', error);
            }
        }   
    }
    
    function openImage() {
        if (imageSrc) {
            const imageWindow = window.open();
            if (imageWindow) {
              const img = new Image();
              img.src = imageSrc;
              img.onload = () => {
                imageWindow.document.write("<html><body></body></html>");
                imageWindow.document.body.appendChild(img);
              };
            }
        }
    }

    function handlerFinishTask(){
        if(status === "PENDING"){
            dispatch(finishTaskRequest({id: task.id}));
        }
    }

    return(
        <>
            {isEditing ? (
                <EditTask setIsEditing={setIsEditing} task={task}/>
            ) : (
                <SCTask>
                <td>{task.description}</td>
                <td>{showStaus()}</td>
                <td>
                    {
                        imageSrc && <span className="material-symbols-outlined" onClick={() => openImage()}>image</span>
                    }
                    
                </td>
                {
                status === "PENDING" ?  (
                    <td className="pencil-icon">
                        <span className="material-symbols-outlined" onClick={() => setIsEditing(true)}>edit</span>
                    </td>
                    ): 
                    <td></td>
                }
                
                <td>
                    <SCButton status={status} onClick={() => handlerFinishTask()}>
                        {status === "PENDING"? "Concluir" : "Finalizada"}
                    </SCButton>
                </td>
            </SCTask>
            )}
        </>  
    );
}

const SCTask = styled.tr`

    span{
        cursor: pointer;
    }
    .pencil-icon{
        text-align: right;
    }
`
interface BtnConcluirProps {
    status: string;
}

const SCButton = styled.button<BtnConcluirProps>`
    width: 100%;
    height: 30px;
    background-color: ${(prosp) => prosp.status === "PENDING" ? 
        "var(--color-bg-button)" : "var(--color-bg-button-transparent)"};
    border: none;
    border-radius: 3px;
    color: ${(prosp) => prosp.status === "PENDING" ? 
        "#fff" : "rgba(0, 0, 0, 0.5)"};
    font-weight: bolder;
    cursor: pointer;
    
`