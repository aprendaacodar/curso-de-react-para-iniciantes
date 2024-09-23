export function Greetings(props){
  function formatName(){
    return `${props.lastName} ${props.firstName}`
  }

  return (
    <div>
        <p>
         {
          formatName()
         }
        </p>
    </div>
  )
}