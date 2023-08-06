import { Homepage, BlogsContentPage } from "./pages"
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/blog/:id' element={<BlogsContentPage />}></Route>
        </Routes>
    </div>
  )
}