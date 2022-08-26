const tutorials=[
  "What Does The This Keyword Mean?",
  "What Is The Constructor OO Pattern?",
  "Implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What Is NaN And How Can We Check For It",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  "Immutable State And Pure Functions",
  "What Is The Difference Between == And ===?",
  "What Is The Difference Between Event Capturing And Bubbling?",
  "What Is JSONP?"
];
// const titleCased =()=>{
//   const newTutorial = []; 
//   for (let all of tutorials){
//     const captureName = all;
//     const splitArray = captureName.split("");
//     let message = "";
//     splitArray.map(word => {
//       let wordArray = [];
//       let text = "";
//       for (const a of word){
//       wordArray.push(a)
//   }
//   wordArray[0] = wordArray[0].toUpperCase()
//   for (const b of wordArray){
//      text += b;
//   }
//   message += `${text}`;
//   return message;
// }) 
// newTutorial.push(message.substring(0,message.length -1));
// }
// return (newTutorial);
// }
//   titleCased(tutorials);
const titleCased = () => {
  return tutorials
   return tutorials.map(element => {

      var words = element.toLowerCase().split(" ");
      for(var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).slice(0).toUpperCase()  + words[i].slice(0).substring(1); 
      }

      return words.join(" ");
      //return element.charAt(0).toUpperCase() + element.slice(0).toLowerCase();
    });
  }