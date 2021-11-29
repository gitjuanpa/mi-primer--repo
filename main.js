const login = () => {
  const validateEmail = (event) => {
      const input = event.currentTarget;
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const emailTest = regex.test(input.value);

      if(!emailTest) {
          submitButton.setAttribute("disabled", "disabled");
          input.nextElementSibling.classList.add('error');
          
      } else {
          submitButton.removeAttribute("disabled");
          input.nextElementSibling.classList.remove('error');
          
      }
  }
  
  const validatePassowrd = (event) => {
      const input = event.currentTarget;

      if(input.value.length < 8) {
          submitButton.setAttribute("disabled", "disabled");
          input.nextElementSibling.classList.add('error');
      } else {
          submitButton.removeAttribute("disabled");
          input.nextElementSibling.classList.remove('error');
      }
  }
  
  const inputEmail = document.querySelector('input[type="email"]');
  const inputPassword = document.querySelector('input[type="password"]');
  const submitButton = document.querySelector('.login__submit');

  inputEmail.addEventListener('input', validateEmail);
  inputPassword.addEventListener('input', validatePassowrd);

  const errorHandler = () => {
      submitButton.classList.remove('loading');
      submitButton.classList.remove('success');
      submitButton.classList.add('error');
      submitButton.textContent = "Error :(";
  }

  const successHandler = () => {
      submitButton.classList.remove('loading');
      submitButton.classList.remove('error');
      submitButton.classList.add('success');
      window.location="pagina.html";
      
      
  }

  if(submitButton) {
      submitButton.addEventListener('click', (event) => {
          event.preventDefault();
          
          submitButton.textContent = "Loading...";
          
          

          fetch('https://reqres.in/api/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  email: inputEmail.value,
                  password: inputPassword.value,
                  
              })
          }).then((response) => {
              if (response.status !== 200) {
                
                  return errorHandler();
                  
                  
              }
              
              successHandler();
              
              
          }).catch(() => {
            
              errorHandler();
              
             
          })
          
      })
      
  }
}
window.onload= login;























//2cuerpo

document.querySelector('#boton').addEventListener('click',regresarDatos);
function regresarDatos(){
    
  let url = `tabla.json`

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

        xhttp.send();

    xhttp.onreadystatechange = function(){


    if(this.readyState == 4 && this.status == 200){
        
        let datos = JSON.parse(this.responseText);
       
        let antwort = document.querySelector('#antwort');
        antwort.innerHTML = '';

        
        for(let item of datos){
          
          antwort.innerHTML += `
          <tr>
          
            <td>${item.id}</td>
            <td>${item.email}</td>
            <td>${item.first_name}</td>
            <td>${item.last_name}</td>
            <td><img src="${item.avatar}" ></td>
           
          </tr>
          
          `


        }


        }
    }
}
///cuerpo 3
document.querySelector('#botone').addEventListener('click',regresarDatosa);
function regresarDatosa(){
    
  let url = `tabla2.json`

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',url,true);

        xhttp.send();

    xhttp.onreadystatechange = function(){


    if(this.readyState == 4 && this.status == 200){
        
        let datos = JSON.parse(this.responseText);
       
        let antwort = document.querySelector('#antwort');
        antwort.innerHTML = '';

        
        for(let item of datos){
          
          antwort.innerHTML += `
          <tr>
          
            <td>${item.id}</td>
            <td>${item.email}</td>
            <td>${item.first_name}</td>
            <td>${item.last_name}</td>
            <td><img src="${item.avatar}" ></td>
           
          </tr>
          
          `


        }


        }
    }
}
