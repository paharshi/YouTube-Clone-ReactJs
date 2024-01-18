import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import Loader, { LoginName } from "./utils/loadContext";
import { Suspense, lazy, useState } from "react";
import {
  LoginPageShimmer,
  SearchPageShimmer,
  WatchPageShimmer,
} from "./components/Shimmer";
const WatchPage = lazy(() => import("./components/WatchPage"));
const LoginPage = lazy(() => import("./components/LoginPage"));
const SearchPage = lazy(() => import("./components/SearchPage"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Body />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "/watch",
        element: (
          <Suspense fallback={<WatchPageShimmer />}>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "/search/:id",
        element: (
          <Suspense fallback={<SearchPageShimmer />}>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<LoginPageShimmer />}>
            <LoginPage />
          </Suspense>
        ),
      },
    ],
  },
 
]);

function App() {
  const [Loading, setLoading] = useState(true);
  const [name, setName] = useState("");

  return (
    <Provider store={store}>
      <LoginName.Provider value={[name, setName]}>
        <Loader.Provider value={[Loading, setLoading]}>
          <div>
            {/* <Header /> */}

            <RouterProvider router={appRouter} />

            {/* <Body /> */}
          </div>
        </Loader.Provider>
      </LoginName.Provider>
    </Provider>
  );
}

export default App;
