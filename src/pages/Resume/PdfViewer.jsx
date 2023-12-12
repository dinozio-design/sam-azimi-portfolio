import React from "react";
import { useState } from 'react';
import { Document, Page } from "react-pdf";

export default function PdfViewer({ pdf }) {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    };

    const goToPreviousPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const goToNextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    return (
        <div>
            <button onClick={goToPreviousPage}>Previous Page</button>
            <button onClick={goToNextPage}>Next Page</button>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            
        </div>
    );
}