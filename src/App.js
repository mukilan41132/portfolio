import logo from './logo.svg';
import './App.css';
import Header from '../src/Header';
import TextTypefrom from "./Typingeffect";
import Skills from "./Skills";
function App() {



  return (
    <>
      <div className='background_style'>
        <Header />
        <main>

          <TextTypefrom text={'Hi! Iam Mukilan  Software Developer'} />
          <Skills></Skills>
        </main>

      </div>
    </>
  );
}

export default App;
