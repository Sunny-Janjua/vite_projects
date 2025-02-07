// import Alert from "./compoents/Alert";
// import Background from "./compoents/Background";
import Fetchapi from "./compoents/Fetchapi";
// import Form from "./compoents/Form";
// import Greeting from "./compoents/Greating";
// import MyComponent from "./compoents/Mycomponent";
// import NewComponent from "./compoents/Newcomponent";
// import Newusestate from "./compoents/Newusestate";
// import Profile from "./compoents/profile";
// import Spreadstate from "./compoents/Spreadstate";
// import TodoList from "./compoents/TodoList";
// import Usestate from "./compoents/Usestate";

export default function Home() {
  function Common() {
    return <h1 className="text-5xl text-red-600">Hello, Sunny! 😊</h1>;
    
  }
  return (
    <>
    <h1 className="text-center text-5xl text-red-900 mt-8">Code With Sunny</h1>
    {/* <MyComponent/>
    <NewComponent/>
    <Profile/>
    <Common/>
    <Usestate/>
    <Background/>
    <Alert/>
    <Newusestate/>
    <Spreadstate/>
    <TodoList/>
    <Form/>
    <Greeting name="Sunny" age={30}/> */}
    <Fetchapi/>
    </>
  );
}
