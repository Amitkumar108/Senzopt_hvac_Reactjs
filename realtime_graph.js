
import React, {Component} from 'react';

import NVD3Chart from "react-nvd3";

function arrayRandom(len, min, max, unique) {
   var len = (len) ? len : 10,
           min = (min !== undefined) ? min : 1,
           max = (max !== undefined) ? max : 100,
           unique = (unique) ? unique : false,
           toReturn = [], tempObj = {}, i = 0;

   if(unique === true) {
       for(; i < len; i++) {
           var randomInt = Math.floor(Math.random() * ((max - min) + min));
           if(tempObj['key_'+ randomInt] === undefined) {
               tempObj['key_'+ randomInt] = randomInt;
               toReturn.push(randomInt);
           } else {
               i--;
           }
       }
   } else {
       for(; i < len; i++) {
           toReturn.push(Math.floor(Math.random() * ((max - min) + min)));
       }
   }

   return toReturn;
}




var testcall=[{values:[{x:1, y:arrayRandom(1, 1, 40, true)},{x:2,y:arrayRandom(1, 1, 40, true) },
 {x:3,y:arrayRandom(1, 1, 40, true) },{x:4,y:arrayRandom(1, 1, 40, true) },{x:5,y:arrayRandom(1, 1, 40, true) },
 {x:6,y:arrayRandom(1, 1, 40, true) },{x:7,y:arrayRandom(1, 1, 40, true) },{x:8,y:arrayRandom(1, 1, 40, true) },
 {x:9,y:arrayRandom(1, 1, 40, true) },{x:10,y:arrayRandom(1, 1, 40, true) }]}];






 export default class Realtime_graph extends Component {

  constructor(props){
    super(props);

    this.tick1()
    this.state={

  currentdata:testcall,

    };




  }


 tick1(){
 var i=10;

 setInterval(()=>{
  console.log('Updating tick1...')

  testcall[0].values.push({x:i=i+1,y:arrayRandom(1, 1, 40, true)})
  testcall[0].values.shift()
  this.setState({
    currentdata: testcall
  })
 }, 1000)

 }


 render(){


  return(

  <div>

  <NVD3Chart    xAxis={{ axisLabel: 'Time' }} yAxis={{ axisLabel: 'Temperature(in degree C)' }} yDomain= {[1,40]}

   type="lineWithFocusChart"  width="1200" height="700"  datum={testcall} />




  </div>
 );

 }


 }
