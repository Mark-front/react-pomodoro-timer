import React from 'react';
import mp3 from './beng.mp3';
import img from '../icons/png/tomato 1.png';

export function sound() {
  console.log(mp3)
  return (
    <>
    <img src={img} alt="" />
    <audio controls src={mp3}></audio>
    </>
  );
}