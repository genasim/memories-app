import { TextField } from "@material-ui/core"
import { PostMessage } from "../../common/types/postMessage"
import { useFormContext } from "react-hook-form"

interface InputFieldProps {
    property: keyof PostMessage
    label: string
}
const InputField = (props: InputFieldProps) => {
    const { register } = useFormContext()

    return <TextField
        {...register(`${props.property}`, { required: true })}
        id={`form-${props.property}`}
        label={props.label}
        variant="outlined"
        fullWidth
        name={props.property}
    />
}

export default InputField
