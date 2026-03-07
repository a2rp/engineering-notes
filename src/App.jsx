import React, { useEffect, useRef, useState, useMemo } from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import GoToTop from "./components/goToTop";
import AppRoutes from "./AppRoutes";
import { NavLink } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import topics from "./data/topics.json";
import { formatTopicDateTime, sortTopicsByLatest } from "./data/topicUtils";

const App = () => {
    const scrollerRef = useRef(null);

    const [displaySlider, setDisplaySlider] = useState(true);
    const [search, setSearch] = useState("");

    const handleSliderToggleClick = () => {
        setDisplaySlider((prev) => !prev);
    };

    const handleClearSearch = () => {
        setSearch("");
    };

    useEffect(() => {
        console.log(displaySlider, "displaySlider");
    }, [displaySlider]);

    const filteredTopics = useMemo(() => {
        const latestSortedTopics = sortTopicsByLatest(topics);

        if (!search.trim()) return latestSortedTopics;

        return latestSortedTopics.filter((topic) =>
            topic.title.toLowerCase().includes(search.toLowerCase()),
        );
    }, [search]);

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
                        {filteredTopics.map((topic) => {
                            const firstLetter = topic.title
                                .charAt(0)
                                .toUpperCase();

                            return (
                                <NavLink
                                    key={topic.path}
                                    to={topic.path}
                                    className={({ isActive }) =>
                                        `menuLink ${isActive ? "active" : ""}`
                                    }
                                >
                                    <span className="menuLinkInitial">
                                        {firstLetter}
                                    </span>

                                    <span className="menuLinkContent">
                                        <span className="menuLinkText">
                                            {topic.title}
                                        </span>
                                        <span className="menuLinkMeta">
                                            Added{" "}
                                            {formatTopicDateTime(topic.addedOn)}
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
