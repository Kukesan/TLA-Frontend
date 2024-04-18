import React from "react";
import { useState } from "react";
import "./booksContainer.css";
import { Container, Box } from "@material-ui/core";
import Modal from "@mui/material/Modal";

import pdf1970 from "../../../assets/Books/1970.pdf";
import photo1970 from "../../../assets/Books/1970.png";

import pdf1971 from "../../../assets/Books/1971.pdf";
import photo1971 from "../../../assets/Books/1971.png";

import pdf1973 from "../../../assets/Books/1973.pdf";
import photo1973 from "../../../assets/Books/1973.png";

import pdf1975 from "../../../assets/Books/1975.pdf";
import photo1975 from "../../../assets/Books/1975.png";

import pdf1977 from "../../../assets/Books/1977.pdf";
import photo1977 from "../../../assets/Books/1977.png";

import pdf1980 from "../../../assets/Books/1980.pdf";
import photo1980 from "../../../assets/Books/1980.png";

import pdf1981 from "../../../assets/Books/1981.pdf";
import photo1981 from "../../../assets/Books/1981.png";

import pdf1982 from "../../../assets/Books/1982-83.pdf";
import photo1982 from "../../../assets/Books/1982-83.png";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { ZoomInIcon, ZoomOutIcon } from "@react-pdf-viewer/zoom";

const style = {
  position: "absolute",
  top: "50%",
  left: "40%",
  transform: "translate(-50%, -50%)",
};

const TlaBooks = [
  {
    bookName: "நுட்பம்",
    year: "1970",
    img: photo1970,
    pdfUrl: pdf1970,
  },
  {
    bookName: "நுட்பம்",
    year: "1971",
    img: photo1971,
    pdfUrl: pdf1971,
  },
  {
    bookName: "நுட்பம்",
    year: "1973",
    img: photo1973,
    pdfUrl: pdf1973,
  },
  {
    bookName: "நுட்பம்",
    year: "1975",
    img: photo1975,
    pdfUrl: pdf1975,
  },
  {
    bookName: "நுட்பம்",
    year: "1977",
    img: photo1977,
    pdfUrl: pdf1977,
  },
  {
    bookName: "நுட்பம்",
    year: "1980",
    img: photo1980,
    pdfUrl: pdf1980,
  },
  {
    bookName: "நுட்பம்",
    year: "1981",
    img: photo1981,
    pdfUrl: pdf1981,
  },
  {
    bookName: "நுட்பம்",
    year: "1982",
    img: photo1982,
    pdfUrl: pdf1982,
  },
];

const BooksContainer = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (book) => {
    console.log(book.bookName);
    setSelectedBook(book);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [selectedBook, setSelectedBook] = useState(null);

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [showViewer, setShowViewer] = useState(false);

  const handleView = () => {
    setShowViewer(true);
    // handleOpen(); // Open modal when clicking view
    handleFullScreen(); // Enter full screen when clicking view
  };
  const handleCloseViewer = () => setShowViewer(false);

  const handleFullScreen = () => {
    const viewer = document.querySelector(".rpv-core__viewer");
    if (viewer) {
      viewer.requestFullscreen();
    }
  };

  const zoomPluginInstance = zoomPlugin();

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
                  <div className="book-cardimg">
                    <img src={book.img} alt="book" className="book-img" />
                  </div>
                  <div className="book-details">
                    <p className="book-name">{book.bookName}</p>
                    <p className="book-year">{book.year}</p>
                  </div>
                </div>
                {selectedBook && (
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    className="book-modal"
                  >
                    <Box sx={style} className="boxStyle">
                      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <Viewer
                          plugins={[zoomPluginInstance]}
                          fileUrl={selectedBook.pdfUrl}
                        />
                      </Worker>

                      <div className="right">
                        <p className="popup-book-name">
                          {selectedBook.bookName}
                        </p>
                        <p className="popup-book-year">{selectedBook.year}</p>
                        <p className="popup-book-description">
                          எமது மொறட்டுவை பல்கலைக்கழக தமிழ் மாணவர்களின்
                          எழுத்தாற்றல்களை வெளிக்கொணரும் ஓர் களம்.
                        </p>
                        <button className="read-button" onClick={handleView}>
                          பார்வை
                        </button>
                      </div>
                    </Box>
                  </Modal>
                )}
              </>
            );
          })}
          ;
        </div>
      </div>
      <div className="book-sub-container">
        <p className="sub-heading">பல்கலைக்கழக மாணவர்களின் வெளியீடுகள்</p>
        <hr class="underline"></hr>
      </div>
    </Container>
  );
};

export default BooksContainer;
