import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UpdateModal(props:any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Products
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul style= {{listStyle:"none", margin: "0",padding: "0",}}>
          <li>
            <input type="text" placeholder="Name" 
            style= {{width: "100%",  marginBottom: "10px",}}/>
          </li>
          <li>
            <input type="number" placeholder="Quantity"  
            style= {{width: "40%", marginBottom: "10px",}}/>
            <input type="number" placeholder="Unit Price"  
            style= {{width: "40%",marginLeft: "20%"}}/>
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="warning" onClick={props.onHide}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateModal;