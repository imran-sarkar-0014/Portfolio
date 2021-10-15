import React from 'react'

const Skill = (props) => {
    const { label, children } = props
    return (
        <div className='skill'>
            <h4 className="skill-set-label">{label}</h4>
            <ul className='skill-list'>
                {
                    children
                }
            </ul>
        </div>
    )
}

export default Skill
