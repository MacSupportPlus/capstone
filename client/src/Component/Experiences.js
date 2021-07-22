import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import '../index.css'
import ModalImage from 'react-modal-image';


//New About Us Page
export const Experiences = () => {

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
      return <>
            
               <Button variant="" onClick={handleShow}>
            <img src="../images/banner.jpg"></img>
          </Button>
          {/* <ModalImage
  small={"../images/banner.jpg"}
  large={"../images/banner.jpg"}
  alt="Hello World!"
/>; */}
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
    
    }