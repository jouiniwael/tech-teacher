import Login from "./login"
import React from 'react '
import Navbar from 'react-bootstrap/Navbar'
import Register from '/.register'



class Landing extends React.Component{
    constructor(props){
        super(props)
        this.state=Login,
        this.state=Register 

    }
render(){
    return (
    <div classname="landingpage">
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">tech-teacher</Navbar.Brand>
    
    <Form inline>
      <Button variant="outline-info" href="./register.js">register</Button>
      <Button variant="outline-info" href ="./login.js">login</Button>
    </Form>

  </Navbar>
  <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" roundedCircle />
    </Col>  
  </Row>
</Container>

</div>

    )
}


}
export default Landing 