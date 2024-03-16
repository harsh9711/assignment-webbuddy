import Image from 'next/image';
import React from 'react';

const RotatingRoundedText = () => {
  return (
    <div className="rounded-text rotating">
      <svg viewBox="0 0 200 200" className="w-64 h-64">
        <path id="textPath" d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0" transform="translate(100,100)" fill="none" strokeWidth="0"></path>
        
        <g fontSize="20.1px">
          <text textAnchor="start">
            <textPath className="coloring" href="#textPath" startOffset="0%">
              WATCH . OUR . VIDEO   &&&&&  WATCH . OUR . VIDEO
            </textPath>
          </text>
        </g>
        
        {/* Image container */}
        <foreignObject x="50" y="50" width="100" height="100">
          {/* Image */}
          <Image src="/assets/1.jpg" alt="Your image alt text" layout="fill" objectFit="cover" />
        </foreignObject>
      </svg>
    </div>
  );
};

export default RotatingRoundedText;
