import Wave from "../waves/Wave";
import "./index.scss";

function Landing() {
    return (
        <section className="landing" id="landing">
            <Wave />

            <div className="container">
                <div className="row">
                    <div className="landing__intro">
                        <h2 className="landing__intro__hello">welcome here!</h2>

                        <p className="landing__intro__name">
                            i'm a <span>Patrick Frederick</span>
                        </p>

                        <p className="landing__intro__job">
                            i'm a <span>full stack developer</span>
                        </p>
                    </div>

                    <div className="landing__img">
                        <img src="./assets/images/person/pic-1-min.jpg" alt="Picture of the man in the landing page" draggable="false" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing
