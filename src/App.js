
import "./App.css";
import { useState } from "react";
import Info from "./Info";

function App() {

 


  return (
    <div className="App">
    
 
      <Info title="Inventory"/>
      <ButtonState/>

    </div>
  );
}

let arrayCount = 0;

const ButtonState = () => {
  const titleArray = ['Title 1', 'Title2', 'Title3'];
  const [title, setTitle] = useState(titleArray[0]);
  const[count, setCount] = useState(0);
  const[timeStamp, setTimeStamp] = useState('');
  
 
  const TitleButton = (event) => {
   
    ++arrayCount
    if(arrayCount === 3){
      arrayCount = 0;
    }
    setTitle(titleArray[arrayCount]);
    event.target.firstChild.data ="clicked";

    let timeStamp = event.timeStamp/1000;
    timeStamp = Math.floor(timeStamp)
    setTimeStamp("seconds passed since page rendered: " + timeStamp);

  }

  const ButtonIncrament = (event) => {
    setCount(count => ++count);
    event.target.firstChild.data ="clicked";

    let timeStamp = event.timeStamp/1000;
    timeStamp = Math.floor(timeStamp)
    setTimeStamp("seconds passed since page rendered: " + timeStamp);
  }

  return(
    <div>
      <p>Title: {title}  </p>
      <p>Counter: {count}</p>
      <button onClick = {TitleButton}>Update Title</button>
      <button onClick = {ButtonIncrament}>Update Count</button>
      <p>{timeStamp}</p>
      <Data titleTransfer = {title} countTransfer = {count}/>
    </div>
  )
}

const Data = (props) => {

  return(
    <div>
        <p>{props.titleTransfer}</p>
    </div>
  )
}

export default App;



