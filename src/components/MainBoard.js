import React from 'react'
import styled from 'styled-components'
import Pin from '../components/Pin'
import '../components/Mainboard.css'
function MainBoard(props) {
  let { pins } = props
 return (
  <Wrapper>
    <Container className='mainboard__container'>
    {pins.map((pin, index) => {
      let { urls } = pin;
     return <Pin key={index} urls={urls}/>
    })}
    </Container>
  </Wrapper>
 )
}

export default MainBoard
const Wrapper = styled.div`
 display: flex;
 height: 100%;
 width: 100%;
 margin-top: 15px;
 justify-content: center
`
const Container = styled.div`
margin: 0 auto;
height: 100%;
background-color: white;

`