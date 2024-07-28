import React, {useContext, useState, useEffect} from 'react';
import {Context} from "../index";

import DeviceItem from "./DeviceItem";



const DeviceList = () => {
    const {device} = useContext(Context)
    const [fontSize, setFontSize]=useState("24px")

    useEffect(()=>{
        const handleResize =()=>{
            const width = window.innerWidth;

            if(width <= 769){
                setFontSize("24px");
            } else if (width <= 1669){
                setFontSize("32px")
            } else if(width <=1899){
                setFontSize("40")
            } else {
                setFontSize("44px")
            }
        }
        window.addEventListener("resize",handleResize)
        handleResize();

        return ()=> {
            window.removeEventListener("resize",handleResize)
        }
    },[])

    return (<div className="mb-5">

                <h2 style={{fontFamily:"KoratakiRegular",marginTop:"50px", fontSize}}>Результаты поиска</h2>
                    <div className="d-flex flex-wrap" >
                        {device._devices.map(device =>
                            <DeviceItem key={device.id} device = {device}/>
                    )}
                    </div>
            </div>
    );
};

export default DeviceList;