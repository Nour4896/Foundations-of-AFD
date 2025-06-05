"use client"

import { useState } from 'react';
import React from 'react';

function HoverState() {
    const [hover, setHover] = useState(false)

    //Change state on mouse in
    const mouseIn = () => {
        setHover(true)
    }

    //Reverse state on mouse out
    const mouseOut = () => {
        setHover(false)
    }

    return (
        <div>
            <h2 style={{textAlign: 'center', marginBottom: '10px'}}>My Favourite Sports Teams</h2>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                {/* Pittsburgh Penguins Hover Box */}
                <div onMouseOver={mouseIn} onMouseOut={mouseOut} style={{width: '200px', height: '100px', backgroundColor: hover? 'black' : 'white', textAlign: 'center', borderRadius: '20px', margin: '10px', color: hover? '#FCB514' : 'black', fontWeight: '700'}}>
                    {hover ? (
                        <div>
                            <p style={{marginTop: '40px'}}>Pittsburgh Penguins</p>
                        </div>
                    ) : (
                        <div>
                            <p style={{marginTop: '40px'}}>NHL</p>
                        </div>
                    )}
                </div>
                {/* Toronto Raptors Hover Box */}
                <div onMouseOver={mouseIn} onMouseOut={mouseOut} style={{width: '200px', height: '100px', backgroundColor: hover? '#CE1141' : 'white', textAlign: 'center', borderRadius: '20px', margin: '10px', color: hover? 'black' : '#CE1141', fontWeight: '700'}}>
                    {hover ? (
                        <div>
                            <p style={{marginTop: '40px'}}>Toronto Raptors</p>
                        </div>
                    ) : (
                        <div>
                            <p style={{marginTop: '40px'}}>NBA</p>
                        </div>
                    )}
                </div>
                {/* Pittsburgh Steelers Hover Box */}
                <div onMouseOver={mouseIn} onMouseOut={mouseOut} style={{width: '200px', height: '100px', backgroundColor: hover? 'black' : 'white', textAlign: 'center', borderRadius: '20px', margin: '10px', color: hover? '#FFB612' : 'black', fontWeight: '700'}}>
                    {hover ? (
                        <div>
                            <p style={{marginTop: '40px'}}>Pittsburgh Steelers</p>
                        </div>
                    ) : (
                        <div>
                            <p style={{marginTop: '40px'}}>NFL</p>
                        </div>
                    )}
                </div>
                {/* Liverpool FC Hover Box */}
                <div onMouseOver={mouseIn} onMouseOut={mouseOut} style={{width: '200px', height: '100px', backgroundColor: hover? '#C8102E' : 'white', textAlign: 'center', borderRadius: '20px', margin: '10px', color: hover? 'white' : '#C8102E', fontWeight: '700'}}>
                    {hover ? (
                        <div>
                            <p style={{marginTop: '40px'}}>Liverpool FC</p>
                        </div>
                    ) : (
                        <div>
                            <p style={{marginTop: '40px'}}>EPL</p>
                        </div>
                    )}
                </div>
                {/* Pittsburgh Pirates Hover Box */}
                <div onMouseOver={mouseIn} onMouseOut={mouseOut} style={{width: '200px', height: '100px', backgroundColor: hover? 'black' : 'white', textAlign: 'center', borderRadius: '20px', margin: '10px', color: hover? '#fdb827' : 'black', fontWeight: '700'}}>
                    {hover ? (
                        <div>
                            <p style={{marginTop: '40px'}}>Pittsburgh Pirates</p>
                        </div>
                    ) : (
                        <div>
                            <p style={{marginTop: '40px'}}>MLB</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function Hover() {
  return (
    <div>
      <HoverState />
    </div>
  );
}