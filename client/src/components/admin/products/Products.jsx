// src/components/admin/products/Products.jsx
import React, { useState, useEffect } from "react";
import "./Products.css";

const Products = () => {
  const [images, setImages] = useState([]); // State to store uploaded images
  const [message, setMessage] = useState(""); // State for messages
  const [totalUploaded, setTotalUploaded] = useState(0); // Track total uploaded images

  // Load total uploaded images count from localStorage
  useEffect(() => {
    const storedCount = localStorage.getItem("totalUploadedImages");
    if (storedCount) {
      setTotalUploaded(parseInt(storedCount, 10));
    }
  }, []);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);

    // Update the total uploaded images count
    const newTotalUploaded = totalUploaded + files.length;
    setTotalUploaded(newTotalUploaded);

    // Store the new count in localStorage
    localStorage.setItem("totalUploadedImages", newTotalUploaded);

    setMessage(`${files.length} images ready to upload.`);
  };

  const handleUpload = () => {
    localStorage.setItem("uploadedImages", JSON.stringify(images));
    setMessage("Images uploaded successfully!");
  };

  const handleReset = () => {
    setImages([]);
    setMessage("Upload reset. All images cleared.");
    // Reset the images in localStorage without affecting the total count
    localStorage.removeItem("uploadedImages");
  };

  return (
    <div className="product-container">
      <div className="form-section">
        <label htmlFor="image-upload" className="upload-label">
          Upload Images
        </label>
        <input
          type="file"
          id="image-upload"
          multiple
          onChange={handleImageUpload}
          className="upload-input"
        />

        <div className="preview-section">
          {images.map((image, index) => (
            <div key={index} className="image-preview">
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="preview-image"
              />
            </div>
          ))}
        </div>

        <div className="button-section">
          <button
            onClick={handleUpload}
            disabled={images.length === 0}
            className="upload-button"
          >
            Upload Images
          </button>
          <button onClick={handleReset} className="reset-button">
            Reset
          </button>
        </div>

        {message && <p className="message">{message}</p>}

        {/* Box showing total number of uploaded images */}
        <div className="total-images-box">
          <p>Total images uploaded: {totalUploaded}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
