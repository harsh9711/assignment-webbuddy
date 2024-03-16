"use client"
import React, { useState, useEffect } from 'react';
import BlurArrow from "/public/assets/blue-button.svg";
import Watch from "../components/Watch";
import DownloadButton from "../components/buttondownload";
import { slides } from "../data/carouselData.json";
import { CgChevronDoubleLeftO, CgChevronDoubleRightO } from "react-icons/cg";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

const Hero = () => {
  const [slide, setSlide] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transitionDelay = 1000; // 1000 milliseconds (1 second)

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSlide(slide === slides.length - 1 ? 0 : slide + 1);
        setIsTransitioning(false);
      }, transitionDelay);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSlide(slide === 0 ? slides.length - 1 : slide - 1);
        setIsTransitioning(false);
      }, transitionDelay);
    }
  };

  useEffect(() => {
  const handleScroll = () => {
  const currentScrollY = window.scrollY;
  const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
  setLastScrollY(currentScrollY);

  if (scrollDirection === 'down' && currentScrollY > 1) {
    nextSlide();
  } else if (scrollDirection === 'up' && currentScrollY < 1) { // Change 10 to the desired threshold
    prevSlide();
  }
};


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className='pt-4 lg:pt-10'>
      <div className='px-[20px] lg:px-[280px] mb-10'>
        <h1 className='text-center pt-6 text-white lg:text-[50px] lg:leading-7 mb-10'>For Seamless Onboarding &</h1>
        <p className='text-center text-[32px] font-Jost leading-[40px] font-extrabold text-green-900 lg:text-[64px] lg:leading-[72px] mb-10 bg-gradient-to-br from-[#4DCFBB] to-[#A9DFF0] bg-clip-text text-transparent'>
          Property Management Experience
        </p>
        <h1 className='text-center font-Jost text-gray-400 text-[30px] font-normal leading-160 tracking-tighter mx-24'>Our commitment to innovation and customer satisfaction ensures that we are constantly improving and tailoring our software to meet the unique needs of the property management industry.</h1>

        <div className='gap-x-6 flex w-full justify-center pt-8'>
          <button className='bg-[#4328EB] w-1/2 lg:w-fit text-white py-4 px-8 rounded-[4px]'>
            Try for free
          </button>
        </div>
      </div>
      <div className="relative flex h-full w-full justify-center">
        <div className='ml-4 lg:ml-20 flex flex-col lg:flex-row items-center justify-center space-y-3 lg:space-x-9'>
          {/* Left Button */}
          <a className="left carousel-control" onClick={prevSlide} href="#myCarousel" data-slide="prev">
            <CgChevronDoubleLeftO className="arrow arrow-left" />
            <span className="sr-only">Previous</span>
          </a>

          {/* DownloadButton */}
          <div className="mb-4 lg:mb-0">
            <DownloadButton />
          </div>

          {/* Carousel */}
          <div className='flex-grow'>
            <div className="carousel">
              {slides.map((item, idx) => {
                return (
                  <img
                    src={item.src}
                    alt={item.alt}
                    key={idx}
                    className={slide === idx ? "slide" : "slide slide-hidden"}
                  />
                );
              })}
            </div>
          </div>

          {/* Watch component */}
          <div className='mb-4 lg:mb-0'>
            <Watch />
          </div>

          {/* Right Button */}
          <a className="right carousel-control" onClick={nextSlide} href="#myCarousel" data-slide="next">
            <CgChevronDoubleRightO className="arrow arrow-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
