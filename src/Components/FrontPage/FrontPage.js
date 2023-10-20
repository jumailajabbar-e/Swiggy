import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Row from 'react-bootstrap/Row';
import './FrontPage.css'
function AutoLayoutExample() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className='ls'>
        <ThemeProvider prefixes={{ btn: 'my-btn' }}>
        <Button variant="light" className='light'>Login</Button>
      </ThemeProvider>
      <Button bsPrefix="super-btn" variant="light" className='dark'>
        Sign up
      </Button></div>
        <div className='swiggy'><img src='https://res.cloudinary.com/admitad-gmbh/image/upload/v1654530482/b45f8vpzym2hqa73opxa.png'></img></div>
        <div className='ho'>
            <h1 className='h1'>Hungry?</h1><br/>
            <h4 className="od text-secondary text-secondary text-secondary "> Order food from favourite restaurants near you.</h4>
            </div><br/>
        <InputGroup className="mb-6">
        <Form.Control size='lg'
          placeholder="Enter your delivery location"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"/>
        <Button  variant="warning" id="button-addon2">
          FIND FOOD
        </Button>
      </InputGroup><br/>
      <p  class="text-secondary">  POPULAR CITIES IN INDIA</p>
      <p className='p text-secondary'>Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai<br/> Pune & more.</p>
        </div>
        <div className="col-md-6 side"> 
        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq'></img> 
        </div>
        </div></div>
        

       
  );
}

export default AutoLayoutExample;