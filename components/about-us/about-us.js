import classes from './about-us.module.css';



function AboutUs() {
    return (
        <div className={classes.socialcontainer}>
            <div className={classes.aboutsocial}>
                <a id="aboutUs_link"><h1>About Us</h1></a>
                <p>
                   Dat0s is a place where data professionals from underrepresented backgrounds can connect & engage on topics, events, and projects. 
                </p>
            </div>
            <div className={classes.socialimagecontainer}>
                <div className={classes.socialflex}>
                    <div className={classes.socialgroup}>
                        <img className={classes.socialimage} src={process.env.PUBLIC_URL+"../../images/discord-white.png"} alt="pic" />
                        <p>Join Our Discord Community</p>
                    </div>
                    <div className={classes.socialgroup}>
                        <img className={classes.socialimage} src={process.env.PUBLIC_URL+"../../images/linkedin-logo-white.png"} alt="pic" />
                        <p>Scale Your Network</p>  
                    </div>
                    <div className={classes.socialgroup}>
                        <img className={classes.socialimage} src={process.env.PUBLIC_URL+"../../images/github-sign-white.png"} alt="pic" />
                        <p>Dat0s Community Projects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
