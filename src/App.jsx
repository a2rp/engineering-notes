import React, { useMemo, useRef, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import GoToTop from "./components/goToTop";
import AppRoutes from "./AppRoutes";
import notes, { formatTopicDateTime } from "./lib/notesRegistry";

const App = () => {
    const location = useLocation();
    const scrollerRef = useRef(null);

    const [displaySlider, setDisplaySlider] = useState(true);
    const [search, setSearch] = useState("");

    const isStandaloneRoute = location.pathname.startsWith("/standalone/");

    const handleSliderToggleClick = () => {
        setDisplaySlider((prev) => !prev);
    };

    const handleClearSearch = () => {
        setSearch("");
    };

    const filteredTopics = useMemo(() => {
        if (!search.trim()) {
            return notes;
        }

        return notes.filter((note) =>
            note.title.toLowerCase().includes(search.toLowerCase()),
        );
    }, [search]);

    if (isStandaloneRoute) {
        return (
            <Styled.StandaloneWrapper>
                <AppRoutes />
            </Styled.StandaloneWrapper>
        );
    }

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header handleSliderToggleClick={handleSliderToggleClick} />
            </Styled.Header>

            <Styled.Main>
                <div
                    className={`menuSlider ${displaySlider ? "" : "hideMenuSlider"}`}
                >
                    <div className="searchWrapper">
                        <div className="searchInputHolder">
                            <FiSearch className="searchIcon" />

                            <input
                                type="text"
                                placeholder="Search topics..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            {search.trim() ? (
                                <button
                                    type="button"
                                    className="clearSearchButton"
                                    onClick={handleClearSearch}
                                    aria-label="Clear search"
                                    title="Clear search"
                                >
                                    <FiX />
                                </button>
                            ) : null}
                        </div>
                    </div>

                    <div className="menuSliderInner">
                        {filteredTopics.map((note) => {
                            const firstLetter = note.title
                                .charAt(0)
                                .toUpperCase();

                            return (
                                <NavLink
                                    key={note.path}
                                    to={note.path}
                                    className={({ isActive }) =>
                                        `menuLink ${isActive ? "active" : ""}`
                                    }
                                >
                                    <span className="menuLinkInitial">
                                        {firstLetter}
                                    </span>

                                    <span className="menuLinkContent">
                                        <span className="menuLinkText">
                                            {note.title}
                                        </span>

                                        <span className="menuLinkMeta">
                                            Added{" "}
                                            {formatTopicDateTime(note.addedOn)}
                                        </span>
                                    </span>
                                </NavLink>
                            );
                        })}
                    </div>
                </div>

                <div className="contentWrapper">
                    <div className="contentInnerWrapper" ref={scrollerRef}>
                        <div className="routesWrapper">
                            <AppRoutes />
                        </div>

                        <div className="footerWrapper">
                            <Footer />
                        </div>

                        <GoToTop scrollerRef={scrollerRef} />
                    </div>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
