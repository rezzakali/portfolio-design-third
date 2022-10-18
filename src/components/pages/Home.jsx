import { Button, Text } from '@chakra-ui/react';
import React from 'react';
import classes from '../styles/Home.module.css';

function Home() {
  return (
    <div className={classes.home} id="home">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        mt="80px"
      >
        Welcome To
        <br /> My Personal Portfolio
      </Text>
      <p className={classes.p}>
        Hi there! this is Rezzak Ali a MERN Stack Web Developer, who loves code,
        open-source fans! and spend most of time with coding and loves to debug.
      </p>
      <Button
        bgGradient="linear(to-r, teal.500, green.500)"
        colorScheme="teal"
        size="sm"
        className={classes.btn}
      >
        <a href="#contact">Hire Me</a>
      </Button>
    </div>
  );
}

export default Home;
