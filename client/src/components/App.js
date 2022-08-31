import React,{useState,useEffect} from 'react';
import  {Route,Routes} from "react-router-dom"
import Header from './Header';
import '../App.css';



function App() {

  const [reviewState, setReviewState] = useState(true)


  const changeReviewState = () => {
    // if(selectedGame !== ''){
    //   setReviewState(false)
    // }
    // else{
    //   setReviewState(true)
    // }
  }



  return (
    <div className="App">
      <div className="header">
        <Header changeReviewState={changeReviewState}/>
      </div>
      
    </div>
  );
}

export default App;
