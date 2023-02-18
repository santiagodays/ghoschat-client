// Library imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Pages Imports
import HomePage from './pages/home-page';
import ErrorPage from "./pages/error-page.jsx";
import SignInPage from "./pages/sign-in-page.jsx";
import SignUpPage from "./pages/sign-up-page.jsx";
import UserHomePage from "./pages/user-home";
import ChatRoomPage from './pages/chat-room';
// Components Import
import Navigation from './components/Navigation';
import Footer from "./components/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign_up",
    element: <SignUpPage />,
  },
  {
    path: "/sign_in",
    element: <SignInPage />,
  },
  {
    path: "/home",
    element: <UserHomePage />,
  },
  // {
  //   path: "/profile",
  //   element: <UserProfile />,
  // },
  {
    path: "/room",
    element: <ChatRoomPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
      <Footer />
    </div>
  );
}

export default App;
