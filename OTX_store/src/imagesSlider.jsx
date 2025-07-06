import React, { useState } from 'react';
import './App.css';

function ImagesSlider(props) {
    const { showImages } = props;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!showImages || showImages.length === 0) {
        return <div>No Images</div>;
    }

    const goToPrevious = () => {
        const isFirstImage = currentImageIndex === 0;
        const newIndex = isFirstImage ? showImages.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentImageIndex === showImages.length - 1;
        const newIndex = isLastImage ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };

    return (
        <div className="slider-container">
            <button onClick={goToPrevious} className="slider-button prev-button">‹</button>
            <div className="image-container">
                <img className="product-image" src={showImages[currentImageIndex]} alt="Product" />
            </div>
            <button onClick={goToNext} className="slider-button next-button">›</button>
        </div>
    );
}

export default ImagesSlider;
