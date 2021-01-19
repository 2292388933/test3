import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';

function App() {
  const[musicUrl,setMusicUrl] =useState("");
  const[playlist,setPlaytlist]= useState([]);


const getPlaylistAll =async()=>{
  const res=await fetch(`http://139.196.141.233:3000/playlist/detail?id=24381616`);
  const data=await res.json();
  setPlaytlist(data.playlist.tracks);
}
const getMusicUrl =async(id)=>{
  const res=await fetch(`http://139.196.141.233:3000/song/url?id=${id}`);
  const data=await res.json();
  console.log(data.data[0].url);
  setMusicUrl(data.data[0].url);
}
  useEffect(() => {
    getPlaylistAll();
  }, [0])
  return (
    <div className="App">
      {playlist.map((item,index)=>{
        return(
<div key={index} onClick={()=>{getMusicUrl(item.id)}}>
  {item.name}
  {item.id}
</div>
        );
        })}
<audio autoPlay controls src={musicUrl}></audio>
    </div>
  );
}

export default App;
