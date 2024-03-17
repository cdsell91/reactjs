import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useUser } from './UserContext';

function FileUpload({updateDataAfterUpload}) {

  const { token } = useUser();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', selectedFile);
    
    try {
      const response = await fetch('http://localhost:8081/xlsx/process', {
        method: 'POST',
        headers: {
          'Authorization': `${token}`
        },
        body: formData
      });

      if (!response.ok) {
        console.error('Error: cannot update file!');  
      }

      const responseData = await response.json();
      updateDataAfterUpload(responseData);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" 
                style={{ minHeight: '10vh', padding: '10px'}}>
      <Form>
        <Form.Group>
          <Row>
            <Col xs={10}>
              <Form.Control type="file" onChange={handleFileChange} />
            </Col>
            <Col xs={2}>
              <Button variant="primary" onClick={handleSubmit}>Send</Button>
            </Col>
          </Row>
        </Form.Group>
    
      </Form>
    </Container>
  );
}

export default FileUpload;