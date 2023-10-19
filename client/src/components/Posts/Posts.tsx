import Post from "./Post/Post"
import { makeStyles } from '@material-ui/core/styles';

const Posts = () => {
    const classes = createStyles()

    return (
        <>
            <h1 className={classes.actionDiv}>Posts</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts

const createStyles = makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    smMargin: {
        margin: theme.spacing(1),
    },
    actionDiv: {
        textAlign: 'center',
    },
}));