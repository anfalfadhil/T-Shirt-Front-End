import axios from "axios";
import React, { useState } from "react";
import { APIURL } from "../config.js";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router";

const NewItem = () => 
{
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [createdId, setCreatedId] = useState(null);

    const handleSubmit = (e) =>
    {
        const url = `${APIURL}/items`;

        const newItem = 
        {
            name: name,
            description: description,
            price: price,
            image: imageUrl
        };

        axios.post(url, newItem)
            .then(res => setCreatedId(res.data._id))
            .catch((err) => console.log(err))
    }

    if (createdId) {
        return <Redirect to={`/items/${createdId}`} />;
    }

    return (
        <Form>

            <Form.Group as={Row} controlId="nameInput">
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

            <Form.Group as={Row} controlId="descriptionInput">
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

            <Form.Group as={Row} controlId="priceInput">
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

            <Form.Group as={Row} controlId="imageInput">
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

            <Button variant="outline-primary" size="lg" onClick={handleSubmit}>
                Save
            </Button>

        </Form>
    )
    // <form onSubmit={handleSubmit}>
    //     <label htmlFor="title">Title:</label>
    //     <input
    //         placeholder="item name"
    //         value={item.name}
    //         title="title"
    //         onChange={handleChange}
    //         required
    //         id="name"
    //         name="name"
    //     />
    //     <label htmlFor="description">Description:</label>
    //     <input
    //         placeholder="item description"
    //         value={item.description}
    //         name="description"
    //         onChange={handleChange}
    //         id="description"
    //     />

    //     <label htmlFor="price">Price:</label>
    //     <input
    //         placeholder="item price"
    //         value={item.price}
    //         name="price"
    //         onChange={handleChange}
    //         id="price"
    //     />

    //     <label htmlFor="image-link">Enter a link to your image</label>
    //     <input
    //         placeholder="item image link"
    //         value={item.image}
    //         name="image"
    //         onChange={handleChange}
    //         id="image"
    //     />

    //     <button type="submit">Submit</button>
    // </form>
};

export default NewItem;
