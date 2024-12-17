import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { NavBar } from './NavBar'

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <NavBar></NavBar>
            <hr></hr>
            <Routes>
                <Route path='/' element={<HomePage></HomePage>}></Route>
                <Route path='login' element={<LoginPage></LoginPage>}></Route>
                <Route path='about' element={<AboutPage></AboutPage>}></Route>
                <Route path='/*' element={<Navigate to="/about"></Navigate>}></Route>
            </Routes>
        </>
    )
}
