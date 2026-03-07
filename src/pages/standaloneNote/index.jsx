import React from "react";
import { useParams } from "react-router-dom";
import topics from "../../data/topics.json";

import EventLoop from "../eventLoop";
import JavascriptVarLetConst from "../javascriptVarLetConst";
import DataTypes from "../dataTypes";

import NotFound from "../notFound";

const topicComponentMap = {
    EventLoop,
    JavascriptVarLetConst,
    DataTypes,
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

    return <TopicComponent />;
};

export default StandaloneNote;
