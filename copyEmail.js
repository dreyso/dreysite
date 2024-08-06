window.addEventListener('load', () => {

    /* Copy the email to the clipboard */
    const copyButton = document.querySelector("#copy-email-button");
    const email = "adreysco@gmail.com";
  
    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy email: ', err);
      });
    });
});
  
      
      