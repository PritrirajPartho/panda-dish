import React from 'react';
import video from'../../../../public/background-video.mp4';


const Banner = () => {
    return (
    <section >
        <div className="videowrapper">
            <div className="fullscreen-div relative">
            <video className="bg-video relative" autoPlay loop muted>
                <source  src={video} type='video/mp4'/>
            </video>
            <div id="videoMessage" className="content text-white absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <p className='text-3xl font-agdasima font-bold'>Food is not rational. Food is culture, habit, craving, and identity.</p>
                <p className="text-2xl font-agufina">(Jonathan Safran)</p>
            </div>
            </div>
        </div>
    </section>
    );
};

export default Banner;