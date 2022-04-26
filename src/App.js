import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./CatSlice";

const App = () => {
  const cats = useSelector((state) => state.cats.Cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  console.log(cats);

  return (
    <div className="App">
      <h1>Cat Species Gallery</h1>
      <p>Images of different species of cats.</p>
      <hr />
      <div className="Gallery">
        {cats.map((ele) => {
          return (
            <div key={ele.id} className="row">
              <div className="column column-left">
                <img
                  alt={ele.name}
                  src={ele.image.url}
                  width="200"
                  height="200"
                />
              </div>
              <div className="column column-right">
                <h2>{ele.name}</h2>
                <h5>Temperament : {ele.temperament}</h5>
                <p>{ele.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
