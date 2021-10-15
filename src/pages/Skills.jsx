import React from 'react'
import { Skill, SkillItem } from '../components'

const Skills = () => {
    return (
        <section className="skills" id="skills">

            <div className="shaps">
                <div className="shap-1"></div>
                <div className="shap-2"></div>
            </div>
            {/* Front End */}
            <Skill
                label='Front End'>
                <SkillItem label='HTML' percentage={80} />
                <SkillItem label='CSS' percentage={65} />
                <SkillItem label='JavaScript' percentage={85} />
                <SkillItem label='React JS' percentage={75} />
            </Skill>
            {/* Back End */}
            <Skill
                label='Back End'>
                <SkillItem label='Node Js' percentage={85} />
                <SkillItem label='Express' percentage={70} />
                <SkillItem label='MongoDB' percentage={60} />
            </Skill>

            {/* Programming languages */}
            <Skill
                label='Programming Languages'>
                <SkillItem label='JavaScript' percentage={85} />
                <SkillItem label='Python' percentage={80} />
                <SkillItem label='Java' percentage={60} />
                <SkillItem label='C/C++' percentage={75} />
            </Skill>

            {/*Others*/}
            <Skill
                label='Others'>
                <SkillItem label='Algorithms' percentage={60} />
                <SkillItem label='Data Structures' percentage={78} />
            </Skill>

            <div className="bottom"></div>

        </section>
    )
}

export default Skills
