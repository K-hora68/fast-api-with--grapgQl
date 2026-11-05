

import React from 'react'
import {useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"

const Home = () => {
  const [postData, setpostData] = useState({
    title: "",
    content: "",
    email: ""
  })
  const[isSubmitting, setIssubmitting] = useState(false)
  const navigate = useNavigate()
  const handleInputChange = (e) =>{
    const {name, value} = e.target;

    setpostData(prev =>({
      ...prev, [name]: value
    }))
  }

 async function handleSubmit(){
     setIssubmitting(true)
     const url  = "http://localhost:5000"
     try{
      const res = await fetch(url,{
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(postData)
        })

        if(res.ok){
          navigate("/login")
        }
     }catch{
      console.log("Theregistration processs is a failure")
     }
  }
  return (
    <>
     <div className="container">
          <input type='text'
            name='email'
            placeholder='Email'
            value={postData.email}
            onChange={handleInputChange}
            />
            <input type='text' 
            placeholder='Heading'
            name='title'
            value = {postData.title}
            onChange={handleInputChange}/>
            <textarea
            className='container-content'
            name='content'
            value={postData.content} 
            placeholder='Write something.....'
            rows = {6}
            onChange={handleInputChange} />
          <button>
              Sign Up
          </button>
     </div>
    </>
  )
}

export default Home
