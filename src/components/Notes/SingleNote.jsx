import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SingleNote = () => {


    
  return (
    <Fragment>
      {/* <!-- ==========================Notes=============================== --> */}
        <Container>
          <Row>
            <Col md={4} className="my-4">
              <div className="note text-secondary p-4">
                <div className="header">
                          <h3 className="float-start fw-bold">Title </h3>
                          <div className="icons">
                            <a href="#"><i className="fas fa-edit float-end edit"></i></a>
                            <a href="#"> <i className="fas fa-trash-alt float-end px-3 del"></i></a>
                          </div>
                          
                      </div>
                      <div className="clearfix"></div>
                      <hr/>
                      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam dolores eius asperiores ipsa nihil, itaque dicta et at deleniti esse saepe architecto neque necessitatibus quos, pariatur consequuntur maxime accusantium. </p>
                </div>
            </Col>
          </Row>
        </Container>
    </Fragment>
  );
}

export default SingleNote;