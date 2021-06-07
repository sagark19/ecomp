import { Alert } from 'react-bootstrap'

interface alertProp {
    variant?:string 
    children: string | {}
}
export const Message : React.FC<alertProp> = ({variant,children}) =>  {

    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}



