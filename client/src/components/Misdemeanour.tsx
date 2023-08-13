import { useEffect, useState } from "react";
import axios from "axios";
import ".././styles/tailwind.css";

export const Misdemeanour: React.FC = () => {
  const defaultOptions = [
    {
      name: "- Filter -",
      value: "none",
    },
    {
      name: "Mild Public Rudeness",
      value: "rudeness",
    },
    {
      name: "Speaking in a Lift",
      value: "lift",
    },
    {
      name: "Not Eating Your Vegetables",
      value: "vegetables",
    },
    {
      name: "Supporting Manchester United",
      value: "united",
    },
  ];

  const [filter, setFilter] = useState<any>(defaultOptions[0].value);
  const [options] = useState<any>(defaultOptions);
  const [misdemeanours, setMisdemeanours] = useState<Array<any>>([]);

  const getEmoji = (misdemeanour: String) => {
    if (misdemeanour === "united") {
      return "😈";
    }
    if (misdemeanour === "vegetables") {
      return "🥗";
    }
    if (misdemeanour === "lift") {
      return "🗣";
    }
    if (misdemeanour === "rudeness") {
      return "🤪";
    }
  };

  useEffect(() => {
    getMisdemeanours(15);
  }, []);

  const getMisdemeanours = async (number: number) => {
    const apiResponse = await axios.get(
      `http://localhost:8080/api/misdemeanours/${number}`
    );
    setMisdemeanours(apiResponse.data.misdemeanours);
  };

  const filteredMisdemeanours = (filterString: String) => {
    if (filterString === "none") {
      return misdemeanours;
    }
    return misdemeanours.filter((item) => item.misdemeanour === filterString);
  };

  const buildRows = () => {
    return (
      <div className="flex flex-wrap gap-4">
        {filteredMisdemeanours(filter).map((mis, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md bg-white w-48"
          >
            <div className="mb-2">
              <p className="text-lg font-semibold">
                {mis.citizenId} - {mis.misdemeanour}{" "}
                {getEmoji(mis.misdemeanour)}
              </p>
              <p className="text-gray-600">{mis.date}</p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-16 h-16 rounded-full"
                src="https://picsum.photos/100/50"
                alt="Misdemeanour"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const handleChange = (event: any) => {
    setFilter(event.target.value);
  };

  return (
    <div className="mx-auto max-w-screen-xl p-6">
      <h1 className="text-2xl font-semibold mb-4">Misdemeanour!</h1>
      <select className="border rounded p-2 mb-4" onChange={handleChange}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      {buildRows()}
    </div>
  );
};
