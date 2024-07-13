function sendMail() {
    let name = document.querySelector("#name")
    let email = document.querySelector("#email")
    let message = document.querySelector("#message")

    var params = {
        from_name: name.value,
        to_name: "Tony",
        message: message.value,
        to_email: "tonyle200185@gmail.com",
        from_email: email.value,
    
    };
  
    const serviceID = "service_1dtz1d9";
    const templateID = "template_du8jo3e";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
        //   document.getElementById("name").value = "";
        //   document.getElementById("email").value = "";
        //   document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }