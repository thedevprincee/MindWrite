import styled from 'styled-components'

export const HomeWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0; 
    overflow: hidden;
`
export const AppDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0; 
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    @media screen and (min-width:590px){
        border: 2px solid black;
        width: 30%;
        min-width: 300px;
    }
`
export const WebDisplay = styled.div`
    display: none;
    @media screen and (min-width:590px){
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin: 0;
        padding: 0; 
        overflow-y: auto;
        overflow-x: hidden;
        width: 70%;
        min-width: 300px;
        height: 100vh;
    }
`
