
import arrow from './img/arrow.png';
import Mbti from "./data/Mbti.json";

export default function Photo(prop){
    
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
        <li>
            <img src={prop.data} alt="icon"/>
            <div className="Photo-text" >
                <p>
                    <strong>Cilck!</strong>
                </p>
                <img onClick={clickOpen} src={arrow} alt="arrow"/>
            </div>

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
    </li>
    )
}