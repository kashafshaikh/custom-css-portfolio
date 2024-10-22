export default function Skills(){
    return(
       <section>
           <main id="skills">
        <div className="wrapper">
            <div className="shape-1"></div>
            <div className="shape-2"></div>
            <div className="container"> 
                <h2 id="head-2">MY CODING SKILLS</h2>

                <div className="myskills">
                    <div className="details">
                        <span>HTML</span>
                        <span>80%</span>
                    </div>
                    <div className="bar">
                        <div id="html-bar"></div>
                    </div>
                </div>

                <div className="myskills">
                    <div className="details">
                        <span>CSS</span>
                        <span>70%</span>
                    </div>
                    <div className="bar">
                        <div id="css-bar"></div>
                    </div>
                </div>

                <div className="myskills">
                    <div className="details">
                        <span>TypeScript</span>
                        <span>85%</span>
                    </div>
                    <div className="bar">
                        <div id="ts-bar"></div>
                    </div>
                </div>

                <div className="myskills">
                    <div className="details">
                        <span>Nextjs</span>
                        <span>50%</span>
                    </div>
                    <div className="bar">
                        <div id="nextjs-bar"></div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </section>
    )
}