import React, { useState } from 'react'
import styled from 'styled-components'
import Questions from './Questions'


export default function Game() {
    return (
        <Container>
            <Questions />
        </Container>
    )
}

const Container = styled.div`
`