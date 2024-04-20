import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import ThemeProvider from "./contexts/ThemeContext"


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    }
  ])
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
