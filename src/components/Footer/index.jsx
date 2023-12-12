import React, { useRef } from "react";

export default function Footer() {
    const footerRef = useRef(null);

    return (
        <div ref={footerRef}>
            <footer className="App-footer">
                <p></p>
                <p className='text-body-secondary fst-italic fw-lighter'>This web app is brought to you by:© Sam Azimi - 2023 JavaScrip Developer. Confidential and Proprietary. All Rights Reserved.</p>
            </footer>
        </div>
    );
};