import { useTimer } from 'react-timer-hook';
import Button from '../Button';
import { Wrapper, Time, ButtonWrapper, Space } from './Timer.styles';
import { Form } from '../Form'
import { TasksMenu } from '../TasksBar'
import React, { useState } from 'react';

let isbreak = false, count = 0, t = 25 * 60;

function MyTimer({ expiryTimestamp }) {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [pomodoros, setPomodoros] = useState(1);
  const [currentTask, setCurrentTask] = useState(-1);
  console.log(currentTask);
  const sessionBreak = () => {
    if (isbreak) {
      alert('Break is over.. Grind time');
      t = 25 * 60;
    }
    else if ((count + 1) % 4 === 0) {
      alert('Good job! Take a 30 min break');
      t = 30 * 60;
      count += 1;
    }
    else {
      alert('Take a 5 minute break!');
      t = 5 * 60;
      count += 1;
    }
    t = t / 100;
    if (!isbreak && currentTask > -1) {
      let clone = [...tasks]
      clone[currentTask]['currentPomos']++;
      setTasks(clone);
    }
    isbreak = !isbreak;
    const time = new Date();
    time.setSeconds(time.getSeconds() + t);
    restart(time);
    pause();
  };
  const { seconds, minutes, isRunning, pause, resume, restart, } = useTimer(
    {
      expiryTimestamp, autoStart: false, onExpire: sessionBreak
    });

  const currentTaskIsMinusOne = (currentTask === -1);

  return (
    <Wrapper>
      {currentTaskIsMinusOne ? <h1>Pomodoro</h1> : <h1>Pomodoro - {tasks[currentTask]['task']}</h1>}
      <Time>
        <span>{('0' + minutes).slice(-2)}</span>:<span>{('0' + seconds).slice(-2)}</span>
      </Time>

      <ButtonWrapper>
        {isRunning ? <Button text="Stop" callback={pause} /> : <Button text="Start" callback={resume} />}
        {isRunning ?
          <Button text="Skip" callback={() => {
            if (window.confirm('Are you sure you want to skip the session?')) {
              sessionBreak();
            }
          }} /> : console.log('whatever')
        }
      </ButtonWrapper>
      <Space />
      <Form inputText={inputText} setInputText={setInputText} tasks={tasks} setTasks={setTasks} pomodoros={pomodoros} setPomodoros={setPomodoros} />
      <TasksMenu tasks={tasks} setTasks={setTasks} isRunning={isRunning} sessionBreak={sessionBreak} currentTask={currentTask} setCurrentTask={setCurrentTask} />
    </Wrapper>
  );
}

export default MyTimer;