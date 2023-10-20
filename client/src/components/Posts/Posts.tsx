import { makeStyles } from '@material-ui/core/styles';
import { useGetPostsQuery } from "../../redux/features/api";
import { Grid, CircularProgress } from '@material-ui/core'
import Post from "./Post/Post";

const Posts = () => {
    const classes = createStyles()
    const { data, isFetching } = useGetPostsQuery()

    if (isFetching || !data)
        return <CircularProgress />

    return (
        <Grid
            className={classes.mainContainer}
            container
            alignItems='stretch'
            spacing={3}>
                {data?.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} />
                    </Grid>
                ))}
        </Grid>
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