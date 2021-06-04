import { useEffect, useState } from "react";
import { useAuth } from "../context/auth.tsx";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import firebase from "../firebase/clientApp";
import Image from "react-bootstrap/Image";

export default function Home() {
  const [show, setShow] = useState(false);
  const { loadingUser, user } = useAuth();

  useEffect(() => {
    if (loadingUser) {
    }
  }, [loadingUser]);

  function handleSubmit(event) {
    event.preventDefault();
    const { Title, Beskrivelse, Tidspunkt } = event.target.elements;
    firebase
      .firestore()
      .collection("Review")
      .add({
        Title: Title.value,
        Beskrivelse: Beskrivelse.value,
        Tidspunk: Tidspunkt.value,
        userId: user.uid
      })
      .then(() => {
        setShow(false);
      });
  }

  return (
    <div
      className="text-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div>
        <Button onClick={() => setShow(!show)} variant="dark" size="lg">
          Add review
        </Button>
        {show ? (
          <Card style={{ width: "18rem" }} bg="success">
            <Form onSubmit={handleSubmit}>
              <Card.Body>
                <Card.Title>
                  <Form.Control name="Title" placeholder="Title" />
                </Card.Title>
                <Card.Text>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="Beskrivelse"
                    placeholder="Beskrivelse"
                  />
                </Card.Text>
                <Card.Text>
                  <Form.Control
                    name="Tidspunkt"
                    placeholder="Legg inn terningkast"
                  />
                </Card.Text>
                <Button type="submit" variant="dark">
                  Lagre
                </Button>
              </Card.Body>
            </Form>
          </Card>
        ) : null}
      </div>
    </div>
  );
}
