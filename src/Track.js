import React from 'react';
import './Track.css';


const Track = ({current,time}) =>{
    var ship_date = (time.split(' ')[0].split('-').reverse().join('-'));
    var ship_time = (time.split(' ')[1].slice(0,5));
    return(
        
       <div className="dow">
            <div className="dot"></div>
            <div className="dash"></div>
                <div className="cont">
                    <div>
                        <span style={{padding:'0px 0px 0px 10px'}}>
                            {current}
                        </span>
                        <span style={{float:'right',padding:'0px 15px'}}>
                            {ship_time}
                        </span>
                        <span style={{float:'right',padding:'0px 15px'}}>
                            {ship_date}
                        </span>
                    </div>
                </div>
        </div>
    )
}


export default Track;