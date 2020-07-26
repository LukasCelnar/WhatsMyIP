import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';

const SearchIP = ({ inputValue}) => {
    const [data, setData] = useState('');
    const [containerHeight, setContainerHeight] = useState('');
    const ref = useRef('');

    useEffect(() => {
        const FetchData = async () => {
            // 69.171.250.35
            const response = await axios.get(`https://freegeoip.app/json/${inputValue ? inputValue : ''}`);
            await setData(response.data);
            await setContainerHeight(ref.current.offsetHeight);
        }

        FetchData();

    }, [inputValue]);

    return (
        <div className="ui segment" style={{display: "flex"}}>
            <div ref={ref} style={{width: "50%", paddingRight: "1.5rem"}} className="ui relaxed divided list">
                <div className="item">
                    <div className="content">
                        <div className="header">{inputValue ? "IP:" : "Your IP:"}</div>
                        {data.ip}
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="header">Country:</div>
                        {data.country_name}
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="header">Region:</div>
                        {data.region_name}
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="header">City:</div>
                        {data.city}
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="header">ZIP Code:</div>
                        {data.zip_code}
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="header">Time Zone:</div>
                        {data.time_zone}
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="header">Latitude:</div>
                        {data.latitude}
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <div className="header">Longitude:</div>
                        {data.longitude}
                    </div>
                </div>
            </div>

            <div style={{width: "50%", paddingLeft: "1.5rem"}} className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="100%" height={containerHeight + "px"} id="gmap_canvas" src={`https://maps.google.com/maps?q=${data.latitude}%2C%20${data.longitude}&t=&z=7&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>   
            </div>
        </div>
    );
};

export default SearchIP;