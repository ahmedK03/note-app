import { Fragment, useEffect, useState } from "react";
import SingleNote from "./SingleNote";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import axios from "axios";
import jwt_decode from "jwt-decode";

const endPoint = process.env.REACT_APP_ROUTE_EGY_ENDPOINT;
const userToken = localStorage.getItem("userToken");

if (userToken) {
  var decoded = jwt_decode(userToken);
  var userId = decoded._id;
}

const Notes = ({ onAdding }) => {
  const [messages, setMessages] = useState("");
  const [allNotes, setAllNotes] = useState({});
  const [afterChanges, setAfterChanges] = useState(false);

  const getAllUsers = async () => {
    let { data } = await axios.get(endPoint + "/getUserNotes", {
      headers: {
        Token: userToken,
        userID: userId,
      },
    });
    setAllNotes({...data.Notes});
    setMessages(data.message);
    console.log("updated after adding");
  };

  const afterChangesHandler = () => {
    setAfterChanges(!afterChanges);
    console.log("from notes comp");
  };
  useEffect(() => {
    getAllUsers();
  }, [onAdding, afterChanges]);

  const userNotes = allNotes.map((note) => {
    return (
      <SingleNote
        key={note._id}
        id={note._id}
        afterChanges={afterChangesHandler}
        title={note.title}
        content={note.desc}
      />
    );
  });

  return (
    <Fragment>
      {/* <!-- ==========================Notes=============================== --> */}
      <Container>
        <Row>
          {messages === "no notes found" && (
            <SingleNote
              title={"text"}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          )}
          {messages === "success" && userNotes}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Notes;
