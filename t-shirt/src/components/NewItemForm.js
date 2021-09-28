const NewItemForm = ({ item, handleSubmit, handleChange }) => (
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
            placeholder="item name"
            value={item.name}
            title="title"
            onChange={handleChange}
            required
            id="name"
            name="name"
        />
        <label htmlFor="description">Description:</label>
        <input
            placeholder="item description"
            value={item.description}
            name="description"
            onChange={handleChange}
            id="description"
        />

        <label htmlFor="price">Price:</label>
        <input
            placeholder="item price"
            value={item.price}
            name="price"
            onChange={handleChange}
            id="price"
        />

        <label htmlFor="image-link">Enter a link to your image</label>
        <input
            placeholder="item image link"
            value={item.image}
            name="image"
            onChange={handleChange}
            id="image"
        />

        <button type="submit">Submit</button>
    </form>
);

export default NewItemForm;
