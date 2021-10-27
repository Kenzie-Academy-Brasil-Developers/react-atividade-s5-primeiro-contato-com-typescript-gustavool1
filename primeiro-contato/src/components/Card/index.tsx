
import { CardContainer } from './style'
interface CardProps{
    name:string,
    age:number,
    hobby:string
}

const Card = ({name, age, hobby}:CardProps) =>{
    return(
        <CardContainer>
            <h1>{ name }</h1>
            <p>{ age }</p>
            <p>{ hobby }</p>
        </CardContainer>
    )
}

export default Card