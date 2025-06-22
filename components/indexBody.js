import EmblaCarousel from './Carousel'

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
                <hr className="hr-space"></hr>
                <h2>A little about me</h2>
                <div className="skill-row">
                    <p align="justify">
                        Born and raised in New Jersey, I grew up spending much of my childhood at the beach and playing a lot of sports. 
                        I attended Rutgers University, where I played division 1 football and studied kinesiology and computer science. 
                        After acheiving my bachelors, I moved to Denver to work on my Ph.D. in molecular biology at the University of Colorado. 
                        Upon completing my Ph.D., I became a post-doctoral fellow at Harvard Medical School, where I used state-of-the-art techniques in bioinformatics and molecular biology to determine transducers of physical activity. 
                        I stayed in Boston when I transitioned into industry as part of the data science team at WHOOP as a Senior Research Scientist. 
                        Currently, I reside in Switzerland, where I spend a lot of my time working on an international data science platform and consulting business I founded (🇺🇸 = Vast AI LLC; 🇨🇭 = Presby Consulting) and conduct research into computer vision as a senior data scientist at the Swiss Institute of Bioinformatics.
                    </p>
                </div>
                {/* <img className="" src="/images/barchart.gif" alt="" /> */}
                {/* <img className="" src="/images/.gif" alt="" /> */}
                {/* <img className="" src="/images/.gif" alt="" /> */}
            </div>
            <hr></hr>

            {/* <div className="content">
                <EmblaCarousel>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </EmblaCarousel>
            </div> */}

            {/* <div className="middle-container">
                <hr></hr>
                <div class="skills">
                    <h2>General interests and hobbies</h2>
                    <div className="skill-row">
                        <img className="stats-img" src="/images/dna.gif" alt="" />
                        <h3>Physiology</h3>
                        <p align="justify">I have a strong background in discovering novel aspects to physiology. My Ph.D. work uncovered a novel role for skeletal muscle and liver in regulating energy expenditure after weight loss and found that activating brown fat with cold exposure fails to beneficially impact energy expenditure during weight loss. As a post-doctoral fellow, I helped uncover the mechanisms behind acute and chronic exercise that confer the many benefits to exercise. In my industrial role at Whoop, I was the first to reveal the impact that COVID-19 vaccines had on the heart usign wearables, an extremely important finding as many government regulators expressed concern over the possible negative side-effects to new forms of vaccination.</p>
                    </div>
                    <div className="skill-row">
                        <img className="writing-img" src="/images/barchart.gif" alt="" />
                        <h3>Machine Learning and Statistics</h3>
                        <p align="justify">In my pursuit to understand physiology, I have mastered and developed novel techniques in statistics and machine learning. During my Ph.D., I worked in the bioinformatics department at University of Colorado and developed a pipeline for transcriptome analysis, including developing a new method for performing pathway analyses to determine the networks of genes that are co-regulated by upstream factors. In my post-doctoral research, I helped leverage new ways to analyze multi-omics data to help decipher the mechanisms that drive benefits to exercise. Currently, I work in the field of wearable technologies and use state-of-the-art methods in machine learning to uncover novel physiology.</p>
                    </div>
                    <div className="skill-row">
                        <img className="coding-img" src="/images/coding.gif" alt="" />
                        <h3 className="coding-h3">Programming</h3>
                        <p align="justify">Programming, outside of statistical programming, is more of a passion than profession for me. I enjoy the puzzle of figuring out how to piece together different coding languages and theories of computer science to solve digital problems. It’s part of the reason why I developed this website! </p>
                    </div>
                </div>
            </div> */}
        </>
    );
}