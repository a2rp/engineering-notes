import React, { useEffect, useMemo, useState } from "react";
import { Styled } from "./styled";
import blackBgLogo from "/images/blackBgLogo.png";
import { FiMoon, FiSun, FiBookOpen, FiEdit3, FiPenTool } from "react-icons/fi";
import { IoIosMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

const THEME_LS_KEY = "engineering-notes-theme";

const Header = ({ handleSliderToggleClick }) => {
    const [logoLoaded, setLogoLoaded] = useState(false);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem(THEME_LS_KEY);
        const initialTheme = storedTheme || "dark";
        setTheme(initialTheme);

        if (initialTheme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
    }, []);

    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }

        localStorage.setItem(THEME_LS_KEY, theme);
    }, [theme]);

    const nextTheme = useMemo(() => {
        return theme === "light" ? "dark" : "light";
    }, [theme]);

    const handleToggle = () => {
        setTheme(nextTheme);
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <div className="leftSide">
                    <div className="toggleButtonLogoNameWrapper">
                        <div
                            className="toggleButton"
                            onClick={handleSliderToggleClick}
                        >
                            <IoIosMenu size={32} />
                        </div>
                        <NavLink className={"logoNameWrapper"} to="/">
                            <div className="logoWrapper">
                                {!logoLoaded && (
                                    <div className="logoSkeleton" />
                                )}

                                <img
                                    src={blackBgLogo}
                                    alt="engineering-notes"
                                    onLoad={() => setLogoLoaded(true)}
                                    style={{ opacity: logoLoaded ? 1 : 0 }}
                                    loading="lazy"
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
