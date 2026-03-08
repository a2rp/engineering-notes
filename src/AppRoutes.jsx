import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import notes from "./lib/notesRegistry";

const About = lazy(() => import("./components/about"));
const NotFound = lazy(() => import("./pages/notFound"));
const StandaloneNote = lazy(() => import("./pages/standaloneNote"));

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

                {notes.map((note) => {
                    const NoteComponent = note.Component;

                    return (
                        <Route
                            key={note.path}
                            path={note.path}
                            element={<NoteComponent />}
                        />
                    );
                })}

                <Route path="/standalone/:slug" element={<StandaloneNote />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
