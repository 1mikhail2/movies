import React from "react";
import classNames from "classnames";

import './not-found.scss';

const NotFound = (props) => {
  const {
    className
  } = props;

  return (
    <div className={classNames("not-found", className)}>
      <div className="site">
        <div className="sketch">
          <div className="bee-sketch red"></div>
          <div className="bee-sketch blue"></div>
        </div>

        <h1>404:
	        <small>Not Found</small></h1>
      </div>
    </div>
  );
}

export default NotFound;