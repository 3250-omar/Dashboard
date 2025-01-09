import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Main from "./Ui/Main";
import Content from "./Ui/Content";
import Profile from "./Components/Profile";
import States from "./Components/States/States";
import Team from "./Components/Team/Team";
import Events from "./Components/Events/Events";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const toggleSideBar = () => {
    setIsSideBarOpened(!isSideBarOpened);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <Header
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        toggleSideBar={toggleSideBar}
      />
      <SideBar isSideBarOpened={isSideBarOpened} />
      <Main>
        <Content>
          <States darkMode={darkMode} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <Team />
            <Events/>
          </div>
        </Content>
        <Profile />
      </Main>
    </div>
  );
}

export default App;
