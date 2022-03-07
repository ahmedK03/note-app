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

const dummyContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse consequatur aliquid error aut! Animi alias, eos necessitatibus ratione quam, doloribus aperiam ab eveniet quis modi expedita, voluptates corrupti sunt illo`;

const Notes = () => {
  const [messages, setMessages] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  const getAllUsers = async () => {
    let { data } = await axios.get(endPoint + "/getUserNotes", {
      headers: {
        Token: userToken,
        userID: userId,
      },
    });

    console.log(data);
    setAllNotes([...data.Notes])
    setMessages(data.messages);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const userNotes = allNotes.map((note) => {
    return <SingleNote title={note.title} content={note.desc} />;
  });

  console.log(allNotes);

  return (
    <Fragment>
      {/* <!-- ==========================Notes=============================== --> */}
      <Container>
        <Row>
          
            {messages === "no notes found" && (
              <SingleNote title={"text"} content={dummyContent} />
            )}
            {messages === "success" && userNotes}
          
        </Row>
      </Container>
    </Fragment>
  );
};

export default Notes;
