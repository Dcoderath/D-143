import React, { useEffect, useState } from "react";
import "./Grid.css";

const Grid = () => {
  const [images, setImages] = useState([]);
  const [imageDisplaySettings, setImageDisplaySettings] = useState([]);

  useEffect(() => {
    // Retrieve the uploaded images and display settings (size: large/small) from localStorage
    const storedImages = JSON.parse(localStorage.getItem("uploadedImages"));
    const storedImageDisplaySettings = JSON.parse(localStorage.getItem("imageDisplaySettings"));

    if (storedImages) {
      setImages(storedImages);
    }
    if (storedImageDisplaySettings) {
      setImageDisplaySettings(storedImageDisplaySettings);
    }
  }, []);

  return (
    <div className="grid-container">
      <div className="grid-scroll">
        <div className="grid">
          {images.map((image, index) => (
            <div
              key={index}
              className={`grid-item ${imageDisplaySettings[index] ? 'large' : 'small'}`}
            >
              <img
                src={image}
                alt={`Uploaded Product ${index + 1}`}
                className="image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;
