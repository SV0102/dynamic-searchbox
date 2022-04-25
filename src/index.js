import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import NavBar from "./components/NavBar";
import TabSelect from "./components/TabSelect";
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import MainArea from "./components/MainArea";

function Main(){
  const[activeTabIndex, setActiveTabIndex] = useState('All');
  const tabs = ['All', 'Contacts', 'Clauses', 'Areas'];
  const [searchRequest, setSearchRequest] = useState('');
  // console.log(searchRequest);
  return <>
    <Header/>
    <NavBar setSearchRequest={setSearchRequest}/>
    <TabSelect setActiveTabIndex={setActiveTabIndex} tabs={tabs}/>
    <MainArea activeTabIndex={activeTabIndex} tabs={tabs}
    searchRequest={searchRequest}/>
  </>
}

ReactDOM.render(<Main/>, document.getElementById('root'));






// ReactDOM.render(
//   <React.StrictMode>
//     <Header/>
//     {/*<App />*/}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
