import React from 'react'

const SkillItem = (props) => {

    const { label, percentage } = props

    return (
        <li className="skill-list-item">
            <div className="label-head">
                <h6 className="skill-label">{label}</h6>
                <p className='skill-percentage'>{percentage}</p>
            </div>
            <div className='percentage-containger'>
                <div className='percentage' style={{ width: `${percentage}%` }}></div>
            </div>
        </li>
    )
}

export default SkillItem
