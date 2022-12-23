//Note: Uncomment import lines during working with JSX Compiler.
import React from 'react';
import Apps from './Apps';
// import ReactDOM from 'react-dom';

const itemStyle = {
  	padding: '2px',
	border: '1px solid silver',
  	fontFamily: 'Arial',
  	fontSize: '13px',
  	display: 'flex'
};

const textStyle = {
  	...itemStyle,
  	padding: '5px 4px',
};

const inputStyle = {
  	padding: '0',
	flex: '1',
  	fontFamily: 'Arial',
  	fontSize: '13px'
};

const buttonStyle = {
  	flex: 'none'
};

const Cell = ({value, onChange}) => {
  	const [mode, setMode] = React.useState('read');
  	const [text, setText] = React.useState(value ?? '');
    React.useEffect(() => {
    	setText(value);
  	}, [value]); // <--- when value is changed text state is changed too
	if (mode === 'edit') {
        const handleInputChange = (e) => {
    		setText(e.target.value);
        };
        const handleSaveClick = () => {
            setMode('read');
          	if (onChange) {
          		onChange(text);
            }
        };
        return (
          <div style={itemStyle}>
            <input type="text" value={text}
                   style={inputStyle} onChange={handleInputChange} />
            <button style={buttonStyle} onClick={handleSaveClick}>Ok</button>
          </div>
        );
    }
  	if (mode === 'read') {
        const handleEditClick = () => {
            setMode('edit');
        };
        return (
          <div style={textStyle} onClick={handleEditClick}>{text}</div>
        );
    }
  	return null;
};

// Usage example:
<Apps/>
export default Cell;
