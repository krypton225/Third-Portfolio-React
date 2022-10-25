import "./index.scss";

const Button = ({ myVal }) => {
    return (
        <>
            <input className="my-btn" type="submit" value={myVal} />
        </>
    )
}

export default Button
