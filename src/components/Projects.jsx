export default function Projects() {
    const projects = [
        {
            title: "Quick Call",
            description: "A one-on-on video call app built using Next.js and TypeScript, establishes WebRTC and WebSockets through PeerJS and Socket.IO respectively",
            github: "https://github.com/adidevs/quickcall",
            url: "https://quick-call.vercel.app",
            img: "./resources/QuickCall.jpeg"
        },
        {
            title: "My Portfolio",
            description: "This site you are currently on! Welcome to my 2nd Major Project. Built using React for code modularity and expanding this project further into a full fledged blog.",
            github: "https://github.com/adidevs/adidevs.github.io",
            url: "https://adidevs.netlify.app",
            img: "./resources/portfolio.png"
        },
        {
            title: "Tasks",
            description: "A To Do List site / collab wall built on the MERN Stack. My first MERN project. This gave me insights and increased my understanding of the React frame work and making scalable projects in the coming times. The backend is connected to a live MongoDB server.",
            github: "https://github.com/adidevs/todo-app",
            url: "https://todo-adidevs.netlify.app",
            img: "./resources/to-do.png"
        },
        {
            title: "Simon Game",
            description: "A game made using jQuery. Tracks mouse click patterns. Uses the random number generator. I learnt the fine details of JavaScript and jQuery and was a challenge at that point of time.",
            github: "https://github.com/adidevs/simon-game",
            url: "https://adidevs.github.io/simon-game",
            img: "./resources/simon-game.png"
        },
        {
            title: "Drum Kit",
            description: "Let the drummer in you out with this drum kit. I learnt to use the audio actions in javascript and the method of accessing keypresses and clicks using Javascript ",
            github: "https://github.com/adidevs/drum-kit",
            url: "https://adidevs.github.io/drum-kit",
            img: "./resources/drum-kit.png"
        },
        {
            title: "Dice Game",
            description: "Roll the die and settle the toss. My first Web Development project using JavaScript. It was fun to make and insightful.",
            github: "https://github.com/adidevs/dice-game",
            url: "https://adidevs.github.io/dice-game/",
            img: "./resources/dice-game.png"
        }
    ]
    return (
        <section id="projects">
            <h2 className="sectionHeader">Projects</h2>
            <div className="projectscontainer ">
                {
                    projects.map(project => {
                        return (
                            <div className="projectCard hidden">
                                <img src={project.img} alt="project" className="projectImage" />
                                <div className="projectContent">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <a className="projectLinks" target="_blank" rel="noopener noreferrer" href={project.github}><i class="fa-brands fa-github"></i></a>
                                    <a className="projectLinks" target="_blank" rel="noopener noreferrer" href={project.url}><i class="fa-solid fa-link"></i></a>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </section>
    )
}