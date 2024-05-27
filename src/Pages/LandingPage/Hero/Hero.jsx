import { useState, useEffect } from 'react';

const Hero = () => {

    const interval = 2500 

    const images = [
        'https://images.unsplash.com/photo-1624395149011-470cf6f6ec02?q=80&w=2851&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1427694012323-fb5e8b0c165b?q=80&w=2978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1624395148974-f929045c9093?q=80&w=2734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  // Automatically move to the next slide at the specified interval
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, interval);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, interval]); // Re-run effect when currentIndex or interval changes

  return (
    <div className="relative w-full md:h-[300px] h-[200px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Hero;
