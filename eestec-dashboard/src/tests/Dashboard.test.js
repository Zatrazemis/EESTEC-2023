import { render } from "@testing-library/react"
import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import Dashboard from "../components/pages/Dashboard"

test('checks whether the dashboard breaks anything beyond the page itself', ()=>{
    render(<Dashboard />)
    

})