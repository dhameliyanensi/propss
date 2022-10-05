import './App.css';
// import '.components/Home.css';
import React from 'react';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
const name="cdmi";
// const arr=[1,2,3,4,5,6,7,8,9];
const arr_data = [
  {
    img1: require('./image/1.webp'),
    title: "Android Devloper",
    name: "Known More..!",
    button: <button>Known More</button>,
  },
  {
    img1: require('./image/2.webp'),
    title: "Web Design",
  },
  {
    img1: require('./image/3.webp'),
    title: "Graphics Design",
  },

]


function App() {
  return (
    
    <div className='container'>
      <div className="row">
      <Home name={name}/>
        {/* <div>{name}</div> */}
        {/* <Home name={name}/>
        


        <ul>
          {
            arr.map((index)=>{
              return(
                <li>{index}</li>
              )
            })
          }
        </ul> */}
        {/* {
          arr_data.map((item) => {
            return (

              <Home
                imgsrc={item.img1}
                title1={item.title}
                name1={item.name}
                button1={item.button}
              />
            )
          }
          )
        } */}
      </div>
    </div>


  );
}

export default App;
