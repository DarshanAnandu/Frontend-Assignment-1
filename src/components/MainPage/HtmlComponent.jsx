import '../../App.css';
import Logo from "../../asserts/htmlLogo.png";

const HtmlComponent = ({ openModel }) => {
    return (
        <div className="Html-container">
            <div className="content-wrap">
                <img src={Logo} alt="HTML" className='htmlLogo' />
                <div className="wrapper-html">
                    <h3 className="html-title">Hypertext Markup Language</h3>
                    <p className="htmlDescription">
                        Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                    </p>
                </div>
            </div>
            <button className="htmlBtn" onClick={openModel}>Update</button>
        </div>
    );
};

export default HtmlComponent;