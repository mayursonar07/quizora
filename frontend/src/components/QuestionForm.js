// import React, { useState } from 'react';
// import axios from 'axios';
// import { Form, Button, Card, Spinner, Container, Row, Col } from 'react-bootstrap';

// const AskForm = () => {
//   const [question, setQuestion] = useState('');
//   const [response, setResponse] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleAsk = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponse('');

//     try {
//       const res = await axios.get(`http://localhost:8000/ask?question=${encodeURIComponent(question)}`);
//       setResponse(res.data.response);
//     } catch (err) {
//       setResponse("Error: Could not fetch answer.");
//     }
//     setLoading(false);
//   };

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col md={10} lg={8}>
//           <Card className="p-4 shadow-sm">
//             <h4 className="mb-3 text-center"><i className="fas fa-question-circle me-2"></i>Ask your AI Assistant</h4>
//             <Form onSubmit={handleAsk}>
//               <Form.Group className="mb-3">
//                 <Form.Control
//                   type="text"
//                   placeholder="Type your question here..."
//                   value={question}
//                   onChange={(e) => setQuestion(e.target.value)}
//                   required
//                 />
//               </Form.Group>
//               <div className="d-grid">
//                 <Button variant="primary" type="submit" disabled={loading}>
//                   {loading ? <Spinner size="sm" animation="border" /> : 'Ask'}
//                 </Button>
//               </div>
//             </Form>
//             {response && (
//               <Card className="mt-4 bg-light border-0">
//                 <Card.Body>
//                   <h5><i className="fas fa-robot me-2"></i>AI Response:</h5>
//                   <p>{response}</p>
//                 </Card.Body>
//               </Card>
//             )}
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AskForm;



// src/components/QuestionForm.js
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';

const QuestionForm = ({ onAsk }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onAsk(question);
      setQuestion('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="my-4">
      <Row className="align-items-center">
        <Col xs={9} sm={10}>
          <Form.Control
            type="text"
            placeholder="Type your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Col>
        <Col xs={3} sm={2}>
          <Button variant="success" type="submit" className="w-100">
            <FaPaperPlane />
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default QuestionForm;
