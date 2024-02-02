import { useState } from "react";
import { getSearchData } from "./helper";
import { useSelector, useDispatch } from "react-redux";
import { addData, clearData } from "../features/data/dataSlice";

export default function NavBar() {
  let [search, setsearch] = useState("");
  let data = useSelector((state) => state.data.arry);
  let usedispatch = useDispatch();
  let handler = (e) => {
    setsearch(e.target.value);
  };

  let handlerSub = async (e) => {
    e.preventDefault(), console.log(search);

    let searchData = await getSearchData(search);
    console.log(searchData);
    usedispatch(clearData(data));
    searchData.map((items) => {
      usedispatch(addData(items));
      console.log(items);
    });

  };
  return (
    <div className="bg-green-500 p-4 flex justify-around">
      <div className="logo">
        <p>Search Your News</p>
      </div>
      <div className="search  box-border">
        <form onSubmit={handlerSub}>
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handler}
            className="mr-4 px-4"
          />
          <button className="bg-yellow-400 px-2 rounded-lg">Search</button>
        </form>
      </div>
    </div>
  );
}
