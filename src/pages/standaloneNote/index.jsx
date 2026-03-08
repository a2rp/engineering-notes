import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import notes from "../../lib/notesRegistry";
import NotFound from "../notFound";

const StandaloneNote = () => {
    const { slug } = useParams();

    const matchedNote = notes.find(
        (note) => note.path.replace("/", "") === slug,
    );

    if (!matchedNote) {
        return <NotFound />;
    }

    const NoteComponent = matchedNote.Component;

    return (
        <Suspense fallback={null}>
            <NoteComponent />
        </Suspense>
    );
};

export default StandaloneNote;
