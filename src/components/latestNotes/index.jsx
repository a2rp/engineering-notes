import React from "react";
import { Link } from "react-router-dom";
import { Styled } from "./styled";
import { getLatestTopics, formatTopicDateTime } from "../../data/topicUtils";

const LatestNotes = ({ limit = 5, heading = "Latest Added Notes" }) => {
    const latestTopics = getLatestTopics(limit);

    return (
        <Styled.Wrapper>
            <div className="headerRow">
                <h2>{heading}</h2>
                <p>Most recently added topics from Engineering Notes</p>
            </div>

            <div className="list">
                {latestTopics.map((topic) => (
                    <Link key={topic.path} to={topic.path} className="item">
                        <span className="initial">
                            {topic.title.charAt(0).toUpperCase()}
                        </span>

                        <span className="content">
                            <span className="title">{topic.title}</span>
                            <span className="meta">
                                Added {formatTopicDateTime(topic.addedOn)}
                            </span>
                        </span>
                    </Link>
                ))}
            </div>
        </Styled.Wrapper>
    );
};

export default LatestNotes;
