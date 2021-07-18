import React, {useState,useEffect, createContext} from 'react';
//when we install react , babel comes with it..Babel makes sure we can write modern javascript ,
//and it compiles it in format so that browser can understand.
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import Heading from "./Heading";
// import ImageGallery from "./ImageGallery";
// import {courseName,course1,course2} from "./variables"
import CartGallery from './cart';
import Form from './Form';
import {BrowserRouter,NavLink,Route,Switch} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import axios from "axios";
import ProductOwner from './ProductOwner';
import TodoList from './TodoList';
import Search from './Search';
import IncrementDecrement from './incrementDecrement';
import think from './CipyThink.svg';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import hookImg from './Weeghaak.svg';
import pokemon from './pokemon.svg';
import { Slide } from 'react-awesome-reveal';
//render takes three params 1st). what we have to show 2nd). where we have to show 3rd).  callback function
//to manipulate dom we need ReactDom
//what is jsx?
//whatever html ,we write in javascript, method that is known as jsx(javascript xml)
//instead of using div , better to use react.fragment
//{} is used to write javascript expression inside html.
//template literal is used to concatenate two things
/*
/*    code to try (initially)
        <h1>Hello every one.Welcome to {courseName} class.</h1>,
        <p>{`Here we will learn about ${course1} and ${course2}`}</p>
        <p>{`current date is ${curDate} and curr time is ${curTime}`}</p>
  */

// const showGreetings = false;



// function NoGreeting(){
//     return (
//         <span>No Greetings available</span>
//     )
// }


function DropdownSelect(){
  const [num,setNum] = useState(5);
  const [name,setName] = useState("");
  const [moves,setMoves] = useState("");
  useEffect(()=>{
      //alert(`you choose ${num}`);
      async function getData() {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
          console.log(" res is ",res)
          setName(res.data.name)
          setMoves(res.data.moves.length)
      }
      getData();
  },[num])

  function setPokemonState(event){
      setNum(event.target.value)
     /* async function getData() {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
          console.log(" res is ",res)
          setName(res.data.name)
          setMoves(res.data.moves.length)
      }
      getData();*/
  }

  return (
      <div className="routing">
        <h1>
          <img src={hookImg} alt="hookImg" width="100" height="100" style={{position: 'absolute', left:'376px', top: '35px'}}/>
          React Hook Concept with Pokemon <img src={pokemon} alt="hookImg" width="100" height="100" style={{position: 'absolute', right:'33%', top: '55px'}}/> Game Example
          </h1>
          <h2>Useeffect concept</h2>

          <h4 className="hooks-choose">You choose <span>{num}</span></h4>
          <h4 className="hooks-choose">My name is <span>{name}</span></h4>
          <h4 className="hooks-choose">I have <span>{moves}</span> moves</h4>
          <div style={{flexDirection:'row', margin: '10px'}}>
          Please Select the Move:  <Select value={num} onChange={setPokemonState}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="25">25</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
          </Select>
          </div>
      </div>
  )
}

const FirstName = createContext();
const LastName = createContext();

ReactDOM.render(
    <React.Fragment>
        {/* <Heading/>
        <Heading value="Image Gallery"/>
        <ImageGallery image1Val="https://picsum.photos/200/300"/>
        {showGreetings===false ?<NoGreeting/>:''}
        <div>
            <p>{`courses are ${courseName} and ${course1} and ${course2}`}</p>
        </div> */}
        <Slide direction="left">
          <div className="routing">
            <h1>Usereducer Concept</h1>
            <img src={think} alt="think" className="think-im" width="100" height="100" />
            <IncrementDecrement/>
          </div>
        </Slide>
        <Slide direction="right">
          <div className="routing">
            <h1>Search for Image Task</h1>
            <Search/>
          </div>
        </Slide>
        
        <Slide direction="up">
          <div className="routing">
            <h1>List Concept</h1>
            <TodoList/>
          </div>
        </Slide>

        <Slide direction="down">
          <div className="routing background-color">
            <h1>React Createcontext concept</h1>
            <FirstName.Provider value={'gaurav'}>
              <LastName.Provider value={'Yadav'}>
                <ProductOwner/>
              </LastName.Provider>
            </FirstName.Provider> 
          </div>
        </Slide>
        
        <Slide direction="right">
          <DropdownSelect/>
        </Slide>
        

        <Slide direction="left">
           <BrowserRouter>
            <div className="routing" style={{flexDirection: 'column'}}>
              <h1>Routing Concept</h1>
              <div style={{flexDirection: 'row', margin:'10px'}}>
                <NavLink activeClassName="active_class" to="/about"><span style={{marginLeft: '25px'}}>About Us</span></NavLink>
                <NavLink activeClassName="active_class" to="/contact"><span style={{marginLeft: '5px'}}>Contact Us</span></NavLink>
              </div>
            </div>
            <Switch>
                <Route exact path='/' component={About}/>
                {/* <Route path='/about' component={About}/> */}
                <Route path='/about' render={()=> {return <About/>}}/>
                {/* <Route path='/contact' component={Contact}/> */}
                <Route path='/contact/:fname' component={()=>{return <Contact name="contact"/>}}/>
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
        </Slide>
        <Slide direction="right">
          <Form/>
        </Slide>
        
        <Slide direction="left">
          <div class="routing">
            <CartGallery/>
          </div>
        </Slide>
        
        
    </React.Fragment>,
  document.getElementById('root')
);
//babel compiles these lines and  converts to browser readable code. go to babeljs.io and check it.

reportWebVitals();

export {FirstName,LastName};
