import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import './Canvas3.css'
import AnimCursor from './AnimatedCursor'


function Canvas3() {
  const [canvasWidth, setCanvasWidth] = useState(500);
  const [canvasHeight, setCanvasHeight] = useState(500);
  const [canvasColor, setCanvasColor] = useState('#ff0000');
  const [canvasText, setCanvasText] = useState('00');
  const [textColor, setTextColor] = useState('#000000');
  const [palette, setPalette] = useState([
    '#ff0000',
    '#ffffff',
    '#000000',
    '#00ff00',
    '#0000ff'
  ]);

  const handleCanvasColorChange = (color) => {
    setCanvasColor(color.hex);
  };
  const handleCanvasResize = (event) => {
    const { name, value } = event.target;
    if (name === 'canvasWidth') {
      setCanvasWidth(parseInt(value));
    } else if (name === 'canvasHeight') {
      setCanvasHeight(parseInt(value));
    }
  };
  const handleTextColorChange = (color) => {
    setTextColor(color.hex);
  };

  const handlePaletteChange = (event) => {
    setCanvasColor(palette[event.target.value]);
  };

  const handleTextChange = (event) => {
    setCanvasText(event.target.value);
  };
 return (
    <div className="App"><div className='pallete'>
       <div className="picker_container">
        <h3>Canvas Color Picker</h3>
        <SketchPicker color={canvasColor} onChange={handleCanvasColorChange} />
      </div>
      <div className="picker_container2">
        <h3>Digit Color Picker</h3>
        <SketchPicker color={textColor} onChange={handleTextColorChange} />
      </div>
      </div><div className='input'>
      <div className="dropdown_container">
        <h3>Canvas Color Palette</h3>
        <select onChange={handlePaletteChange}>
          {palette.map((color, index) => (
            <option key={index} value={index}>
              {color}
            </option>
          ))}
        </select>
      </div> 
     
     </div>
      <div className="canvas_container">
          <canvas className='canvas'
            width={canvasWidth}
            height={canvasHeight}
            style={{ backgroundColor: canvasColor }}>
          </canvas>
        <input type="text" className='input2'style={{
                backgroundColor:canvasColor,
                color: textColor
              }} maxLength={2} value={canvasText} onChange={handleTextChange} />
      </div>
     
      <div  className="list" >
    <div className='width'>
      <label htmlFor="canvasWidth">Width:</label>
      <input type="number" id="canvasWidth" name="canvasWidth" value={canvasWidth} onChange={handleCanvasResize} />
    </div>
    <div className='height'>
      <label htmlFor="canvasHeight">Height:</label>
      <input type="number" id="canvasHeight" name="canvasHeight" value={canvasHeight} onChange={handleCanvasResize} />
    </div>
  </div>
      
  <AnimCursor/>
  </div>
    
  );
}

export default Canvas3;
