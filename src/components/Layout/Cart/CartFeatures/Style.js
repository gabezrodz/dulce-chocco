import styled, { keyframes } from "styled-components";

export const CartButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: #672f0a;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: "Fredoka", sans-serif;

  &:hover,
  &:active {
    background-color: #89380c;
  }
`;

export const Icon = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 1rem;
`;

export const Badge = styled.span`
  background-color: #2c0d00;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #4d1601;
  }
`;

// const Bump = keyframes`
// 0% {
//     transform: scale(1);
//   }
//   10% {
//     transform: scale(0.9);
//   }
//   30% {
//     transform: scale(1.1);
//   }
//   50% {
//     transform: scale(1.15);
//   }
//   100% {
//     transform: scale(1);
//   }

// `;

// .bump {
//   animation: bump 300ms ease-out;
// }

// @keyframes bump {
//   0% {
//     transform: scale(1);
//   }
//   10% {
//     transform: scale(0.9);
//   }
//   30% {
//     transform: scale(1.1);
//   }
//   50% {
//     transform: scale(1.15);
//   }
//   100% {
//     transform: scale(1);
//   }
// }
