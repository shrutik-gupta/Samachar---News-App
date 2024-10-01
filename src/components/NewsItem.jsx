import React from 'react'

const NewsItem = (props) => {

  let { title, description, imageURL, newsurl, author, time, source } = props;

  return (
    <div className='my-3 d-flex justify-content-center'>
      <div className="card">
        <img src={imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '87%', zIndex: '2' }}>
            {source}
          </span>
          <p style={{ color: '#5f6368', fontSize: '14px' }}>{new Date(time).toGMTString()}</p>
          <p className="card-text">{description}</p>
          <footer className="blockquote-footer">by <cite title="Source Title">{author}</cite></footer>
          <a href={newsurl} target="_blank" className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
