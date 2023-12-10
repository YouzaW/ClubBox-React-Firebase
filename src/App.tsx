import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthContextProvider } from "./components/RegisterPagePD/AuthContextAlpha";

import LoginPage from "./components/LoginPage";
import ForgottenPasswordPage from "./components/ForgottenPasswordPage";
import PasswordQuestionPage from "./components/ForgottenPasswordPage/PasswordQuestionPage";
import RegisterForm from "./components/RegisterForm";

import Dashboard from "./components/Dashboard";
import ForgotPasswordQNA from "./components/RegisterPagePD/ForgotPasswordQNA";
import AdditionalInfo from "./components/RegisterPagePD/AdditionalInfo";
import AboutMe from "./components/RegisterPagePD/AboutMe";
import UploadPhoto from "./components/RegisterPagePD/UploadPhoto";
import UploadVideo from "./components/RegisterPagePD/UploadVideo";
import EditPersonalDetailsPage from "./components/EditPersonalDetailsPage";
import ManageClub from "./components/ManageClub";
import EditClubInfo from "./components/EditClubInfo";
import ClubAnnouncement from "./components/ClubAnnouncement";
import FaqPage from "./components/FaqPage/FaqMainPage";
import FaqMainPage from "./components/FaqPage/FaqMainPage";

import Calendar from "./components/CalendarComp";
import CalendarMain from "./components/CalendarPage/CalendarMain";
import CalendarComp from "./components/CalendarComp";
import ProfilePage from "./components/ProfilePage";
import ClubAdmission from "./components/ClubAdmission";
import ViewEvent from "./components/ViewEvent";
import CreateEvents from "./components/CreateEvents";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/forgotpassword" element={<ForgottenPasswordPage />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/profilePage" element={<ProfilePage />} />
          <Route
            path="/password_questions"
            element={<PasswordQuestionPage />}
          />
          <Route path="/faqpage" element={<FaqMainPage />} />

          <Route path="/createevents" element={<CreateEvents />} />
          <Route path="/Club_Admission" element={<ClubAdmission />} />
          <Route path="/event/:id" element={<ViewEvent />} />
          <Route
            path="/register_page"
            element={<RegisterForm></RegisterForm>}
          />

          <Route path="/forget_password_qna" element={<ForgotPasswordQNA />} />
          <Route path="/additional_info" element={<AdditionalInfo />} />
          <Route path="/about_me" element={<AboutMe />} />
          <Route path="/upload_photo" element={<UploadPhoto />} />
          <Route path="/upload_video" element={<UploadVideo />} />
          <Route
            path="/edit-personal-details"
            element={<EditPersonalDetailsPage />}
          />
          <Route path="/manage_club" element={<ManageClub />} />
          <Route path="/edit_club_info" element={<EditClubInfo />} />
          <Route
            path="/make_club_announcement"
            element={<ClubAnnouncement />}
          />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/CalendarMain" element={<CalendarComp />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthContextProvider>
    //guukug
  );
}

export default App;
