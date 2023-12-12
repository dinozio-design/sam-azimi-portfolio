import React from "react";
import { useState } from 'react';
import { Document, Page } from "react-pdf";
import { saveAs } from 'file-saver';

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

    const handleDownload = () => {
        fetch(pdf)
            .then((response) => response.blob())
            .then((blob) => {
                saveAs(blob, 'Sam_Azimi_Resume.pdf');
            })
            .catch((error) => {
                console.error('Error fetching the PDF file:', error);
            });
    };

    return (
        <div>
            <button onClick={goToPreviousPage}>Previous Page</button>
            <button onClick={goToNextPage}>Next Page</button>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
            </Document>
        </div>
    );
}