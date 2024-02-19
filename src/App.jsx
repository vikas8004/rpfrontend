import "./App.css";
import Home from "./components/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Results from "./components/Results/Results.jsx";
import QuaterlyResult from "./components/Results/QuaterlyResult.jsx";
import Halfyearly from "./components/Results/Halfyearly.jsx";
import Annually from "./components/Results/Annually.jsx";
import FinalResult from "./components/Results/FinalResult.jsx";
import AddResult from "./components/Results/add result/AddResult.jsx";
import UnitTest from "./components/Results/add result/UnitTest.jsx";
import AllResult from "./components/Results/add result/AllResult.jsx";
import Login from "./components/Login.jsx";
import { useState } from "react";
import { tokenContext } from "./context.jsx";
import ResultDemo from "./components/Results/ResultDemo.jsx";
import RegistrationForm from "./components/Admission.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import ShowResult from "./components/auth/ShowResult.jsx";
import AdmitCard from "./components/admit card/AdmitCard.jsx";
import AdmitCardForm from "./components/admit card/AdmitCardForm.jsx";
import ShowConditionallyAdmitCard from "./components/auth/ShowConditionallyAdmitCard.jsx";
import Contact from "./components/Contact.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import StudentDetails from "./components/dashboard/StudentDetails.jsx";
import TeacherRegistrationForm from "./Teacher/Teacher.jsx";
import IdCard from "./components/id card/IdCard.jsx";
import PrintAdmitCard from "./components/admit card/PrintAdmitCard.jsx";
import AdmissionPdf from "./components/admission/AdmissionPdf.jsx";
import KnowStu from "./components/KnowStu.jsx";

function App() {
  const [token, setToken] = useState("");
  const [result, setResult] = useState("");
  const [admitCard, setAdmitCard] = useState("");
  const [regestrationPdf, setRegestrationPdf] = useState("");
  return (
    <>
      <tokenContext.Provider
        value={{
          token,
          setToken,
          result,
          setResult,
          admitCard,
          setAdmitCard,
          regestrationPdf,
          setRegestrationPdf,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/result/results" element={<Results />} />
          <Route
            path="/result/results/quaterlyresult"
            element={<QuaterlyResult />}
          />
          <Route
            path="/result/results/halfyearlyresult"
            element={<Halfyearly />}
          />
          <Route path="/result/results/annuallyresult" element={<Annually />} />
          {/* <Route path="/result/results/finalresult" element={<FinalResult />} /> */}
          <Route
            path="/result/addresult/add-unit-test-result"
            element={<ProtectedRoute Component={UnitTest} />}
          />
          <Route
            path="/result/addresult/add-all-result"
            element={<ProtectedRoute Component={AllResult} />}
          />
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/showresult"
            element={<ShowResult Component={ResultDemo} />}
          />
          {/* <Route
            path="/student/registration"
            element={<ProtectedRoute Component={RegistrationForm} />}
          /> */}
          {/* <Route
            path="/student/view-admit-card"
            element={<ProtectedRoute Component={AdmitCardForm} />}
          /> */}
          <Route
            path="/student/show-admit-card"
            element={<ShowConditionallyAdmitCard Component={AdmitCard} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student/admission/pdf" element={<AdmissionPdf />} />
          <Route path="/gallery" />
          <Route path="/about-student" element={<KnowStu/>}/>
          {/* dashboard */}
          <Route path="/dashboard/" element={<Dashboard />}>
            <Route
              path="student/registration"
              element={<ProtectedRoute Component={RegistrationForm} />}
            />
            <Route path="student/details" element={<StudentDetails />} />
            <Route
              path="teacher/registration"
              element={<TeacherRegistrationForm />}
            />
            <Route
              path="admitcard/view-admit-card"
              element={<AdmitCardForm />}
            />
            <Route
              path="student/admitcard/print-admit-card"
              element={<PrintAdmitCard />}
            />
            <Route path="result/addresult" element={<AddResult />} />
            <Route
              path="result/results/finalresult"
              element={<FinalResult />}
            />
            <Route path="student/id-card/view-id-card" element={<IdCard />} />
          </Route>
        </Routes>
      </tokenContext.Provider>
    </>
  );
}

export default App;
