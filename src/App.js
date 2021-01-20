import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import { Button,Typography,List,Avatar } from "antd";
import {PlayCircleOutlined} from "@ant-design/icons";

function App() {
  const [musicUrl, setMusicUrl] = useState("");
  const [playlist, setPlaylist] = useState({});

  const getPlaylistAll = async () => {
    const res = await fetch(
      `http://139.196.141.233:3000/playlist/detail?id=24381616`
    );
    const data = await res.json();
    setPlaylist(data.playlist);
  };

  const getMusicUrl = async (id) => {
    const res = await fetch(`http://139.196.141.233:3000/song/url?id=${id}`);
    const data = await res.json();
    setMusicUrl(data.data[0].url);
  };

  useEffect(() => {
    getPlaylistAll();
  }, [0]);

  const {Title,Text} = Typography;

  return (
    <div className="App">
      <div style={{display: "flex",marginLeft:"20vw",marginRight:"20vw",marginTop:'5vh'}}>
        <img src={playlist.coverImgUrl} style={{width: "200px",height:"200px",boxShadow:'5px 5px 5px gray'}}/>
        <Typography style={{marginLeft:'5vw'}}>
          <Title level={1}>{playlist.name}</Title>
          <Text style={{float:'left'}}>{playlist.description}</Text>
        </Typography>
      </div>
      <div style={{marginLeft:'20vw',marginRight:'20vw',marginTop:"30px"}}>
        <List itemLayout={"horizontal"} dataSource={playlist.tracks} 
        renderItem={(item)=>{
          return (
            <List.Item>
              <List.Item.Meta avatar={<Avatar src={item.al.picUrl} />} 
                title={<span>{item.name}</span>}
              />
              <Button shape={"circle"} type={"primary"} onClick={()=>{getMusicUrl(item.id)}} icon={<PlayCircleOutlined />} />
            </List.Item>
          )
        }}
        />
      </div>
      <audio autoPlay src={musicUrl} controls style={{width:"60vw",marginTop:"30px"}}/>
    </div>
  );
}

export default App;
