import { Link } from "react-router-dom";
import React from "react";
import '../About_Us/About.css'
import lautaro from "../../Style/Imagenes/lautaro.jpeg"
import sergior from "../../Style/Imagenes/Sergio_Romero.jpg"
import juandavid from "../../Style/Imagenes/juandavid.jpeg"
import lucianab from "../../Style/Imagenes/lucianab.jpeg"
import sergiog from "../../Style/Imagenes/sergiog.jpeg"
import pierino from "../../Style/Imagenes/pierino.jpeg"
import frank from "../../Style/Imagenes/frank.jpeg"
import linkedin from "../../Style/Imagenes/linkedin.png"
import instagram from "../../Style/Imagenes/instagram.png"
import github from '../../Style/Imagenes/github.png'

export default function About() {
    return (
        <div className="About-general">
            <h1 className="aboutTitleMembers"> About Us: </h1>
            <div className="divFlexAboutContainer" >
                <div className="About">
                    <div className="blob"></div>
                    <div className="name">
                        <a className="Link" target="_blank" rel="noreferrer" href='https://ar.linkedin.com/in/lautaro-robles-57a5ba242?trk=people-guest_people_search-card'>
                            <h3>Lautaro</h3>
                            <span><img width={200} className='imageProfileAbout' height={200} id="imgl" src={lautaro} alt="lautaro"></img></span>
                        </a>
                        <p>
                            <a target="_blank" rel="noreferrer" href='https://ar.linkedin.com/in/lautaro-robles-57a5ba242?trk=people-guest_people_search-card'><img src={linkedin} height="35" width="35"></img></a>
                            <a target="_blank" rel="noreferrer" href='https://www.instagram.com/lauta.robles'><img src={instagram} height="35" width="35"></img></a>
                            <a target="_blank" rel="noreferrer" href='https://github.com/lautaro012/'><img src={github} height="35" width="35"></img></a>
                        </p>
                    </div>
                </div>

                <div className="About">
                    <div className="blob"></div>
                    <div className="name">
                        <a className="Link" target="_blank" rel="noreferrer" href='https://ar.linkedin.com/in/sergio-leonel-romero-sanchez-rajoy-fullstack'>
                            <h3>Sergio</h3>
                            <span><img width={200} className='imageProfileAbout' height={200} id="imgl" src={sergior} alt="sergior"></img></span>
                        </a>
                        <p>
                            <a target="_blank" rel="noreferrer" href='https://ar.linkedin.com/in/sergio-leonel-romero-sanchez-rajoy-fullstack'><img src={linkedin} height="35" width="35" ></img></a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/phyro_sergio/"><img src={instagram} height="35" width="35"></img></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/PhyroFire"><img src={github} height="35" width="35"></img></a>
                        </p>
                    </div>
                </div>

                <div className="About">
                    <div className="blob"></div>
                    <div className="name">
                        <a className="Link" target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/luciana-bermudez-72a40520b'>
                            <h3>Luciana</h3>
                            <span><img width={200} className='imageProfileAbout' height={200} id="imgl" src={lucianab} alt="lucianab"></img></span>
                        </a>
                        <p>
                            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/luciana-bermudez-72a40520b'><img src={linkedin} height="35" width="35" ></img></a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/luubermudezz/" ><img src={instagram} height="35" width="35"></img></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/lubermudezz" ><img src={github} height="35" width="35"></img></a>
                        </p>
                    </div>
                </div>

                <div className="About">
                    <div className="blob"></div>
                    <div className="name">
                        <a className="Link" target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/pierino-esteban-juncos-9a4804240/'>
                            <h3>Pierino</h3>
                            <span><img width={200} className='imageProfileAbout' height={200} id="imgl" src={pierino} alt="pierino"></img>
                            </span>
                        </a>
                        <p>
                            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/pierino-esteban-juncos-9a4804240/'><img src={linkedin} height="35" width="35" ></img></a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pier_carp/" ><img src={instagram} height="35" width="35"></img></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/pierino2203" ><img src={github} height="35" width="35"></img></a>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <Link to='/home'>
                    <button id="backToHome">Back to Home</button>
                </Link>
            </div>
        </div>
    )
}