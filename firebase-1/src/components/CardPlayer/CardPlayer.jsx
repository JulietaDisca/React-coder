import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CardPlayer = ({ playersData }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt={playersData.name}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {playersData.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {playersData.number} | {playersData.position}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}

export default CardPlayer;