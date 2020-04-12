/*

My attempt:

let images = [
 "/static/image1.jpg", "/static/image2.jpg", "/static/image3.jpg", "/static/image4.jpg",
 "/static/image5.jpg", "/static/image6.jpg", "/static/image7.jpg", "/static/image8.jpg",
 "/static/image9.jpg", "/static/image10.jpg", "/static/image11.jpg", "/static/image12.jpg"
 ]


const splitStting = originalString.split("/static/");

console.log(splitString)


const originalString = "/static/image1.jpg";

// Split string by whitespace character
const splitString = originalString.split("/static/");

console.log(splitString);
*/

//The right way
let images = [
 "/static/image1.jpg", "/static/image2.jpg", "/static/image3.jpg", "/static/image4.jpg",
 "/static/image5.jpg", "/static/image6.jpg", "/static/image7.jpg", "/static/image8.jpg",
 "/static/image9.jpg", "/static/image10.jpg", "/static/image11.jpg", "/static/image12.jpg"
 ]
let finalArray = [];
 function imageFile () {
 	for(let i=0; i < images.length; i++){
 		let reverseArray = (images[i].split("/"));
 		let imageOnly = reverseArray.pop();
 		finalArray.push(imageOnly);
 	}
 		console.log(finalArray);
 }
 imageFile ();

//