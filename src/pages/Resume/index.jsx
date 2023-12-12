import React, { useRef }  from "react";
import PdfViewer from "./PdfViewer";
import SamAzimiResume from "./SamAzimiResume.pdf"

export default function Resume() {
    const resumeRef = useRef(null);

    return (
        <div ref={resumeRef}>
            <h2>
                My Resume
            </h2>
            <PdfViewer pdf={SamAzimiResume} />
        </div>
    );
};