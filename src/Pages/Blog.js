import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <Accordion className='container mb-5 border rounded' defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header> what is cors?</Accordion.Header>
          <Accordion.Body>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
          <Accordion.Body>
          Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. Here's why I should use it! <br></br>
          Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.

        I might also want to consider leveraging this tool if I eventually wish to host and manage our app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration. <br></br>
        Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does the private route work?</Accordion.Header>
          <Accordion.Body>
          The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
          Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
          <br></br>
          Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
        <br></br>
            Node.js basically works on two concept
        <br></br>
            1. Asynchronous <br></br>
            2. Non-blocking I/O
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
};

export default Blog;