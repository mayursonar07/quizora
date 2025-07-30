
// import React from 'react';
// import AskForm from './components/QuestionForm.js';
// import CustomNavbar from './components/Navbar';

// const App = () => {
//   return (
//     <>
//       <CustomNavbar />
//       <AskForm />
//     </>
//   );
// };

// export default App;


// src/App.js
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import QuestionForm from './components/QuestionForm';
import ResponseBox from './components/ResponseBox';
import { Container } from 'react-bootstrap';

function App() {
  const [response, setResponse] = useState('');

  const askQuestion = async (question) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/ask?question=${encodeURIComponent(question)}`);
      const data = await res.json();
      setResponse(data.response || 'No response received');
    } catch (error) {
      setResponse('Error: Could not connect to backend');
    }
  };

  return (
    <>
      <NavBar />
      <Container className="mt-4">
        <QuestionForm onAsk={askQuestion} />
        <ResponseBox response={response} />
      </Container>
    </>
  );
}

export default App;
