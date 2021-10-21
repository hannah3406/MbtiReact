import { ResponsiveRadar } from '@nivo/radar';
import {useEffect, useState} from "react";
import React from "react";
import Mbti from "../data/Mbti.json";


export default function Work(){
    let [gData,setGdata] = useState(); 
    const [inputs, setInputs] = useState({
        E: '',
        I: '',
        S: '',
        N: '',
        T: '',
        F: '',
        J: '',
        P: '',
        result:''
    });

    const { E,I, S,N, T,F, J,P,result } = inputs;
    let btnCheck = document.querySelectorAll('.input-box p');
    const elResult = document.querySelector('.result');
    const elCheck = document.querySelector('.btnCheck');
    const strongResult = document.querySelector('.stResult');
    const mbtiBottom = document.querySelector('.mbti-bottom');
    const elInput = document.querySelectorAll('input[type="radio"]');
    let CheckBox = document.querySelectorAll('.input-box p > input');
    const mbtiDetail = document.querySelectorAll('.mbti-detail');
    let reText='';
    
    function change(){
        for(let i=0;i<8;i++){
            if(!elInput[i].checked){
                btnCheck[i].classList.add('on');
                btnCheck[i].value = '';
            }else{
                btnCheck[i].classList.remove('on');
            }
        }
        
    }

    const onChange = (e) => {
        const { value, name } = e.target; 
        setInputs({
            ...inputs, 
            [name]: value 
        });
    };

    function clickCheck(){
        for(var i=0;i<8;i++){
            if(elInput[i].checked){
                reText += elInput[i].value;
            }
            if(CheckBox[i].value == '' && elInput[i].checked){
                alert('값을 입력해주세요')
                return
            }
        }  
        elResult.value = reText; 

        mbtiBottom.classList.add('on');
        strongResult.textContent = reText;
        
        for(let i=0;i<16;i++){
            if(Mbti[i].name == reText){
                mbtiDetail[i].classList.add('on');
            }
        }
    }

    let state = {
        value : reText
    };

    const reChange = (e) => {
        console.log(e.target.value)
        setInputs({
            result : reText
        })
    };

    const onReset = () => {
        setInputs({
            E: '',
            I: '',
            S: '',
            N: '',
            T: '',
            F: '',
            J: '',
            P: ''
        })
        mbtiBottom.classList.remove('on');

        for(let i=0;i<16;i++){
            mbtiDetail[i].classList.remove('on');
        }
    };

    useEffect(()=>{
        setGdata (
            [
                    {
                    "taste": "E",
                    "mbti": E
                    },
                    {
                    "taste": "I",
                    "mbti": I
                    },
                    {
                    "taste": "S",
                    "mbti": S
                    },
                    {
                    "taste": "N",
                    "mbti": N
                    },
                    {
                    "taste": "F",
                    "mbti": F
                    },
                    {
                    "taste": "T",
                    "mbti": T
                    },
                    {
                    "taste": "P",
                    "mbti": P
                    },
                    {
                    "taste": "J",
                    "mbti": J
                    }
            ]
        );
    },[inputs]);


    return(
        <>
        <main className="mbti-all">
            <div className="mbti-start">
                <div className="mbti-enter">
                    <div className="table1">
                        <div className="abi">
                            <h2>MBTI 유형 <strong>Check!</strong></h2>
                            <ul>
                                <li>1) 지문에 따라 자신의 유형을 <strong>Check!</strong> 해주세요</li>
                                <li>2) 유형을 체크하면, 어느정도의 <strong>%</strong>인지 입력해볼 수 있는 빈칸이 나타날거에요!</li>
                                <li>3) 입력을 완료하고 나면 하단에 나타나는 MBTI 유형 설명을 확인해보세요!</li>
                                <li><small>※ 값을 잘못 입력했다면 꼭!!!!!<strong>CLEAR</strong> 를 눌러 다시 시도해주세요!</small></li>
                            </ul>
                            </div>
                        <div className = "test-all">
                            <div className ="test">
                                <label>외향형  <small>VS </small>  내향형</label>
                                <div className = "text-checkbox">
                                    <p><input type="radio" name="g" value="E" id="btnE" onClick={change}/>E</p>
                                    <p><input type="radio" name="g" value="I" onClick={change} />I</p>
                                </div>
                                <div className = "input-box">
                                    <p class="on"><input 
                                        name="E" type="text"
                                        id="E" 
                                        placeholder="숫자 입력"
                                        onChange={onChange} value={E}
                                        />%</p>
                                    <p class="on"><input
                                        name="I" type="text" 
                                        id="I" class="on"
                                        placeholder="숫자 입력"
                                        onChange={onChange} value={I}
                                        />%</p>
                                </div>
                            </div>

                            <div className ="test">
                                <label>감각형  <small>VS </small>  직관형</label>
                                <div className = "text-checkbox">
                                    <p><input type="radio" name="b" value="S" onClick={change}/>S</p>
                                    <p><input type="radio" name="b" value="N" onClick={change}/>N</p>
                                </div>
                                <div className = "input-box">
                                    <p  className="on"><input 
                                    name="S" type="text" id="S"
                                    className="on"
                                    placeholder="숫자 입력"
                                    onChange={onChange} value={S}
                                    />%</p>
                                    <p  className="on"><input 
                                    name="N" type="text" id="N"
                                    className="on"
                                    placeholder="숫자 입력"
                                    onChange={onChange} value={N}
                                    />%</p>
                                </div>
                            </div>

                            <div className ="test">
                                <label>사고형  <small>VS </small>  감정형</label>
                                <div className = "text-checkbox">
                                    <p><input type="radio" name="c" value="T" onClick={change}/>T</p>
                                    <p><input type="radio" name="c" value="F" onClick={change}/>F</p>
                                </div>
                                <div className = "input-box">
                                    <p  className="on"><input 
                                    name="T" type="text" id="T"
                                    className="on"
                                    placeholder="숫자 입력"
                                    onChange={onChange} value={T}
                                    />%</p>
                                    <p  className="on"><input 
                                    name="F" type="text" id="F"
                                    className="on"
                                    placeholder="숫자 입력"
                                    onChange={onChange} value={F}
                                    />%</p>
                                </div>
                            </div>

                            <div className ="test">
                                <label>판단형  <small>VS </small>  인식형</label>
                                <div className = "text-checkbox">
                                    <p><input type="radio" name="a" value="J" onClick={change}/>J</p>
                                    <p><input type="radio" name="a" value="P" onClick={change}/>P</p>
                                </div>
                                <div className = "input-box">
                                    <p  className="on"><input 
                                    name="J" type="text" id="J"
                                    className="on"
                                    placeholder="숫자 입력"
                                    onChange={onChange} value={J}
                                    />%</p>
                                    <p  className="on"><input 
                                    name="P" type="text" id="p"
                                    className="on"
                                    placeholder="숫자 입력"
                                    onChange={onChange} value={P}
                                    />%</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={onReset}  className="clear engLag">CLEAR</button>
                        <button   className="clear btnCheck engLag" id="nameF" onClick={clickCheck}>CHECK</button>
                        <input 
                            name="result" type="text" id="result"
                            className="result" value={state.value} 
                            onChange={reChange}
                        />
                    </div>
                </div>       
                <div className="mbti-content" style={{height:'450px'}}>
                <ResponsiveRadar
                    data={gData}
                    keys={[ 'mbti']}
                    indexBy="taste"
                    maxValue="auto"
                    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                    curve="linearClosed"
                    borderWidth={2}
                    borderColor={{ from: 'color', modifiers: [] }}
                    gridLevels={3}
                    gridShape="circular"
                    gridLabelOffset={36}
                    enableDots={true}
                    dotSize={10}
                    dotColor={{ theme: 'background' }}
                    dotBorderWidth={2}
                    dotBorderColor={{ from: 'color' }}
                    enableDotLabel={true}
                    dotLabel="value"
                    dotLabelYOffset={-10}
                    colors={{ scheme: 'nivo' }}
                    fillOpacity={0.25}
                    blendMode="multiply"
                    animate={true}
                    motionConfig="wobbly"
                    isInteractive={true}
                    legends={[
                        {
                            anchor: 'top-left',
                            direction: 'column',
                            translateX: -50,
                            translateY: -40,
                            itemWidth: 80,
                            itemHeight: 20,
                            itemTextColor: '#999',
                            symbolSize: 12,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
            </div>
            <div className="mbti-bottom">
                <h2> MBTI 결과 <strong>Check!</strong></h2>
                <p>당신은 <strong class="eng stResult"></strong> 입니다!</p>
                {
                    Mbti.map(function(dataView,k){
                        return(
                            <article className = "mbti-detail" key={k}>
                                    <h2>{dataView['tit']}</h2>
                                    <p>{dataView['description']}</p>
                            </article>
                        )
                    })
                }
                <button onClick={onReset}  className="clear engLag again">Try Again</button>
            </div>
        </main>
        </>
    );
}