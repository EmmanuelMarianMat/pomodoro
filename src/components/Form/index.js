import { Wrapper, FormWrap } from "./Form.styles";
export const Form = ({inputText, setInputText, tasks, setTasks, pomodoros, setPomodoros}) => {
    const inputHandler = (e) => {
        setInputText(e.target.value);
    };
    const inputHandlerII = (e) => {
        setPomodoros(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (inputText!=="")
            setTasks([...tasks,{task:inputText, estimate:parseInt(pomodoros), currentPomos:0/*, key:Math.floor(Math.random() * 1000000)*/}]);
        setInputText("");
        setPomodoros(1);
    };

    return (
        <Wrapper>
            <FormWrap>
                <h5 className="one-liner">Task</h5>
                <input value={inputText} onChange = {inputHandler} type = "text" className="todo-ip" required/>
                <h6>Number of<br/>pomodoros</h6>
                <input value={pomodoros} className="number" type="number" min="1" onChange={inputHandlerII}/>
                <button onClick={submitHandler} className="todo-btn" type="submit">
                    +
                </button>
            </FormWrap>
            
        </Wrapper>
    );
};