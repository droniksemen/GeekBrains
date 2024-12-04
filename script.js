	var itemClassName = 'menu__list-items',
	    itemAnchorsClassName = 'menu__list-items-anchors';    
	
	function Container() {
	    this.id = '';
	    this.className = '';
	    this.htmlCode = '';
	}
	
	Container.prototype.render = function () {
	    return this.htmlCode;
	};
	
	// Удаление пункта меню
	Container.prototype.removeItem = function (item) {
	    document.getElementById(item.id).parentNode.removeChild(item);
	};
	
	function Menu(menuId, menuClass, menuItems) {
	    Container.call(this);
	    this.id = menuId;
	    this.className = menuClass;
	    this.items = menuItems;
	}
	
	Menu.prototype = Object.create(Container.prototype);
	Menu.prototype.constructor = Menu;
	Menu.prototype.render = function () {
	    var resList = '<ul class="' + this.className + '">',
	        res = resList,
	        resSub = 0;
	    for (var item in this.items) {
	        if (this.items[item] instanceof SubMenuItem) {
	            if (resSub == 0) { res += resList; resSub = 1; }
	            res += this.items[item].render();
	        } else if (this.items[item] instanceof MenuItem) {
	            if (resSub == 1) { res += '</ul>'; resSub = 0; }
	            res += this.items[item].render();
	        }
	    }
	    if (resSub == 1) { res += '</ul>'; resSub = 0; }
	    res += '</ul>';
	    return res;
	};
	
	Menu.prototype.insert = function (id) {
	    document.getElementById(id).innerHTML = menu.render();
	};
	
	function MenuItem(itemId, itemHref, itemName) {
	    Container.call(this);
	    this.id = itemId;
	    this.className = itemClassName;
	    this.href = itemHref;
	    this.hrefClassName = itemAnchorsClassName;
	    this.name = itemName;
	}
	

	MenuItem.prototype = Object.create(Container.prototype);
	MenuItem.prototype.constructor = MenuItem;

	MenuItem.prototype.render = function () {
	    var menuItemHtml = '<li id="' + this.id
	        + '" class="' + this.className
	        + '"><a href="' + this.href
	        + '" class="' + this.hrefClassName
	        + '">' + this.name + '</a></li>';
	    return menuItemHtml;
	};
	
	// Подменю
	function SubMenuItem(itemId, itemHref, itemName) {

	    MenuItem.call(this);
	    this.id = itemId;
	    this.className = itemClassName;
	    this.href = itemHref;
	    this.hrefClassName = itemAnchorsClassName;
	    this.name = itemName;
	}
	
	SubMenuItem.prototype = Object.create(MenuItem.prototype);
	SubMenuItem.prototype.constructor = SubMenuItem;
	
	var menu = new Menu('menu__list-id', 'menu__list', [
	    new MenuItem('/', '#', 'Главная'),
	    new MenuItem('catalog', '#', 'Каталог'),
	    new SubMenuItem('catalog/toys', '#', 'Игрушки'),
	    new SubMenuItem('catalog/sport', '#', 'Спорт-товары'),
	    new SubMenuItem('catalog/ru', '#', 'Игрушки р/у'),
	   	new MenuItem('/contact', '#', 'Контакты'),
	])
	
	// Вставка меню после загрузки <body>
	var body = document.querySelector('body');
	body.onload = menu.insert('menu-id');
	
	// Обработка по клику
	body.onclick = function (e) {
	    var event = e.target;
	    
	    if (event.className == itemAnchorsClassName) {
	        event.parentNode.click();
	    }
	   
	    if (event.className == itemClassName) {
	        menu.removeItem(event);
	    }
	};