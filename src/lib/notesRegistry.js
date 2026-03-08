import { lazy } from "react";

const noteMetaModules = import.meta.glob("../notes/**/index.jsx", {
    eager: true,
    import: "noteMeta",
});

const noteComponentModules = import.meta.glob("../notes/**/index.jsx");

const getNoteKeyFromPath = (filePath) => {
    return filePath.replace("../notes/", "").replace("/index.jsx", "");
};

const notes = Object.entries(noteMetaModules)
    .map(([filePath, meta]) => {
        const key = getNoteKeyFromPath(filePath);
        const loader = noteComponentModules[filePath];

        if (!meta || !meta.title || !meta.path || !meta.addedOn || !loader) {
            return null;
        }

        return {
            ...meta,
            key,
            loader,
            Component: lazy(loader),
        };
    })
    .filter(Boolean)
    .sort((a, b) => {
        const aTime = new Date(a.addedOn).getTime() || 0;
        const bTime = new Date(b.addedOn).getTime() || 0;
        return bTime - aTime;
    });

export const formatTopicDateTime = (value) => {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return value;
    }

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

export default notes;
