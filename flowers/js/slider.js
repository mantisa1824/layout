// Реализуем слайдер
function move(){
	// Получаем направление перемещение слайдов
	var direction = this.getAttribute('id');
	// Получаем елемент wrap
	var wrap = document.getElementsByClassName('slider-wrapper')[0];
	// Получаем тег ul 
	var ul = wrap.getElementsByTagName('ul')[0];
	// Получаем ширину обертки слайдера
	var wrapWidth = parseFloat(getComputedStyle(wrap, '').width) - 7;
	// Получаем позицию слайдера 
	if(!ul.style.marginLeft){
		ul.style.marginLeft = '0px';
		var styles = getComputedStyle(ul, '');
		var marginLeft = parseFloat(styles.marginLeft);
	}else{
		marginLeft = parseFloat(ul.style.marginLeft);
	}

	if(direction === 'control-right'){
		// Вычисляем количество изображений в слайдере (теги li)
		var step = (wrap.getElementsByTagName('li').length / 4 );
		// Вычисляем количество шагов, если кратное 4, отнимаем единицу
		step = !( Math.floor(step) - step ) ? step - 1 ^ 0 : step ^ 0;
		// Получаем рабучую ширину слайдера , область где есть есть теги li
		var workWidth = step * wrapWidth ;
		// Вычисляем следующию позицию
		var nextPos = marginLeft + workWidth ^ 0
		// Если nextPos <= 0 значит следующая область слайдера пуста
		if(nextPos <= 0){
			// Устанавлмваем слайдер в начальную позицию
			var pos = 0;
		}else{
			pos = marginLeft - wrapWidth
		}
		ul.style.marginLeft = pos + 'px';
	}else{
		// Если слайдер больше -1(мы в начале слайдера), клик был вправо , смещаем на конец слайдера
		if( marginLeft > -1 ){
			// Вычисляем количество изображений в слайдере (теги li)
			var step = (wrap.getElementsByTagName('li').length / 4);
			// Вычисляем количество шагов, если кратное 4, отнимаем единицу
			step = !( Math.floor(step) - step ) ? step - 1 ^ 0 : step ^ 0;
			var pos = -(step * wrapWidth);
		}else{
			pos = marginLeft + wrapWidth
		}
		ul.style.marginLeft = pos + 'px';
	}
}