import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const PictureCard = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="420"
          src= {data.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {data.explanation}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {data.copyright}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {data.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PictureCard;