
import React from "react";

const galleryImages = [
  "https://plus.unsplash.com/premium_photo-1730833407496-76437d869827?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1730460042828-89bc39c6d833?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1721332149274-586f2604884d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1730386114645-1548682d1577?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1659303388057-de33f9a6a924?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1730541843784-09aceb8a1b63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Gallery: React.FC = () => {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 bg-gray-100 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Employment Gallery</h1>
      <p className="text-center mb-10 max-w-2xl mx-auto">
        Welcome to the Employment Gallery at CLONED IGEODDA Inc. Here, you can view pictures of our professional workers in action, showcasing their dedication and expertise across various roles within our company.
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto">
        {galleryImages.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={src} alt={`Professional employee ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

