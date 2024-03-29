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
import { useEffect, useState } from 'react';
import { getPartnersArticles } from '../../api';
import { IPartnerArticle } from '../../types';

export const AdminArticles = () => {
  const [articles, setArticles] = useState<IPartnerArticle[]>([]);

  useEffect(() => {
    (async () => {
      const articles = await getPartnersArticles();
      setArticles(articles);
    })();
  }, []);

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
        {articles.map((el) => {
          return (
            <Grid item xs={3} key={el.id}>
              <Card>
                <CardActionArea component={Link} to={`/admin/edit/${el.id}`}>
                  <CardMedia component="img" height="140" image={el.image} alt={el.title} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {el.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {el.description}
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
