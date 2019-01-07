import React from 'react';
import './WaitingList.css';

const WaitingItem = ({ text, entered, onEnter, onLeave }) => {
  return (
    <li>
      <div className={`text ${entered ? 'entered' : ''}`}>{text}</div>
      <div className="buttons">
        <button onClick={onEnter}>Enter</button>
        <button onClick={onLeave}>Leave</button>
      </div>
    </li>
  );
};

const WaitingList = ({ waitingList, onEnter, onLeave }) => {
  return (
    <div className="WaitingList">
      <h2>Waiting list</h2>
      <form>
        <input />
        <button>ok</button>
      </form>
      <ul>
        <WaitingItem text="Jhon" entered />
        <WaitingItem text="maria" />
        <WaitingItem text="Robert" />
      </ul>
    </div>
  );
};

export default WaitingList;
