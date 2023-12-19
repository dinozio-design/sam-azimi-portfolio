import React, { useState, useEffect } from "react";
// import { Document, Page } from "react-pdf";
import { saveAs } from 'file-saver';
import { BsRewind, BsFastForward, BsCloudDownload } from "react-icons/bs";
// import images of pdf
// set page number constant
// trigger buttons to show pdf pages 


const styles = {
    buttonStyles: {
        margin: "5px"
    }
};

export default function PdfViewer() {
    // const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [pdf, setPdf] = useState(null);

    const numPages = 2;

    useEffect(() => {
        import('./SamAzimiResume.pdf').then((module) => {
            console.log('PDF module:', module);
            setPdf(module.default);
        })
            .catch((error) => console.error('Error loading PDF file:', error));
    }, []);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }

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
            <button style={styles.buttonStyles} className="btn btn-outline-secondary" onClick={goToPreviousPage}><BsRewind /> Previous Page</button>
            <button style={styles.buttonStyles} className="btn btn-outline-secondary" onClick={goToNextPage}> Next Page <BsFastForward /></button>
            <button style={styles.buttonStyles} className="btn btn-outline-secondary" onClick={handleDownload}> <BsCloudDownload /> Download</button>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            {/* create div element and set the style dynamically when next page button is pushed.
            this will render one page at a time */}
            
            {/* {pdf && (
                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} canvasBackground={'#e6f3f3'} />
                </Document>
            )} */}
        </div>
    );
}
