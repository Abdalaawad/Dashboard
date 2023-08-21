import React from "react";
import "./New.css";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import { MdDriveFolderUpload } from "react-icons/md";

import { useState } from "react";
const New = ({ inputs, title }) => {
  const [files, setfiles] = useState("");
  return (
    <div className="app-new">
      <Sidebar />
      <div className="app-new-container">
        <Navbar />

        <div className="app-new-newuser">
          <h1 className="add-new-heading">{title}</h1>
        </div>
        <div className="app-new-content-form">
          <div className="app-new-image">
            <img
              src={
                files
                  ? URL.createObjectURL(files)
                  : "https://media.istockphoto.com/id/1410187246/vector/camera-icon.jpg?s=612x612&w=0&k=20&c=_eK2dx8HGzP5HixfTrY8Rlu_MLKegkebCcm4O0m3-kY="
              }
              alt=""
            />
          </div>
          <form>
            <div className="app-new-input">
              <label htmlFor="files">
                Images:
                <MdDriveFolderUpload className="app-new-icon" />{" "}
              </label>
              <input
                id="files"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => {
                  setfiles(e.target.files[0]);
                }}
              />
            </div>
            {inputs.map((inputt) => {
              return (
                <div className="app-new-input" key={inputt.id}>
                  <label>{inputt.label}</label>
                  <input type={inputt.type} placeholder={inputt.placeholder} />
                </div>
              );
            })}
            <div className="app-new-input">
              <label>Password</label>
              <input type="password" />
            </div>
            <button className="app-new-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
