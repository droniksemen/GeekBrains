console.clear();

function Container(){
  this.id = "";
  this.className = "";
  this.htmlCode = "";
}
Container.prototype.render = function(){
  return this.htmlCode;
} 
// =================================================================================================
function Form(myId,myClass,myItems){
  Container.call(this);
  this.id = myId;
  this.className = myClass;
  this.myItems = myItems;
}
Form.prototype = Object.create(Container.prototype);
Form.prototype.constructor = Form;
Form.prototype.render = function(){	
  var result = "<form class = '"+ this.id +"' id = '"+ this.className +"'>";
  for(var i in this.myItems){
    if(this.myItems[i] instanceof ElementsForm){
			result += this.myItems[i].render();
		}
  }
  result += "</form>";
	return result;
}
// ==================================================================================================
function ElementsForm(elemFormId,elemFormType,elemFormPlaceholder){
  Container.call(this);
  this.elemFormId = elemFormId;
  this.elemFormType = elemFormType;
  this.elemFormPlaceholder = elemFormPlaceholder;
}
ElementsForm.prototype = Object.create(Container.prototype);
ElementsForm.prototype.constructor = ElementsForm;
ElementsForm.prototype.render = function(){
  var result = "<input type = '"+ this.elemFormType +"' id='"+ this.elemFormId +"' placeholder = '"+ this.elemFormPlaceholder +"'>";
  return result;
}
var myName = new ElementsForm("myName", "name", "Введите имя", "");
var phone = new ElementsForm("phone", "phone", "Введите телефон", "");
var email = new ElementsForm("email", "email", "Введите email", "");
var m_items = {0: myName, 1: phone, 2: email};
// =====================================================================================================
function Button(butId,butType,butVal){
  Container.call(this);
  this.butId = butId;
  this.butType = butType;
  this.butVal = butVal;
}
Button.prototype = Object.create(Container.prototype);
Button.prototype.constructor = Button;
Button.prototype.render = function(){	
  return "<input type = '"+ this.butType +"' id='"+ this.butId +"' value = '"+ this.butVal +"' onclick='Valid()'>";
}
var button = new Button("button", "button", "Отправить");
// =====================================================================================================




var form = new Form("form", "form", m_items);
document.write(form.render());
document.write(button.render());


function RegExp(){
  this.regName = /^[A-Za-zА-Яа-я]+$/;
  this.regPhone = /\+\d-\d\d\d-\d\d\d-\d\d-\d\d/;
  this.regEmail = /^\w+@\w+\.\w{2,4}$/i;
}

function ValidName(valName){
  this.valName = valName;
}
ValidName.prototype = function(){
  // if(this.valName != ''){
  //   if(this.valName)
  // }else{
  //   alert('No');
  // }
  console.log(this.valName);
}
var validName = new ValidName(this.regName);

