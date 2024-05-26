import React, { Component } from 'react'
import NewsItem from './NewsItem';
// import spinner from './spinner';
import PropTypes from 'prop-types'


export class News extends Component {
static defaultProps={ 
  // country:'in',
  pageSize:8,
  category:'General'

}
static propTypes={
// country:PropTypes.string,
pageSize:PropTypes.number,
category:PropTypes.string
}
//  capitalizeFirstLetter=(string)=>{
//   // return string.charAt(0).toUpperCase()+string.slice(1);
//  return string.charAt(0).toUpperCase() + string.slice(1);
// }
  
  constructor(props){
    super(props);
    console.log("Hello my name is sanju");
    this.state={
      articles:[],
      loading:false,
      page:1
 }
 document.title=`${this.props.category}-NewsMonkey`;
}
// async updateNews(){
//   const url=`https://newsapi.org/v2/top-headlines?country='in'&category=${this.props.category}&apiKey=6d03f2b4dacc4221b1c5e33232ea6db6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//   let data= await fetch(url);
//   let parsedData=await data.json();
//   console.log(parsedData);
//   this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})

// }
async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6d03f2b4dacc4221b1c5e33232ea6db6&page=1&pageSize=${this.props.pageSize}`;
  let data= await fetch(url);
  let parsedData=await data.json();
  console.log(parsedData);
  this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})

}

handleprevclick=async ()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6d03f2b4dacc4221b1c5e33232ea6db6&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  let data= await fetch(url);
  let parsedData=await data.json();
  console.log(parsedData);
  // // this.setState({articles:parsedData.articles})

  this.setState({
    page: this.state.page-1,
    articles:parsedData.articles
  })
  // this.setState({page:this.state.page-1})
  // this.updateNews();
}

handlenextclick=async ()=>{
  if( this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

  }else{
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6d03f2b4dacc4221b1c5e33232ea6db6&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  let data= await fetch(url);
  let parsedData=await data.json();
  console.log(parsedData);

  this.setState({
    page:     this.state.page+1,
    articles: parsedData.articles
  })
}  
// this.setState({page:this.state.page+1});
// this.updateNews()
}


  render() {
    return (
      <div className="container my-4">
        <h2> NewsMonkey-Top Headlines</h2>
       
         <div className="row" >
         { this.state.articles.map((element)=>{
            return <div className="col-md-4"  key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
         })}  
       </div>
       <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1}  type="button" className="btn btn-dark" onClick={this.handleprevclick}> &larr; Prev</button>
       <button  disabled= {this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
       </div>
      </div>
    )
  }
}

export default News

// url is different for each image  so we gave a key to each element  which differs the element from others
