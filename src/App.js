import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Lists from "./pages/lists/Lists";
import Single from "./component/single/Single";
import New from "./pages/new/New";
import { datainputnew, datainputproduct } from "./datainput";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<login />} /> */}
          <Route path="/users">
            <Route index element={<Lists />} />
            <Route path=":single" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={datainputnew} title="Add New User" />}
            />
          </Route>
          <Route path="/product">
            <Route index element={<Lists />} />
            <Route path=":product" element={<Single />} />
            <Route
              path="new"
              element={
                <New inputs={datainputproduct} title="Add New Product" />
              }
            />
          </Route>
          {/* <Route path="/users" element={<Lists />} /> */}
          {/* <Route path="/users/:single" element={<Single />} /> */}
          {/* <Route path="/users/new" element={<New />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
