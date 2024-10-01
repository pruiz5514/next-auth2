import './Form.css'

interface FormProps {
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
}
const Form :React.FC<FormProps> = ({onSubmit, children})=>{
    return(
        <form className="form" onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form