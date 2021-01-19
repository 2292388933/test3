import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';

function App() {
  const[musicUrl,setMusicUrl] =useState("");
  const[text,setText]= useState("");

  useEffect(() => {
    const fn = async()=>{
    const res = await fetch(`http://139.196.141.233:3000/song/url?id=33894312`);
    const data = await res.json();
    console.log (data);
    console.log (data.data[0].url);
    setMusicUrl(data.data[0].url);
  }
    fn();
  }, [0])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>

</div>
<input onChange={(event)=>{setText(event.target.value)}}></input>
      </header>
      <audio autoPlay src={musicUrl}></audio>
    </div>
  );
}

export default App;
