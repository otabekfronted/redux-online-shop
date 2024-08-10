// MainLayout.js
import { Outlet } from "react-router-dom";
import Products from "../components/Products"; // Import Products komponenti

function MainLayout() {
    return (
        <div>
            <header>
                <nav>
                    <a href="/">Home</a>
                    <a href="/card">Card</a>
                </nav>
            </header>
            <main>
                <Products /> {}
                <Outlet /> {/* Routing qismi */}
            </main>
        </div>
    );
}

export default MainLayout;
