import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ScreenFour = () => {
  return (
    <div className='view-container'>
      <header className="contact-container">
        <div className='fullscreen-video-wrap' >
          <video loop autoPlay >
            <source src={'https://pixabay.com/en/videos/download/video-4749_medium.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
        {/* <div className="header-content text-md-center"> */}
        <div id='contact-form'>
          <Form>
             <FormGroup>
               <Label for="name">Name:</Label>
               <Input type="text" name="name" placeholder="your name..." />
             </FormGroup>
             <FormGroup>
               <Label for="subject">Subject:</Label>
               <Input type="text" name="subject" placeholder="subject" />
             </FormGroup>
             <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email"  placeholder="john@..." />
              </FormGroup>
             <FormGroup>
               <Label for="exampleText">Body</Label>
               <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Form>

          <footer>
            	<span>&copy;2018 718 Digital</span>
          </footer>
        </div>
      </header>
    </div>
  );
}

export default ScreenFour;
