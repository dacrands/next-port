import React, {Component} from 'react';

projectData = [
  {
    name: "FlaskFrame",
    features: ['Email Authentication', 'JSON Web Tokens', 'Postgresql', 'Heroku Hosting', 'JinJa Templates'],
    description: "Comingsoon",
    links: [
      "flaskframe.herokuapp.com"
    ]
  }
]

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects : [
        
      ]
    }
  }

  render() {
    return (
      <h1>Test</h1>
    );
  }
}

export default Projects;