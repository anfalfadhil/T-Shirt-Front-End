import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { APIURL } from "../config.js";

function SearchBar({ onSubmit }) {
    const [searchInput, setSearchInput] = useState("");
    const [data, setData] = useState([]);

    const onSubmitFormHandler = (e) => {
        console.log(searchInput);
        const url = `${APIURL}/items`;
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
                if (searchInput) {
                    const filteredData = res.data.filter(
                        (item) =>
                            item.name.toLowerCase().includes(searchInput) ||
                            item.description.toLowerCase().includes(searchInput)
                    );
                    onSubmit(filteredData);
                } else {
                    onSubmit(data);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmitFormHandler();
            }}
        >
            <Form.Group as={Row} controlId="postSearchInput">
                <Form.Label column sm="2">
                    Search By Name
                </Form.Label>
                <Col sm="8">
                    <Form.Control
                        type="text"
                        onChange={(e) =>
                            setSearchInput(e.target.value.toLowerCase())
                        }
                        onFocus={(e) => e.target.select()}
                    />
                </Col>
                <Col sm="2">
                    <Button
                        className="searchbar-button"
                        variant="outline-dark" 
                        onClick={onSubmitFormHandler}
                        >Submit
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    );
}

export default SearchBar;
