// import {useState} from 'react';
// const Home = () => {
//     //let name='reem';
//     //to change name dynamically
//     //const [name, setName] = useState('reem')
//     // const handleClick= (e)=>{
//     //    // name='reemo'
//     //     //console.log('clicked', e.target)
//     //     setName('reemo')
//     // }
//     // const handleClickAgain = (name)=>{
//     //     console.log('hello '+ name)
//     // }
//     return (<div className="home">
//        <h2> Home Component</h2>
//        {/* <p>{name}</p> */}
//        {/* <button onClick={handleClick}>Click me</button> */}
//        {/* <button onClick={()=>{handleClickAgain('reem')}}>click me again</button> */}
//     </div>  );
// }

// export default Home;

import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending, setISPending] = useState(true)
    const [name, setName] = useState('reem')
    const [error, setError] = useState(null)


    //as we need to set state

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
    //for authentication
    //runs for every render
    //when adding empty array, it will run only first render
    //when passing argument, it will run with set name
    useEffect(() => {
        // console.log('use effect run')
        fetch('http://localhost:8000/blogs').then(res => {
            if(!res.ok){
                throw Error('could not fetch data for that resource')
            }
            return res.json()
        }).then((data) => {
            console.log(data)
            setBlogs(data)
            setISPending(false)
            setError(null)
        })
        .catch((err)=>{
            console.log(err.message)
            setError(err.message)
            setISPending(false)
        })
    }, []);//name is like dependency

    return (
        //pass props
        <div className="home">
            {error&&<div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {/* check if data */}
            {blogs && <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}></BlogList>}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Marios blogs!" handleDelete = {handleDelete}></BlogList> */}
            {/* <button onClick={()=>setName('reemo')}>Change Name</button> */}
            {/* <p>{name}</p> */}
        </div>
    );
}

export default Home;