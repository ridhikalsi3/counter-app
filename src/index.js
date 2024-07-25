// map jsx to DOM
// app component render div
// app component -jsx -- vdom--ReactDOM---dom
import App from "./App";
import ReactDOM from 'react-dom';
// DOM render HTML
const div = document.getElementById('root');  //DOM
const root = ReactDOM.createRoot(div);
root.render(<App/>)