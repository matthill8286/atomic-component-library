import { css, keyframes } from '@/styles/styled'

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

export const placeHolderShimmer = keyframes`
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 568px 0;
  }`

export const rotateBackward = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }`

export const rotateForward = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }`

const pulsing = keyframes`
  0% {
    background-position: 0% 0%
  }
  100% {
    background-position: -135% 0%
  }
`

export const shake = keyframes`
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
`

export const fadeScaleKeyframe = keyframes`
  from {
    transform: scale(0.7);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

export const slideFromRightKeyframe = keyframes`
  from {
    transform: translateX(0);
    transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    opacity: 0;
  }
  to {
    transform: translateX(-50%);
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  }
`

export const slideFromBottomKeyframe = keyframes`
  from {
    transform: translateY(20%) translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0) translateX(-50%);
    opacity: 1;
  }
`

export const newspaperKeyframe = keyframes`
  from {
    transform: scale(0) rotate(720deg) translateX(-50%);
    opacity: 0;
  }
  to {
    transform: scale(1) rotate(0deg) translateX(-50%);
    opacity: 1;
  }
`

export const fallKeyframe = keyframes`
  from {
    transform: translateZ(600px) rotateX(20deg) translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateZ(0px) rotateX(0deg) translateX(-50%);
    opacity: 1;
  }
`

export const superScaledKeyframe = keyframes`
  from {
    transform: scale(2) translateX(-50%) translateY(0);
    opacity: 0;
  }
  to {
    transform: scale(1) translateX(-50%) translateY(0);
    opacity: 1;
  }
`

export const pulse = css`
  position: relative;
  height: 100%;
  width: 100%;
  background: #eee;
  background-image: linear-gradient(to right, #eee 8%, #ddd 18%, #eee 33%);
  background: linear-gradient(-90deg, #efefef 0%, #fcfcfc 50%, #efefef 100%);
  background-size: 400% 400%;
  animation: ${pulsing} 1.2s ease-in-out infinite;
`

export const skeleton = css`
  background: #eee;
  background-image: linear-gradient(to right, #eee 8%, #ddd 18%, #eee 33%);
  /* stylelint-disable property-no-vendor-prefix  */
  -webkit-background-size: 800px 104px;
  background-size: 1000px 104px;
  position: relative;
  display: block;
  width: 100%;
  animation: ${placeHolderShimmer} 1.25s infinite ease-in forwards;
`

export const fadingIn = css`
  animation: ${fadeIn} ${({ theme }) => theme.transition.long} ease-in forwards;
  transform: translateX(-50%);
`

export const fadingOut = css`
  animation: ${fadeOut} ${({ theme }) => theme.transition.long} ease-in forwards;
  transform: translateX(-50%);
`

export const newspaper = css`
  animation: ${newspaperKeyframe} ${({ theme }) => theme.transition.long} ease-in forwards;
`

export const superScaled = css`
  animation: ${superScaledKeyframe} ${({ theme }) => theme.transition.long} ease-in forwards;
`

export const slideFromRight = css`
  animation: ${slideFromRightKeyframe} ${({ theme }) => theme.transition.long} ease-in forwards;
`

export const slideFromBottom = css`
  animation: ${slideFromBottomKeyframe} ${({ theme }) => theme.transition.long} ease-in forwards;
`

export const shaking = css`
  animation: ${shake} 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  animation-delay: 1s;
  transform: translate3d(0, 0, 0);
`

export const falling = css`
  perspective: 1300px;
  transform-style: preserve-3d;
  animation: ${fallKeyframe} ${({ theme }) => theme.transition.long} ease-in forwards;
`
