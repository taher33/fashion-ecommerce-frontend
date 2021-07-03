import React from "react";

import { axios_instance } from "../lib/axios ";
import { useForm } from "react-hook-form";

function CreatePost() {
  const { register, handleSubmit, errors, setError } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(createPost)}>
        <label htmlFor="title">title :</label>
        <input type="text" name="title" ref={register} />
        <label htmlFor="name">name :</label>
        <input type="text" name="name" ref={register} />
        <label htmlFor="type">type</label>
        <input type="text" name="type" ref={register} />
        <label htmlFor="price">price</label>
        <input type="number" name="price" ref={register} />
        <label htmlFor="stock">stock</label>
        <input type="number" name="stock" ref={register} />
        <label htmlFor="details">details</label>
        <input type="text" name="details" ref={register} />
        <button type="button">
          add a pic
          <input
            type="file"
            // style={{ display: "none" }}
            ref={register}
            name="picture"
          />
        </button>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default CreatePost;

const createPost = async (product) => {
  const formData = new FormData();

  formData.append("picture", product.picture[0]);
  formData.append("title", product.title);
  formData.append("name", product.name);
  formData.append("price", product.price);
  formData.append("stock", product.stock);
  formData.append("details", product.details);
  formData.append("type", product.type);

  console.log(formData);
  console.log(product.picture[0]);
  try {
    const result = await axios_instance(true)({
      method: "POST",

      url: "products",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    });
    console.log(result);
    return result;
  } catch (err) {
    console.log(err.response.data);
  }
};
