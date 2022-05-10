import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({authenticate, setAuthenticate}) => {
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
        setAuthenticate(false);
    };
    const goToMain = () => {
        navigate("/");
    };
    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "아동",
        "H&M HOME",
        "Sale",
        "지속가능성",
    ];
    const search = (event) => {
        if(event.key === "Enter"){
            let keyword = event.target.value
            navigate(`/?q=${keyword}`)
        }
    }

    return (
        <div>
            <div>
                <div className="login-button" onClick={goToLogin}>
                    <div className="login-icon">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div>{!authenticate?"로그인":"로그아웃"}</div>
                </div>
            </div>
            <div className="logo" onClick={goToMain}>
                <img
                    width={150}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png"
                    alt=""
                />
            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
                <div className="search-area">
                    <div className="search-icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <input className="input-box" type="text" onKeyPress={(event) => search(event)} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
