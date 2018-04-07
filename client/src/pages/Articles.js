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
    this.loadSavedArticles();
  }

  // Load Articles from databse
  loadSavedArticles = () => {
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

  saveArticle = (event) => {
    const self = this;

    let articleData = {
      title: event.target.getAttribute('data-title'), 
      link: event.target.getAttribute('data-link'), 
      date_posted: event.target.getAttribute('data-date-posted')
    }
    API.saveArticle(articleData)
      .then(function() {
        // reload article
        self.loadSavedArticles();
      });
  }

  deleteArticle = (event) => {
    const self= this;
    
    let articleId = event.target.getAttribute('data-article-id');
    API.deleteArticle(articleId)
      .then(function() {
        // reload article
        self.loadSavedArticles();
      });
  }

  render() {
    return (
      <Container>
        <Row>
          <SearchForm searchArticles={this.searchArticles} />
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
                    id="article-{index}"
                    className="btn btn-primary mb-1"
                    data-title={article.headline.main}
                    data-link={article.web_url}
                    data-date-posted={article.pub_date}
                    onClick={this.saveArticle}
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
                  <button 
                    data-article-id={article._id}
                    className="btn btn-danger mb-1"
                    onClick={this.deleteArticle}
                  >Delete Article</button>
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
