// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food'
// ---Importing 3 in the top---


// function Header(){
//   return (
//     <header>
//       <h1>My Simple Website</h1>
//       <nav>
//           <ul>
//               <li><a href="#">Home</a></li>
//               <li><a href="#">About</a></li>
//               <li><a href="#">Service</a></li>
//               <li><a href="#">Contact</a></li>          
//           </ul> 
//       </nav>
//       <hr></hr>
//     </header>
//   );  
// }

// export default Header

// ---Make Another Files---

// function Food(){
//   const food1 = "Orange";
//   const food2 = "Mangao";
//   return(
//     <ul>
//        <li>Apple</li>
//        <li>{food1}</li>
//        <li>{food2.toUpperCase}</li>
//     </ul>
//   );
// }
// export default Food

// ---Make AnotherFiles---

// function Footer(){
//   return (
//     <footer>
//         <p>&copy; {new Date().getFullYear()} Your Website name </p> 
//     </footer>
//   );
// }
// export default Footer

// --------------------Making simple Card-------------------
// import profpic from './assets/TESDA-logo-filephoto-091822-620x349.jpg'
// function Card(){
//   return(
//   <div className = "card" >
//         <img className="card-imgs" src={profpic} alt ="profile picture"></img>
//         <h2 className="card-title" >® mond</h2>
//         <p className="card-text" >I make Simple Website</p>
//     </div>
//   );
// }
// export default Card
// -----Card Css----
// .card{
//   border:solid 1px #333 ;
//   border-radius: 10px;
//   box-shadow:/*First-Value Horizontal-Vertical-blurred-color*/5px 5px 5px hsl(0,0%,0%,0.1) ;
//   padding:20px;
//   margin:10px; 
//   text-align: center;
//   max-width: 250px;
//   display: inline-block;
// }
// .card .card-imgs{
//   min-height: 100px;
//   width: 100px;
//   border-radius: 50%;
//   margin-bottom: 10px;
// }
// .card .card-title{
//   font-family:Arial, sans-serif;
//   margin: 0;
//   color:hsl(0,0%,20%) ;
// }
// .card .card-text{
//   font-family: Arial,sans-serif;
//   color:hsl(0,0%,30%) ;
// }
// ---------------------------------------------------------

// ------------------------Button---------------------------
/*Reminder 3 Components React CSS
  1. External - Its Greate for Global styles or for Small project.
  2. Modules - Its Preferred for Individual components that there have unique styles.
  3. Inline - Its Good for small components with minimal styling your project or personal project. 
*/
/*Modulues type. create a folder for buttons with css files*/

// import Button from './Button/Button.jsx' - Import this to App.jsx to identify the location of Button
// <button> className = {styles.btn}>Click Me </button> - it using module
// function Button(){//
  // Its is a called 'in-Line' its use minimal styling, it prevents global conflict, you can used it
  // such as like button or subscribe button.
//   const styleCss = {//
//     backgroundColor: "hsl(200,100%,50%)",//
//     color: "#fff",//
//     padding:"10px 20px",//
//     borderRadius:"5%",//
//     border: "none",//
//     cursor:"pointer",// 
//   }//
//   return(//
//     <button style = {styleCss} >Click Me</button>//
//   );//
// };//
// export default Button//
// ---------------------------------------------------------
// ---------------------Props in React----------------------
// import PropTypes from 'prop-types'
// function Student(props){
//   return (
//     <div className="student" >
//         <p>Name: {props.name}</p>
//         <p>Age : {props.age}</p>
//         <p>isStudent : {props.isStudent ? "Yes" : "No"}</p>
//     </div>
//   );
// }
// Student.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   isStudent: PropTypes.bool,
// }
// Student.defaultProps = { // default props
//   name : "Guest",
//   age : 0,
//   isStudent : false
// }
// export default Student
// ------File App.jsx -----
// import React from 'react'
// import Student from './Student.jsx'
// function App() {
//   return (
//     <> 
//        <Student name="Paul" age ={22} isStudent = {true}/>
//        <Student name="Kyla" age ={20} isStudent = {false}/>
//        <Student name="Mike" age ={25} isStudent = {true}/>
//        <Student/>
//     </>
//   )
// }
// export default App
//---------------------------------------------------------
// -------------------Conditional Render ------------------
/*
  Conditional Rendering = allows you to control what gets rendered in your application based
  on  certain conditions (show, hide , or change components). if-else
*/
// import UserGreeting from "./UserGreeting.jsx";
// function App(){
//   return (
//     <>
//       <UserGreeting isLoggedIn = {true} // If no User name the Ouput is Welcome Guest 
//       />
//     </>
//   );
// }
// export default App
// --
// import PropTypes from 'prop-types'
// function UserGreeting(props){
//   const welcomeMessage =  <h2 className="welcome-message">
//   Welcome {props.username}
//   </h2>

