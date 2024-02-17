import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import HomePage from "./pages/homePage/HomePage";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
    const { user } = useContext(Context);

    return (
        <Router>
            <Topbar />
            <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route path="/posts" element={<HomePage />} />
                <Route
                    path="/register"
                    element={user ? <HomePage /> : <Register />}
                />
                <Route
                    path="/login"
                    element={user ? <HomePage /> : <Login />}
                />
                <Route path="/post/:id" element={<Single />} />
                <Route path="/write" element={user ? <Write /> : <Register />} />
                <Route
                    path="/settings"
                    element={user ? <Settings /> : <Register />}
                />
            </Routes>
        </Router>
    );
}

export default App;
