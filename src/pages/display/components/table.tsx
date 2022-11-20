import {useState} from 'react';
import {Button,Container} from 'react-bootstrap';
import DeleteModal from '../../../functionalities/deleteProd';
import UpdateModal from '../../../functionalities/updateProd';
function Table(props:any) {
  const [delShow, setDelShow] = useState(false);
  const [upShow, setUpShow] = useState(false)
  const getProducts = JSON.parse(localStorage.getItem('Product Item') || '[]')

  return (
    <>
      <DeleteModal
        show={delShow}
        onHide={() => setDelShow(false)}

      />
      <UpdateModal
        show={upShow}
        onHide={() => setUpShow(false)}/> 
        <table className="table">
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Total Price</th>
            <th scope="col">Created Date</th>
            <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
          {
          getProducts.length !== 0 ?
          getProducts.map(({name, quantity, unit, createdDate,id}: any,key:any) =>
                <tr key={id}>
                    <td>{name}</td>
                    <td>${unit}</td>
                    <td>${parseInt(quantity) * parseInt(unit)}</td>
                    <td>{createdDate}</td>
                    <td><Button variant="warning" value={key} onClick={() => 
            setUpShow(true)}>Edit</Button></td>
                    <td><Button variant="danger" value={id}  onClick={() => 
            setDelShow(true)}>Delete</Button></td>
                </tr>
          )
          :
          <tr>
              <td colSpan={5}>
                <h4>
                  Product List Empty
                </h4>
              </td>
          </tr>
          }
        </tbody>
        </table> 
    </>
  );
}

export default Table;
