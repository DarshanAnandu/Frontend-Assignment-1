import Logo from "../../asserts/logo.png";
import Resume from "../../asserts/cv.png";
import Portfolio from "../../asserts/portfolio.png";

const ShowCase = ({ onClose, isOpen }) => {
    if (!isOpen) return null;
    return (
        <div className="modal-container" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modalHead-container">
                    <h2 className="profil">DARSHAN</h2>
                    <img src={Logo} alt="Logo" className="htmlLogo" />
                </div>
                <hr className="hr" />
                <div className="Show">
                    <div className="showcase">
                        <img src={Resume} alt="Resume" className="Resume" onClick={() => { window.open("https://drive.google.com/file/d/1QdGkNdljoATevml0xo0gqcsFN4cgEOr_/view?usp=drivesdk", "_blank") }} />
                        <img src={Portfolio} alt="Portfolio" className="Portfolio" onClick={() => { window.open("https://darshananandu.netlify.app/", "_blank") }} />
                    </div>
                    <div className="desc">
                        <span onClick={() => { window.open("https://drive.google.com/file/d/1QdGkNdljoATevml0xo0gqcsFN4cgEOr_/view?usp=drivesdk", "_blank") }}>Resume</span>
                        <span onClick={() => { window.open("https://darshananandu.netlify.app/", "_blank") }}>Portfolio</span>
                    </div>
                </div>
                <hr className="hr" />
                <div className="buttonWrapper">
                    <button className="cancelBtn" onClick={onClose}>
                        close
                    </button>
                    <button className="saveBtn">
                        <a href="mailto:darshansiva32@gmail.com">Ping Me</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowCase;