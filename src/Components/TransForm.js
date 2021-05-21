import React from "react";

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
        <form onSubmit={handleSubmit} name="submit-to-google-sheet">
          <label>
            Title:
            <input type="text" name="Title" placeholder="title" required />
          </label>

          <label>
            Author:
            <input type="text" name="Author" placeholder="author" required />
          </label>

          <label>
            Fiction/Non-Fiction/Other:
            <input
              type="text"
              name="Fiction/Non-Fiction/Other"
              placeholder="genre"
            />
          </label>

          <label>
            Trans* or NB author?:
            <input
              type="text"
              name="Trans* or NB author?"
              placeholder="Trans* or NB author?"
              required
            />
          </label>

          <label>
            Trans* or NB character(s)?:
            <input
              type="text"
              name="Trans* or NB character(s)?"
              placeholder="Trans* or NB character(s)?"
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

          <button type="submit">send</button>
        </form>
      </div>
    </>
  );
}
