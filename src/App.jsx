import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  const apiKey = import.meta.env.VITE_NEWS_API;

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} key="general" pageSize={8} />} />
          <Route exact path="/business" element={<News apiKey={apiKey} key="business" pageSize={8} category={"business"} />} />
          <Route exact path="/entertainment" element={<News apiKey={apiKey} key="entertainment" pageSize={8} category={"entertainment"} />} />
          <Route exact path="/health" element={<News apiKey={apiKey} key="health" pageSize={8} category={"health"} />} />
          <Route exact path="/science" element={<News apiKey={apiKey} key="science" pageSize={8} category={"science"} />} />
          <Route exact path="/sports" element={<News apiKey={apiKey} key="sports" pageSize={8} category={"sports"} />} />
          <Route exact path="/technology" element={<News apiKey={apiKey} key="technology" pageSize={8} category={"technology"} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
