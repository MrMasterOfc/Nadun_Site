 // Matrix Animation
 const canvas = document.getElementById('matrixCanvas');
 const ctx = canvas.getContext('2d');

 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
 const fontSize = 16;
 const columns = canvas.width / fontSize;
 const drops = Array(Math.floor(columns)).fill(1);

 function drawMatrix() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
   ctx.fillRect(0, 0, canvas.width, canvas.height);

   ctx.fillStyle = '#00ff00';
   ctx.font = `${fontSize}px monospace`;

   drops.forEach((y, x) => {
     const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
     ctx.fillText(text, x * fontSize, y * fontSize);

     if (y * fontSize > canvas.height && Math.random() > 0.975) {
       drops[x] = 0;
     }
     drops[x]++;
   });
 }

 setInterval(drawMatrix, 50);

 // Play background music when the page loads
 const backgroundMusic = document.getElementById('backgroundMusic');
 backgroundMusic.play(); // Play the background music when the page loads

 function login() {
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;
   const accessSound = document.getElementById('accessSound');
   const incorrectSound = document.getElementById('incorrectSound');
   
   // Stop the background music when login button is clicked
   backgroundMusic.pause();
   backgroundMusic.currentTime = 0; // Reset to the beginning of the track

   if (username === "sahan" && password === "sahan") {
     accessSound.play();
     setTimeout(() => {
       window.location.href = "./hack.html";
     }, 5000); // Delay to play sound before redirect
   } else {
     incorrectSound.play();
     setTimeout(() => {
       backgroundMusic.play(); // Restart background music after incorrect login
     }, 1700); // Delay to allow incorrect.mp3 to finish
     alert("Incorrect username or password");
   }
 }

 // Ensure the background music plays if the page is refreshed
 window.onbeforeunload = () => {
   backgroundMusic.play(); // Restart background music on page refresh
 };
