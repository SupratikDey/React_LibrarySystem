import { useState } from "react";
import "./Home.css";

function AddBook() {
    const [form, setForm] = useState({
        title: "",
        author: "",
        genre: "",
        coverImage: "",
        description: "",
        rating: ""
    });
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    function validate() {
        const newErrors = {};

        if (form.title.trim() === "") {
            newErrors.title = "Title is required";
        }
        if (form.author.trim() === "") {
            newErrors.author = "Author is required";
        }
        if (form.genre.trim() === "") {
            newErrors.genre = "Genre is required";
        }
        if (form.coverImage.trim() === "") {
            newErrors.coverImage = "Cover image is required";
        }
        if (form.description.trim() === "") {
            newErrors.description = "Description is required";
        }
        if (form.rating.trim() === "") {
            newErrors.rating = "Rating is required";
        } else if (
            isNaN(form.rating) ||
            Number(form.rating) < 0 ||
            Number(form.rating) > 5
        ) {
            newErrors.rating = "Rating must be between 0 and 5";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        const newBook = {
            id: Date.now(),
            title: form.title,
            author: form.author,
            genre: form.genre,
            coverImage: form.coverImage,
            description: form.description,
            rating: Number(form.rating)
        };

        console.log("New Book:", newBook);
        alert("Book added successfully!");

        setForm({
            title: "",
            author: "",
            genre: "",
            coverImage: "",
            description: "",
            rating: ""
        });
    }

    return (
        <div className="Add_book_form">
            <h2>Add a New Book</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Title
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                    />
                    {errors.title && (
                        <span className="Error_text">{errors.title}</span>
                    )}
                </label>

                <label>
                    Author
                    <input
                        type="text"
                        name="author"
                        value={form.author}
                        onChange={handleChange}
                    />
                    {errors.author && (
                        <span className="Error_text">{errors.author}</span>
                    )}
                </label>

                <label>
                    Genre
                    <input
                        type="text"
                        name="genre"
                        value={form.genre}
                        onChange={handleChange}
                    />
                    {errors.genre && (
                        <span className="Error_text">{errors.genre}</span>
                    )}
                </label>

                <label>
                    Cover Image URL
                    <input
                        type="text"
                        name="coverImage"
                        value={form.coverImage}
                        onChange={handleChange}
                    />
                    {errors.coverImage && (
                        <span className="Error_text">{errors.coverImage}</span>
                    )}
                </label>

                <label>
                    Rating (0-5)
                    <input
                        type="text"
                        name="rating"
                        value={form.rating}
                        onChange={handleChange}
                    />
                    {errors.rating && (
                        <span className="Error_text">{errors.rating}</span>
                    )}
                </label>

                <label>
                    Description
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                    />
                    {errors.description && (
                        <span className="Error_text">{errors.description}</span>
                    )}
                </label>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}

export default AddBook;