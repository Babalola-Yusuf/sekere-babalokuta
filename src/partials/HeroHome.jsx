import React, { useState, useRef, useEffect } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/hero-image.jpg';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const video = useRef(null);

  useEffect(() => {
    videoModalOpen ? video.current.play() : video.current.pause();
  }, [videoModalOpen]);    

  return (
    <section className="relative ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400  text-4xl sm:text-5xl md:text-6xl">Babalokuta/Sekere</span> New Town
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              Gateway to Igboora, the world home of twins.
              </p>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src={HeroImage} width="768" height="432" alt="Hero" />
              </div>
              <button
                className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                aria-controls="modal"
              >
                <span className="ml-3">Watch the full video (2 min)</span>
              </button>
            </div>

            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <video ref={video} className="absolute w-full h-full" width="1080" height="1080" loop autoPlay controls>
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
