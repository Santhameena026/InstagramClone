import React from 'react';
import Post from './Post';


const Mainpage = () => {
  return (
    <div>
      <Post username="Meena" like="56 likes" image="https://static.wixstatic.com/media/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png/v1/fill/w_925,h_529,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png"/>
      <Post username="Poovarasi" like="80 likes" image="https://static.wixstatic.com/media/bb1bd6_2a2a6275ef224d6a944698f81f882733~mv2.png/v1/fill/w_924,h_616,al_c,q_90,enc_auto/bb1bd6_2a2a6275ef224d6a944698f81f882733~mv2.png"/>
      <Post username="Mekala" like="706 likes" image="https://i.pinimg.com/736x/50/df/34/50df34b9e93f30269853b96b09c37e3b.jpg"/>
    </div>
  );
}

export default Mainpage