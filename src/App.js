import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import Article from "./Article/Article";
import DynamicArticle from "./DynamicArticle/DynamicArticle";
import ArticleList from "./ArticleList/AtricleList"
import { isEmpty } from "lodash";

function App() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
      const response = await fetch(
        "http://demo1390455.mockable.io/articles"
      );
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <DynamicArticle article={Object.values(fetchedData)[1]} />
        </Route>
        <Route path="/articlelist" exact>
          <ArticleList articlelist={Object.values(fetchedData)} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

