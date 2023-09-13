import { useEffect } from "react";
import "./Home.css";

const Home = () => {

useEffect(()=>{
      fetch("data.json")
      .then(res=>res.json())
      .then(data=>console.log(data))
}, [])








  return (
    <div className="container px-8">
      <div className="card-container grid grid-cols-2 ">
        <div className="card w-[350px] bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/w6RJrnt/Culture-Monitor-Renner-972293712.jpg"
              alt="img"
              className="rounded-full"
            />
          </figure>
            <h2 className="text-center text-3xl font-semibold">Jeremy Renner</h2>
            <p>If a dog chews shoes whose shoes does he choose</p>
            <div className="flex justify-between mt-4">
                <p className="text-xl font-medium">Salary: 325 $</p>
                <p className="text-xl font-medium"> Profession: </p>
            </div>
            <div className="text-center my-4">
              <button className="btn btn-primary">Select</button>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
