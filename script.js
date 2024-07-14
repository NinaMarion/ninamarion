// document.getElementById('paymentForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const amount = document.getElementById('amount').value;
//     if (!amount) {
//         alert('Please enter a valid amount.');
//         return;
//     }

//     // Replace with your Dogecoin address
//     const dogecoinAddress = 'YOUR_DOGECOIN_ADDRESS_HERE';
    
//     const paymentUrl = `dogecoin:${dogecoinAddress}?amount=${amount}`;
    
//     // Display the Dogecoin payment URL
//     window.location.href = paymentUrl;
// });
function adjustDivWidth() {
    // Get the screen width and height
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
  
    // Check if width is greater than height
    if (screenWidth > screenHeight) {
      // Get the div with id '1'
      var cons = document.getElementsByClassName('container');
      var divs = document.getElementsByClassName('clickable');
      var divslength= divs.length;
      
      
      for (i=0; i<divslength;i++) {
        // Set the width to 80vw
        divs[i].style.width = '67vw';
        divs[i].style.height='67vw';
        if (i<cons.length) {
        cons[i].style.marginTop='45vw';
        }
      }
    }
}
  
  // Call the function when the page loads
window.onload = adjustDivWidth;
  
  // Optionally, call the function when the window is resized
window.onresize = adjustDivWidth;
  
document.getElementById('1').style.backgroundImage="url('bilder/square1.jpg')";

document.getElementById('2').style.backgroundImage="url('bilder/square2.jpg')";
document.getElementById('3').style.backgroundImage="url('bilder/square3.jpg')";
document.getElementById('4').style.backgroundImage="url('bilder/square4.jpg')";
document.getElementById('5').style.backgroundImage="url('bilder/square5.jpg')";
document.getElementById('6').style.backgroundImage="url('bilder/square6.jpg')";

document.getElementById('1').addEventListener('click',myFunction1);
document.getElementById('2').addEventListener('click',myFunction2);
document.getElementById('3').addEventListener('click',myFunction3);
document.getElementById('4').addEventListener('click',myFunction4);
document.getElementById('5').addEventListener('click',myFunction5);
document.getElementById('6').addEventListener('click',myFunction6);



function myFunction1(){
    document.getElementById('1').style.backgroundImage="url('bilder/square11.jpg')";
    // const t1= document.createTextNode('Insta: @nina_marion_');
    // const t2= document.createTextNode('epost:nina@gmail.com');
    // const t3= document.createTextNode('X: @Nina05334617');
    
    // const layout= document.createElement('div');
    // layout.style.justifyContent='space-between';
    // document.getElementById(info).style.visibility='visible';
    // document.getElementById(info).appendChild(t1);

    // layout.appendChild(t2);
    // layout.appendChild(t3);
    
    // document.getElementById('1').appendChild(layout);
    
    document.getElementById('1').removeEventListener('click',myFunction1);
    document.getElementById('1').addEventListener('click',myBackFunction1);

}
function myBackFunction1(){
    document.getElementById('1').style.backgroundImage="url('bilder/square1.jpg')";
    document.removeEventListener('click',myBackFunction1);
    document.getElementById('1').addEventListener('click',myFunction1);
}
// function myBackFunction1(){
//     document.getElementById('1').removeEventListener('click',myFunction1);

// }
function myFunction2(){
    document.getElementById('classes').style.visibility='hidden';
    document.getElementById('2').style.backgroundImage="url('bilder/square21.jpg')";
    document.getElementById('2').removeEventListener('click',myFunction2);
    
    document.getElementById('2').addEventListener('click',myBackFunction2);

}
function myBackFunction2(){
    document.getElementById('2').style.backgroundImage="url('bilder/square2.jpg')";
    document.removeEventListener('click',myBackFunction2);
    document.getElementById('2').addEventListener('click',myFunction2);
    document.getElementById('classes').style.visibility='visible';
}
function myFunction3(){
    document.getElementById('name').style.visibility='hidden';
    document.getElementById('3').style.backgroundImage="url('bilder/square31.jpg')";
    document.getElementById('3').removeEventListener('click',myFunction3);
    
    document.getElementById('3').addEventListener('click',myBackFunction3);

}
function myBackFunction3(){
    document.getElementById('3').style.backgroundImage="url('bilder/square3.jpg')";
    document.removeEventListener('click',myBackFunction3);
    document.getElementById('3').addEventListener('click',myFunction3);
    document.getElementById('name').style.visibility='visible';
}
function myFunction4(){
    document.getElementById('sessions').style.visibility='hidden';
    document.getElementById('4').style.backgroundImage="url('bilder/square41.png')";
    document.getElementById('4').removeEventListener('click',myFunction4);
    
    document.getElementById('4').addEventListener('click',myBackFunction4);

}
function myBackFunction4(){
    document.getElementById('4').style.backgroundImage="url('bilder/square4.jpg')";
    document.removeEventListener('click',myBackFunction4);
    document.getElementById('4').addEventListener('click',myFunction4);
    document.getElementById('sessions').style.visibility='visible';
}
function myFunction5(){
    document.getElementById('events').style.visibility='hidden';
    document.getElementById('5').style.backgroundImage="url('bilder/square51.png')";
    document.getElementById('5').removeEventListener('click',myFunction5);
    
    document.getElementById('5').addEventListener('click',myBackFunction5);

}
function myBackFunction5(){
    document.getElementById('5').style.backgroundImage="url('bilder/square5.jpg')";
    document.removeEventListener('click',myBackFunction5);
    document.getElementById('5').addEventListener('click',myFunction5);
    document.getElementById('events').style.visibility='visible';
}
function myFunction6(){
    document.getElementById('courses').style.visibility='hidden';
    document.getElementById('6').style.backgroundImage="url('bilder/square61.png')";
    document.getElementById('6').removeEventListener('click',myFunction6);
    
    document.getElementById('6').addEventListener('click',myBackFunction6);

}
function myBackFunction6(){
    document.getElementById('6').style.backgroundImage="url('bilder/square6.jpg')";
    document.removeEventListener('click',myBackFunction6);
    document.getElementById('6').addEventListener('click',myFunction6);
    document.getElementById('courses').style.visibility='visible';
}

// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('.clickable').forEach(div => {
//         div.addEventListener('click', (event) => {
//             const clickedDiv = event.target;
//             const divid = clickedDiv.getAtribute('id');
//             // document.getElementById(divid).appendChild('h1'='text is comign here');
//             // clickedDiv.style.backgroundImage="url('11.png')";
//             document.getElementById(divid).style.height='100vh';

//         });
//     });
// });
