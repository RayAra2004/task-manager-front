import styled from "styled-components";

interface CreateTaskProps {
    setCreateNewTask: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateTask(props: CreateTaskProps){
    const { setCreateNewTask } = props;

    function handleSaveTask(){
        setCreateNewTask(false);
    }
    
    return(
        <SCDivCreateTask>
            <div>
                <h1>Nova Tarefa</h1>
                <SCFormNewTask>
                    <input type="text" className="description" placeholder="Descrição" required/>
                    <select name="" id="">
                        <option value="pending">Pendente</option>
                        <option value="finished">Finalizada</option>
                    </select>
                    <div className="div-image-upload">
                        <input type="file" id="image-upload" />
                        <label htmlFor="image-upload">
                            <span className="material-symbols-outlined">start</span>
                            <p>Imagem</p>
                        </label>
                    </div>
                    <button onClick={() => handleSaveTask()}>Salvar</button>
                </SCFormNewTask>
            </div>
        </SCDivCreateTask>
    );
}

const SCDivCreateTask = styled.div`
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

const SCFormNewTask = styled.form`
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