//   const loginPrompt =     <h2 className="login-prompt">
//   Please log in to continue
//   </h2>

//   return(props.isLoggedIn ? welcomeMessage : loginPrompt);
// }
// UserGreeting.prototype = {
//   isLoggedIn : PropTypes.bool,
//   username : PropTypes.string,
// }
// UserGreeting.defaultProps = {
//   isLoggedIn : false,
//   username : "Guest",
// }
// export default UserGreeting
//---------------------------------------------------------
// //--------------------List in React------------------------
// import List from './List.jsx'
// function App(){
//   const clientApplicant = [{id: 1, name: "Jane",age: 22},
//                           {id: 2, name: "Ryan", age: 31},
//                           {id: 3, name: "Paul", age: 28},
//                           {id: 4, name: "Mike", age: 29}];

//   const clientCars = [{id: 5, name: "Volvo", age: 1994},
//                       {id: 6, name: "Ferrary", age: 2000},
//                       {id: 7, name: "Civic", age: 1999},
//                       {id: 8, name: "Ford", age: 1988}];                    
//   return(
//     <>
// We add Javascript Ternary Operators
// {clientApplicant.length > 0 ? <List Applicant = {clientApplicant} categories = "CLients"/> : null}
// {clientCars.length > 0 ? <List Applicant = {clientCars} categories = "Client-Cars"/> : null}
//     </>
//   );
// }
// export default App 
// ----------------Another File-----------
// import PropTypes from 'prop-types'; // for de-bugging purposess
// function List(props){
//   const context = props.Applicant
//   const title = props.categories
  // const clientList = context.map(contexts => 
  //                                       <li>{contexts.name}:&nbsp; {contexts.age}</li>);  
//   return (
//       <>
//         <h3>{title}</h3>  
//         <ol>{clientList}</ol>
//       </>
//   );
// }
// List.propTypes = {
//   categories : PropTypes.string,
//   Applicant: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//     name: PropTypes.string,
//     age: PropTypes.number
//   }))
// }
// List.defaultProps = {
//  categories: "Client",// if no values in the categorie, the defaultProps will pop-up
// Applicant:[],
// }
// export default List
//---------------------------------------------------------
//---------------Click Events in React---------------------
// function Button(){
//   // const handleClick = (e) => e.target.textContent = "OUCH! 🤕";
//   const handleClick = (e) => {
//     e.target.textContent = "Hello 😀"
//   }
//   return(
//       <button onClick = {(e) => handleClick(e)} >Click Me</button>
//   );
// }
// export default Button
// function ProfilePic(){
//   const images = './src/assets/1708694129608-removebg-preview.png'
//   const handleClick = (e) => e.target.style.display = "none";
//   return(<img onClick={(e) => handleClick(e)} src = {images} alt="Profile-Pic"/>);
// }
// export default ProfilePic
// import Button from './Button.jsx'
// import ProfilePic from './ProfilePic.jsx'
// function App(){return(<ProfilePic/>);}export default App
//---------------------------------------------------------
//------------------React-UseState-------------------------
// useState() = A React hook that allows the creation of a stateful variable
//                       AND a setter function to update its value in the Virtual DOM.
//                       [name, setName]
// import React, {useState} from 'react';
// function MyComponents(){
//   const [name, setName] = useState("Guest");  
//   const [isEmployee, setisEmployee] = useState(false);
//   const updateName = () =>{
//     setName("UpdateName Value");
//   }
//   const Employee = () => {setisEmployee(!isEmployee);}
//   return (
//     <div>
//         <p>Name : {name}</p>
//         <button onClick={updateName} >CLick</button>
//         <p>Is Employeed : {isEmployee ? "Yes" : "No"}</p>
//         <button onClick={Employee} >CLick</button>
//     </div>);}
// export default MyComponents
// import React, {useState} from 'react';
// function Counter(){
//     const [count, setCount] = useState(0);
//     const increment = () => {setCount(count + 1);}
//     const decrement = () => {setCount(count - 1);}
//     const reset = () => {setCount(0);}
//     return( <div className="counter-container">
//                 <p className="count-display">{count}</p>
//                 <button className="counter-button" onClick={decrement}>Decrement</button>
//                 <button className="counter-button" onClick={reset}>Reset</button>
//                 <button className="counter-button" onClick={increment}>Increment</button>
//             </div>);}export default Counter

