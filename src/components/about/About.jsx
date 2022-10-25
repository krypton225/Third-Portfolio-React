import "./index.scss";

function About() {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row">
                    <h2 className="about__title">about me</h2>

                    <div className="about__info">
                        <div className="about__info__pic">
                            <img src="./assets/images/person/pic-2-min.jpg" alt="Person in the about section" />
                        </div>

                        <div className="about__info__desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, consectetur dolor. Neque minus obcaecati sunt nisi id atque et nulla sint eum harum. Enim itaque distinctio perferendis, nihil natus, facere eveniet aut mollitia ex architecto, cumque ipsum suscipit odio sunt. Sunt, deserunt vel eaque illum soluta voluptatibus libero non dolores?
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
