import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News = (props) => {  
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - Samachar`;
    }, [props.category]);

    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        setArticles(data.articles)
        setTotalResults(data.totalResults);
        setLoading(false);
    }

    useEffect(() => {
        updateNews();
    }, [page, props.category])

    const handlePreviousClick = () => {
        setPage(page - 1);
    }

    const handleNextClick = () => {
        setPage(page + 1);
    }

    return (
        <div>
          <div className="container my-3">
            <h1 className='text-center' style={{marginTop: "80px"}}>Samachar - Top {capitalizeFirstLetter(props.category)} News</h1>
            {loading && <Spinner />}
            <div className="row">
              {!loading && articles?.length > 0 && articles.map((element) => {
                return (
                  <div className='col-lg-3 col-md-4 col-sm-5' key={element.url}>
                    <NewsItem title={element.title ? element.title : ""}
                              description={element.description ? element.description : ""}
                              imageURL={element.urlToImage ? element.urlToImage : "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                              newsurl={element.url}
                              author={element.author ? element.author : "Anonymous"}
                              time={element.publishedAt}
                              source={element.source.name} />
                  </div>
                );
              })}
            </div>
            <div className="container d-flex justify-content-between">
              <button disabled={page <= 1} type="button" className="btn btn-primary" onClick={handlePreviousClick}>&larr; Previous</button>
              <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-primary" onClick={handleNextClick}>Next &rarr;</button>
            </div>
          </div>
        </div>
      );
      
}

News.defaultProps = {
    pageSize: 9,
    category: 'general'
}

News.propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string.isRequired
}

export default News
