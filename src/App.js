import logo from './logo.svg';
import './App.css';
import Key from './Components/Key';
import Audio from './Components/Audio';
import Input from './Components/Input';
import Button from './Components/Button';
import Footer from './Components/Footer';

function App() {

  const keyList = [
    {keyCode: 'q'},
    {keyCode: 'w'},
    {keyCode: 'e'},
    {keyCode: 'a'},
    {keyCode: 's'},
    {keyCode: 'd'},
    {keyCode: 'z'},
    {keyCode: 'x'},
    {keyCode: 'c'}
]

  return (
    <div className="App">

      <h1>Drum Instrument</h1>
      <div className='keys'>
          {keyList.map((item, key) =>
              <Key key={key} keyCode={item.keyCode} />
          )}          
      </div>

      <div className="composer">
        <Input 
          type="text" 
          id="input" 
          placeholder="Make a composition..." 
        />
        <Button name="Play" />
      </div>

      {keyList.map((item, key) =>
          <Audio key={key} keyCode={item.keyCode} />
      )}  

      <Footer />
      
    </div>
  );
}

export default App;
