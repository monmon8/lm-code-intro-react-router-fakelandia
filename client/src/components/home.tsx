import React from "react";
import Justice from "../assets/Justice.png";

const Home: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-purple-100"
      style={{
        backgroundImage: `url(${Justice})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="text-center text-2xl">
        <strong>
          Welcome to the home of the Justice Department of Fakelandia!
        </strong>
      </p>
      <br />
      <p className="text-center text-2xl">
        <strong>
          Here you can browse a list of recent misdemeanours committed by our
          citizens, or you can confess to your own misdemeanour.
        </strong>
      </p>
    </div>
  );
};

export default Home;
