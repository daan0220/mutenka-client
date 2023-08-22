import React, { useState, useEffect } from 'react';

const OrganicNews = () => {
  const [news, setNews] = useState([]); // ニュース記事を格納する状態

  useEffect(() => {
    // ニュースデータを外部APIから取得するための関数を呼び出す
    fetchNewsData()
      .then((data) => {
        setNews(data.articles); // ニュース記事を状態に設定
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
      });
  }, []);

  // ニュースデータを取得する関数
  const fetchNewsData = async () => {
    try {
      const response = await fetch('YOUR_NEWS_API_ENDPOINT'); // ニュースAPIのエンドポイントを指定
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <h2>Organic and Health Food News</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrganicNews;
