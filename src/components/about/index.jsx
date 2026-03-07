import React from "react";
import { Styled } from "./styled";
import {
    FiBookOpen,
    FiSearch,
    FiLayers,
    FiFileText,
    FiArrowRight,
    FiCode,
    FiTerminal,
    FiCpu,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const highlights = [
    {
        id: 1,
        icon: <FiBookOpen />,
        title: "Study notes in one place",
        description:
            "This project is used to collect technical notes from different areas of engineering and keep them in one structured place for daily learning and revision.",
    },
    {
        id: 2,
        icon: <FiSearch />,
        title: "Search and revisit quickly",
        description:
            "Instead of scrolling through random documents or forgotten files, topics can be searched and revisited quickly whenever a concept needs revision.",
    },
    {
        id: 3,
        icon: <FiLayers />,
        title: "One topic, one route",
        description:
            "Each topic is treated like its own page so concepts remain isolated, easier to read, and cleaner to maintain as the notes collection grows.",
    },
];

const sections = [
    {
        id: 1,
        icon: <FiFileText />,
        title: "What this project is",
        content:
            "Engineering Notes is a React based notes website built to keep technical learning material organized in a clean and searchable format. It acts like a personal engineering notebook where each topic can live on its own page and be updated over time.",
    },
    {
        id: 2,
        icon: <FiCode />,
        title: "Why it exists",
        content:
            "When learning technical topics, useful ideas often get scattered across videos, articles, browser tabs, screenshots, and temporary files. This project solves that mess by turning repeated learning into a structured note system that stays easy to browse and maintain.",
    },
    {
        id: 3,
        icon: <FiTerminal />,
        title: "How it is structured",
        content:
            "The application is built with React, Vite, React Router, styled-components, and react-icons. Topics are shown through route based pages, while the sidebar works as a quick navigation layer. This makes the project feel closer to a lightweight documentation site than a plain static page.",
    },
    {
        id: 4,
        icon: <FiCpu />,
        title: "What kind of topics can live here",
        content:
            "This notes system can include frontend concepts, backend engineering, databases, networking, operating systems, DevOps, cloud basics, architecture ideas, security notes, and anything else that becomes useful during learning or interview preparation.",
    },
];

const About = () => {
    return (
        <Styled.Wrapper className="topicWrapper">
            <section className="heroSection">
                <div className="heroBadge">Engineering Notes</div>

                <h1>
                    A focused place to write, organize, and revisit technical
                    notes.
                </h1>

                <p className="heroText">
                    This project is a personal React based notes website created
                    to store technical concepts in a clean route based format.
                    It is meant for learning, revision, and building a growing
                    engineering knowledge base over time.
                </p>

                <div className="heroActions">
                    <Link to="/event-loop" className="primaryButton">
                        <span>Start Reading Notes</span>
                        <FiArrowRight />
                    </Link>

                    <div className="miniInfo">
                        <span>Route based</span>
                        <span>Searchable</span>
                        <span>Expandable</span>
                    </div>
                </div>
            </section>

            <section className="highlightsSection">
                {highlights.map((item) => (
                    <article key={item.id} className="highlightCard">
                        <div className="cardIcon">{item.icon}</div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </article>
                ))}
            </section>

            <section className="detailsSection">
                <div className="sectionHeader">
                    <p className="sectionEyebrow">About the project</p>
                    <h2>Built like a personal engineering notebook</h2>
                    <p className="sectionText">
                        The goal is not to make a flashy content platform. The
                        goal is to build something practical, readable, and easy
                        to extend whenever a new concept appears during study.
                    </p>
                </div>

                <div className="detailsGrid">
                    {sections.map((item) => (
                        <article key={item.id} className="detailCard">
                            <div className="detailIcon">{item.icon}</div>
                            <div className="detailContent">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="philosophySection">
                <div className="philosophyCard">
                    <h2>Notes philosophy</h2>
                    <p>
                        These notes are primarily written for personal learning.
                        Some pages may feel like working notes rather than
                        polished articles, and that is intentional. The purpose
                        is to capture understanding quickly, refine it over
                        time, and create a long term reference library that
                        remains useful.
                    </p>
                    <p>
                        In plain human terms: less chaos, more clarity, fewer
                        lost concepts floating around like confused electrons.
                    </p>
                </div>
            </section>
        </Styled.Wrapper>
    );
};

export default About;
