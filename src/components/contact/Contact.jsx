import Wave from "../waves/Wave";
import "./index.scss";

function Contact() {
    return (
        <section className="contact">
            <Wave />

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
