import {Button, Modal} from 'react-bootstrap';
import {useState,useEffect} from 'react'

function AddModal(props:any) {
  const getUniqueID = () => Date.now() + ((Math.random()*100000).toFixed())
  const [prodName, setProdName] = useState("")
  const [prodQuant, setProdQuant] = useState("")
  const [prodUnit, setProdUnit] = useState("")
  const [product, setProduct] = useState<Object[]>([])
  useEffect(() => {
    const getProducts = JSON.parse(localStorage.getItem('Product Item') || '[]')
    setProduct(getProducts)
  },[])
  const handleName = (event:any) => {
      setProdName(event.target.value);
      console.log(prodName)
  };
  const handleQuant = (event:any) => {
      setProdQuant(event.target.value);
            console.log(prodQuant)
  };
  const handleUnit = (event:any) => {
      setProdUnit(event.target.value);
      console.log(prodUnit)
  };
  const hello = {
    id: getUniqueID(),
    name: prodName,
    quantity: prodQuant,
    unit: prodUnit,
    createdDate: new Date(),
    updatedDate: new Date()
  }
  const handleSubmit = () => {
    setProduct(product => [...product, hello]);
  console.log(product)
   localStorage.setItem("Product Item", JSON.stringify([...product, hello]));  
  }
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{opacity:1}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Products
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>
            <input type="text" placeholder="Name" 
            style= {{width: "100%",  marginBottom: "10px",}}
            onChange={handleName}/>
          </li>
          <li>
            <input type="number" placeholder="Quantity"  
            style= {{width: "40%", marginBottom: "10px",}}
            onChange={handleQuant}/>
            <input type="number" placeholder="Unit Price"  
            style= {{width: "40%",marginLeft: "20%"}}
            onChange={handleUnit}/>
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default AddModal