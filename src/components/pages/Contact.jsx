import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import ContactImage from '../images/contact.png';

function Contact() {
  return (
    <div id="contact">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <FormControl mt="15px">
            <FormLabel>Full Name</FormLabel>
            <Input type="text" placeholder="full name" />
            <br />
            <br />
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="email" />
            <br />
            <br />
            <FormLabel>Text</FormLabel>
            <Textarea placeholder="Here is a sample placeholder" />
            <br />
            <br />
            <Button colorScheme="blue" w="100%">
              Send
            </Button>
          </FormControl>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img src={ContactImage} alt="cImage" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
