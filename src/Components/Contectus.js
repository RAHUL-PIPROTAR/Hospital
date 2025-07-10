import { useState } from "react";
import React from "react";

export default function Contectus() {
  const [values, setvalues] = useState({});

  const handlechanges = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="user-wrapper">
            <div className="row mt-5">
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  name="firstName"
                  onChange={(e) => handlechanges(e)}
                  required
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  name="lastName"
                  onChange={(e) => handlechanges(e)}
                  required
                />
              </div>
              <div className="col-lg-6 mt-5">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="emailid"
                  onChange={(e) => handlechanges(e)}
                  required
                />
              </div>
              <div className="col-lg-6 mt-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobail Number"
                  name="mobailNo"
                  onChange={(e) => handlechanges(e)}
                  required
                />
              </div>

              <div class="form-floating">
                <textarea
                  class="form-control mt-3"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  name="textarea"
                  onChange={(e) => handlechanges(e)}
                  required></textarea>
                <label htmlFor="floatingTextarea">Comments</label>
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                submit
              </button>
            </div>

            <div className="overview">
              <h3>overview</h3>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
