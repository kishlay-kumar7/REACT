import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Count from "./count.jsx";
import Todo from "./todo.jsx";
import Lottery from "./lottery.jsx";
import Forms from "./form.jsx";

import SearchBox from "./weather.jsx";
createRoot(document.getElementById("root")).render(
  // <App />
  // <Count/>
  //   <Todo />
  // <Lottery />
  // <Forms />
  <SearchBox />
);
