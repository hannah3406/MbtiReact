import { ResponsivePie } from '@nivo/pie';
import {useEffect, useState} from "react";
import photo1 from '../img/clear.png';
// import photo2 from '../img/html.png';
// import photo3 from '../img/scss.png';
// import photo4 from '../img/js.png';
// import photo5 from '../img/php.png';
// import photo6 from '../img/react.png';
import "../App.css";

export default function Graph(){
    let [pData,setPdata] = useState();

    const [inputs, setInputs] = useState({
        html: '20',
        scss: '20',
        js: '20',
        php: '20',
        react: '20'
    });
    
    const { html, scss, js, php, react } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target; 
        setInputs({
            ...inputs, 
            [name]: value 
        });
    };

    const onReset = () => {
        setInputs({
            html: '20',
            scss: '20',
            js: '20',
            php: '20',
            react: '20'
        })
    };


    useEffect(()=>{
        setPdata (
            [
                {
                "id": "html",
                "label": "html",
                "value": html,
                "color": "hsl(117, 70%, 50%)"
                },
                {
                "id": "scss",
                "label": "scss",
                "value": scss,
                "color": "hsl(162, 70%, 50%)"
                },
                {
                "id": "js",
                "label": "js",
                "value": js,
                "color": "hsl(176, 70%, 50%)"
                },
                {
                "id": "php",
                "label": "php",
                "value": php,
                "color": "hsl(78, 70%, 50%)"
                },
                {
                "id": "react",
                "label": "react",
                "value": react,
                "color": "hsl(335, 70%, 50%)"
                }
            ]
        );
    },[inputs]);

return(
    <>
        <main>
        <div className="tableP">

            <div className="html">
            <p>HTML</p>
            <input 
            name="html" type="text" 
            style={{border:'0'}} 
            placeholder="숫자만 입력해주세요"
            onChange={onChange} value={html}
            />
            </div>

            <div className="scss">
            <p>SCSS</p>
            <input 
            name="scss" type="text" 
            style={{border:'0'}} 
            placeholder="숫자만 입력해주세요"
            onChange={onChange} value={scss}
            />
            </div>

            <div className="js">
            <p>JS</p>
            <input 
            name="js" type="text" 
            style={{border:'0'}} 
            placeholder="숫자만 입력해주세요"
            onChange={onChange} value={js}
            />
            </div>

            <div className="php">
            <p>PHP</p>
            <input 
            name="php" type="text" 
            style={{border:'0'}} 
            placeholder="숫자만 입력해주세요"
            onChange={onChange} value={php}
            />
            </div>

            <div className="react">
            <p>REACT</p>
            <input 
            name="react" type="text" 
            style={{border:'0'}} 
            placeholder="숫자만 입력해주세요"
            onChange={onChange} value={react}
            />
            </div>

            <div className="btn"> 
            <button onClick={onReset}>
                <img src={photo1} />
            </button>
            </div>
        </div>
        


        <div className="pie" style={{height:'600px'}}>
        <ResponsivePie
        data={pData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
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