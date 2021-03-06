import axios from "axios";
import React, { useState, useEffect } from "react";
import { APIURL } from "../config.js";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router";

function EditItem({ match }) {
    const itemId = match.params.id;
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [returnedId, setReturnedId] = useState("");

    useEffect(() => {
        const url = `${APIURL}/items/${itemId}`;

        axios
            .get(url)
            .then((res) => {
                setName(res.data.name);
                setDescription(res.data.description);
                setPrice(res.data.price);
                setImageUrl(res.data.image);
            })
            .catch((err) => console.log(err));
    }, [itemId]);

    const onSubmitFormHandler = () => {
        const url = `${APIURL}/items/${itemId}`;
        const updatedItem = {
            name: name,
            description: description,
            price: price,
            image: imageUrl
        };

        axios
            .put(url, updatedItem)
            .then((res) => {
                setReturnedId(res.data._id);
            })
            .catch((err) => console.log(err));
    };

    if (returnedId) {
        return <Redirect to={`/items/${itemId}`} />;
    }

    return (
        <Form>
            <Form.Group as={Row} controlId="nameInput" className="spacing-groups">
                <Form.Label column sm="2">
                    Name
                </Form.Label>
                <Col sm="10">
                    <Form.Control
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="descriptionInput" className="spacing-groups">
                <Form.Label column sm="2">
                    Description
                </Form.Label>
                <Col sm="10">
                    <Form.Control
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="priceInput" className="spacing-groups">
                <Form.Label column sm="2">
                    Price
                </Form.Label>
                <Col sm="10">
                    <Form.Control
                        type="text"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="imageInput" className="spacing-groups">
                <Form.Label column sm="2">
                    Image URL
                </Form.Label>
                <Col sm="10">
                    <Form.Control
                        type="text"
                        onChange={(e) => setImageUrl(e.target.value)}
                        value={imageUrl}
                    />
                </Col>
            </Form.Group>
            <Button
                className="edit-item-save-button"
                variant="outline-success" 
                size="lg" 
                onClick={onSubmitFormHandler}
                >Save
            </Button>
        </Form>
    );
}

export default EditItem;