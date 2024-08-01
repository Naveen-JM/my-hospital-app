import React from "react";
import styles from "./contactus.module.css"; // Import styles from the module.css file

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f6bfa0ed-40e0-4f86-a89b-7784de072a79");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className={styles["background-image"]}>
      <div className={styles["form-container"]}>
        <form onSubmit={onSubmit}>
          <div className={styles["input-group"]}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles["input-group"]}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit" className={styles['btn']}>Submit Form</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}
