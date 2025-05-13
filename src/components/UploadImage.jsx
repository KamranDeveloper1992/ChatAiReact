import React, { useState } from "react";
import Tesseract from "tesseract.js";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function UploadImageToText() {
  const [imageURL, setImageURL] = useState("");
  const [extractedText, setExtractedText] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const image = URL.createObjectURL(file);
      setImageURL(image);

      Tesseract.recognize(image, "eng", {
        logger: (m) => console.log(m),
      }).then(({ data: { text } }) => {
        setExtractedText(text);
        setIsPopupOpen(true); // Popup açılır burda
      });
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <h1>Image to Text Converter</h1>
      <form>
        <label htmlFor="fileUpload">Upload file: </label>
        <input
          type="file"
          id="fileUpload"
          onChange={handleFileChange}
          style={{ cursor: "pointer" }}
        />
      </form>

      <Popup open={isPopupOpen} onClose={closePopup} modal closeOnDocumentClick>
        <div style={{ padding: "20px" }}>
          <h2>Extracted Text:</h2>
          <p>
            {extractedText || "No text found."}{" "}
            {imageURL && <img src={imageURL} alt="Uploaded" width="300" />}
          </p>
          <button onClick={closePopup}>Close</button>
        </div>
      </Popup>
    </>
  );
}

export default UploadImageToText;
