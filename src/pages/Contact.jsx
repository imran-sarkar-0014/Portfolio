import React from 'react'

const Contact = () => {
    return (
        <section className='contact container'>
            <div className="center">

                <div className="contact-container">
                    <a href='https://github.com/imran-sarkar-ac' className="link-with-logo">
                        <img src="/github.png" alt="" className="info-logo" />
                        <h6 className='contact-label'>View GitHub Page</h6>
                    </a>
                </div>

                <div className="contact-container">
                    <a href='https://www.facebook.com/imransarkar.sabbir.9' className="link-with-logo">
                        <img src="/facebook.png" alt="" className="info-logo" />
                        <h6 className='contact-label'>Connect to facebook</h6>
                    </a>
                </div>

                <div className="contact-container">
                    <div className="contact-name">Phone:</div>
                    <div className="contact-value">+8801856502441</div>
                </div>
                <div className="contact-container">
                    <div className="contact-name">Email:</div>
                    <div className="contact-value">imransarkar.ac@gmail.com</div>
                </div>
            </div>
        </section>
    )
}

export default Contact
