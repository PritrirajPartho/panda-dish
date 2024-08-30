import React, { useState } from 'react';
import './Tooltips.css';

const Tooltips = ({text, children}) => {

    // manage tooltips state
    const[showTooltips, SetShowTooltips] = useState(false);

    return (
        <div className='tooltip-container'
          onMouseEnter={ () => SetShowTooltips(true)}
          onMouseLeave={ () => SetShowTooltips(false)}
        >
            {children}

            <div className={`tooltip ${showTooltips ? "open" : ""}`}>
               {text}
            </div>
        </div>
    );
};

export default Tooltips;