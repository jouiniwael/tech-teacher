import React from 'react'
import Form from 'react-bootstrap/Form'

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
        this.handelSubmit=this.handelSubmit.bind(this)
      }
        // I must add here handelevent///// 

        objectifOftheCoursehandler=(event)=>{
          this.setState({
            objectifOftheCourse:event.target.value 
          })
        }
         titlehandler=(event)=>{
            this.setState({
              title:event.target.value 
            })}

            datehandler=(event)=>{
              this.setState({
                date:event.target.value 
              })}

              numberOfStudentshandler=(event)=>{
                this.setState({
                  numberOfStudents:event.target.value 
                })}

                Levelhandler=(event)=>{
                  this.setState({
                    Level:event.target.value 
                  })}

                  planOftheLecturehandler=(event)=>{
                    this.setState({
                      planOftheLecture:event.target.value 
                    })}

                    generalDetailshandler=(event)=>{
                      this.setState({
                        generalDetails:event.target.value 
                      })}

                      assimilationhandler=(event)=>{
                        this.setState({
                          assimilation:event.target.value 
                        })}
                            

                        submithandler=(event)=>{
                          
                          this.setState({
                            objectifOftheCourse:"",
                            title:"",
                            date:"",
                            Level:"",
                            planOftheLecture:"",
                            generalDetails:"",
                            assimilation:""

                   
                          })
                           event.preventDefault(event);
                       }





                    
    
    render()
    {
        return (
            <div>
<Form method="POST">
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Obectif of the lecture </Form.Label>
    <Form.Control type="text" value={this.state.objectifOftheCourse}  placeholder="write here " />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" value={this.state.title} placeholder="write here " />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Date </Form.Label>
    <Form.Control type="text" value={this.state.date}  placeholder="put the date " />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label> Number of students </Form.Label>
    <Form.Control type="text"  value={this.state.numberOfStudents} placeholder="insert the number " />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label> Level</Form.Label>
    <Form.Control type="text" value={this.state.Level}  placeholder="put the level of your class " />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Plan of the lecture </Form.Label>
    <Form.Control  value={this.state.planOftheLecture}  as="textarea" rows={5} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>general details </Form.Label>
    <Form.Control value={this.state.generalDetails}  as="textarea" rows={5} />
  </Form.Group>
  
  <Form.Group controlId="formBasicRange">
    <Form.Label>students' assimilation</Form.Label>
    <Form.Control value={this.state.assimilation} type="range" />
  </Form.Group>
</Form>
<Form>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="download your documents" />
  </Form.Group>
</Form>
<Button  onClick={this.saveinformation.bind(this)} variant="primary" size="lg" active>
    Save your information
  </Button>{' '}
  <Button onClick={this.nextpage.bind(this)}  variant="secondary" size="lg" active>
    next page 
  </Button>
        </div>
        )
    }
}
