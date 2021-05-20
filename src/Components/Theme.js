import React from "react";

export default function Theme(props) {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwTTdfMD1SdHa-Zb_o3g6DnRvzwOsoTcqf7-ka1KkskCm4tarX_xrtzpR_poqP9PSpsSg/exec";
  const form = document.forms["Copy of Trans*/NB Books"];

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) =>
        alert("Thanks for Contacting us..! We Will Contact You Soon...")
      )
      .catch((error) => console.error("Error!", error.message));
  };

  return (
    <div>
      <h2>im a theme!! this is the {props.name}</h2>
      <div>
        <div>
          <div>
            <div role="tabpanel" aria-labelledby="home-tab">
              <h3>Connect Google Spreadsheet to HTML</h3>
              <div>
                <div>
                  <form
                    onSubmit={handleSubmit}
                    method="POST"
                    /* autocomplete="off" */
                    name="Copy of Trans*/NB Books"
                  >
                    <div>
                      <input
                        type="text"
                        name="Title"
                        placeholder="Your Name *"
                        /* value=""
                        required="" */
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="Author"
                        placeholder="Your Email *"
                        /* value=""
                        required="" */
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        name="Fiction/Non-Fiction/Other"
                        placeholder="Your Contact Number *"
                        /* value=""
                        required="" */
                      />
                    </div>
                    <div>
                      <input type="submit" name="submit" value="Login" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
