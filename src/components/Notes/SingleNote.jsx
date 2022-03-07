import { Fragment } from "react";
import Col from "react-bootstrap/Col";

const SingleNote = ({ title, content }) => {
  return (
    <Fragment>
      <Col md={4} className="my-4">
      <div className="note text-secondary p-4">
        <div className="header">
          <h3 className="float-start fw-bold">{title} </h3>
          <div className="icons">
            <a href="#">
              <i className="fas fa-edit float-end edit"></i>
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-trash-alt float-end px-3 del"></i>
            </a>
          </div>
        </div>
        <div className="clearfix"></div>
        <hr />
        <p>{content}</p>
      </div>
      </Col>
    </Fragment>
  );
};

export default SingleNote;
