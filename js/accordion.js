var accordion = document.getElementsByClassName('accordion__paragraph');
var reltedText = document.getElementsByClassName('relted__text');

dataNum(); //задаем пунктам аккордеона и соотв. тексту аттрибут data-num
dynamicAccordion(); //функция, добавляющая каждому пункту аккордеона событие click

function dataNum() {
	for (var j = 0; j < accordion.length; j++) {
		accordion[j].setAttribute('data-num', j);
		reltedText[j].setAttribute('data-num', j);
	}
}

function dynamicAccordion() {
	for (var i = 0; i < accordion.length; i++) {
		//каждому пункту задаем событие click
		accordion[i].addEventListener('click', function() {
			//при клике на пункт, вытягиваем значение data-num в переменную
			var dataNum = this.getAttribute('data-num');
			//перебираем пункты и удаляем активный класс
			for (var j = 0; j < accordion.length; j++) {
				accordion[j].classList.remove('accordion__paragraph-active');
				reltedText[j].classList.remove('relted__text-active');
			}
			//добавляем активный класс пункту, по которому кликнули
			accordion[dataNum].classList.add('accordion__paragraph-active');
			reltedText[dataNum].classList.add('relted__text-active');
		});
	}
}