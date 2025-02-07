import NestedMap from "./components/eight";
import Fifth from "./components/fifth";
import First from "./components/first";
import Example5 from "./components/fourth";
import Nine from "./components/nine";
import Example2 from "./components/second";
import Seven from "./components/seven";
import Six from "./components/six";
import Example4 from "./components/third";

export default function Home() {
  return (
    <>
    <h1 className="text-center text-5xl text text-red-400 mt-8 font-bold">Use Effect</h1>
    <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio delectus 
      illo nihil distinctio quis, veniam necessitatibus! Aut accusantium facilis odit a,
       ipsum placeat dolorem voluptate soluta esse magni porro doloribus!</p>
       <First/>
       <Example2/>
       <Example4/>
       <Example5/>
       <Fifth/>
       <Six/>
       <Seven/>
       <NestedMap/>
       <Nine/>
    </>
  );
}
