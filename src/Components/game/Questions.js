import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import Question from './Question'
import { newGame } from '../../Redux/actions'
import { calculatedEnd } from '../../Util/calculatedGame'

export default function Questions() {
    const [QNumber, setQNumber] = useState(1)
    const questions = useSelector(state => state.questions)
    const {start, end, score, result } = useSelector(state => state.game)
    const dispatch = useDispatch()

    const handleNewGame = () => {
        let endNum = calculatedEnd(end, questions.length)
        dispatch(newGame({
            start: start,
            end: endNum,
            result: {},
            score: 0,
            quizNumber: 1
        }))
    }

    return (
        <Container>
            {
                start === end ?
                    <Div>
                        <H1>You answered {score} correctly out of 10</H1>
                        <Button onClick={handleNewGame}>play again</Button>
                    </Div>
                :
                    <Question data={questions[start]} />
            }
        </Container>
    )
}

const Container = styled.div`
`

const H1 = styled.h1`
    margin: 0px;
    max-width: 100%;
    font-weight: unset;
    font-size: 24px;
    line-height: 32px;
    color: rgb(33, 34, 16);
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Button = styled.button`
    outline: none;
    border: 1px solid transparent;
    margin: 10px 0 0 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 12px 0px;
    padding: 8px 18px;
    min-height: 48px;
    background-color: rgb(75, 185, 183);
    color: rgb(1, 4, 4);
    border-radius: 4px;
    font-weight: 700;
    cursor: pointer;
    font-size: 24px;
    line-height: 32px;
    :hover {
        background-color: rgb(102, 196, 194);
    }
`
