import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle
} from "reactstrap";
import { Link } from "react-router-dom";
import {getNotes} from "../actions/index";

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}
const uid = window.localStorage.getItem("uid");
// let notes;
class NotesList extends Component {
  componentWillMount(){
  }
  componentDidMount(){
    this.props.getNotes();
    console.log("props:",this.props);
  }
  render() {
    console.log("props in render:",this.props);
    return (
      <Container className="my-5">
        <Row>
          <Col>
            <h3 className="header">Your Notes:</h3>
          </Col>
        </Row>
        <Row>
          {this.props.notes.notes.map((note, id) => {
            return (
              <Col sm={4} key={id}>
                <Link className="card-link" to={`/note/${note._id}`}>
                  <Card className="note pb-3">
                    <CardBody>
                      <CardTitle>{note.title}</CardTitle>
                      <hr />
                      <CardText>{note.note}</CardText>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps, {getNotes})(NotesList);
