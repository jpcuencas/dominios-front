import React, { useEffect, useState, useMemo, useCallback } from "react";
import console from "../../config/logger";

interface Props {
  value: any;
}
const DomainForm = (props: any) => {
  //    const [isLoading, setLoading] = useState(false);

  /**/

  useEffect(() => {}, []);

  const save = () => {
    console.info("clicked");
  };
  //<button onClick={handleButtonClick}>Action</button>,
  return (
    <>
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <form name="serverForm" id="serverForm">
              <div className="modal-header">
                <h5 className="modal-title">Server</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="serverName">Nombre (*):</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="serverName"
                    aria-describedby="nameHelp"
                    placeholder="Enter name"
                  />
                  <small id="nameHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="serverProvider">Proveedor:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="provider"
                    id="serverProvider"
                    aria-describedby="providerHelp"
                    placeholder="Enter provider"
                  />
                  <small id="providerHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="serverUserWeb">Usuario web:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="userWeb"
                    id="serverUserWeb"
                    aria-describedby="nameUserWeb"
                    placeholder="Enter name"
                  />
                  <small id="nameUserWeb" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainForm;
