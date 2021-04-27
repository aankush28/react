import React ,{useState} from 'react';
const Data = ()=>{
    let time= new Date().toLocaleDateString() ;
    const [ctime, setTime] = useState(time);
 
    const UpdateTime =()=>{
        time = new Date().toLocaleDateString();
        setTime(time);
    };
setInterval(UpdateTime ,1000);
return(
    <h1 className="date">Date :- {ctime}</h1>
)
};




export default Data;