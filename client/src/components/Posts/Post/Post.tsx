import { makeStyles } from '@material-ui/core/styles';
import { PostMessage } from '../../../common/types/postMessage';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'

interface PostProps {
    post: PostMessage
}

const Post = (props: PostProps) => {
    const classes = createStyles()
    const { selectedFile, title, createdAt, creator, tags, message, likeCount } = props.post

    const onOptionsClick = () => {

    }

    const onThumbUpClick = () => {

    }
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={selectedFile}
                title={title} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{creator}</Typography>
                <Typography variant='body2'>{moment(createdAt).fromNow()}</Typography>
            </div>

            <div className={classes.overlay2}>
                <Button
                    style={{ color: 'white' }}
                    size='small'
                    onClick={onOptionsClick}>
                    <MoreHorizIcon fontSize='medium' />
                </Button>
            </div>

            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>
                    {tags?.map((tag) => `#${tag} `)}
                </Typography>

                <CardContent>
                    <Typography
                        className={classes.title}
                        variant='h6'
                        gutterBottom>
                        {message}
                    </Typography>
                </CardContent>

                <CardActions className={classes.cardActions}>
                    <Button
                        size='small'
                        color='primary'
                        onClick={onThumbUpClick}>
                        <ThumbUpAltIcon fontSize='small' />Like {likeCount} 
                    </Button>
                    <Button
                        size='small'
                        color='primary'
                        onClick={onThumbUpClick}>
                        <DeleteIcon fontSize='small' />Delete 
                    </Button>
                </CardActions>
            </div>
        </Card>
    )
}

export default Post

const createStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '1rem 0.5rem',
    },
    title: {
        padding: '0 16px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
});
