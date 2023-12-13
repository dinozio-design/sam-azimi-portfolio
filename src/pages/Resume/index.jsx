import React, { useRef } from "react";
import { Zoom } from "react-awesome-reveal";
import PdfViewer from "./PdfViewer";
import SamAzimiResume from "./SamAzimiResume.pdf"

export default function Resume() {
    const resumeRef = useRef(null);

    return (
        <div ref={resumeRef}>
            <Zoom triggerOnce cascade damping={1}>
                <h2>
                    My Resume
                </h2>
                <PdfViewer pdf={SamAzimiResume} />
            </Zoom>
        </div>
    );
};