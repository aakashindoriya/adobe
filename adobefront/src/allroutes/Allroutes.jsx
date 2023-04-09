
import {Route,Routes} from "react-router-dom"
import UserList from "../components/UserList"
import PostList from "../components/PostList"
import UserAnalytics from "../pages/UserAnalytics"
import PostAnalytics from "../pages/PostAnalytics"

export default function Allroutes(){
    return (
        <Routes>
            <Route path="/" element={<UserList/>} />
            <Route path="/post" element={<PostList/>} />
            <Route path="/useranalytics" element={<UserAnalytics />} />
            <Route path="/postanalytics" element={<PostAnalytics />} />
        </Routes>
    )
}