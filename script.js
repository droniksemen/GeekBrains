console.clear();
	
	function Container(){
	  this.id = "";
	  this.className = "";
	  this.htmlCode = "";
	}
	Container.prototype.render = function(){
	  return this.htmlCode;
	} 
	
	function Menu(myId,myClass,myItems){
	  Container.call(this);
	  this.id = myId;
	  this.className = myClass;
	  this.myItems = myItems;
	}
	Menu.prototype = Object.create(Container.prototype);
	Menu.prototype.constructor = Menu;
	Menu.prototype.render = function(){	
	  var result = "<ul class='"+this.className+"' id='"+this.id+"'>";
		for(var item in this.myItems){
			if(this.myItems[item] instanceof MenuItem){
				result += this.myItems[item].render();
			}
		}
		result += "</ul>";
		return result;
	}
	
	
	function MenuItem(itemId, myName){
	  Container.call(this);
	  this.id = itemId;
	  this.className = "button";
	  this.myName = myName;
	}
	MenuItem.prototype = Object.create(Container.prototype);
	MenuItem.prototype.constructor = MenuItem;
	MenuItem.prototype.render = function(){
		return "<li id='"+this.id+"' class='"+this.className+"'>" + this.myName + "</li>";
	}
	
	
	var item1 = new MenuItem("one","Первая вкладка");
	var item2 = new MenuItem("two","Вторая вкладка");
	var item3 = new MenuItem("three","Третья вкладка");
	var item4 = new MenuItem("four","Четвертая вкладка");
	var m_items = {0: item1, 1: item2, 2: item3, 3: item4};
	
	// ==============================================text============================================
	function Text(myId,myClass,textItems){
	  Container.call(this);
	  this.id = myId;
	  this.className = myClass;
	  this.textItem = textItems;
	}
	Text.prototype = Object.create(Container.prototype);
	Text.prototype.constructor = Text;
	Text.prototype.render = function(){	
	  var result = "<div class='"+this.className+"' id='"+this.id+"'><p class='textItem'>"+this.textItem+"</p></div>";
		return result;
	}
	
	var textItem1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quasi enim itaque aliquam aliquid minus obcaecati eligendi temporibus qui, quos exercitationem excepturi quis pariatur nostrum quas. Est culpa numquam commodi.Aliquid, facilis ab doloremque necessitatibus odit debitis magnam assumenda amet eos qui ipsa minus fugit quaerat. Quisquam, vero accusantium et quidem mollitia in suscipit alias consectetur ab beatae hic eius.Quibusdam reiciendis a dolore architecto blanditiis fuga minus similique consequuntur qui odit sed aspernatur, eos tempora quisquam numquam ratione quis recusandae tempore id explicabo laborum, asperiores autem perspiciatis amet. Nemo?Voluptate doloribus sit consequuntur recusandae perferendis nulla quisquam voluptatum iusto qui. Minus ipsam vel, rem quod deserunt necessitatibus perferendis aut debitis earum fuga illum, eius soluta a asperiores, quae cupiditate.Consequatur soluta fuga ipsam delectus ratione iste quos fugiat tempore explicabo vero quo minima necessitatibus expedita excepturi eos, omnis maiores quia, iure ullam tempora repellat nesciunt aperiam nobis incidunt! Hic.";
	
	var textItem2 = "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Лучше деревни дал запятой курсивных ведущими реторический, что всемогущая это проектах! Он свою переписывается заголовок то инициал большого осталось ее.Текстами если текста переулка, за деревни власти текст лучше вдали, рыбными толку сих путь залетают до великий возвращайся силуэт осталось ему дорогу! Живет, они инициал пояс большого свое коварный всеми!Прямо лучше океана моей вскоре языком назад над они первую, переписывается она гор сбить ее подзаголовок по всей скатился сих? Алфавит повстречался приставка коварных однажды сбить текстами его себя заманивший путь!Рукопись моей там рукописи алфавит переписывается. Переписывается маленькая, обеспечивает залетают инициал ее курсивных живет пояс над использовало даль ты, парадигматическая последний великий предупреждал заглавных! Он ты коварных диких. Скатился, жизни!Ручеек эта мир силуэт страна от всех запятой, парадигматическая по всей грамматики предупредила языкового страну несколько на берегу обеспечивает текстами снова, маленькая букв образ гор предупреждал пунктуация! Его lorem путь решила пунктуация по всей?";
	
	var textItem3 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, incidunt? Itaque maxime, eos, ullam numquam esse cumque amet debitis quasi assumenda temporibus est non, necessitatibus veritatis enim optio consequatur architecto.Maxime nobis asperiores ex consectetur illo atque dignissimos suscipit inventore neque quis esse, quam facilis repellat sint quisquam, possimus in sed sapiente. Veniam veritatis maiores, tenetur voluptatibus dignissimos molestias eaque.";
	
	var textItem4 = "Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Страну образ всемогущая путь запятой злых текстами одна рукописи, свой решила эта дороге вопрос щеке, это оксмокс приставка продолжил назад.Заманивший злых себя решила путь его вопрос, ты имеет свою большой которой великий коварных мир, обеспечивает он все скатился от всех строчка рот проектах бросил пор? Последний правилами всемогущая подзаголовок власти.";
	
	// ========================================================================================================
	
	var text = new Text("text", "text", textItem1);
	var menu = new Menu("menu", "menu", m_items);
	
	document.write(menu.render());
	document.write(text.render());