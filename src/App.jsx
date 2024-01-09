import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from "./components/Main"
import Game from "./components/Game"

function App() {

  return (
    <div className="h-screen w-screen text-white font-barlow font-semibold max-w-screen-xl mx-auto flex flex-col items-center">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/play" element={<Game />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
