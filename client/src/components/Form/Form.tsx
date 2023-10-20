import { Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useCreatePostMutation } from "../../redux/features/api";
import InputField from "./InputField";


const initialPostState = {
    creator: "",
    message: "",
    title: "",
    tags: "",
    selectedFile: ""
}

const Form = () => {
    const classes = createStyles()
    const [createPost, { }] = useCreatePostMutation()

    const methods = useForm({
        defaultValues: initialPostState
    })
    const onSubmit: SubmitHandler<typeof initialPostState> = (formData) => {
        const tags = formData.tags
            .replace(/\s/g, "")  // Remove all whitespaces from string
            .split(",")
        createPost({...formData, tags})
    }

    const onClear = () => methods.reset()

    const handleImageUpload = (event: any) => {
        const file = event.target?.files[0]
        if (!file)
            return

        const reader = new FileReader()
        reader.onload = (event) => {
            const base64Image = event.target!.result as string
            methods.setValue('selectedFile', base64Image, { shouldDirty: true })
        }
        reader.readAsDataURL(file)
    }

    return (
        <Paper className={classes.paper}>
            <FormProvider {...methods}>
                <form
                    autoComplete="off"
                    noValidate
                    className={`${classes.root} ${classes.form}`}
                    onSubmit={methods.handleSubmit(onSubmit)}>
                    <Typography variant="h6">Creating Memory</Typography>

                    <InputField label="Creator" property="creator" />
                    <InputField label="Title" property="title" />
                    <InputField label="Message" property="message" />
                    <InputField label="Tags" property="tags" />

                    <div className={classes.fileInput}>
                        <input
                            {...methods.register('selectedFile')}
                            type="file"
                            name="image"
                            onChange={handleImageUpload}
                        />
                    </div>

                    <Button
                        className={classes.buttonSubmit}
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        fullWidth>
                        Submit
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        type="button"
                        fullWidth
                        onClick={onClear}>
                        Clear
                    </Button>
                </form>
            </FormProvider>
        </Paper>
    )
}

export default Form


const createStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        position: "sticky"
    },
    fileInput: {
        width: "97%",
        margin: "10px 0",
    },
    buttonSubmit: {
        marginBottom: 10,
    },
}));