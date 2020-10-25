import React from "react";
import PropTypes from "prop-types";
import "./ArticleTextToggleButton.module.css"

const ArticleTextToggleButton = (props) => {
    return <button onClick={props.onClick}>{props.buttonText}</button>;
};
ArticleTextToggleButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired
  };
export default ArticleTextToggleButton;