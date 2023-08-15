import React from "react";
import { useState } from "react";
import {db} from "../firebase"
import { useFormInput } from "./hook";

function CreatePost() {
  const title=useFormInput('')
  const subtitle=useFormInput('')
  const content=useFormInput('')

  function handleSubmit(e){
    e.preventDefault();
    console.log("title",title);
    console.log("subtitle",subtitle);
    console.log("content",content);

    db.collection('posts').add({
      title:title.value,
      subtitle:subtitle.value,
      content:content.value,
      createdAt:new Date(),
    });
  }
  return <div className="create-post">
    <form onSubmit={handleSubmit}>
      <div className="form-field">
       <label>Title</label>
       <input type="text" {...title}></input>
      </div>
      <div className="form-field">
        <label>Sub-title</label>
        <input type="text" {...subtitle}></input>
      </div>
      <div className="form-field">
        <label>Content</label>
        <textarea {...content}></textarea>
      </div>
      <button className="create-post-btn">Create-Post</button>
    </form>
  </div>;

}

export default CreatePost;
