export default function IndexBody() {
    return (
        <>
            <div className="topCont">
                <div>
                    <h1>Hello.</h1>
                    <p className="intro">Welcome to my website!</p>
                    <img className="self-image" src="/images/profile.jpg" alt="" />
                </div>
                <h2>I'm Dave</h2>
                {/* <p>A physiologist, statitician, and generally curious individual</p> */}
            </div>
            <div className="middle-container">

                <hr></hr>
                <div class="skills">
                    <h2>General interests</h2>
                    <div className="skill-row">
                        <img className="stats-img" src="/images/dna.gif" alt="" />
                        <h3>Physiology</h3>
                        <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis velit et elit commodo, sit amet porttitor quam faucibus. Sed cursus, purus quis faucibus consectetur, justo erat condimentum diam, vel scelerisque elit massa quis urna. Morbi bibendum ligula ut ligula laoreet placerat. Proin pharetra bibendum sem bibendum finibus. Aliquam mattis gravida purus et bibendum. Aenean non libero vitae purus elementum fermentum.</p>
                        {/* <p align="justify">I'm fascinated by how organisms constantly adapt to their environments. Each second, our bodies automatically and/or conciously react to the thousands of different stimulai that we are constantly exposed to. In particular, I am interested in how organisms adapt to specific stimulus in order to build a tolerance for potential future exposures, like how exercising induces adaptations that enable you to better tolerate future exercise. My PhD work investigated the molecular changes that occur with weight loss that end up promoting weight regain.</p> */}
                    </div>
                    <div className="skill-row">
                        <img className="writing-img" src="/images/barchart.gif" alt="" />
                        <h3>Machine Learning and Statistics</h3>
                        <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis velit et elit commodo, sit amet porttitor quam faucibus. Sed cursus, purus quis faucibus consectetur, justo erat condimentum diam, vel scelerisque elit massa quis urna. Morbi bibendum ligula ut ligula laoreet placerat. Proin pharetra bibendum sem bibendum finibus. Aliquam mattis gravida purus et bibendum. Aenean non libero vitae purus elementum fermentum.</p>

                        {/* <p align="justify">I enjoy analyzing large data sets to derive conclusions. In my lifetime, our ability to measure things en masse has improved vastly and so have the algorithms that are required to find the patterns in the data. I am particularly interested in the integration of multi-omics data and how these data can be leveraged to predict and find the cause of diseases.</p> */}
                    </div>
                    <div className="skill-row">
                        <img className="coding-img" src="/images/coding.gif" alt="" />
                        <h3 className="coding-h3">Programming</h3>
                        <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mattis velit et elit commodo, sit amet porttitor quam faucibus. Sed cursus, purus quis faucibus consectetur, justo erat condimentum diam, vel scelerisque elit massa quis urna. Morbi bibendum ligula ut ligula laoreet placerat. Proin pharetra bibendum sem bibendum finibus. Aliquam mattis gravida purus et bibendum. Aenean non libero vitae purus elementum fermentum.</p>
                        {/* <p className="coding-p" align="justify">I enjoy programming for generating data pipelines and web/app development. </p> */}
                    </div>
                </div>
            </div>
        </>
    );
}