const field_size_x = 20;
const field_size_y = 20;
const snake_speed = 300; // интервал в мс между перемещениями змейки

let snake = []; // змейка
let direction = "x-"; // по умолчанию змейка движется вверх, уменьшая координату х
let gameIsRunning = false; // игра не запущена
let snake_timer; // таймер
let food_timer; // таймер
let wall_timer;
let score = 0;
function init(){
	prepareGameField();
	
	// вешаем на кнопку старта слушатель
	document.getElementById("snake-start").addEventListener("click", startGame);
	document.getElementById("snake-renew").addEventListener("click", refreshGame);
	
	// добавляем прослушиваение клавиатуры
	addEventListener("keydown", changeDirection);
}

/*
* Отрисовка игрового поля
* Само игровое поле - это таблица
*/
function prepareGameField(){
	let game_table = document.createElement("table");
	game_table.setAttribute("class", "game-table");
	
	// в цикле генерируем ячейки игровой таблицы
	for(let i = 0; i < 20; i++){
		let row = document.createElement("tr");
		row.setAttribute("class", "game-table-row row-"+i);

		
		for(let j = 0; j < 20; j++){
			let cell = document.createElement("td");
			cell.setAttribute("class", "game-table-cell cell-"+i+"-"+j);
			
			row.appendChild(cell);
		}
		
		game_table.appendChild(row);
	}
	
	document.getElementById("snake-field").appendChild(game_table);
}

/*
* Инициализация игры
*/
function startGame(){
	gameIsRunning = true;
	respawn();
	
	snake_timer = setInterval(move, snake_speed);
	setTimeout(createFood, 5000);

	setTimeout(createWall, 6000);
}

/*
* Располагаем змейку на игровом поле
*/
function respawn(){
	// змейка - это массив элементов td.game-table-cell
	// стартовая длина змейки - 2
	
	// начинаем из центра
	let start_coord_x = Math.floor(field_size_x / 2);
	let start_coord_y = Math.floor(field_size_y / 2);
	
	let snake_head = document.getElementsByClassName("cell-"+start_coord_x+"-"+start_coord_y)[0];
	snake_head.classList.add("snake-unit");
	
	let snake_tail = document.getElementsByClassName("cell-"+(start_coord_x-1)+"-"+start_coord_y)[0];
	snake_tail.classList.add("snake-unit");
	
	snake.push(snake_head);
	snake.push(snake_tail);
}

/*
* Движение змейки
*/
function move(){
	// собираем классы головы змейки
	let snake_head_classes = snake[snake.length-1].getAttribute("class").split(" ");

	// сдвигаем голову на 1 клетку
	let new_unit;
	let snake_coords = snake_head_classes[1].split("-");
	let coord_x = Number(snake_coords[1]);
	let coord_y = Number(snake_coords[2]);
	
	switch (direction) {
		case "x-":
			new_unit = document.getElementsByClassName("cell-"+(coord_x-1)+"-"+coord_y)[0];
			break;
		case "x+":
			new_unit = document.getElementsByClassName("cell-"+(coord_x+1)+"-"+coord_y)[0];
			break;
		case "y+":
			new_unit = document.getElementsByClassName("cell-"+coord_x+"-"+(coord_y+1))[0];
			break;
		case "y-":
			new_unit = document.getElementsByClassName("cell-"+coord_x+"-"+(coord_y-1))[0];
			break;
	}
	
	// проверяем, что new_unit - это не часть змейки
	// также проверяем, что змейка не дошла до границы
	if(!isSnakeUnit(new_unit) && new_unit !== undefined){
		// добавляем новую часть змейки
		new_unit.classList.add("snake-unit");
		snake.push(new_unit);
		
		// если змейка не ела, убираем хвост
		if(!haveFood(new_unit)){
			// находим удаляемый элемент
			let removed = snake.splice(0, 1)[0];
			var classes = removed.getAttribute("class").split(" ");
			// удаляем маркирующий класс
			removed.setAttribute("class", classes[0] + " " + classes[1]);
		}
	}else{
		finishTheGame();
	}

	if(haveWall(new_unit)){
		finishTheGame();
	}
}

/*
* Проверяем элемент на принадлежность змейке
*/
function isSnakeUnit(unit){
	let check = false;
	
	if(snake.includes(unit)) check = true;
	
	return check;
}

/*
* Проверяем встречу с едой
*/
function haveFood(unit){
	var check = false;
	
	var unit_classes = unit.getAttribute("class").split(" ");
	
	// змейка нашла еду
	if(unit_classes.includes("food-unit")){
		check = true;
		
		// создаём новую еду
		createFood();

		// createWall();

		
		// увеличиваем очки
		score++;
		exScore(score);
	}
	
	return check;
}



/*
* Меняем направление движения змейки
*/
function changeDirection(event){
    switch(event.keyCode){
        case 37:  // если нажата клавиша влево
			// если до этого двигались вправо, то ничего не произойдет            
			if(direction != "y+")
				direction = "y-";
            break;
        case 38:   // если нажата клавиша вверх
			if(direction != "x+")
				direction = "x-";
            break;
        case 39:   // если нажата клавиша вправо
			if(direction != "y-")
				direction = "y+";            
            break;
        case 40:   // если нажата клавиша вниз
            if(direction != "x-")
				direction = "x+"; 
            break;
    }
}

/*
* Создаём еду
*/
function createFood(){
	let foodCreated = false;
	
	while(!foodCreated){
		// выбираем случайную клетку
		let food_x = Math.floor(Math.random() * (field_size_x));
		let food_y = Math.floor(Math.random() * (field_size_y));
		
		let food_cell = document.getElementsByClassName("cell-"+food_x+"-"+food_y)[0];
		let food_cell_classes = food_cell.getAttribute("class").split(" ");
		
		// если тут нет змейки
		if(!food_cell_classes.includes("snake-unit")){
			// ставим сюда еду
			food_cell.classList.add("food-unit");
			foodCreated = true;
		}
	}
}


//Создание припятствий

function createWall(){
	let wallCreated = false;

	while(!wallCreated){
		let wall_x = Math.floor(Math.random() * (field_size_x));
		let wall_y = Math.floor(Math.random() * (field_size_y));

		let wall_cell = document.getElementsByClassName("cell-"+wall_x+"-"+wall_y)[0];
		let wall_cell_classes = wall_cell.getAttribute("class").split(" ");

		if(!wall_cell_classes.includes("snake-unit")){
			
			wall_cell.classList.add("wall-unit");
			wallCreated = true;
		}
	}
}

/*
* Действия для завершения игры
*/
function finishTheGame(){
	gameIsRunning = false;
	clearInterval(snake_timer);
	alert("Игра окончена! Ваш счёт: " + score);
}

/*
* Новая игра
*/
function refreshGame(){
	location.reload();
}

//Счет в реальном времени
function exScore(){
	let exScore = document.getElementById("score");

	exScore.innerHTML = "<p>Ваши очки: " + score + "<p>"
}

//встреча со стеной
function haveWall(unit){
	 var chek = false;

	var unit_classes2 = unit.getAttribute("class").split(" ");
	if(unit_classes2.includes("wall-unit")){
		 chek = true;


	} 
	return chek;
}

// стартуем
window.onload = init;