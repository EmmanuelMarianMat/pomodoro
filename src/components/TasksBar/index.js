
import { Space, Table } from "./TasksBar.styles";
import Button from "../Button";

export const TasksMenu = ({ tasks, setTasks, isRunning, sessionBreak, currentTask, setCurrentTask }) => {

    return (
        <div>
            <h1>Current Tasks</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Task to do</th>
                        <th>Completed Pomo</th>
                        <th>Estimate Pomo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((element, index) => {
                            return (
                                <tr className>
                                    <td>{element['task']}</td>
                                    <td>{element['currentPomos']}</td>
                                    <td>{element['estimate']}</td>
                                    <Button text="Select Task" callback={() => {
                                        setCurrentTask(index);
                                    }} />
                                    <Button text="Delete Task" callback={() => {
                                        let array = [];
                                        for (let i = 0; i < tasks.length; i++) {
                                            if(i!==index)
                                                array.push(tasks[i])
                                        }
                                        if(currentTask===index){
                                            setCurrentTask(-1);
                                        }
                                        setTasks(array);
                                    }} />
                                </tr>
                            )
                        })
                    }
                </tbody>

            </Table>
            <Space />
        </div>
    );
};