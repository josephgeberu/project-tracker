import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ insertData }) => {
  const [formData, setFormData] = useState({
    id: "",
    titel: "",
    open: "",
    close: "",
    desc: "",
    left: "",
    completed: true,
    warning: false,
  });

  const updateForm = (event) => {
    const { name, value } = event.target;
    const current = new Date();
    const days =
      current.getFullYear() * 365 + current.getMonth() * 30 + current.getDate();
    const closeDate = new Date(formData.close);
    const closeDay =
      closeDate.getFullYear() * 365 +
      closeDate.getMonth() * 30 +
      closeDate.getDate();
    const remainDate = closeDay - days;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      id: uuidv4(),
      left: remainDate,
      warning: remainDate < 15 ? true : false,
    }));
  };

  const sendFormData = (ev) => {
    ev.preventDefault();
    setFormData({
      id: "",
      titel: "",
      open: "",
      close: "",
      desc: "",
      left: "",
      completed: true,
      warning: false,
    });
    return insertData(formData);
  };

  return (
    <form className="project-form" onSubmit={sendFormData}>
      <input
        name="titel"
        value={formData.titel}
        onChange={updateForm}
        required
        placeholder="Project titel ..."
      />
      <div className="start">
        <label>Start: </label>
        <input
          type="date"
          name="open"
          value={formData.open}
          onChange={updateForm}
          placeholder="Open: "
        />
        <label>End: </label>
        <input
          type="date"
          name="close"
          value={formData.close}
          onChange={updateForm}
        />
      </div>

      <textarea
        rows={3}
        name="desc"
        value={formData.desc}
        onChange={updateForm}
        required
        placeholder="Project Description ..."
      />
      <button>
        <i className="fa-regular fa-square-plus"></i> +
      </button>
    </form>
  );
};
export default Form;
