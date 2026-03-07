import React from "react";
import { useParams } from "react-router-dom";
import topics from "../../data/topics.json";
import { Styled } from "./styled";
import EventLoop from "../eventLoop";
import JavascriptVarLetConst from "../javascriptVarLetConst";
import NotFound from "../notFound";

const topicComponentMap = {
    EventLoop,
    JavascriptVarLetConst,
};

const StandaloneNote = () => {
    const { slug } = useParams();

    const matchedTopic = topics.find(
        (topic) => topic.path.replace("/", "") === slug,
    );

    if (!matchedTopic) {
        return <NotFound />;
    }

    const TopicComponent = topicComponentMap[matchedTopic.componentName];

    if (!TopicComponent) {
        return <NotFound />;
    }

    return (
        <Styled.Wrapper>
            <Styled.Inner>
                <TopicComponent />
            </Styled.Inner>
        </Styled.Wrapper>
    );
};

export default StandaloneNote;
