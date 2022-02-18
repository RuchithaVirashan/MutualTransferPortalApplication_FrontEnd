import React from "react";
import { v4 as uuid } from "uuid";

const FormErrorHandler = ({ errorMsgs }) => {
  return (
    <div>
      {errorMsgs.length > 0 ? (
        <div className="text-red-400 text-s">
          <ul>
            {errorMsgs.map((e) => (
              <li key={uuid()}>! {e}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default FormErrorHandler;