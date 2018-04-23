import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

  let objs = [
      {
          proj: 'Learning Management System',
          who: 'The Knowledge House',
          desc: 'Mad cool app for the dudes at somewhere else'
      },
      {
          proj: 'Youth Wins Resources',
          who: 'Youth Wins',
          desc: 'Mad cool app for the dudes at somewhere else'

      },
      {
          proj: 'Super Project',
          who: 'Super Client',
          desc: 'Mad cool app for the dudes at somewhere else'
      },
      // {
      //     proj: 'Hands Free',
      //     who: 'Gabe',
      //     desc: 'Mad cool thing for taxi driver managers'
      // }
  ]

  let mapped = objs.map((client, index) => {
      return(
          <Card key={index}>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>{client.proj}</CardTitle>
              <CardSubtitle>{client.who}</CardSubtitle>
              <CardText>{client.desc}</CardText>
              <Button>Client Work</Button>
            </CardBody>
          </Card>
      )
  })
class ClientCards extends Component{
    render(){
        return (
          <div className='grid'>
            {mapped}
          </div>
        );
    }
};

export default ClientCards;
