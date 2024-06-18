import {
  Button,
  MenuItem,
  Spinner,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../../Redux/slice/ProductSlice";
import { XMarkIcon } from "@heroicons/react/24/solid";

function AllProducts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const dispatch = useDispatch();
  const { productData } = useSelector((state) => state.product);

  async function loadProduct() {
    await dispatch(getAllProducts());
    setLoading(false);
  }

  useEffect(() => {
    loadProduct();
  }, []);

  if (loading)
    return (
      <div>
        Loading...
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  async function handleDeleteProduct(id) {
    try {
      await dispatch(deleteProduct(id));
      // Reload products after deletion
      loadProduct();
    } catch (error) {
      setError(error);
    }
  }

  const handleEditClick = (product) => {
    setCurrentProduct(product);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setCurrentProduct(null);
  };

  const handleUpdateProduct = async () => {
    try {
      await dispatch(
        updateProduct({ id: currentProduct._id, data: currentProduct })
      );
      handleEditDialogClose();
      loadProduct();
    } catch (error) {
      setError(error);
    }
  };

  return (
    <section className="">
      <div className="flex justify-center items-center my-10">
        <Typography variant="h2" color="blue" className="text-5xl">
          All Products
        </Typography>
      </div>

      <div className="grid 2xl:grid-cols-4 gap-4 xl:grid-cols-3 lg:grid-cols-2 h-full gap-y-10 w-full px-10 py-5">
        {productData?.map((item, index) => (
          <div
            className="flex justify-evenly object-cover items-center gap-2"
            key={index}
          >
            <div className="flex items-center justify-center">
              <XMarkIcon
                className="text-black h-5 cursor-pointer"
                onClick={() => handleDeleteProduct(item._id)}
              />
            </div>
            <img src={item.image} className="h-10" alt={item.title} />
            <MenuItem>
              {item.title.slice(0, 20)} -
              <span className="mr-5"> Price : {item.price}$</span>
            </MenuItem>
            <Button
              className="bg-transparent text-black hover:border-none hover:outline-none md:h-10"
              onClick={() => handleEditClick(item)}
            >
              Edit
            </Button>
          </div>
        ))}
      </div>

      <Dialog open={editDialogOpen} handler={setEditDialogOpen}>
        <DialogHeader>Edit Product</DialogHeader>
        <DialogBody divider>
          <div className="flex flex-col gap-4">
            <Input
              label="Title"
              value={currentProduct?.title || ""}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, title: e.target.value })
              }
            />
            <Input
              label="Price"
              value={currentProduct?.price || ""}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, price: e.target.value })
              }
            />
            <Input
              label="Image URL"
              value={currentProduct?.image || ""}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, image: e.target.value })
              }
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleEditDialogClose}>
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleUpdateProduct}
          >
            Update
          </Button>
        </DialogFooter>
      </Dialog>
    </section>
  );
}

export default AllProducts;
