import React, { Component } from 'react';
import API from '../utils/API';
import { Container, Row } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import { ArticleList, ArticleListItem } from "../components/List";

class Articles extends Component {
  // Initialize this.state.articles as empty array
  state = {
    savedArticles: [],
    searchedArticles: [],
  }

  componentDidMount() {
    this.loadArticles();
  }

  // Load Articles from databse
  loadArticles = () => {
    API.getSavedArticles()
    .then((res) => {
      this.setState({ savedArticles: res.data });
    })
    .catch((err) => console.error(err));
  }

  searchArticles = (articleArray) => {
    this.setState({searchedArticles: articleArray});
    // console.log(articleArray);
  }

  saveArticle = (title, link, datePosted) => {
    let articleData = {
      title: title,
      link: link,
      date_posted: datePosted
    }
    API.saveArticle(articleData);
  }

  render() {
    return (
      <Container>
        <Row>
          <SearchForm searchArticles={this.searchArticles.bind(this)} />
        </Row>
        <Row>
          {this.state.searchedArticles.length ? (
            <ArticleList id="search-results">
              <h2 className="bg-primary text-white p-1">Search Results</h2>
              {this.state.searchedArticles.map((article, index) => (
                <ArticleListItem
                  key={index}>
                  <a href={article.web_url}
                     target="_blank"
                  >
                    <strong>{article.headline.main}</strong>
                  </a>
                  <p>{article.abstract}</p>
                  <button 
                    className="btn btn-primary mb-1"
                    onClick={this.saveArticle(article.headline.main, article.web_url, article.pub_date)}
                  >Save</button>
                </ArticleListItem>
              ))}
            </ArticleList>
          ) : (
            <div></div>
          )}
        </Row>
        <Row>
          {this.state.savedArticles.length ? (
            <ArticleList>
              <h2 className="bg-primary text-white p-1">Saved Articles</h2>
              {this.state.savedArticles.map((article) => (
                <ArticleListItem 
                  key={article._id}>
                  <a href={article.link} 
                     id={article._id} 
                     target="_blank">{article.title}
                  </a>
                  <p>{article.description}</p>
                </ArticleListItem>
              ))}
            </ArticleList>
          ) : (
            <div>No saved articles to display.</div>
          )}
        </Row>
      </Container> 
    );
  }
}

export default Articles;
