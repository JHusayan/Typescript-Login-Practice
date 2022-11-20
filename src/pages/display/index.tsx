import {useState} from 'react';
import './display.css'
import {Button,Container} from 'react-bootstrap';
import AddModal from '../../functionalities/addProd';
import Table from './components/table';
import Header from './components/header';
function Display(props:any) {
  const [modalShow, setModalShow] = useState(false);
  const LoggedIn = JSON.parse(sessionStorage.getItem("LoggedIn") || '{}') 
  const {user} = LoggedIn

  return (
    <>
    <Header user={user} setPage={props.setPage}/>
      <Container className='display-container'>
        <Container className='display-header'>
          <input type='text' placeholder='Search....' name='Search'/>
          <Button variant="primary" onClick={() => 
            setModalShow(true)}>
            Add
          </Button>
        </Container>
        <AddModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
        <Table />
      </Container>
    </>
  );
}

export default Display;
