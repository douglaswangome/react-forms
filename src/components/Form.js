import { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    comment: "",
    isFriendly: true,
    employment: "unemployed",
    favoriteColor: ""
  });

  const updateFields = (event) => {
    const {name, value, type, checked} = event.target;
    setFormData((formItems) => {
      return {
        ...formItems,
        [name]: type === "checkbox" ? checked : value,
      }
    });
  }

  const submitForm = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log("Submitted");
  }

  return (
    <form className="form" onSubmit={submitForm}>
      <h2>Sample Form</h2>
      <input
        name="firstname"
        value={formData.firstname}
        onChange={updateFields}
        placeholder="Firstname"
        type="text"
      />
      <input
        name="lastname"
        value={formData.lastname}
        onChange={updateFields}
        placeholder="Lastname"
        type="text"
      />
      <input
        name="email"
        value={formData.email}
        onChange={updateFields}
        placeholder="Email"
        type="email"
      />
      <textarea
        name="comment"
        value={formData.comment}
        onChange={updateFields}
        placeholder="Comments"
      />
      <div className="checkbox_input">
        <input
          id="isFriendly"
          checked={formData.isFriendly}
          name="isFriendly"
          onChange={updateFields}
          type="checkbox"
        />
        <label htmlFor="isFriendly">Are you friendly?</label>
      </div>
      <fieldset>
        <legend>Employment Status</legend>
        <div>
          <input
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={updateFields}
            type="radio"
          />
          <label htmlFor="unemployed">Unemployed</label>
        </div>
        <div>
          <input
            id="part-time"
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={updateFields}
            type="radio"
          />
          <label htmlFor="part-time">Part-time</label>
        </div>
        <div>
          <input
            id="full-time"
            name="employment"
            value="full-time"
            checked={formData.employment === "full-time"}
            onChange={updateFields}
            type="radio"
          />
          <label htmlFor="full-time">Full-time</label>
        </div>
      </fieldset>
      <div className="select">
        <label htmlFor="favoriteColor">What is your favorite color?</label>
        <select 
          id="favoriteColor"
          name="favoriteColor"
          value={formData.favoriteColor}
          onChange={updateFields}
        >
          <option value="">-- Choose color here --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
      </div>
      <button>
        <span>Submit</span>
      </button>
    </form>
  );
}

export default Form;