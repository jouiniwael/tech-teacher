import React from 'react'



class Course extends react.component{
    constructor(props){
        super(props)
        this.state={
            objectifOftheCourse:"",
            title:"",
            date:"",
            numberOfStudents:"",
            Level:"",
            planOftheLecture:"",
            generalDetails:"",
            assimilation:""
        }
        
    }
    render(){
        return (
            <div>
<Form method="POST">
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Obectif of the lecture </Form.Label>
    <Form.Control type="text" placeholder="write here " />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="write here " />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Date </Form.Label>
    <Form.Control type="text" placeholder="put the date " />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label> Number of students </Form.Label>
    <Form.Control type="text" placeholder="insert the number " />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label> Level</Form.Label>
    <Form.Control type="text" placeholder="put the level of your class " />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Plan of the lecture </Form.Label>
    <Form.Control as="textarea" rows={5} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>general details </Form.Label>
    <Form.Control as="textarea" rows={5} />
  </Form.Group>
  
  <Form.Group controlId="formBasicRange">
    <Form.Label>students' assimilation</Form.Label>
    <Form.Control type="range" />
  </Form.Group>
</Form>
<Button  onClick={this.saveinformation.bind(this)} variant="primary" size="lg" active>
    Save your information
  </Button>{' '}
  <Button onClick={this.nextpage.bind(this)}  variant="secondary" size="lg" active>
    next page 
  </Button>
        </div>)
    }
}
