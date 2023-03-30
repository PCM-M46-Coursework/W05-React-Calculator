import './Display.css';
export const Display = ({ expression, result }) =>

<div className='display'>
      <div className='display-expression'>{expression}</div>
      <div className='display-result'>{result}</div>
</div>;