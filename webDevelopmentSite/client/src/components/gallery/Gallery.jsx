import React from 'react';
import "./Gallery.css"

function Gallery() {
    const images = Array.from({ length: 24 }, (_, index) => ({
        id: index,
        src: `https://via.placeholder.com/150?text=Image+${index + 1}`,
        alt: `Image ${index + 1}`,
      }));
    
      return (
        <div className="gallery">
          {images.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      );
    }
    
    export default Gallery;