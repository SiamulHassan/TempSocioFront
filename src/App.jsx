import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/Registration";
import MailVerify from "./pages/MailVerify";
import Home from "./pages/home";
import Login from "./pages/login";
import NotLoggedIn from "./privateRoute/NotLoggedIn";
import LoggedInUser from "./privateRoute/LoggedInUser";
import RootLayout from "./RootLayout";
import Friends from "./pages/friends";
import "swiper/css";
import CreatePostPopup from "./components/HomePage/PostPart/createPostPopup";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route element={<LoggedInUser />}>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
        </Route>

        <Route element={<NotLoggedIn />}>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/mailverify/:userID" element={<MailVerify />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <CreatePostPopup />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
