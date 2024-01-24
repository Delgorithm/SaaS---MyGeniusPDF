import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const options = {
    cMapUrl: '/cmaps/',
    cMapPacked: true,
};

const PDFContent = ({pdfFile}) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const handlePageChange = (newPageNumber) => {
        if (newPageNumber >= 1 && newPageNumber <= numPages) {
            setPageNumber(newPageNumber);
        } else {
            setPageNumber(newPageNumber = 1);
        }
    };

    const goPreviousPage = () => {
        handlePageChange(pageNumber - 1);
    }

    const goNextPage = () => {
        handlePageChange(pageNumber + 1);
    }

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <button className='absolute top-[50%] left-[15%] text-5xl p-2 bg-white rounded-full active:scale-95 opacity-85' onClick={goPreviousPage}><GoArrowLeft /></button>
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess} options={options}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p className='text-center mt-1 p-1 text-white'>
                Page {pageNumber} / {numPages}
            </p>
            <button className='absolute top-[50%] right-[15%] text-5xl p-2 bg-white rounded-full active:scale-95 opacity-85' onClick={goNextPage}><GoArrowRight /></button>
        </div>
    )
}

export default PDFContent