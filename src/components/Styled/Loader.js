import React from 'react';
import styled from 'styled-components';

const Futuristic = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 10px;
  background: #3498DB;
  border-radius: 5px;
  animation: load 1.8s ease-in-out infinite; 

  &:before, &:after {
    position: absolute; 
    display: block;
    content: "";
    animation: load 1.8s ease-in-out infinite;
    height: 10px;
    border-radius: 5px;
  }

    &:before {
    top: -20px;
    left: 10px;
    width: 40px;
    background: #EF4836;
  }

  &:after {
    bottom: -20px;
    width: 35px;
    background: #F5AB35; 
  }


@keyframes load {
  0% {
    transform: translateX(40px);
  }
  
  50% {
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(40px);
  }
}
`;

const BounceBall = styled.div`
  width: 18px;
  height: 18px;
  background-color: #333;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  
  :first-child {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  
  :nth-child(2) {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0) }
    40% { -webkit-transform: scale(1.0) }
  }
  
  @keyframes sk-bouncedelay {
    0%, 80%, 100% { 
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% { 
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }
`;

const BouncerWrapper = styled.div`
  margin: 100px auto 0;
  width: 70px;
  text-align: center;
`;

function Bouncer() {
  return (
    <BouncerWrapper>
      <BounceBall />
      <BounceBall />
      <BounceBall />
    </BouncerWrapper>
  )
}

const Loader = Futuristic;
export { Loader, Futuristic, Bouncer };
