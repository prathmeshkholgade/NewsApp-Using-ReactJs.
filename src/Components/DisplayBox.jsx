import { useDispatch, useSelector } from "react-redux";

import { getData } from "./helper";
import { useEffect } from "react";
import { addData } from "../features/data/dataSlice";
export default function DisplayBox() {
  let data = useSelector((state) => state.data.arry);
  let usedispatch = useDispatch();

  useEffect(() => {
    async function getFristData() {
      let data = await getData();
      data.map((items) => {
        usedispatch(addData(items));
      });
     
    }
    getFristData();
  }, []);
  let error = data.length === 0;
  // console.log(data);
  return (
    <div className="mt-8">
      {error ? (
        <p className="flex justify-center text-red-700 text-lg">
          no such data exist
        </p>
      ) : (
        ""
      )}
      <div className="flex flex-row flex-wrap justify-evenly">
        {data.map((news, idx) => (
          <div
            key={idx}     
            className="card w-96 border-solid border-2 p-2 mb-4 shadow-gray-700 shadow-sm"
            onClick={() => window.open(news.imgUrlNews, "_blank")}
          >
            <img src={news.urlToImage} alt="img" />
            <h3 className="italic font-semibold mt-4">{news.title}</h3>
            <p className="mt-2">{news.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
