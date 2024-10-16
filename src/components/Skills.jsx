export default function Skills(){
    const skills = ['TypeScript','Next.js','ReactJS', 'NodeJS', 'ExpressJS','MongoDB', 'Tailwind CSS', 'BootStrap', 'Java','Python', 'C/C++', 'HTML', 'CSS', 'JavaScript', 'Git', 'Figma', 'Canva']
    return(
        <section className="skills" id="skills">
            <h2 className="sectionHeader">Skills</h2>
            <div className="skillsContainer hidden">
                {
                    skills.map((skillItem)=>{
                        return (<div className="skillItem">{skillItem}</div>)
                        
                    })
                }
            </div>
        </section>
    )
}