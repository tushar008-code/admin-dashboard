import React, { useState } from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
import newUser from "../../assets/new-user.png";
function NewUser({ inputs, title }) {
  const [file, setFile] = useState("");
  console.log(file);
  return (
    <>
      <div className="newuser-sec">
        <h3>{title}</h3>
        <div className="newuser-img">
          <figure>
            <img src={file ? URL.createObjectURL(file) : newUser} alt="" />
          </figure>
        </div>
        <div className="newuser-form">
          <form action="">
            <div className="formInput">
              <label htmlFor="file">
                Image:
                <BsFillCloudUploadFill />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
            {inputs.map((input) => (
              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} />
              </div>
            ))}
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewUser;
