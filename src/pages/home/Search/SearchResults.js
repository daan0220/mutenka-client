import React from 'react';
import { Paper, Typography, Card, CardContent} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const dummyResults = [
  { name: 'Result 1', description: 'Description 1' },
  { name: 'Result 2', description: 'Description 2' },
  { name: 'Result 3', description: 'Description 3' },
  { name: 'Result 3', description: 'Description 3' },
  { name: 'Result 3', description: 'Description 3' },
  { name: 'Result 3', description: 'Description 3' },
  // 他のダミーデータを追加
];

const SearchResults = () => {
  const styles = {
    container: {
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      overflowX: 'auto', // 横方向にスクロールできるようにする
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',

    },
    list: {
      display: 'flex', // リストアイテムを横に並べる
      padding: '0', // リストの余白をリセット
      width: 'max-content', // コンテンツに合わせた幅に調整
    },
    card: {
      width: '300px', // カードの幅を設定
      height: '200px',
      margin: '0 20px 20px 0', // カード間の間隔を調整
    },
  };
  

  return (
    
    <Paper elevation={3} style={styles.container}>
      <Typography variant="h4" style={styles.title}>Search Results</Typography>
      <div style={{ ...styles.list, width: `${dummyResults.length * (300 + 20)}px` }}>
        {dummyResults.map((result, index) => (
        <Card sx={{ maxWidth: 345, marginRight: 2}}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">共有する</Button>
            <Button size="small">詳細</Button>
          </CardActions>
        </Card>
        ))}
      </div>
    </Paper>
  );
};

export default SearchResults;
