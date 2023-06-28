import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const AdminArticles = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ mb: 3, mt: 3 }}>
        <Grid item xs={7}>
          <Typography variant="h4" gutterBottom>
            Партнерские статьи
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" color="success" component={Link} to={`/admin/create`}>
              Добавить новую
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {[1, 2, 3, 4].map((el: number) => {
          return (
            <Grid item xs={3} key={el}>
              <Card>
                <CardActionArea component={Link} to={`/admin/edit/${el}`}>
                  <CardMedia component="img" height="140" image="https://placeimg.com/640/480/any" alt="green iguana" />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                      continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
