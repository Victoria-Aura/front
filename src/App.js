import React, { useEffect, useState } from "react";
import News from "./Components/News/News";
import './App.css';
import NewsService from "./API/NewsService";
import { useNewsServerData } from "./hooks/useNews";

function App() {
  const [DataNews, setNews] = useState([])
  const dataNews = useNewsServerData(NewsService.getNews(),setNews)

  return (
    <div className="App">
      <News posts={DataNews} />
    </div>
  );
}

export default App;
