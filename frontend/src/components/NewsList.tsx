import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material';
import tempNewsData from './tempNewsData';

const NewsCard = ({ article }) => {
  const {
    publisher,
    title,
    author,
    published_utc,
    article_url,
    image_url,
    description,
  } = article;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component='img' height='140' image={image_url} alt={title} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Author: {author}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Published: {new Date(published_utc).toLocaleDateString()}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Publisher:{' '}
          <Link href={publisher.homepage_url} target='_blank' rel='noopener'>
            {publisher.name}
          </Link>
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          <Link href={article_url} target='_blank' rel='noopener'>
            Read more
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

const NewsList = () => {
  return (
    <div>
      {tempNewsData.slice(0, 4).map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};


export default NewsList;
