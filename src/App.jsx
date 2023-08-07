import { HomePage, BlogContentPage, UserRegistrationPage,UserLoginPage } from "./pages"
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/blog/:id' element={<BlogContentPage />}></Route>
          <Route path="/registration" element={<UserRegistrationPage />} />
          <Route path="/login" element={<UserLoginPage />} />
        </Routes>
    </div>
  )
}