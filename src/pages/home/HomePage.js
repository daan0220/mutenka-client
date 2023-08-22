import React from 'react';
import SearchForm from './Search/SearchForm';
import SearchResults from './Search/SearchResults';
import OrganicNews from './News/OrganicNews';
import backgroundImage from './images/240_F_621502200_X1JyoxNHYn6T30lNXuMkZPzccbxOxwSl.jpg'; // 画像のインポート

const searchFormContainerStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  minHeight: '70vh',
};

const HomePage = () => {
  return (
    <div>
      <div style={searchFormContainerStyle}>
        <SearchForm />
      </div>
      <SearchResults />
      <OrganicNews/>
    </div>
  );
}

export default HomePage;
