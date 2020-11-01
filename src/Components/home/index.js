import React, {useState} from "react"
import styled from 'styled-components'
import Game from '../game'



export default function Home() {
    return (
        <Background>
            <Game />
        </Background>
    )
}

const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9de56;
    height: 100vh;
`