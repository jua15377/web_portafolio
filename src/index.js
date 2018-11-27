import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import im2 from './assets/imgLab2.png'
import im3 from './assets/imgLab3.png'
import im4 from './assets/imgLab4.png'
import im5 from './assets/imgLab5.png'
import im6 from './assets/imgLab6.png'
import im7 from './assets/imgLab7.png'
import im8 from './assets/imgLab8.png'
import im9 from './assets/imgP1.png'

class App extends React.Component {
  constructor(props) { 
    super(props)
    this.state = { 
     }
   }

  render() {
   
    return (
      <div className="index" >
        <h1>Jonnathan's Projects</h1>
        <div className="Project">
          <h2>HTML - History</h2>
          <img src={im2}/>
          <div className="buttons"> 
          <a  target="_blank" href={"https://github.com/jua15377/web_lab2_historia_html"}> <button className="btngit"> Ver codigo </button></a>
          <a  target="_blank" href={"http://34.210.35.174/jua15377/historia/"}> <button className="btn"> Probar </button></a>
          </div>
        </div>
        <div className="Project">
          <h2>CSS - draw</h2>
          <img src={im3}/>
          <div className="buttons"> 
          <a  target="_blank" href={"https://codepen.io/jua15377/pen/ZjLmdR"}> <button className="btn"> Ver proyecto</button></a>
          </div>
        </div>
        <div className="Project">
          <h2>JS - chat</h2>
          <img src={im4}/>
          <div className="buttons"> 
          <a  target="_blank" href={"https://github.com/jua15377/web_lab4_comunicacion_client_Server"}> <button className="btngit"> Ver codigo </button></a>
          <a  target="_blank" href={"http://34.210.35.174/jua15377/chat_v1/index.html"}> <button className="btn"> Probar </button></a>
          </div>
        </div>
        <div className="Project">
          <h2>NodeJS - chat v2</h2>
          <img src={im5}/>
          <div className="buttons"> 
          <a  target="_blank" href={"https://github.com/jua15377/web_lab_5_Nodejs_client"}> <button className="btngit"> Ver codigo (cliente) </button></a>
          <a  target="_blank" href={"https://github.com/jua15377/web_lab_5_Nodejs_server"}> <button className="btngit"> Ver codigo (server) </button></a>
          <a  target="_blank" href={"http://34.210.35.174/jua15377/chat_v2/client/"}> <button className="btn"> Probar </button></a>
          </div>
        </div>
        <div className="Project">
          <h2>React - Memory</h2>
          <img src={im6}/>
          <div className="buttons"> 
          <a  target="_blank" href={"https://github.com/jua15377/web_lab_6_Memoria-React"}> <button className="btngit"> Ver codigo </button></a>
          <a  target="_blank" href={"http://34.210.35.174/jua15377/memory/"}> <button className="btn"> Probar </button></a>
          </div>
        </div>
        <div className="Project">
          <h2>React - Maze</h2>
          <img src={im7}/>
          <div className="buttons"> 
          <a  target="_blank" href={"https://github.com/jua15377/web_lab_7_laberinto"}> <button className="btngit"> Ver codigo </button></a>
          <a  target="_blank" href={"http://34.210.35.174/jua15377/maze/"}> <button className="btn"> Probar </button></a>
          </div>
        </div>
        <div className="Project">
          <h2>React - Calculator</h2>
          <img src={im8}/>
          <div className="buttons"> 
          <a  target="_blank" href={"https://github.com/jua15377/web_lab_8_calculadora"}> <button className="btngit"> Ver codigo </button></a>
          <a  target="_blank" href={"http://34.210.35.174/jua15377/calc/"}> <button className="btn"> Probar </button></a>
          </div>
        </div>
        <div className="Project">
          <h2>React - BoilerPlate</h2>
          <img src={im9}/>
          <div className="buttons"> 
          <a  target="_blank" href={"https://github.com/jua15377/web_proyecto_1_react_boilerplate"}> <button className="btngit"> Review </button></a>
          </div>
        </div>
      </div>
      
    )
  }
}

ReactDOM.render(<App />, document.getElementById('index'))
