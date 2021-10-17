import React from 'react'

const About = () => {
    return (
        <section className='about section' id='about'>
            <div className="shaps">
                <div className="shap-1"></div>
                <div className="shap-2"></div>
            </div>
            <div className="about-left">
                <h3 className='hello-text'>Hello</h3>
                <h6 className='name-text'>My name is IMRAN SARKAR.</h6>
                <h3 className='info-text'>I am a Web Developer.</h3>
            </div>
            <div className="about-right">
                <div className="oval">
                    <img className='boy-img' src="/boy.png" alt="" />
                </div>
                <div className="cv-container">
                    <a download href="/Imran Sarkar.pdf" className="btn-outlined">Download CV</a>
                    <div className="cv-desc">Read My CV and know myself.</div>
                </div>
            </div>
        </section>
    )
}

export default About
