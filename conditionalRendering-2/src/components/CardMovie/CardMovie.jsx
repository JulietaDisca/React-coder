import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import noImage from './no-image.png';

const CardMovie = ({ movieData }) => {
    return (
        <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
        <CardActionArea>
            <CardMedia
            component="img"
            image={movieData.Poster !== "N/A" ? movieData.Poster : noImage}
            alt="image movie"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {movieData.Title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {movieData.Year}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {movieData.Plot}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}

export default CardMovie;