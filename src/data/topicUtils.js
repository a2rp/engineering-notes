import topics from "./topics.json";

export const sortTopicsByLatest = (items = []) => {
    return [...items].sort(
        (a, b) => new Date(b.addedOn).getTime() - new Date(a.addedOn).getTime(),
    );
};

export const getLatestTopics = (limit = 5) => {
    return sortTopicsByLatest(topics).slice(0, limit);
};

export const formatTopicDateTime = (value) => {
    const date = new Date(value);

    return date.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
};
