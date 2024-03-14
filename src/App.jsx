import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { Suspense, lazy } from "react";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const Applayout = lazy(() => import("./pages/Applayout"));
const Pagenotfound = lazy(() => import("./pages/Pagenotfound"));
// import Product from "./pages/Product";
// import Homepage from "./pages/Homepage";
// import Pricing from "./pages/Pricing";
// import Pagenotfound from "./pages/Pagenotfound";
// import Applayout from "./pages/Applayout";
// import Login from "./pages/Login";

function App() {
  return (
    <>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route path="app" element={<Applayout />}>
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<Pagenotfound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </>
  );
}

export default App;
