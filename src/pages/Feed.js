import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Kelvin Frade</span>
              <span className="place">Betim</span>
            </div>
            <img src={more} alt="Mais" />
          </header>
          <img src="https://avatars1.githubusercontent.com/u/28929274?s=280&v=4" alt="" />

          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>
            <strong> 900 curtidas</strong>
            <p>
              Um post massa!
              <span>#react #oministack</span>
            </p>
          </footer>
        </article>
        <article>
          <header>
            <div className="user-info">
              <span>Kelvin Frade</span>
              <span className="place">Betim</span>
            </div>
            <img src={more} alt="Mais" />
          </header>
          <img src="https://avatars1.githubusercontent.com/u/28929274?s=280&v=4" alt="" />

          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>
            <strong> 900 curtidas</strong>
            <p>
              Um post massa!
              <span>#react #oministack</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;
