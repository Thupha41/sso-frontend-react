import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
const Code = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const runFirstRef = useRef(false);
  useEffect(() => {
    const ssoToken = searchParams.get("ssoToken");
    if (ssoToken && !runFirstRef.current) {
      runFirstRef.current = true;
      axios
        .post(process.env.REACT_APP_BACKEND_VERIFY_TOKEN, { ssoToken })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchParams]);
  return <div>Code</div>;
};

export default Code;
