export default function UserProfile({ name, age, location }:
    { name:string, age:number, location:number }) {
    return (
      <div>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
      </div>
    );
  }
  

  