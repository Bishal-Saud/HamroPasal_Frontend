// Popup.js
import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Input,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createNewProduct } from "../Redux/slice/ProductSlice";
import toast from "react-hot-toast";

const Popup = ({ open, onClose, onAddProduct }) => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
    rate: "",
    count: "",
  });

  function handleImageUpload(e) {
    e.preventDefault();
    const uploadedImage = e.target.files[0];
    if (uploadedImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setUserInput({
          ...userInput,
          //   previewImage: this.result,
          image: uploadedImage,
        });
      });
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (
      !userInput.title ||
      !userInput.description ||
      !userInput.category ||
      !userInput.price
    ) {
      toast.error("All field are mandatory !");
      return;
    }

    const response = await dispatch(createNewProduct(userInput));
    if (response?.payload?.success) {
      useState({
        title: "",
        category: "",
        price: "",
        description: "",
        image: null,
        rate: "",
        count: "",
      });
      navigate("/");
    }
  }

  return (
    <Dialog open={open} handler={onClose}>
      <DialogHeader>{showForm ? "Add Product" : "Welcome!"}</DialogHeader>
      <DialogBody>
        <p>Do you want to add a product?</p>
      </DialogBody>
      <DialogBody>
        {showForm ? (
          <form onSubmit={onFormSubmit} className="space-y-4">
            <Input
              label="Title"
              name="title"
              value={userInput.title}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Price"
              name="price"
              value={userInput.price}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Description"
              name="description"
              value={userInput.description}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Category"
              name="category"
              value={userInput.category}
              onChange={handleInputChange}
              required
            />
            <div>
              <Input
                className=""
                type="file"
                id="image_uploads"
                accept=".jpg, .png, .jpeg, .svg"
                name="image_uploads"
                onChange={handleImageUpload}
              />
            </div>
            <Input
              label="Rate"
              name="rate"
              value={userInput.rate}
              onChange={handleInputChange}
              required
            />
            <Input
              label="Count"
              name="count"
              value={userInput.count}
              onChange={handleInputChange}
              required
            />
            <Button type="submit" color="blue">
              Submit
            </Button>
          </form>
        ) : (
          <Button onClick={() => setShowForm(true)} color="blue">
            Add Product
          </Button>
        )}
      </DialogBody>
    </Dialog>
  );
};

export default Popup;
