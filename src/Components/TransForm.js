import React from "react";
import "../Sass/TransForm.scss";

export default function TransForm() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz2arWlNsiX18iPUQftVtgLNnTv_3Ba7YUOyo2p3V3NCd2CQh_9TjNi6FWsF7E1_uqdsg/exec";

  const handleSubmit = (e) => {
    const form = document.forms["submit-to-google-sheet"];
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => console.log(form, "heeeeyeeee", response))
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <>
      <div className="form-box">
        <h3>Submit a book to the list!</h3>
        <form onSubmit={handleSubmit} name="submit-to-google-sheet">
          <label>
            Title:
            <input type="text" name="Title" placeholder="Title" required />
          </label>

          <label>
            Author:
            <input type="text" name="Author" placeholder="Author" required />
          </label>

          <label>
            Fiction/Non-Fiction/Other:
            <input
              type="text"
              name="Fiction/NonFiction/Other"
              placeholder="Genre"
            />
          </label>

          <label>
            Trans* or NB author?:
            <input
              type="text"
              name="Trans* or NB author?"
              placeholder="Yes/No"
              required
            />
          </label>

          <label>
            Trans* or NB character(s)?:
            <input
              type="text"
              name="Trans* or NB character(s)?"
              placeholder="Yes/No/Gender(s)"
              required
            />
          </label>

          <label>
            Short Description:
            <input
              type="text"
              name="Short Description"
              placeholder="Short Description"
              required
            />
          </label>

          <label>
            Comments:
            <input
              type="text"
              name="Comments"
              placeholder="Comments"
              required
            />
          </label>

          <button type="submit">Send</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    </>
  );
}
