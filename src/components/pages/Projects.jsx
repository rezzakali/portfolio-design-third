import { Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { TbCode } from 'react-icons/tb';
import authImage from '../images/auth.png';
import chatImage from '../images/Capture.PNG';
import RestApiImage from '../images/rest-api1.png';
import TodoImage from '../images/todo1.png';
import styles from '../styles/Project.module.css';

function Projects() {
  return (
    <div id="projects">
      <Text fontSize="4xl">Projects</Text>
      <div className="row text-center">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className={`card mt-5  ${styles.project_card}`}>
            <img src={TodoImage} className="card-img-top" alt="todoImg" />
            <div className="card-body">
              <Heading style={{ color: 'gray' }}>TODO APP</Heading>
            </div>
            <Button m="2px" width="10px">
              <a
                href="https://github.com/rezzakali/redux-todo-app"
                target="_blank"
                rel="noreferrer"
              >
                <TbCode style={{ color: 'black' }} />
              </a>
            </Button>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className={`card mt-5  ${styles.project_card}`}>
            <img src={chatImage} className="card-img-top" alt="todoImg" />
            <div className="card-body">
              <Heading style={{ color: 'gray' }}>Chat Application</Heading>
            </div>
            <Button m="2px" width="10px">
              <a
                href="https://github.com/rezzakali/React-Fireabase-Chat-Application"
                target="_blank"
                rel="noreferrer"
              >
                <TbCode style={{ color: 'black' }} />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className={`card mt-5 ${styles.project_card}`}>
            <img src={authImage} className="card-img-top" alt="todoImg" />
            <div className="card-body">
              <Heading style={{ color: 'gray' }}>Authentication</Heading>
            </div>
            <Button m="2px" width="10px">
              <a
                href="https://github.com/rezzakali/multiple-auth-in-mern"
                target="_blank"
                rel="noreferrer"
              >
                <TbCode style={{ color: 'black' }} />
              </a>
            </Button>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className={`card mt-5  ${styles.project_card}`}>
            <img src={RestApiImage} className="card-img-top" alt="todoImg" />
            <div className="card-body">
              <Heading style={{ color: 'gray' }}>RESTFul API</Heading>
            </div>
            <Button m="2px" width="10px">
              <a
                href="https://github.com/rezzakali/RESTful-API-In-NODE.JS"
                target="_blank"
                rel="noreferrer"
              >
                <TbCode style={{ color: 'black' }} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
