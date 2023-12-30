import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../services/products";
import Product from "../components/Products";
const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { loading } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");
  const [maxi, setMaxi] = useState();
  const [mini, setMini] = useState();
  const ChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  const [price, setPrice] = useState(1749);
  const onChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  useEffect(() => {
    dispatch(allProducts(setData));
    console.log(data);
  }, []);
  useEffect(() => {
    setMaxi(Math.max(...data.map((data) => data.price)));
    setMini(Math.min(...data.map((data) => data.price)));
  }, [data, maxi, mini]);

  return (
    <div>
      <div className="flex justify-around items-center" >
        <div className="w-[30%]">
          <div className="mt-5">
            <label className="w-full">
              Search
              <input
                required
                type="text"
                name="email"
                value={search}
                onChange={ChangeHandler}
                placeholder="Search..."
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] p-[12px] border-2"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="text">Price</label>
          <input
            type="text"
            name="text"
            onChange={onChangeHandler}
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-[10rem] rounded-[0.5rem] p-[12px] border-2"
            value={price}
          />
          <input
            className="w-[10rem]"
            type="range"
            name="price"
            id="price"
            min={mini}
            max={maxi}
            value={price}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 ">
        {!loading &&
          data
            .filter((data) => {
              if (search === "") {
                return data;
              } else if (
                data.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return data;
              }
            })
            .filter((data) => data.price <= price)
            .map((post) => {
              return <Product post={post} key={post.id} />;
            })}
      </div>
    </div>
  );
};

export default Home;
