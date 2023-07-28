function updateCountdown() {
    const now = new Date().getTime();
    const targetDate = new Date("2023-08-15").getTime(); 
    const timeRemaining = targetDate - now;
  
    
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = String(Math.floor((timeRemaining % (1000 * 60)) / 1000)).padStart(2, '0');
  
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  
    if (timeRemaining <= 0) {
      countdownElement.innerHTML = "Offer Expired";
      clearInterval(countdownInterval);
    }
  }
  
  const countdownInterval = setInterval(updateCountdown, 1000);