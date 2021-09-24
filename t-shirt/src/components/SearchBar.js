import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");

    const onSubmitFormHandler = (e) => {
        e.preventDefault();
        console.log(searchInput);
    };
    return (
        <Form>
            <Form.Group as={Row} controlId="postSearchInput">
                <Form.Label column sm="2">
                    Search Items
                </Form.Label>
                <Col sm="8">
                    <Form.Control
                        type="text"
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </Col>
                <Col sm="2">
                    <Button variant="secondary" onClick={onSubmitFormHandler}>
                        Submit
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default SearchBar;
