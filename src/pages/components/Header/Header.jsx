import React from 'react';
import logo from '../../../../public/logo.png';
import video from '../../../../public/background-video.mp4';


const Header = () => {
    return (
  <header>
    <section className="bg-white w-[100vw] h-[10vw] sm:h-[8vw] md:h-[6vw] lg:h-[5vw]">
      <nav>
        <img src={logo} alt="Panda-logo"/>
      </nav>
    </section>
    {/* this is video attractor */}
    <div className="videowrapper  box-border m-0 p-0">
      <div className="fullscreen-div">
        <video className="bg-video relative" autoPlay loop muted>
            <source  src={video} type='video/mp4'/>
        </video>
        <div id="videoMessage" className="content">
          <p>Food is not rational. Food is culture, habit, craving, and identity.</p>
          <p className="text-2xl">(Jonathan Safran...)</p>
        </div>
      </div>
    </div>
  </header>
    );
};

export default Header;