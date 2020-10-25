import React from "react";
import PropTypes from "prop-types";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import "./ArticleList.module.css"

const ArticleList = props => {
    if(props.articlelist===undefined||props.articlelist===null){
      return <h1>"You have no data!"</h1>
    }
      return (
        <ul>
          {props.articlelist.map(article => (
            <li key={article.slug}><ArticleListItem article = {article}/>
            </li>
          ))}
        </ul>
      );
    };

ArticleList.propTypes = {
    articlelist: PropTypes.array.isRequired
  };

export default ArticleList;
