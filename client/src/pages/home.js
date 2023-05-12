import React from 'react';
import '../index.css'

function Home() {

    return (
        <div>
  <h1>Project Description</h1>
  <p>This project is a web application built using various technologies and frameworks. It aims to provide a platform for users to explore and share culinary recipes and information.</p>
  
  <h2>Features</h2>
  <ul>
    <li>User Registration and Login: Users can create accounts and authenticate themselves to access the application's features.</li>
    <li>Recipe Management: Users can create, view, update, and delete recipes. Each recipe can have a title, description, ingredients, and cooking instructions.</li>
    <li>Search Functionality: Users can search for recipes based on keywords, ingredients, or categories.</li>
    <li>Social Interactions: Users can like, comment on, and share recipes. They can also follow other users and receive notifications about their activities.</li>
    <li>User Profile: Each user has a profile page that showcases their recipes, followers, and other relevant information.</li>
  </ul>
  
  <h2>Technology Stack</h2>
  <ul>
    <li>Front-End:
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React.js (JavaScript library for building user interfaces)</li>
      </ul>
    </li>
    <li>Back-End:
      <ul>
        <li>Node.js (JavaScript runtime environment)</li>
        <li>Express.js (Node.js web application framework)</li>
        <li>MongoDB (NoSQL database)</li>
        <li>Mongoose (MongoDB object modeling for Node.js)</li>
      </ul>
    </li>
    <li>Authentication and Authorization:
      <ul>
        <li>JSON Web Tokens (JWT) for user authentication and authorization</li>
        <li>bcrypt (library for hashing and comparing passwords)</li>
      </ul>
    </li>
    <li>GraphQL:
      <ul>
        <li>Apollo Server (GraphQL server implementation)</li>
        <li>Apollo Client (GraphQL client library for interacting with the server)</li>
      </ul>
    </li>
  </ul>
  
  <h2>Deployment</h2>
  <p>The application is deployed using a cloud platform, such as AWS, Google Cloud Platform, or Heroku. It utilizes continuous integration and deployment (CI/CD) practices to automate the deployment process.</p>
  
  <h2>Conclusion</h2>
  <p>This project provides a comprehensive platform for culinary enthusiasts to share and discover new recipes. With its user-friendly interface and powerful features, it aims to enhance the culinary experience for users around the world.</p>
 
  <h2>credits</h2>
  <ul>
    <li>Brennon Sullivan</li>
    <li>Mohammad Satter</li>
    <li>Jason Shi</li>
    <li>Dino Arslanovic</li>
  </ul>
        </div>
    );
}

export default Home;