function sign() {
    let prev = localStorage.getItem("users");
    let userData = prev ? JSON.parse(prev) : [];
    var name = document.getElementById("na").value;
    var email = document.getElementById("em").value;
    var password = document.getElementById("pass").value;
    var users = {
      name: name,
      email: email,
      password: password
    }
    userData.push(users)
    console.log(users.name);
    let stringfy = JSON.stringify(userData)
    localStorage.setItem("users", stringfy)
  
    window.location.href = "login.html"
  
  }
  
  function login() {
    var flag = false;
    var email = document.getElementById("em").value;
    var password = document.getElementById("pass").value;
    var userName = localStorage.getItem("users");
  
    if (userName) {
      var json = JSON.parse(userName);
      for (var i = 0; i < json.length; i++) {
        if (email == json[i].email && password == json[i].password) {
          flag = true;
          alert("Welcome!");
          window.location.href = "index.html";
          break;
        }
      }
    }
  
    if (!flag) {
      alert("Account not signed in");
      window.location.href = "signup.html";
    }
  }




  document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
