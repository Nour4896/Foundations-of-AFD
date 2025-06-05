"use client"

import { useState } from "react"
import React from "react"
import Hover from "./hover.js"
import Button from "./click.js"
import Blurb from "./personalBlurb.js"

function RenderButtons() {
    const [component, setComponent] = useState('')

    //Renders "About Me" components based on button pressed
    const renderContent = () => {
        switch (component) {
            case '1': //Favourite Sports Team Hover
                return (
                    <div>
                        <Hover></Hover>
                    </div>
                );
            case '2': //Favourite Game Click
                return (
                    <div>
                        <Button></Button>
                    </div>
                );
            case '3': //Personal Blurb
                return (
                    <div>
                        <Blurb
                            title={"A Little About Me."}
                            content={"Besides music and video games, I've got a passion for music (indie, rap, and rnb just to name a few), and I do my best to stay politically informed."}
                        ></Blurb>
                    </div>
                );
            default:
                return <h2 style={{textAlign: 'center'}}>Click a button above to get to know me</h2>;
            }
    };

    //Set component to '1' - Sports Teams
    const setFirst = () => {
        setComponent('1')
    }

    //Set component to '2' - Video Game
    const setSecond = () => {
        setComponent('2')
    }

    //Set component to '3' - Personal Blurb
    const setThird = () => {
        setComponent('3')
    }

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '50px'}}>
                <button style={{padding: '10px 20px', fontSize: '22px'}} onClick={setFirst}>Teams</button>
                <button style={{padding: '10px 20px', fontSize: '22px'}} onClick={setSecond}>Game</button>
                <button style={{padding: '10px 20px', fontSize: '22px'}} onClick={setThird}>Bio</button>
            </div>
            {renderContent()}
        </div>
    )

}

export default function List() {
    return (
        <RenderButtons></RenderButtons>
    )
}