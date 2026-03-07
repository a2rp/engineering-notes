import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import topics from "./data/topics.json";
import NotFound from "./pages/notFound";

const About = lazy(() => import("./components/about"));
const EventLoop = lazy(() => import("./pages/eventLoop"));
const JavascriptVarLetConst = lazy(
    () => import("./pages/javascriptVarLetConst"),
);

const topicComponentMap = {
    EventLoop,
    JavascriptVarLetConst,
};

const PageLoader = () => {
    return (
        <Box
            sx={{
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 1.5,
            }}
        >
            <CircularProgress size={34} thickness={4} />
            <Typography variant="body2">Loading topic...</Typography>
        </Box>
    );
};

const AppRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<About />} />

                {topics.map((topic) => {
                    const TopicComponent =
                        topicComponentMap[topic.componentName];

                    if (!TopicComponent) return null;

                    return (
                        <Route
                            key={topic.path}
                            path={topic.path}
                            element={<TopicComponent />}
                        />
                    );
                })}

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
