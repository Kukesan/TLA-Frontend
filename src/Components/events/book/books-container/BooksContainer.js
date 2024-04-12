import React from "react";
import { useState } from 'react';
import "./booksContainer.css";
import { Container,Box } from "@material-ui/core";
import { Document } from 'react-pdf'
import Modal from '@mui/material/Modal';

import pdfurl from "../../../../assets/React.pdf"

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const TlaBooks = [
    {
        name: "நினைவுகள்",
        year: "2023",
        img: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg"
    },
    {
        name: "நினைவுகள்",
        year: "2023",
        img: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg"
    },
    {
        name: "நினைவுகள்",
        year: "2023",
        img: "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg"
    }
]

const BooksContainer = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = (book) => {
        setSelectedBook(book);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const [selectedBook, setSelectedBook] = useState(null);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [showViewer, setShowViewer] = useState(false);

    const handleView = () => setShowViewer(true);
    const handleCloseViewer = () => setShowViewer(false);

    return (
        <Container className="books-container">
            <div className="book-sub-container">
                <p className="sub-heading">தமிழ் இலக்கிய மன்றத்தின் வெளியீடுகள்</p>
                <hr class="underline"></hr>
                <div className="books">
                    {TlaBooks.map((book) => {
                        return (
                            <>
                                <div className="book-card" onClick={() => handleOpen(book)}>
                                    <img src={book.img} alt="book" className="book-img" />
                                    <p className="book-name">{book.name}</p>
                                    <p className="book-year">{book.year}</p>
                                </div>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    className="book-modal"
                                >
                                    <Box sx={style} className='boxStyle'>
                                        {selectedBook && (
                                            <div className="left">
                                                <img src={book.img} alt="book" className="popup-book-img" />
                                            </div>
                                        )}
                                        <div className="right">
                                            <p className="popup-book-name">{book.name}</p>
                                            <p className="popup-book-year">{book.year}</p>
                                            <p className="popup-book-description">எமது மொறட்டுவை பல்கலைக்கழக தமிழ் மாணவர்களின் எழுத்தாற்றல்களை வெளிக்கொணரும் ஓர் களம்.</p>
                                            <button className="read-button" onClick={handleView}>பார்வை</button>
                                            {showViewer && (
                                                /* <Viewer
                                                    fileUrl={pdfurl}
                                                    plugins={[defaultLayoutPluginInstance]}
                                                    onClose={handleCloseViewer}
                                                /> */
                                                /* <div>
                                                    <Document file='https://faculty.ksu.edu.sa/sites/default/files/ObjectOrientedProgramminginC4thEdition.pdf'>
                                                        <Page pageNumber={1} />
                                                    </Document>
                                                </div> */
                                                <Document
                                                    file="https://faculty.ksu.edu.sa/sites/default/files/ObjectOrientedProgramminginC4thEdition.pdf"
                                                />
                                            )}
                                            <button className="download-button">தரவிறக்கம்</button>
                                        </div>
                                    </Box>
                                </Modal>
                            </>
                        )
                    })
                    };
                </div>
            </div>
            <div className="book-sub-container">
                <p className="sub-heading">பல்கலைக்கழக மாணவர்களின் வெளியீடுகள்</p>
                <hr class="underline"></hr>
            </div>
        </Container >
    );
}

export default BooksContainer;