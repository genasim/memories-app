import { makeStyles } from '@material-ui/core/styles';

const Form = () => {
    const classes = createStyles()

    return (
        <>
            <h1 className={classes.root}>Form</h1>
        </>
    )
}

export default Form

const createStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
}));