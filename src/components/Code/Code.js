import React, { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "../../customize/axios";
const Code = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const runFirstRef = useRef(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const ssoToken = searchParams.get("ssoToken");
    if (ssoToken && !runFirstRef.current) {
      runFirstRef.current = true;
      axios
        .post(process.env.REACT_APP_BACKEND_VERIFY_TOKEN, { ssoToken })
        .then((res) => {
          console.log(res);
          if (res && +res.EC === 1) {
            navigate("/");
          } else {
            setMessage(res.EM);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-3">
          <h3>
            {message && (
              <span>
                Please login again. Click here to{" "}
                <a
                  href={`${process.env.REACT_APP_BACKEND_SSO}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`}
                >
                  login
                </a>
              </span>
            )}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Code;
