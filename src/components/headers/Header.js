import React from "react";
import logo from "../../../public/images/america_shield.png";

const Header = () => {
	return (
        <div className="marvelous-header">
            <img className="react-logo" src={logo} alt="React" />
            <div className="marvelous-title">
                <span className="marvelous-title__main-text">MARVEL</span>
                <span className="marvelous-title__italic">APP</span>
            </div>
        </div>
	);
};

export default Header;