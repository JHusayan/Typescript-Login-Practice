import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal(props:any) {
  const {key} = props
  console.log('delete',key)

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <h2 style={{alignContent:"center"}}>
              Are you sure you want to Delete {}?
          </h2>
      </Modal.Body>
      <Modal.Footer>
        <Button  onClick={props.onHide}>Cancel</Button>
        <Button variant="danger" onClick={props.onHide}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;