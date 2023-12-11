import React from "react";
import { Document, Page } from "react-pdf";

export default function PdfViewer({pdf}){
    return(
        <Document file={pdf}>
            <Page pageNumber={1}/>
        </Document>
    );
}