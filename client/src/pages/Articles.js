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
      this.setState({ articles: res.data });
    })
    .catch((err) => console.error(err));
  }

  searchArticles = (articleArray) => {
    this.setState({searchedArticles: articleArray});
    console.log("articleArray",articleArray);
    console.log("this.state.searchedArticles",this.state.searchedArticles);
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
              
            </ArticleList>
          ) : (
            <div id="search-results"></div>
          )}
        </Row>
        <Row>
          {this.state.savedArticles.length ? (
            <ArticleList>
              {this.state.articles.map((article) => (
                <ArticleListItem 
                  id="saved-articles"
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
            <h3>No articles to display.</h3>
          )}
        </Row>
      </Container> 
    );
  }
}

export default Articles;
