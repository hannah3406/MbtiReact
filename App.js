import icon01 from './img/icon1.png';
import icon02 from './img/icon2.png';
import icon03 from './img/icon3.png';
import icon04 from './img/icon4.png';
import icon05 from './img/icon5.png';
import icon06 from './img/icon6.png';


import './App.css';

import Icon from './Icon';
import Work from './comp/Work';
import Main from './comp/Main';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

function App() {
  

  let iconSrc = [
    icon01,icon02,icon03,icon04,icon05,icon06
  ]
  




  return (
    <>
    
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/main"><Main/></Route>
        <Route path="/work"><Work/></Route>
      </Switch>
    <div className="App">
      <header>
        <div className="Head-section1">
        <Link to="/"><p  className="engLag">MBTI<small  className="engLag">16Personalities</small></p></Link>
        </div>
        
        <nav className="Head-section2">
          <ul>
          <Link to="/main"><li>성격유형</li></Link>
          <Link to="/work"><li>체크해보기</li></Link>
          </ul>
        </nav>
          
        <div className="Head-bottom">
            <div className="Head-section3">
              <h2>Filter</h2>
              <ul>
                  <li className="engLag">All Works</li>
                  <li className="engLag">web design</li>
                  <li className="engLag">illustration</li>
                  <li className="engLag">photography</li>
                  <li className="engLag">wallpapersS</li>
                  <li className="engLag">brochures</li>
              </ul>
            </div>
            <div className="Head-section4">
              <ul>
              {
                  iconSrc.map(function(src,k){
                    return <Icon data={src} key={k}/>
                  })
                }
              </ul>
            </div>
        </div>
      </header>
      <div class="App-main">
            <article>
            <h2>MBTI</h2>
            <strong>Welcome to my world</strong>
            </article>
        </div>
      </div>

      
    </BrowserRouter>
      
      
    
    
    </>
  );
}

export default App;
