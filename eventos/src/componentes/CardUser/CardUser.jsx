import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const CardUser = ( { userData } ) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 20}}>
        <CardActionArea>
            <CardMedia
            component="img"
            image={userData.avatar_url}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {userData.login}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {userData.location}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}

export default CardUser;