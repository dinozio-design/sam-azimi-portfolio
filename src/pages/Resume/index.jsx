import React from "react";
import { Zoom } from "react-awesome-reveal";
import PdfViewer from "./PdfViewer";
// import SamAzimiResume from "./SamAzimiResume.pdf"

export default function Resume() {


    return (
        <div >
            <Zoom cascade damping={.5}>
                <h2>
                    My Resume
                </h2>
                <PdfViewer  />
            </Zoom>
        </div>
    );
};