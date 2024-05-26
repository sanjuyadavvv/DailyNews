import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {

 constructor(){
    super();
    console.log("Hello my name is sanju");
    this.state={
      articles:this.articles,
      loading:false,
      page:1
 }
}
  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://c.ndtvimg.com/2024-01/01g88tto_red-sea-yemen_120x90_16_January_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=738?ver-20231203.06":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
  <p className="card-text"><small className="text-body-secondary"> By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem

