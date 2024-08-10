// App.js
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "../store"; // Redux store'ni import qilish
import Products from "./components/Products";
import Cart from "./components/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Products />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}

export default App;
