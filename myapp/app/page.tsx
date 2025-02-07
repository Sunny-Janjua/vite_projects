import Fetchapi from "./compoenents/fetchapi";
import Fifth from "./compoenents/fifth";
import First from "./compoenents/first";
import Fourth from "./compoenents/fourth";
import Onchange from "./compoenents/onchange";
import Second from "./compoenents/second";
import Third from "./compoenents/third";
import Toggle from "./compoenents/toggle";
import UserProfile  from "./compoenents/UserProfile"

export default function Home({ heading, para }: any) {
  const userdata = { name: "sunny janjua", age: 454, roll_no: 332 };
  const userData = { name: "Sunny Janjua", age: 24, location: "Faisalabad" };

  // Function to be passed as a prop
  const handleClick = () => {
    return "Hello from function!";
  };

  const onclickNew =()=>{
    console.log("object")
    return "Hello from function!";

  }

  return (
    <>
      <h1 className="text-center text-7xl text-red-500 mt-7 font-bold">Props Concept</h1>
      <First heading="code with sunny" para="hello" />
      <UserProfile name="Sunny Janjua" age={24} location="Faisalabad" />
      <Second {...userdata} />
      <UserProfile {...userData} />
      <Third onclickHandler={handleClick} />  
      <Fourth/>
      <Fifth onclickHandlerNew={onclickNew}/>
      <Fetchapi/>
      <Onchange/>
      <Toggle/>
    </>
  );
}
