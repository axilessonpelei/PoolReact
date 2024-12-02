import { router } from "../../core/routes/routes.jsx";
import { AppProvider } from "../../core/context/context.jsx";
import { RouterProvider } from "react-router-dom";

function App() {
    return(
        <AppProvider>
            <RouterProvider router={router} />
        </AppProvider>

    )
}

export default App