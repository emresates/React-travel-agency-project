import { object, string} from "yup"

const validation = object({
    name: string().min(3,"Your name must be at least 3 characters").required("Required"),
    email: string().email("Invalid Email").required("Required"),
    message : string().min(20,"Your message must be at least 20 characters").max(100, "Your message must be a maximum of 100 characters").required("Required"),
    subject: string().required("Required")
});

export default validation;