import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './Smollsnoge.png'
import { NETWORK_ICON_TRANSPARENT } from '../../constants/networks'
import { useActiveWeb3React } from 'hooks/useActiveWeb3React'

const snowflakesFall = keyframes`
  100% {
    top: 100%;
  }
`

// const snowflakesFall = keyframes`
//   100% {
//     transform: translateY(-1000px);
//   }
// `;

const snowflakesShake = keyframes`
  0% {
    transform: translateX(0px)
  }
  50% {
    transform: translateX(80px)
  }
  100% {
    transform: translateX(0px)
  }
`

const Snowgeflake = styled.div`
    color: #ffffff;
    font-size: 2em;
    font-family: 'Arial';
    text-shadow: 0 0 1px #000000;
    position: fixed;
    top: -10%;
    z-index: 9999;
    -webkit-user-select: 'none';
    -moz-user-select: 'none';
    -ms-user-select: 'none';
    user-select: 'none';
    cursor: 'default';
    height: 30px;
    width: 30px;
    z-index: 1000;
    animation-name: ${snowflakesFall}, ${snowflakesShake};
    animation-duration: 10s, 3s;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite, infinite;
    animation-play-state: running, running;
    &:nth-child(0) {
        left: 1%;
        -webkit-animation-delay: 0s, 0s;
        animation-delay: 0s, 0s;
    }
    &:nth-child(1) {
        left: 5%;
        -webkit-animation-delay: 1s, 1s;
        animation-delay: 1s, 1s;
    }
    &:nth-child(2) {
        left: 10%;
        -webkit-animation-delay: 6s, 0.5s;
        animation-delay: 6s, 0.5s;
    }
    &:nth-child(3) {
        left: 15%;
        -webkit-animation-delay: 4s, 2s;
        animation-delay: 4s, 2s;
    }
    &:nth-child(4) {
        left: 20%;
        -webkit-animation-delay: 2s, 2s;
        animation-delay: 2s, 2s;
    }
    &:nth-child(5) {
        left: 25%;
        -webkit-animation-delay: 8s, 3s;
        animation-delay: 8s, 3s;
    }
    &:nth-child(6) {
        left: 30%;
        -webkit-animation-delay: 6s, 2s;
        animation-delay: 6s, 2s;
    }
    &:nth-child(7) {
        left: 35%;
        -webkit-animation-delay: 2.5s, 1s;
        animation-delay: 2.5s, 1s;
    }
    &:nth-child(8) {
        left: 40%;
        -webkit-animation-delay: 1s, 0s;
        animation-delay: 1s, 0s;
    }
    &:nth-child(9) {
        left: 45%;
        -webkit-animation-delay: 3s, 1.5s;
        animation-delay: 3s, 1.5s;
    }
    &:nth-child(10) {
        left: 50%;
        -webkit-animation-delay: 8s, 3s;
        animation-delay: 8s, 3s;
    }
    &:nth-child(11) {
        left: 55%;
        -webkit-animation-delay: 6s, 0.5s;
        animation-delay: 6s, 0.5s;
    }
    &:nth-child(12) {
        left: 60%;
        -webkit-animation-delay: 4s, 2s;
        animation-delay: 4s, 2s;
    }
    &:nth-child(13) {
        left: 65%;
        -webkit-animation-delay: 2s, 2s;
        animation-delay: 2s, 2s;
    }
    &:nth-child(14) {
        left: 70%;
        -webkit-animation-delay: 8s, 3s;
        animation-delay: 8s, 3s;
    }
    &:nth-child(15) {
        left: 75%;
        -webkit-animation-delay: 6s, 2s;
        animation-delay: 6s, 2s;
    }
    &:nth-child(16) {
        left: 80%;
        -webkit-animation-delay: 2.5s, 1s;
        animation-delay: 2.5s, 1s;
    }
    &:nth-child(17) {
        left: 85%;
        -webkit-animation-delay: 1s, 0s;
        animation-delay: 1s, 0s;
    }
    &:nth-child(18) {
        left: 90%;
        -webkit-animation-delay: 3s, 1.5s;
        animation-delay: 3s, 1.5s;
    }
    &:nth-child(19) {
        left: 95%;
        -webkit-animation-delay: 0s, 0s;
        animation-delay: 0s, 0s;
    }
`

const SnowgeflakeWrapper = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
`

const Snowgeflakes = () => {
    const { chainId } = useActiveWeb3React()

    if (!chainId) return null

    return (
        <SnowgeflakeWrapper>
            <Snowgeflake>❅</Snowgeflake>
            <Snowgeflake>
                <img src={logo} alt="snowge" className="snowgeflake" />
            </Snowgeflake>
            <Snowgeflake>❅</Snowgeflake>
            <Snowgeflake>
                <img src={NETWORK_ICON_TRANSPARENT[chainId]} alt="snowge" className="snowgeflake" />
            </Snowgeflake>
            <Snowgeflake>❅</Snowgeflake>
            <Snowgeflake>
                <img src={logo} alt="snowge" className="snowgeflake" />
            </Snowgeflake>
            <Snowgeflake>❅</Snowgeflake>
            <Snowgeflake>
                <img src={logo} alt="snowge" className="snowgeflake" />
            </Snowgeflake>
            <Snowgeflake>❅</Snowgeflake>
            <Snowgeflake>
                <img src={logo} alt="snowge" className="snowgeflake" />
            </Snowgeflake>
            <Snowgeflake>❅</Snowgeflake>
            <Snowgeflake>
                <img src={logo} alt="snowge" className="snowgeflake" />
            </Snowgeflake>
            <Snowgeflake>❅</Snowgeflake>
            <Snowgeflake>
                <img src={NETWORK_ICON_TRANSPARENT[chainId]} alt="snowge" className="snowgeflake" />
            </Snowgeflake>
            <Snowgeflake>❅</Snowgeflake>
            <Snowgeflake>❅</Snowgeflake>
            <Snowgeflake>
                <img src={logo} alt="snowge" className="snowgeflake" />
            </Snowgeflake>
        </SnowgeflakeWrapper>
    )
}

export default Snowgeflakes
