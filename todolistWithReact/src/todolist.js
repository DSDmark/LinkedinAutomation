import React,{useState,useEffect} from 'react';

const getData = ()=>{
    const localStorageData = localStorage.getItem("todoListData");
    if(localStorageData){
        return JSON.parse(localStorageData);
    }
    else{
        return [];
    }
}
const Todolist = () => {
    const [inputData,setInputData] = useState("");             // FETCHING DATA 
    const [todoData,setData] = useState(getData());                  // STORE DATA    
    const [toggleIcons,setIcons] = useState(false);          // TOGGLEING ICONS 
    const [editData,setEditData] = useState("");

   const addData = ()=>{
    if(inputData){
        const wholeData = {
            id:new Date().getTime().toString(),
            name:inputData,
        };
        setData([...todoData,wholeData]);
        setInputData("");
        setIcons(true);
    }
     if(inputData && toggleIcons){
       setData(todoData.map((e)=>{
           if(e.id === editData){
            return {...todoData,name:inputData};
        }
        return e;
    }));
    }
        else{
            alert("place fill the data▼o・ェ・o▼");
        }
        setInputData("");
        setEditData(null);
        setIcons(false);
   }
    // DELETING ALL DATA WHEN CLICK 
    const deletewholeData = ()=>{
        setData([]);
    };
    // REMOVE PERTICOLER DATA 
    const deleteData = ((id)=>{
        const deleteList = todoData.filter((e)=>{
            return e.id !== id;
        });
        setData(deleteList);
    });
    // EDIT DATA 
    const todoEdit = (id)=>{
        const edittodoData = todoData.find((e)=>{
           return e.id === id;
        });
        setInputData(edittodoData.name);
        setEditData(id);
        setIcons(true);
    }
    // ADDING DATA IN LOCALSTORAGE 
    useEffect(() => {
        localStorage.setItem("todoListData",JSON.stringify(todoData));
    }, [todoData]);
    return (
        <>
        <main>
        <div className="bg_img">
            <img src="images/bg.png" alt="" srcset=""/>
        </div>
        <div className="todo_content">
            <div className="todo_data">
                <img src='./images/todolist_img.png' alt="" srcset=""/>
                <h1 className="todo_title">
                    add your todo list 🗒️
                </h1>
                <div className="todo_input">
                    <input className="inputData" type="text" name="todo_text" value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
                  {toggleIcons ?  <i className="icons" onClick={addData}>✏️</i> : <i className="icons" onClick={addData}>➕</i>
                 }
                </div>
                {todoData.map((e)=>{
                    return (
                        <>
                        <div className="todo_list" key={e.id}>
                        <p className="todo_subtitle">{e.name}
                        </p>
                            <i className="list_icons" onClick={()=>todoEdit(e.id)}>✏️</i>
                            <i className="list_icons" onClick={()=>deleteData(e.id)}>❌</i>
                            </div>
                        </>
                    )
                })}
                <button className="button" onClick={deletewholeData}><a>remove all</a></button>
            </div>
        </div>
    </main>
        </>
    )
}

export default Todolist;
