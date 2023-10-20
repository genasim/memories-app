import { Button, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import FileBase from 'react-file-base64';
import { PostMessage } from '../../common/types/postMessage';

const initialPostState: PostMessage = {
    creator: "",
    message: "",
    title: ""
}

interface InputFieldProps {
    property: keyof PostMessage
    label: string
}

const Form = () => {
    const classes = createStyles()
    const [postData, setPostData] = useState<PostMessage>(initialPostState)

    const handleSubmit = (event: any) => {
        event.preventDefault()

        console.log(event);
    }

    const onClear = () => setPostData(initialPostState)

    const onPostChange = (prop: keyof PostMessage) => (event: any) => {
        setPostData({ ...postData, [prop]: event.target.value })
    }

    const InputField = (props: InputFieldProps) => (
        <TextField
            name={props.property}
            variant='outlined'
            label={props.label}
            fullWidth
            value={postData[props.property] ?? ""}
            onChange={onPostChange(props.property)} />
    )

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete='off'
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating Memory</Typography>

                <InputField label='Creator' property='creator' />
                <InputField label='Title' property='title' />
                <InputField label='Message' property='message' />
                <InputField label='Tags' property='tags' />

                <div className={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={({ base64 }: any) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>

                <Button
                    className={classes.buttonSubmit}
                    variant='contained'
                    color='primary'
                    size='large'
                    type='submit'
                    fullWidth>
                    Submit
                </Button>
                <Button
                    variant='contained'
                    color='secondary'
                    size='large'
                    type='button'
                    fullWidth
                    onClick={onClear}>
                    Clear
                </Button>
            </form>
        </Paper>
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
        position: 'sticky'
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        marginBottom: 10,
    },
}));