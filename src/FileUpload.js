import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Aquí puedes manejar la carga del archivo, por ejemplo, enviarlo a un servidor
    if (selectedFile) {
      console.log('Archivo seleccionado:', selectedFile);
    } else {
      console.log('No se ha seleccionado ningún archivo.');
    }
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Select File</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        <Button variant="primary" onClick={handleUpload}>Send</Button>
      </Form>
    </Container>
  );
}

export default FileUpload;