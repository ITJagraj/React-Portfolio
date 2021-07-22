// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import SingleCategory from './components/SingleCategory';
import Footer from './components/Footer';
// import AboutMe from './components/AboutMe';
// import Resume from './components/Resume';
function App() {
  const [categories] = useState([
    { name: "About me", description: "about me" },
    { name: "Portfolio", description: "my portfolio" },
    { name: "Contact", description: "contact me" },
    { name: "Resume", description: "my resume" }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  // const [aboutSelected, setAboutSelected]= useState(true);
  return (
    <div>
      <Nav categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      ></Nav>
      <main>
        <SingleCategory currentCategory={currentCategory}> </SingleCategory>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
export default App;
