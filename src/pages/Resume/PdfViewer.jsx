import React, { useState, useEffect } from "react";
import { saveAs } from 'file-saver';
import { BsRewind, BsFastForward, BsCloudDownload } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import MyResumePage1 from "./images/SamAzimi_Resume_Page1.png";
import MyResumePage2 from "./images/SamAzimi_Resume_Page2.png";

const styles = {
    buttonStyles: {
        margin: "5px"
    },
    resumeImageStyle:{
        width: "100%"
    }
};

export default function PdfViewer() {
    const [pageNumber, setPageNumber] = useState(1);
    const [pdf, setPdf] = useState(null);

    const numPages = 2;

    useEffect(() => {
        import('./SamAzimiResume.pdf').then((module) => {
            setPdf(module.default);
        })
            .catch((error) => console.error('Error loading PDF file:', error));
    }, []);


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

    const handleDownload = async () => {
        try{
            const response = await fetch(pdf);
            const blob = await response.blob();
            saveAs(blob, 'Sam_Azimi_Resume.pdf');
        } catch (error) {
            console.error('Error fetching the PDF file:', error);
        };
    };
    const resumePage = () => {
        if (pageNumber === 2) {
            return <img style={styles.resumeImageStyle} src={MyResumePage2} alt="Sam Azimi Resume Page 2" />;
        }
        return <img style={styles.resumeImageStyle} src={MyResumePage1} alt="Sam Azimi Resume Page 1"/>;
    };

    return (
        <div>
            <button style={styles.buttonStyles} className="btn btn-outline-secondary" onClick={goToPreviousPage}><BsRewind /> Previous Page</button>
            <button style={styles.buttonStyles} className="btn btn-outline-secondary" onClick={goToNextPage}> Next Page <BsFastForward /></button>
            <button style={styles.buttonStyles} className="btn btn-outline-secondary" onClick={handleDownload} data-tooltip-id="DWNLD-tooltip" data-tooltip-content="Click to Download Resume PDF File" data-tooltip-place="bottom"> <BsCloudDownload /> Download</button><Tooltip id="DWNLD-tooltip" opacity={.5} style={{fontSize:"12px"}}/>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <div className="resumeContainer">
                {resumePage()}
            </div>
        </div>
    );
}
