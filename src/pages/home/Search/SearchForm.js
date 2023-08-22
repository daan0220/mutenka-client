import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    // ユーザーが検索ボタンをクリックしたときの処理をここに追加
    console.log('検索クエリ:', searchQuery);
    // ここでAPIリクエストを送信して検索結果を取得するなどの処理を追加
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={8}>
        <TextField
          fullWidth
          variant="outlined"
          label="検索"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Grid>
      <Grid item xs={4}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearchSubmit}
          fullWidth
        >
          検索
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchForm;
