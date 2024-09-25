import { Card } from "./card"

export function Greetings({
  user:{
    firstName,
    lastName,
  }
}){
  function formatName(){
    return `${lastName} ${firstName}`
  }


  return (
    <Card>
        <p>{ formatName() }</p>
    </Card>
  )
}