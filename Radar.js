import { ResponsiveRadar } from '@nivo/radar'
import {useEffect, useState} from "react";
import "../Radar.css";

export default function Radar(){
    let [rData,setRdata] = useState();

    const [inputs, setInputs] = useState({
        html: '0',
        scss: '0',
        js: '0',
        php: '0',
        react: '0',
        Lhtml: '0',
        Lscss: '0',
        Ljs: '0',
        Lphp: '0',
        Lreact: '0'
    });

    const { html, scss, js, php, react } = inputs;
    const { Lhtml, Lscss, Ljs, Lphp, Lreact } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target; 
        setInputs({
            ...inputs, 
            [name]: value 
        });
    };

    const onReset = () => {
        setInputs({
            html: '0',
            scss: '0',
            js: '0',
            php: '0',
            react: '0',
            Lhtml: '0',
            Lscss: '0',
            Ljs: '0',
            Lphp: '0',
            Lreact: '0'
        })
    };


    useEffect(()=>{
        setRdata (
            [
                {
                    "taste": "html",
                    "chardonay": 59,
                    "Ability": html,
                    "Language Usage": Lhtml
                },
                {
                    "taste": "scss",
                    "chardonay": 22,
                    "Ability": scss,
                    "Language Usage": Lscss
                },
                {
                    "taste": "js",
                    "chardonay": 99,
                    "Ability": js,
                    "Language Usage": Ljs
                },
                {
                    "taste": "php",
                    "chardonay": 98,
                    "Ability": php,
                    "Language Usage": Lphp
                },
                {
                    "taste": "react",
                    "chardonay": 100,
                    "Ability": react,
                    "Language Usage": Lreact
                }
                ]
        );
    },[inputs]);

    return(
        <>
            <main>
            <div className="table1">
            <div className="abi">Ability</div>
            <label>HTML</label>
            <input 
            name="html" type="text" 
            style={{border:'0'}} 
            placeholder="숫자만 입력해주세요"
            onChange={onChange} value={html}
            />

            <label>SCSS</label>
            <input 
            name="scss" type="text" 
            style={{border:'0'}} 
            placeholder="숫자만 입력해주세요"
            onChange={onChange} value={scss}
            />

            <label>JS</label>
            <input 
            name="js" type="text" 
            style={{border:'0'}} 
            placeholder="숫자만 입력해주세요"
            onChange={onChange} value={js}
            />

            <label>PHP</label>
            <input 
            name="php" type="text" 
            style={{border:'0'}} 
            placeholder="숫자만 입력해주세요"
            onChange={onChange} value={php}
            />

            <label>REACT</label>
            <input 
            name="react" type="text" 
            style={{border:'0'}} 
            placeholder="숫자만 입력해주세요"
            onChange={onChange} value={react}
            />
            <button onClick={onReset}>CLEAR</button>
            </div>

            {/* ------------------------------------------- */}

            <div className="table2">
            <div className="lan">Language Usage</div>
            <label>HTML</label>
            <input 
            name="Lhtml" type="text" 
            style={{border:'0'}} 
            placeholder="숫자만 입력해주세요"
            onChange={onChange} value={Lhtml}
            />

            <label>SCSS</label>
            <input 
            name="Lscss" type="text" 
            style={{border:'0'}} 
            placeholder="숫자만 입력해주세요"
            onChange={onChange} value={Lscss}
            />

            <label>JS</label>
            <input 
            name="Ljs" type="text" 
            style={{border:'0'}} 
            placeholder="숫자만 입력해주세요"
            onChange={onChange} value={Ljs}
            />

            <label>PHP</label>
            <input 
            name="Lphp" type="text" 
            style={{border:'0'}} 
            placeholder="숫자만 입력해주세요"
            onChange={onChange} value={Lphp}
            />

            <label>REACT</label>
            <input 
            name="Lreact" type="text" 
            style={{border:'0'}} 
            placeholder="숫자만 입력해주세요"
            onChange={onChange} value={Lreact}
            />
            <button onClick={onReset}>CLEAR</button>
            </div>

            <div className="radar" style={{height:'600px'}}>
            <ResponsiveRadar
            data={rData}
            keys={['Ability','Language Usage']}
            indexBy="taste"
            maxValue="auto"
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            curve="linearClosed"
            borderWidth={2}
            borderColor={{ from: 'color' }}
            gridLevels={5}
            gridShape="circular"
            gridLabelOffset={36}
            enableDots={true}
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color' }}
            enableDotLabel={true}
            dotLabel="value"
            dotLabelYOffset={-12}
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
        </main>
        </>
    )
}