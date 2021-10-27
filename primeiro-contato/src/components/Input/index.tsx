import { InputHTMLAttributes } from "react"
import { StyledInput, InputContainer } from './style'
interface InputProps extends InputHTMLAttributes <HTMLInputElement>{
    label?:string;
    placeholder:string

}
const Input = ({ label, placeholder, ...rest }: InputProps) =>{
    return(
        <InputContainer>
            {label && <div><label>{label}</label></div>}
            <StyledInput  {...rest }placeholder={placeholder}/>
        </InputContainer>
    )
}
export default Input