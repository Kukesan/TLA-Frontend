import { useRoutes } from "react-router-dom";

import Home from "./Pages/Home";
import Thaipongal from "./Pages/Thaipongal";
import SotkanaiMain from "./Pages/Sotkanai-main";
import SotkanaiDistrict from "./Pages/Sotkanai-district";
import Aramiyam from "./Pages/Aramiyam";
import Jeevanathi from "./Pages/Jeevanathi";
import Kovil from "./Pages/Kovil";
import ComingSoon from "./shared/comingSoon/ComingSoon";
import BloodDonation from "./Pages/Blood-donation";
import FoodFestival from "./Pages/Food-festival";
import VaniVilla from "./Pages/Vani-villa";
import Thamilaruvi from "./Pages/Thamilaruvi";
import PPL from "./Pages/PPL";
import Brammam from "./Pages/Brammam";
import BrammamEventAbout from "./Components/events/brammam/aboutEvent/BrammamEventAbout";
import ExtraInfo from "./Components/events/brammam/ExtraInfo/ExtraInfo";
import MovieNight from "./Pages/Movie-night";

import Ideathon from "./Pages/Ideathon";
import Books from "./Pages/Books";
import MemorySharing from "./Pages/Memory-Sharing";
import TeamsPage from "./Pages/Teams-Page";
import HistoryPage from "./Pages/History";
import Contact from "./Components/Home/Contact/contact";

import Login from "./Components/Login";
import Signup from "./Components/Signup";

function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/events",
      children: [
        {
          path: "thaipongal",
          element: <Thaipongal />,
        },
        {
          path: "sotkanai",
          element: <SotkanaiMain />,
        },
        {
          path: "sotkanai-district",
          element: <SotkanaiDistrict />,
        },
        {
          path: "aramiyam",
          element: <Aramiyam />,
        },
        {
          path: "jeevanathi",
          element: <Jeevanathi />,
        },
        {
          path: "vani-villa",
          element: <VaniVilla />,
        },
        {
          path: "kovil",
          element: <Kovil />,
        },
        {
          path: "blood-donation",
          element: <BloodDonation />,
        },
        {
          path: "food-festival",
          element: <FoodFestival />,
        },
        {
          path: "thamilaruvi",
          element: <Thamilaruvi />,
        },
        {
          path: "brammam",
          element: <Brammam />,
        },
        {
          path: "brammam/:event",
          element: <BrammamEventAbout />,
        },
        {
          path: "brammam/:event/rules",
          element: <ExtraInfo />,
        },
        {
          path: "comingSoon",
          element: <ComingSoon />,
        },
        {
          path: "ppl",
          element: <PPL />,
        },
        {
          path: "movie-night",
          element: <MovieNight />,
        },
      ],
    },
    {
      path: "ideathon",
      element: <Ideathon />,
    },
    {
      path: "/memory-sharing",
      element: <MemorySharing />,
    },
    {
      path: "/books",
      element: <Books />,
    },
    {
      path: "teams",
      element: <TeamsPage />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
    {
      path: "history",
      element: <HistoryPage />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);
}

export default Router;
