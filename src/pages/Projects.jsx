import React from 'react'

const Projects = () => {
    return (
        <section className="projects container">
            <div className="project-container">
                <h5 className="project-name">Note Paper</h5>
                <img className='project-img' src="/notepaper.jpg" alt="" />
                <h2 className="project-bottom">
                    <a href="http://notepaper123.herokuapp.com/" className="project-button">Go Web</a>
                    <a href="https://github.com/imran-sarkar-ac/Note-paper" className="project-button">View Code</a>
                </h2>
            </div>
            <div className="project-container">
                <h5 className="project-name">Realtime Chat App</h5>
                <img className='project-img' src="/chatapp.png" alt="" />
                <h2 className="project-bottoms">
                    <a href="http://chatapp0012.herokuapp.com/" className="project-button">Go Web</a>
                    <a href="https://github.com/imran-sarkar-ac/chatapp/" className="project-button">View Code</a>
                </h2>
            </div>

            <div className="bottom"></div>
        </section>
    )
}

export default Projects
