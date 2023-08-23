import { BrowserRouter, Route, Routes } from "react-router-dom"
import publicRoutes from "./routes/router"
import { Fragment } from "react"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.component
              const Layout = route.layout || Fragment
              return (
                <Route key={index} path={route.path} element={<Layout> <Page /> </Layout>} />
              )
            })
          }
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
