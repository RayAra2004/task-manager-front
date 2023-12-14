import styled from "styled-components";
import Task from "../components/Task";

export default function Home(){
    return(
        <SCHome>
            <SCDivNewTask>
                <SCBtnNewTask>Nova</SCBtnNewTask>
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
                    <Task/>
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