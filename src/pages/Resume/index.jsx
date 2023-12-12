import React from "react";
import PdfViewer from "./PdfViewer";
import SamAzimiResume from "./SamAzimiResume.pdf"

export default function Resume() {
    return (
        <>
            <PdfViewer pdf={SamAzimiResume}/>
        </>
    );
};