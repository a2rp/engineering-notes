import React, { useEffect, useState } from "react";
import { Styled } from "./styled";
import logo from "/logo.png";
import { FiMoon, FiSun, FiBookOpen, FiEdit3, FiPenTool } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

const THEME_LS_KEY = "engineering-notes-theme";

const getInitialTheme = () => {
    try {
        return localStorage.getItem(THEME_LS_KEY) === "light" ? "light" : "dark";
    } catch {
        return "dark";
    }
};

const Header = ({ handleSliderToggleClick, isSliderOpen }) => {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }

        try {
            localStorage.setItem(THEME_LS_KEY, theme);
        } catch {
            // Theme switching still works for the current session.
        }
    }, [theme]);

    const nextTheme = theme === "light" ? "dark" : "light";

    const handleToggle = () => {
        setTheme(nextTheme);
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="leftSide">
                    <div className="toggleButtonLogoNameWrapper">
                        <button
                            type="button"
                            className="toggleButton"
                            onClick={handleSliderToggleClick}
                            aria-label={isSliderOpen ? "Hide topic navigation" : "Show topic navigation"}
                            aria-expanded={isSliderOpen}
                            aria-controls="topics-sidebar"
                        >
                            <IoIosMenu size={32} />
                        </button>
                        <NavLink className={"logoNameWrapper"} to="/">
                            <div className="logoWrapper">
                                {!logoLoaded && (
                                    <div className="logoSkeleton" />
                                )}

                                <img
                                src={logo}
                                alt="Engineering Notes logo"
                                    onLoad={() => setLogoLoaded(true)}
                                    style={{ opacity: logoLoaded ? 1 : 0 }}
                                />
                            </div>

                            <div className="nameWrapper">
                                <div className="title">engineering-notes</div>
                                <div className="subTitle">
                                    rough notes while learning, building, and
                                    figuring things out
                                </div>
                            </div>
                        </NavLink>

                        <div className="pillRow">
                            <div className="stat">
                                <span className="sIcon">
                                    <FiBookOpen />
                                </span>
                                <span>Notes</span>
                            </div>

                            <div className="stat">
                                <span className="sIcon">
                                    <FiEdit3 />
                                </span>
                                <span>Ideas</span>
                            </div>

                            <div className="stat">
                                <span className="sIcon">
                                    <FiPenTool />
                                </span>
                                <span>Learning</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rightSide">
                    <button
                        type="button"
                        className="themeToggleBtn"
                        onClick={handleToggle}
                        aria-label={`Switch to ${nextTheme} theme`}
                        title={`Switch to ${nextTheme}`}
                    >
                        <span className="icon">
                            {theme === "light" ? <FiMoon /> : <FiSun />}
                        </span>

                        <span className="label">
                            {theme === "light" ? "Light" : "Dark"}
                        </span>
                    </button>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
