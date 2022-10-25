import "./index.scss";

function Contact() {
    return (
        <section className="contact">
            <div className="shape">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#5b8e7d" fillOpacity="1" d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,224C672,224,768,256,864,240C960,224,1056,160,1152,154.7C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="container">
                <div className="row">
                    <form autoComplete="off">
                        <div className="form__action">
                            <label htmlFor="first-name" className="form-label">first name</label>
                            <input type="text" name="first-name" id="first-name" autoComplete="false" />
                        </div>

                        <div className="form__action">
                            <label htmlFor="second-name" className="form-label">second name</label>
                            <input type="text" name="second-name" id="second-name" />
                        </div>

                        <div className="form__action">
                            <label htmlFor="email" className="form-label">email</label>
                            <input type="email" name="email" id="email" autoComplete="off" />
                        </div>

                        <div className="form__action">
                            <label htmlFor="msg" className="form-label">message</label>
                            <textarea name="message" id="msg"></textarea>
                        </div>

                        <div className="form__action">
                            <input type="submit" value="send" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
