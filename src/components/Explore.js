import React from 'react'
import bg from "./Explore/Video/bg.mp4"
import "./Explore/Explore.css"
import { Link } from 'react-router-dom'
import cv from "./Explore/img/CV.png"
import { useRef, useState } from 'react'

const Explore = () => {


    const [msg, setMsg] = useState({ Name: "", Phone: "", Email: "", Message: "" })
    const host = "https://trial-l9yi.onrender.com"

    const handleOnSend = async (e) => {
        e.preventDefault()
        const response = await fetch(`${host}/api/message/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ Name: msg.Name, Phone: msg.Phone, Email: msg.Email, Message:msg.Message })
        });
        const json = await response.json()

        console.log(json)
    }
    const onChangeValue = (e) => {
        setMsg({ ...msg, [e.target.name]: e.target.value })
    }

    const blurIt = useRef()
    const openForm = useRef()
    const openCV = useRef()


    const handleOnClose = () => {
        openCV.current.style.display = "none"
        openForm.current.style.display = "none"
        blurIt.current.style.filter = "blur(0px)"
    }
    const handleOnOpenContact = () => {
        openForm.current.style.display = "block"
        blurIt.current.style.filter = "blur(20px)"
        openForm.current.style.zIndex = "10"
    }
    const handleOnOpenCv = () => {
        openCV.current.style.display = "flex"
        blurIt.current.style.filter = "blur(20px)"
        openCV.current.style.zIndex = "10"
    }
    return (
        <div className='exp'>
            {/* <video autoplay muted loop src={bg} type="video/mp4"></video> */}
            <div style={{display:"none"}} ref={openForm} className="form">
                <button style={{cursor:"pointer"}} onClick={handleOnClose} className="closeCV"><i class="fa-solid fa-xmark"></i></button>
                <form id="page4">
                    <h1 id='contactH1'>Contact Form</h1>
                    <input onChange={onChangeValue} type="text" name="Name" placeholder="Enter your name" class="contact_form" id="name" />
                    <input onChange={onChangeValue} type="tel" name="Phone" placeholder="Enter your Telephone Number" class="contact_form" id="phone" />
                    <input onChange={onChangeValue} type="email" name="Email" placeholder="Enter your email address" class="contact_form" id="email" />
                    {/* <input type="text" name="Message" placeholder="Enter your text here" class="contact_form" id="msg"/> */}
                    <textarea onChange={onChangeValue} name="Message" id="messageBox" placeholder='Enter your message here' cols="25" rows="10"></textarea>
                    <button type='submit' onClick={handleOnSend} id="submit_btn">Submit</button>

                </form>
            </div>
            <div ref={openCV} className="cv" style={{ position: "fixed", display:"none" }}>
                <button style={{cursor:"pointer"}}  onClick={handleOnClose} className="closeCV"><i class="fa-solid fa-xmark"></i></button>
                <img id='cvImg' src={cv} alt="" />
                <a id='downloadBefore' target="_blank" href="https://drive.google.com/file/d/1jftq-mYIP9NiztZX6Oyj1iEcHGqo0s-g/view?usp=sharing">
                    <button id="download">Download</button>
                </a>
            </div>
            <div ref={blurIt} className="completeSection">
                <video autoPlay muted loop id="vidBack">
                    <source src={bg} type="video/mp4" />
                </video>
                <h1 id='exploreH1'>Welcome To The Exploration Tab</h1>
                <div className="section">
                    <h2 className='exploreH2'>Index</h2>
                    <ol>
                        <li style={{cursor:"pointer"}} onClick={handleOnOpenCv} className='exploreLi'>CV</li>
                        <li style={{cursor:"pointer"}} className='exploreLi'>Projects</li>
                        <li style={{cursor:"pointer", listStyle:"none"}} className='exploreLi'><a target="_blank" href="https://www.linkedin.com/in/ayush-rathor" style={{color:"white"}}>Education</a></li>
                        <li style={{cursor:"pointer"}} onClick={handleOnOpenContact}  className='exploreLi'>Contact</li>
                    </ol>
                </div>
            </div>

        </div>
    )
}

export default Explore
