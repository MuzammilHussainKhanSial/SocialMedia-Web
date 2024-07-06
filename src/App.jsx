import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";
import Badges from "./pages/Badges/Badges";
import Group from "./pages/Groups/Group";
import SignIn from "./pages/SignIn/SignIn";
import Groupdetails from "./pages/Groups/Create/Groupdetails/Groupdetails";
import Groupsetting from "./pages/Groups/Create/Groupsetting/Groupsetting";
import Groupforum from "./pages/Groups/Create/Groupforum/Groupforum";
import Groupphoto from "./pages/Groups/Create/Groupphoto/Groupphoto";
import Groupcover from "./pages/Groups/Create/Groupcover/Groupcover";
import Groupinvite from "./pages/Groups/Create/Groupinvite/Groupinvite";
import About from "./pages/Timeline/About/About";
import Member from "./pages/Member/Member";
import Friends from "./pages/Timeline/Friends/Friends";
import TimelineGroups from "./pages/Timeline/TimelineGroups/TimelineGroups";
import ProfileSetting from "./pages/Profile/ProfileSetting/ProfileSetting";
import PersonalInformation from "./pages/ProfileSetting/PersonalInformation";
import HobbiesAndInterest from "./pages/HobbiesAndInterest/HobbiesAndInterest";
import Social from "./pages/SocialNetwork/Social";


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/badges" element={<Badges />} />
          <Route exact path="/groups" element={<Group />} />
          <Route exact path="/member" element={<Member />} />
          <Route exact path="/groupdetails" element={<Groupdetails />} />
          <Route exact path="/groupsetting" element={<Groupsetting />} />
          <Route exact path="/groupforum" element={<Groupforum />} />
          <Route exact path="/groupphoto" element={<Groupphoto />} />
          <Route exact path="/groupcover" element={<Groupcover />} />
          <Route exact path="/groupinvite" element={<Groupinvite />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/friends" element={<Friends />} />
          <Route exact path="/timelinegroups" element={<TimelineGroups />} />
          <Route exact path="/change_avatar" element={<ProfileSetting />} />
          <Route exact path="/personal_information" element={<PersonalInformation />} />
          <Route exact path="/hobbies_and_interest" element={<HobbiesAndInterest />} />
          <Route exact  path="/social_network" element={<Social />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
