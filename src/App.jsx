import { Provider } from "react-redux";
import "./App.css";
import Posts from "./components/redux/Posts";
import RtkPosts from "./components/redux-toolkit/Posts";
import RtkQueryPosts from "./components/redux-toolkit-query/Posts";
import { store as pureReduxStore } from "./components/redux/store/redux.store";
import { store as rtkStore } from "./components/redux-toolkit/store/rtk.store";
import { store as rtkQueryStore } from "./components/redux-toolkit-query/store/rtk-query.store.js";

function App() {
  return (
    <>
      <Provider store={pureReduxStore}>
        <Posts />
      </Provider>
      <Provider store={rtkStore}>
        <RtkPosts />
      </Provider>
      <Provider store={rtkQueryStore}>
        <RtkQueryPosts />
      </Provider>
    </>
  );
}

export default App;
