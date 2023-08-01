import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = ({ pdfData, page }) => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js">
      <div className="h-[87vh] mt-10 w-full flex justify-center items-center">
        <Viewer initialPage={page} fileUrl={pdfData} defaultScale={1.5} scrollMode enableSmoothScroll/>
      </div>
    </Worker>
  );
};

export default PdfViewer;
