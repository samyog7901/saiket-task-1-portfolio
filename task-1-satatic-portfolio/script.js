

   document.addEventListener("DOMContentLoaded",()=>{
    // accessing form element by id
    const form = document.getElementById("contactForm");
    
    // validating form on submission
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        
        // accessing input elements by id   
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        
        // defining regular expression structures
        const nameRegex = /^[a-zA-Z\s'-]+$/; 
        const emailRegex = /^[^@\s]+@[^@\s]+\.[a-zA-Z]{2,}$/

        
        // matching the input 
        if(!nameRegex.test(name)){
            alert("Name should only contain letters, spaces, hyphens or apostrophes.");
            return;
        }

        if(!emailRegex.test(email)){
            alert("Please enter a valid email (e.g. samyog@example.com).");
        return;
        }

      
        alert("Message sent Successfully!");
        form.reset();
      
    })
});


