import mainIcon from '../img/mainIcon.png';
import message from '../img/message.png';
import home from '../img/home.png';
import tel from '../img/tel.png';
import photo01 from '../img/img1.png';
import photo02 from '../img/img2.png';
import photo03 from '../img/img3.png';
import photo04 from '../img/img4.png';
import photo05 from '../img/img5.png';
import photo06 from '../img/img6.png';
import photo07 from '../img/img7.png';
import photo08 from '../img/img8.png';
import photo09 from '../img/img9.png';
import photo10 from '../img/img10.png';
import photo11 from '../img/img11.png';
import photo12 from '../img/img12.png';
import photo13 from '../img/img13.png';
import photo14 from '../img/img14.png';
import photo15 from '../img/img15.png';
import photo16 from '../img/img16.png';
// import Photo from '../Photo';
import Mbti from "../data/Mbti.json";
import arrow from '../img/arrow.png';


export default function Main(){
    let imgSrc = [
        photo01, photo02, photo03, photo04, photo05, photo06,
        photo07, photo08, photo09, photo10, photo11, photo12,
        photo13, photo14, photo15, photo16
      ]

      function clickBtn(){
        const quickContents = document.querySelector('.Quick-contents');
        quickContents.classList.toggle('on');
      }

      const elPopup = document.querySelectorAll('.mbti-popup')
      const elPopupAll = document.querySelector('.popup')
      const elTit = document.querySelectorAll('.mbti-popup > h2')

      
      function clickOpen(){
          for(let i=0;i<16;i++){
              if(Mbti[i].tit == elTit[i].textContent){
                  elPopup[i].classList.add('on');
                  elPopupAll.classList.add('on');
              }
          }
      }
  
      function clickClose(){
          for(let i=0;i<16;i++){
                  elPopup[i].classList.remove('on');
                  elPopupAll.classList.remove('on');
          }
      }



return(
    <>
        <section className="Photo-contents">
            <ul>
                {
                  imgSrc.map(function(src,k){
                      return(
                        <li>
                            <img src={src} alt="icon"/>
                            <div className="Photo-text" >
                                <p>
                                    <strong>Cilck!</strong>
                                </p>
                                <img onClick={clickOpen} src={arrow} alt="arrow"/>
                            </div>
                        </li>
                      )
                  })
                }
                <div className="popup">
                    {
                    Mbti.map(function(dataView,k){
                        return(
                            <article className = "mbti-popup" key={k}>
                                    <h2>{dataView['tit']}</h2>
                                    <p>{dataView['description']}</p>
                                    <button onClick={clickClose} className="close engLag">CLEAR</button>
                            </article>
                            )
                        })
                    }
                </div>
            </ul>

      </section>
      <div className="Quick-menu" onClick={clickBtn}>
        <img src={mainIcon} alt=""/>
      </div>
      <div className="Quick-contents">
          <ul>
            <li>
              <img src={tel} alt=""/>
              <p>9930 1234 5679</p>
            </li>
            <li>
              <img src={message} alt=""/>
              <p>contact@domain.com</p>
            </li>
            <li>
              <img src={home} alt=""/>
              <p>street address example</p>
            </li>
          </ul>
        </div>
    
    </>
)
        }