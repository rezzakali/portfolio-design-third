import { Text } from '@chakra-ui/react';
import React from 'react';
import myPIc from '../images/myPIc.png';
import classes from '../styles/About.module.css';

function About() {
  return (
    <>
      <Text fontSize="4xl" mb="25px">
        About
      </Text>
      <div id="about" className={classes.about}>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src={myPIc} alt="myPicture" className={classes.myPic} />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <Text fontSize="md" className="mt-3">
              Hi there! I'm <code>Rezzak Ali </code> from India, I have
              completed my graduation from Gauhati University,Assam (India) in
              Bachelor of Computer Application. I loved programming and
              open-source fans! and spend most of time with coding with
              outstanding project, I actually expert in MERN Stack and now I'm
              working as a freelancer.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
