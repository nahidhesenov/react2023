import Nav from "./nav task1/Nav"
import Userlist from "./companent task2/Userlist"
import Accordion from "./accordion task3/accordion"
import Dropdown from "./dropdown task4/drop"
import Form from "./form task 6/form"
import PortalExample from "./portal task 7/example/PortalExample"
import { TodoList } from "./reducer  task 8/TodoList"
import { Route, Routes } from "react-router-dom"
import About from "./navigation task 9/About/About"
import Contact from "./navigation task 9/Contact/Contact"
import Dashboard from "./navigation task 9/Dashboard/Dashborad"
import Products from "./navigation task 9/Products/Products"
import Links from "./navigation task 9/Link"
import { DilContext } from "./dil secimi task 10/DilContext"
import DilSecimi from "./dil secimi task 10/DilSecimi"
import Text from "./dil secimi task 10/Text"
import LinkSidebar from "./sidebar task 11/LinkSidebar"
import Sidebar from "./sidebar task 11/Sidebar"
import Main from "./sidebar task 11/Main"

export default function App() {
  return (
    <>
      <Nav />

      <Userlist />

      <Accordion />

      <Dropdown />

      <Form />

      <PortalExample />

      <TodoList />

      <Links />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <DilContext>
        <div style={{ height: '50vh' ,display:'flex',alignItems:'center',justifyContent:'center' ,flexDirection:'column' }} className="container">
          <DilSecimi />
          <Text />
        </div>
      </DilContext>


      <LinkSidebar />
      <Routes>
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  )

}

