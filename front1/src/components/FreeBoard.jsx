import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Div100, Div50 } from "../mscomponents/Div100";

const FreeBoard = ()=>{
    const titleRef = useRef();
    const contentRef = useRef();
    const wrtierRef = useRef();
    const [datas,setDatas] = useState([]);
    const [text,setText] = useState("");

    const doSave = ()=>{
        axios.post(`http://localhost:10000/freeboard/insert`,{
            title: titleRef.current.value,
            content: contentRef.current.value,
            writer: wrtierRef.current.value
        })
        .then(result =>{
            titleRef.current.value = "";
            contentRef.current.value = "";
            wrtierRef.current.value = "";
        })
    }
    useEffect( ()=>{ 
        axios.get(`http://localhost:10000/freeboard/list/`)
        .then(result=>{
            setDatas(result.data);
        }).catch(e=>{
            console.log(e);
        });
    },[ ] );
    const doSearch = (e)=>{ 
        setText(e.target.value);
        axios.get(`http://localhost:10000/freeboard/list/${e.target.value}`)
        .then(result=>{
            setDatas(result.data);
        })
        .catch(e=>{
            console.log(e);
        });
    }
    return(
        <>
            <h1>FreeBoard</h1>
            <Div100>
                <Div50>
                    <h1>insert화면</h1>
                    <label>title</label>
                    <input type="text" ref={titleRef}></input><br></br>
                    <label>content</label>
                    <input type="text" ref={contentRef}></input><br></br>
                    <label>writer</label>
                    <input type="text" ref={wrtierRef}></input><br></br>
                    <Button onClick={doSave}>저장</Button>
                </Div50>
                <Div50>
                    <h1>list화면</h1>
                    {
                        datas.map((data)=>{
                            return JSON.stringify(data);
                        })
                    }
                    <input type="text" value={text} onChange={doSearch}></input>
                </Div50>
            </Div100>
        </>
    )
}

export default FreeBoard;