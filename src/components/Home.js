import React from 'react'
import Arrow from './Arrow'
import './Home/Home.css'
import profile from "./Home/img/profile.png"
import cricket_note from "./Home/img/cricket_note.png"
import GendBalla from "./Home/img/GendBalla.png"
import Learning_note from "./Home/img/Learning_note.png"
import Learning from "./Home/img/Learning.png"
import reading_research from "./Home/img/reading research.png"
import Research from "./Home/img/Research.png"
import Astronomy from "./Home/img/Astronomy.png"
import Astronomy_hob from "./Home/img/Astronomy_hob.png"
import { useRef } from 'react'



const Home = () => {

    const crickRef = useRef()
    const researchRef = useRef()
    const astroRef = useRef()
    const learningRef = useRef()
    const crickOver = ()=>{
        crickRef.current.style.transform  = "scale(1)"
    }
    const crickMouseOut =()=>{
        crickRef.current.style.transform  = "scale(0)"
    }

    const researchMouseOver = ()=>{
        researchRef.current.style.transform  = "scale(1)"
    }
    const resMouseOut =()=>{
        researchRef.current.style.transform  = "scale(0)"
    }

    const astroOver = ()=>{
        astroRef.current.style.transform  = "scale(1)"
    }
    const astroOut =()=>{
        astroRef.current.style.transform  = "scale(0)"
    }

    const learnOver = ()=>{
        learningRef.current.style.transform  = "scale(1)"
    }
    const learnOut =()=>{
        learningRef.current.style.transform  = "scale(0)"
    }
    return (

        <div >
            <div className="page1 size"></div>
            <div className="page1">
                <div className="layer1" style={{ display: "flex" }}>
                    <div className="paraDiv">
                        <p className='page1_para'>
                            Hi There <br />
                            Iam Ayush<br />
                            Persuing Computer Science(AI) 2025<br />
                            From NSUT Main Campus<br />
                            Welcome here<br />
                            Scroll down<br />
                            Explore and,<br />
                            Have fun<br />
                        </p>

                        <div className="layer1-2 " style={{ display: "flex" }}>
                            <a className='skl_btn' href="#skillSection"><button className="skills layer1btn">sKills</button></a>
                            <a className='hby_btn' href="#hobbySection"><button className="hobbies layer1btn">Hobbies</button></a>
                        </div>
                    </div>
                    <img id='prf' src={profile} alt="" />
                </div>

                <Arrow />
            </div>

            <div style={{ backgroundColor: "black", height: "100vh" }} id = "skillSection" className="skillSection">
                <h1 style={{ color: "white", textAlign: "center", paddingTop: "6%" }}>Skills</h1>
                <div className="allSkills" style={{ display: "flex", flexDirection: "column", margin: "3%" }}>
                    <button className="s1 sectionBtn">MERN Full Stack Web Development</button><button className="s2 sectionBtn">Data Structures and algorithm</button><button className="s3 sectionBtn">Graphic Designing</button><button className=" s4 sectionBtn">Video Editing</button><button className="s5 sectionBtn">Database and Management System</button><button className="s6 sectionBtn">Object-Oriented Programming</button>

                </div>
            </div>
            <div id='hobbySection' className="hobbySection">
                <h1 style={{ color: "#222", textAlign: "center", paddingTop: "6%" }}>Hobbies</h1>
                <div className="allHobby flex flx_wrp">

                    <div class="img2 flex flx_wrp">
                        <img id="cric" onMouseOver={crickOver} onMouseOut = {crickMouseOut} class="img_hob" src={GendBalla} alt="Cricket" />
                        <img class="note" ref={crickRef} onMouseOver={crickOver} onMouseOut = {crickMouseOut} id="cric_note"  src={cricket_note} alt="" />
                    </div>
                    <div class="img3 flex flx_wrp">
                        <img id="resear" onMouseOver={researchMouseOver} onMouseOut = {resMouseOut} class="img_hob" src={Research} alt="Research" />
                        <img class="note" ref= {researchRef} id="research_note" onMouseOver={researchMouseOver} onMouseOut = {resMouseOut} src={reading_research} alt="" />
                    </div>
                    <div class="img4 flex flx_wrp">
                        <img id="astro" class="img_hob" onMouseOver={astroOver} onMouseOut = {astroOut} src={Astronomy} alt="Astronomy" />
                        <img class="note" ref={astroRef} onMouseOver={astroOver} onMouseOut = {astroOut} id="astro_note" src={Astronomy_hob} alt="" />
                    </div>
                    <div class="img5 flex flx_wrp">
                        <img id="learn" onMouseOver={learnOver} onMouseOut = {learnOut} class="img_hob" src={Learning} alt="Learning" />
                        <img class="note" onMouseOver={learnOver} onMouseOut = {learnOut} ref={learningRef} id="learn_note" src={Learning_note} alt="" />

                    </div>
                </div>


            </div>

        </div>

    )
}

export default Home