import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material';
import AlertLimit from './AlertLimit';

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
      {/* TODO Implement onclick redirect to news Article site */}
      <CardMedia component='img' height='140' image={image_url} alt={title} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {/* TODO Limit desc character length */}
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

const NewsList = ({ newsRes }) => {
  if (newsRes.status === 429) {
    return <AlertLimit resourceName={'News Data'} />;
  } else if (Array.isArray(newsRes.results) && newsRes.results.length > 0) {
    return (
      <>
        {newsRes.results.slice(0, 4).map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </>
    );
  } else return <></>;
};

export default NewsList;
