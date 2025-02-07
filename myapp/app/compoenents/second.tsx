export default function Second(props:{
    name:string,
    age:number,
    roll_no:number
}) 
{
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Name: {props.age}</h1>
      <h1>Name: {props.roll_no}</h1>
    </div>
    )
  }