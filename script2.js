console.clear();
// var text = document.getElementById("text").innerHTML;

// text = text.replace(/'/g, '"');
// text = text.replace(/"s/g, "'s");
// text = text.replace(/"re/g, "'re");


// document.getElementById("text").innerHTML = text;
function valid(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var text = document.getElementById("text").value;
  
  if(name != ''){
    var validNmae = /^[A-Za-zА-Яа-я]+$/;
    if(validNmae.test(name)==true){
     if(phone != ''){
      var validPhone = /\+\d-\d\d\d-\d\d\d-\d\d-\d\d/;
      if(validPhone.test(phone)==true){
        if(email != ''){
           var validEmail = /^\w+@\w+\.\w{2,4}$/i;
           if(validEmail.test(email)==true){
              if(text != ''){
                alert("Молодец!");
              }
           }else{
             alert("Не коректно заполнен email");
             document.getElementById('email').style.border = '1px solid red';
           }
        }else{
          alert("заполните email");
          document.getElementById('email').style.border = '1px solid red';
        }
      }else{
        alert("Должны быть только цыфры формата:+7-000-000-00-00");
        document.getElementById('phone').style.border = '1px solid red';
      }
     }else{
       alert("заполните телефон");
       document.getElementById('phone').style.border = '1px solid red';
     }
    }else{
      alert("Имени должны быть только буквы");
      document.getElementById('name').style.border = '1px solid red';
    }
  }else{
    alert("заполните имя");
    document.getElementById('name').style.border = '1px solid red';
  }
}



