import React from "react";
import PdfViewer from "./PdfViewer";
import SamAzimiResume from "./SamAzimiResume.pdf"

export default function Resume() {
    return (
        <>
            <h2>
                My Resume
            </h2>
            <PdfViewer pdf={SamAzimiResume} />
        </>
    );
};