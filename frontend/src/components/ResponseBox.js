// src/components/ResponseBox.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaCommentDots } from 'react-icons/fa';

const ResponseBox = ({ response }) => {
  return (
    response && (
      <Card className="mt-4 shadow-sm">
        <Card.Header>
          <FaCommentDots style={{ marginRight: "8px" }} />
          AI Response
        </Card.Header>
        <Card.Body>
          <Card.Text>{response}</Card.Text>
        </Card.Body>
      </Card>
    )
  );
};

export default ResponseBox;

