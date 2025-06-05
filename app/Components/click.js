"use client"

import { useState } from "react"
import React from "react"
import Image from "next/image";

function ClickEvent() {
    const [isVisible, setVisability] = useState(false);

    //Display game when true
    const VisibilityOn = () => {
        setVisability(true);
    };
    
    //Hide game when false
    const VisibilityOff = () => {
        setVisability(false)
    }

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Click the Button to View one of my Favourite Games</h2>
            {isVisible ? (
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <Image src={`/p4enapqkx2851.jpg`} width="240" height="360" alt="halo 2" style={{display: 'block', margin: 'auto', marginTop: '10px'}}/>
                    <button style={{display: 'block', padding: '8px 16px', fontSize: '18px', marginTop: '10px'}} onClick={VisibilityOff}>HIDE</button>
                </div>
                
            ) : (
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <button style={{left: '50%', display: 'block', padding: '8px 16px', fontSize: '18px', marginTop: '10px'}} onClick={VisibilityOn}>SHOW</button>
                </div>
            )
            }
            
        </div>
  );
}

export default function Button() {
    return (
        <ClickEvent></ClickEvent>
    )
}