//---------------------------------------------------------
//------------React onChange event handler-----------------
// import './Sample.css'
// import React, {useState} from 'react';

// function Sample (){
  
//   const [user,setUser] = useState("Guest");

//   function userName (event){
//     setUser(event.target.value);
//   }

//   const [age, setAge] = useState(0);

//   function userAge (event){
//      setAge(event.target.value);
//   }
//   const [city, setCity] = useState("City");
//   function userCity (event){
//     setCity (event.target.value);
//   }

//   const [message,setMessage] = useState("");
  
//   function userMessage (event){
//     setMessage(event.target.value);
//   }
//   const [payment,setPayment] = useState("");
//   function paymentMethod(event){
//     setPayment(event.target.value);
//   }

//   const [gender,setGender] = useState("");
//   function userGender(event){
//     setGender(event.target.value);
//   }

//   return(
//     <div>
//       <input value = {user} onChange={userName} />
//       <input value = {age} onChange={userAge} type="number"/>
//       <input value = {city} onChange = {userCity}/>
//       <textarea value = {message} onChange = {userMessage} placeholder="Leave a Message"/>
//       <select value={payment} onChange={paymentMethod}>
//         <option>Select Methods</option>
//         <option >Visa</option>
//         <option>Gcash</option>
//         <option>Card</option>
//       </select>
//       <label><input type="radio" value ="Male" checked={gender == "Male"} onChange={userGender}/> Male</label>
//       <label><input type="radio" value ="Female" checked={gender == "Female"} onChange={userGender}/> Female</label>
//       <h3>Name : {user}</h3>
//       <h2>Age : {age}</h2>
//       <h2>City : {city}</h2>  
//       <h2>Message : {message} </h2>
//       <h2>Payment : {payment}</h2>
//       <h2>Gender : {gender}</h2>
//     </div>
//     );  
// }
// export default Sample
// --
// import React from 'react'
// import Sample from './Background/Sample.jsx'
// function App() {return (<div><Sample/></div>);}export default App
//---------------------------------------------------------
//------------------- Color Picker-------------------------
// import React, { useState } from "react"
// function Sample(){
//   const [clr,setColor] = useState("#FFFFFF");
//   function pickerColor (event){
//       setColor(event.target.value);
//   }
//   return(
//     <div>
//         <h1>Color Picker</h1>
//         <div style={{backgroundColor: clr}} >
//             <p>Selector Color : {clr} </p>
//         </div>
//         <label>Select a color :</label>
//         <input type="color" value= {clr} onChange = {pickerColor} />
//     </div>
//   );
// }
// export default Sample
//---------------------------------------------------------
//---------------------Object Update-----------------------
// import React, { useState } from "react"
// function Sample (){
//   const [student,setStudent] = useState( {name: "Rmond",age: 23, section: "Persistence"}); 
//   function stName (event){setStudent(s => ({...s,name:event.target.value}));} 
//   function stAge(event){setStudent(s => ({...s,age:event.target.value}));}
//   function stSection(event){setStudent (s => ({...s,section:event.target.value}))}
//   return(<div>
//         <h2>Student Info</h2>
//         <h3>Name : {student.name}</h3>
//         <h3>Age : {student.age}</h3> 
//         <h3>Section : {student.section}</h3> 
//         <input type="text" onChange={stName} value={student.name} /> 
//         <input type="number" onChange={stAge} value={student.age} /> 
//         <input type="text" onChange={stSection} value={student.section} /></div>);
// }
// export default Sample
//---------------------------------------------------------
//--------------- Update Arrays in State-------------------








//---------------------------------------------------------
//---------------------------------------------------------

//---------------------------------------------------------
//---------------------------------------------------------
