import UsersList from "./pages/UsersList";
import UserByPk from "./pages/UserByPk";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import UsersByRestCall from "./pages/UsersByRestCall";
import Users from "./CRUD/Users";

const randomFlag = false;

function App() {
  return (
    <div className="App">
      {randomFlag ? (
        <BrowserRouter>
          <Routes>
            <Route path="/all" element={<UsersList />} />
            <Route path="/:id" element={<UserByPk />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <UsersByRestCall />
      )}
      <Users />
    </div>
  );
}

export default App;
