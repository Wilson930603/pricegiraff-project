import { useState } from 'react';
import Images from 'assets/images';

export default function ProductImages({ images }) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="">
      <div className="aspect-w-1 aspect-h-1 border border-grey-border rounded-10px mb-4">
        <img
          src={currentImage || Images.Placeholder}
          alt=""
          className="object-cover rounded-10px"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="aspect-w-1 aspect-h-1 border border-grey-border rounded-10px cursor-pointer select-none"
            onClick={() => setCurrentImage(image)}
          >
            <img src={image} alt="" className="object-cover rounded-10px" />
          </div>
        ))}
      </div>
    </div>
  );
}
