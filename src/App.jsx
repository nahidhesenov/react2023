import Nav from "./nav task1/Nav"
import Userlist from "./companent task2/Userlist"
import Accordion from "./accordion task3/accordion"
import Dropdown from "./dropdown task4/drop"
import LiveFeed from "./contex task5/LiveFeed"
import { UserContext } from './Context'
import Form from "./form task 6/form"

function App() {
  return (
    <>
      <Nav />
      <Userlist />
      <Accordion />
      <Dropdown />

      <UserContext.Provider>
        <LiveFeed/>
      </UserContext.Provider>

      <Form/>
    </>
  )


}

export default App
