import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room'; // Google Maps のアイコン

const paperStyle = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#388e3c', // 濃い緑の背景色
    borderRadius: '50%', // 円形の形状
    position: 'fixed', // 画面固定位置
    bottom: '20px', // 画面下部からの距離
    right: '20px', // 画面右部からの距離
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    width: '120px', // サイズ調整（任意）
    height: '120px', // サイズ調整（任意）
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  };
  

const textStyle = {
  fontWeight: 'bold',
  fontSize: '18px',
  margin: '10px 0',
  color: '#ff6b6b', // テキストの色を変更
};

const LocationSearch = () => {
  return (
    <Grid item xs={12} sm={4}>
      <Paper elevation={3} sx={paperStyle}>
        {/* タイル内のテキスト、Google Maps のアイコン、および説明を追加 */}
        <Typography variant="h6" sx={textStyle}>
          位置情報から<br/>探す
          
        </Typography>
        <RoomIcon sx={{ fontSize: 48, color: '#ff6b6b' }} /> {/* 可愛らしいカラフルなアイコン */}
        {/* 他のUI要素や説明を追加できます */}
      </Paper>
    </Grid>
  );
};

export default LocationSearch;
