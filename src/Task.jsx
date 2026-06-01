import React, { useEffect, useState } from 'react'
import Form from './App'
const Task = () => {
    let [search, SetSearch] = useState("")
    let [ApiData, SetApiData] = useState([])

    console.log(search);

    async function apiCall() {
        console.log("hello");
        
        console.log("byeyeyeyeyeey");
        if (!search.trim()) {
            alert("kuch bhi nhi")
            return;
        }
        let res = await fetch(`https://dummyjson.com/products/search?q=${search}`)
        let data = await res.json()
        console.log(data);
        SetApiData(data.products)


    }

     function fun1(){
        console.log("dortt");
        
       let sortData= [...ApiData].sort((a,b)=>{
             return b.price-a.price

        })
        SetApiData(sortData)
        console.log(sortData,"hello");
        

    }
    
       function fun2(){
        console.log("dortt");
        
       let sortData= [...ApiData].sort((a,b)=>{
             return b.price-a.price

        })
        SetApiData(sortData)
        console.log(sortData,"hello");
        

    }

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((res) => {
            return res.json()

        }).then((data) => {
            console.log(data);
            SetApiData(data.products)


        })
    }, [])



    return (
        <div>
            <input onChange={(e) => SetSearch(e.target.value)} />
            <button onClick={apiCall}>click</button>
            <button onClick={fun1}>high</button>
            <button onClick={fun2}>low</button>

            {
                ApiData.map((a) => {
                    return (<div>
                        <img src={a.
                            thumbnail
                        } />
                        <h3>{a.id}</h3>
                        <h3>{a.price}</h3>
                    </div>)
                })
            }
        </div>
    )
}

export default Task;