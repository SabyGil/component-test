import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ScreenFour = () => {
  return (
    <div className='view-container'>
      <header className="v-header">
        <div className='fullscreen-video-wrap' >
          <video loop autoPlay >
            <source src={'https://pixabay.com/en/videos/download/video-4749_medium.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
        {/* <div className="header-content text-md-center"> */}
        <div className="">
          <Form>
          <FormGroup>
             <Label for="exampleEmail">Email</Label>
             <Input type="email" name="email"  placeholder="with a placeholder" />
           </FormGroup>
           <FormGroup>
             <Label for="examplePassword">Password</Label>
             <Input type="password" name="password" placeholder="password placeholder" />
           </FormGroup>
           <FormGroup>
             <Label for="examplePassword">ipsum</Label>
             <Input type="password" name="password" placeholder="password placeholder" />
           </FormGroup>
           <FormGroup>
             <Label for="examplePassword">ipsum</Label>
             <Input type="password" name="password" placeholder="password placeholder" />
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
