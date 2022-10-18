import { Text } from '@chakra-ui/react';
import React from 'react';
import { FaDatabase, FaReact } from 'react-icons/fa';
import { MdArchitecture } from 'react-icons/md';
import styles from '../styles/Tech.module.css';

function Technologies() {
  return (
    <div id="technologies" className="mt-5">
      <Text fontSize="4xl">Technologies</Text>
      <div className={styles.technology_section}>
        <div>
          <FaReact style={{ color: 'gray' }} />
          <Text fontSize="2xl">Front-End</Text>
          <Text>Experience with React.js</Text>
        </div>
        <div className="technology_section">
          <FaDatabase style={{ color: 'gray' }} />
          <Text fontSize="2xl">Back-End with DB</Text>
          <Text>Experience with Node.js with MongoDB</Text>
        </div>
        <div className="technology_section">
          <MdArchitecture style={{ color: 'gray' }} />
          <Text fontSize="2xl">MVC</Text>
          <Text>Experience with MVC architecture</Text>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
