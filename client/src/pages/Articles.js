import React, { Component } from 'react';
import API from '../utils/API';
import { Container, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { ArticleList, ArticleListItem } from "../components/List";

class Articles extends Component {
  // Initialize this.state.articles as empty array
  state = {
    articles: []
  }

  componentDidMount() {
    this.loadArticles;
  }

  // Load Articles from databse
  loadArticles = () => {
    API.getArticles()
    .then((res) => {
      // this.setState({ articles: res.data });
      console.log("articles", res.data);
    })
    .catch((err) => console.error(err));
  }

  render() {
    return (
      <Container>
        <Row>
          <Jumbotron>
            <h1>Welcome!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus augue sem, nec pellentesque purus finibus nec. Mauris ut pulvinar mi, sit amet interdum lorem. Duis vel fermentum purus. Suspendisse et efficitur sapien. Donec aliquet augue id nulla suscipit ultricies. Mauris eros lectus, ullamcorper et dapibus nec, porttitor vitae mi. Nullam lacinia venenatis ipsum non venenatis. Morbi feugiat dui ut metus mattis consectetur.</p>
          </Jumbotron>
        </Row>
        <Row>
          {this.state.articles.length ? (
            <ArticleList>
              {this.state.articles.map((article) => (
                <ArticleListItem key={article._id}>
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
