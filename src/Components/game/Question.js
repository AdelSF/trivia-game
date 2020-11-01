import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { addToStartGame, addToResult, addToQuizNumber } from '../../Redux/actions'
import { calculatedStart } from '../../Util/calculatedGame'



export default function Question({ data }) {
    const [selected, setSelected] = useState('')
    const {start, end, quizNumber} = useSelector(state => state.game)
    const total = useSelector(state => state.questions.length)
    const dispatch = useDispatch()


    const handleOption = (index) => {
        setSelected(index)
        setTimeout(() => {
            const result = data.incorrect[index] === data.correct
            dispatch(addToResult(result))
            let startNum = calculatedStart(start, total)
            dispatch(addToStartGame(startNum))
            dispatch(addToQuizNumber(quizNumber + 1))
            setSelected('')
        }, 2000);
    }

    const letters = {
        0: 'A',
        1: 'B',
        2: 'C',
        3: 'D'
    }


    return (
        <Container>
            <QuizNumber>{quizNumber}</QuizNumber> 
            <QuizContainer>
                <Quiz>{data.question}</Quiz>
                <OptionContainer>
                    {data.incorrect.map((item, index) => {
                        let letter = letters[index]
                        return (
                            <Option key={index} selected={selected === index} onClick={() => handleOption(index)}>
                                <div><OptionSquare selected={selected === index}>{letter}</OptionSquare>{item}</div>
                                { selected === index ? <div>&#10003;</div> : '' }
                            </Option>
                        )
                    })}

                </OptionContainer>
            </QuizContainer>
        </Container>
    )
}


const QuizContainer = styled.div`
    min-width: 655px;
`
const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 700px;
    padding-left: 70px;
    padding-right: 70px;
`

const QuizNumber = styled.span`
    border: 2px solid;
    border-radius: 50%;
    padding: 0px 8px;
    height: 27px;
    margin-right: 10px;
    font-size: 22px;
`
const Quiz = styled.span`
    margin: 0px;
    max-width: 100%;
    font-weight: unset;
    font-size: 24px;
    line-height: 32px;
    color: rgb(33, 34, 16);
`
const OptionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
`
const OptionSquare = styled.span`
    padding: 0 4px;
    margin-right: 6px;
    border: 1px solid;
    color: ${({selected}) => selected ? 'rgb(250, 229, 120)' : 'rgb(19, 124, 117)' };
    border-radius: 2px;
    border-color: rgba(19, 124, 117, 0.6);
    background-color: ${({selected}) => selected ? 'rgb(19, 124, 117)' : 'rgb(249, 222, 86)' };
`
const Option = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
    padding: 10px;
    border-style: solid;
    font-size: 1.2rem;
    line-height: 1.7rem;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 4px;
    background-color: rgba(19, 124, 117, 0.1);
    /* box-shadow: rgba(19, 124, 117, 0.6) 0px 0px 0px 1px inset; */
    color: rgb(19, 124, 117);
    border-width: ${({selected}) => selected ? 2 : 1 }px; // object 
    :hover {
        background-color: rgba(19, 124, 117, 0.3);
    }
`