import axios from './axios';
import React, { useState ,useEffect} from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCard.css";

const Content = () => {
const [user, setstate] = useState([]);

useEffect(() => {
    async function fetchData(){
        const req = await axios.get("/tinder/card");
        setstate(req.data);
        console.log(req);
    }
    fetchData();
}, []);

const swiped = (direction,nameToDelete)=>{
    console.log("removeing"+ nameToDelete);
}
const outOfframe = (name)=>{
    console.log(name + "left the secrrn");
}
    return (
        <>
            <div className="container_content">
                <div className="data">
                   {user.map((e)=>{
                       return(
                           <>
                           <TinderCard
                           className="swipe"
                           key={e.name}
                           perventSwipe={["up","down"]}
                           onSwipe={(dir)=>swiped(dir,e.name)}
                           onCardLeftScreen={()=>outOfframe(e.name)}
                           >
                         <div style={{background:`url(${e.url})`}}
                          className="card" >
                          <h3>{e.name}</h3>
                          </div>
                           </TinderCard>
                           </>
                       )
                   })}
                </div>
            </div>
        </>
    )
}

export default Content;
