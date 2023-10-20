import { makeStyles } from '@material-ui/core/styles';
import { useGetPostsQuery } from "../../redux/features/api";
import Post from "./Post/Post";

const Posts = () => {
    const classes = createStyles()
    const { data, isFetching } = useGetPostsQuery()

    return (
        <>
            <h1 className={classes.actionDiv}>Posts</h1>
            {!isFetching &&
                data ? (
                <>
                    <Post />
                    <Post />
                </>
            ) : (<h2>Could not find posts</h2>)}
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