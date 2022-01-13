const time = document.querySelector('.time');
const dateField = document.querySelector('.date');

const greeting = document.querySelector('.greeting');
const greetingContainer = document.querySelector('.greeting-container');
const nameField = document.querySelector('.name');

const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

const weather = document.querySelector('.weather');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuoteBtn = document.querySelector('.change-quote');
const quoteWrapper = document.querySelector('.quote-wrapper');

const playPrevBtn = document.querySelector('.play-prev');
const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');

let isPlay = false;
let playNum = 0;

const player = document.querySelector('.player');
const playerTitle = document.querySelector('.player-title');
playerTitle.textContent = 'Aqua Caelestis';
const soundVolume = document.querySelector('.sound-volume');
const timer = document.getElementById('timer');
const duration = document.getElementById('duration');
const progress = document.querySelector('.duration-player');
const volumeBtn = document.querySelector('.mute-button');

const settingsBtn = document.querySelector('.settings');
const settingsModal = document.querySelector('.settings-modal');
const showTimeBtn = document.querySelector('.show-time');
const showDateBtn = document.querySelector('.show-date');
const showGreetingBtn = document.querySelector('.show-greeting');
const showWeatherBtn = document.querySelector('.show-weather');
const showQuotesBtn = document.querySelector('.show-quotes');
const showAudioBtn = document.querySelector('.show-audio');
const showTodoBtn = document.querySelector('.show-todo');

const select = document.querySelector('select');
const selectOptions = select.getElementsByTagName('option');

let flickrArr = [];
let flickrNum;
const bgTagsInput = document.querySelector('.bg-tags');

const todoBtn = document.querySelector('.todo');
const todoModal = document.querySelector('.todo-modal');
const todoInput = document.querySelector('.todo-input');
const ul = document.querySelector('.todos');
const clearBtn = document.querySelector('.clear');
const checkAllBtn = document.querySelector('.check-all');
const todoWrapper = document.querySelector('.todo-wrapper');

const errorField = document.querySelector('.error');

const langBtn = document.querySelector('.lang-btn');

const settingsTitle = document.querySelector('.settings-field-title');
const langTitle = document.getElementById('lang-title');
const langEng = document.querySelector('.lang-eng');
const langRu = document.querySelector('.lang-ru');
const bgImgTitle = document.querySelector('.bg-img');
const bgSourceTitle = document.getElementById('bg-source');
const bgTagsTitle = document.getElementById('bg-tags-title');
const showTitle = document.querySelector('.show');
const showTimeTitle = document.getElementById('time-title');
const showDateTitle = document.querySelector('.set-date-title');
const showGreetingTitle = document.querySelector('.set-greeting-title');
const showQuotesTitle = document.querySelector('.set-quotes-title');
const showWeatherTitle = document.querySelector('.set-weather-title');
const showAudioTitle = document.querySelector('.set-audio-title');
const showTodoTitle = document.querySelector('.set-todo-title');
const todoTitle = document.querySelector('.todo-field-title');

let appLang = 'en';

let userTags = '';

const playList = [
	{
		title: 'Aqua Caelestis',
		src: 'assets/sounds/Aqua Caelestis.mp3',
		duration: '00:39',
	},
	{
		title: 'River Flows In You',
		src: 'assets/sounds/River Flows In You.mp3',
		duration: '01:37',
	},
	{
		title: 'Summer Wind',
		src: 'assets/sounds/Summer Wind.mp3',
		duration: '01:50',
	},
	{
		title: 'Ennio Morricone',
		src: 'assets/sounds/Ennio Morricone.mp3',
		duration: '01:37',
	},
];

function initTranslate() {
	i18next.init(
		{
			lng: localStorage.getItem('applang') ? localStorage.getItem('applang') : 'en',
			resources: {
				en: {
					translation: {
						settings: 'Settings',
						language: 'Language',
						langeng: 'ENG',
						langru: 'RU',
						bgimg: 'Background image',
						bgsource: 'Source',
						bgtags: 'Tags for API',
						show: 'Show',
						showtime: 'Time',
						showdate: 'Date',
						showgreeting: 'Greeting',
						showquotes: 'Quotes',
						showweather: 'Weather',
						showaudio: 'Audio Player',
						showtodo: 'To-Do List',
						tagstitle: 'Tags separated by comma',
						tagsplaceholder: 'nature, morning',
						todobtn: 'TODO',
						clearbtn: 'Clear All',
						checkallbtn: 'Check All',
						todotitle: 'To-Do List',
						todoinput: 'Add a New To-Do',
						errorfield: 'No photos found.',
						defaultcity: 'Minsk',
						dateformat: 'en-US',
						weatherlang: 'en',
						windspeed: 'Wind speed: {{windspeed}} m/s',
						humidity: 'Humidity: {{h}}%',
						quotespath: 'https://type.fit/api/quotes',
						placeholdername: '[Enter name]',
						placeholdercity: '[Enter city]',
						morning: 'Good morning,',
						afternoon: 'Good afternoon,',
						evening: 'Good evening,',
						night: 'Good night,',
						prompt: 'Press Enter to search',
						weathererror: "Error! Nothing to geocode for '{{cityname}}'",
					},
				},
				ru: {
					translation: {
						settings: 'Настройки',
						language: 'Язык',
						langeng: 'АНГЛ',
						langru: 'РУC',
						bgimg: 'Фоновое изображение',
						bgsource: 'Источник',
						bgtags: 'Теги для API',
						show: 'Показывать',
						showtime: 'Время',
						showdate: 'Дата',
						showgreeting: 'Приветствие',
						showquotes: 'Цитаты',
						showweather: 'Погода',
						showaudio: 'Аудиоплеер',
						showtodo: 'Список дел',
						tagstitle: 'Теги через запятую',
						tagsplaceholder: 'природа, утро',
						todobtn: 'Список дел',
						clearbtn: 'Очистить',
						checkallbtn: 'Сделано',
						todotitle: 'Список дел',
						todoinput: 'Добавить новую задачу',
						errorfield: 'Изображений не найдено.',
						defaultcity: 'Минск',
						dateformat: 'ru-RU',
						weatherlang: 'ru',
						windspeed: 'Скорость ветра: {{windspeed}} м/с',
						humidity: 'Влажность: {{h}}%',
						quotespath: './quotes_ru.json',
						placeholdername: '[Введите имя]',
						placeholdercity: '[Введите город]',
						morning: 'Доброе утро,',
						afternoon: 'Добрый день,',
						evening: 'Добрый вечер,',
						night: 'Доброй ночи,',
						prompt: 'Нажмите Enter для поиска',
						weathererror: "Ошибка! Ничего не найдено по запросу '{{cityname}}'",
					},
				},
			},
		},
		function (err, t) {
			updateContent();
		},
	);

	i18next.on('languageChanged', () => {
		updateContent();
	});
}

/* Date */

function showTime() {
	const date = new Date();
	const currentTime = date.toLocaleTimeString();
	time.textContent = currentTime;
	setTimeout(showTime, 1000);
	showDate();
	showGreeting();
}

function showDate() {
	const date = new Date();
	const options = { weekday: 'long', month: 'long', day: 'numeric' };
	const currentDate = date.toLocaleDateString(i18next.t('dateformat'), options);
	dateField.textContent = currentDate;
}

showTime();

/* Greetengs */

function getTimeOfDay() {
	const date = new Date();
	const hours = date.getHours();
	switch (true) {
		case hours >= 6 && hours < 12:
			return 'morning';
		case hours >= 12 && hours < 18:
			return 'afternoon';
		case hours >= 18 && hours <= 23:
			return 'evening';
		case hours >= 0 && hours < 6:
			return 'night';
	}
}

function showGreeting() {
	const timeOfDay = getTimeOfDay();
	let greetingText = i18next.t(timeOfDay);
	greeting.textContent = greetingText;
}

function setLocalStorage() {
	localStorage.setItem('name', nameField.value);
	localStorage.setItem('Time', JSON.stringify(showTimeBtn.checked));
	localStorage.setItem('Date', JSON.stringify(showDateBtn.checked));
	localStorage.setItem('Greetings', JSON.stringify(showGreetingBtn.checked));
	localStorage.setItem('Weather', JSON.stringify(showWeatherBtn.checked));
	localStorage.setItem('Quotes', JSON.stringify(showQuotesBtn.checked));
	localStorage.setItem('Audio', JSON.stringify(showAudioBtn.checked));
	localStorage.setItem('Todo', JSON.stringify(showTodoBtn.checked));
	localStorage.setItem('bgSourse', select.value);
	if (ul.innerHTML === '') localStorage.setItem('todoList', 'empty');
	else localStorage.setItem('todoList', ul.innerHTML);
	localStorage.setItem('todoBtn', todoBtn.className);
	localStorage.setItem('todoModal', todoModal.className);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
	if (localStorage.getItem('city')) {
		city.value = localStorage.getItem('city');
	} else {
		city.value = i18next.t('defaultcity');
	}

	if (localStorage.getItem('usertags')) {
		userTags = localStorage.getItem('usertags');
		bgTagsInput.value = userTags.replace('+', ' ');
	}

	if (localStorage.getItem('applang')) {
		langBtn.checked = localStorage.getItem('applang') === 'en' ? true : false;
	}

	if (localStorage.getItem('name')) {
		nameField.value = localStorage.getItem('name');
	}

	if (localStorage.getItem('Time')) {
		showTimeBtn.checked = JSON.parse(localStorage.getItem('Time'));
		toggleShowTime();
	} else {
		time.classList.remove('hide');
	}

	if (localStorage.getItem('Date')) {
		showDateBtn.checked = JSON.parse(localStorage.getItem('Date'));
		toggleShowDate();
	} else {
		dateField.classList.remove('hide');
	}

	if (localStorage.getItem('Greetings')) {
		showGreetingBtn.checked = JSON.parse(localStorage.getItem('Greetings'));
		toggleShowGreeting();
	} else {
		greetingContainer.classList.remove('hide');
	}

	if (localStorage.getItem('Weather')) {
		showWeatherBtn.checked = JSON.parse(localStorage.getItem('Weather'));
		toggleShowWeather();
	} else {
		weather.classList.remove('hide');
	}

	if (localStorage.getItem('Quotes')) {
		showQuotesBtn.checked = JSON.parse(localStorage.getItem('Quotes'));
		toggleShowQuotes();
	} else {
		quoteWrapper.classList.remove('hide');
	}

	if (localStorage.getItem('Audio')) {
		showAudioBtn.checked = JSON.parse(localStorage.getItem('Audio'));
		toggleShowAudio();
	} else {
		player.classList.remove('hide');
	}

	if (localStorage.getItem('Todo')) {
		showTodoBtn.checked = JSON.parse(localStorage.getItem('Todo'));
		toggleShowTodo();
	} else {
		todoWrapper.classList.remove('hide');
	}

	if (localStorage.getItem('bgSourse')) {
		select.value = localStorage.getItem('bgSourse');
	}
	if (select.value === '1') {
		bgTagsInput.disabled = 'true';
		bgTagsInput.style.background = '#e9e9e9';
	}
	setBg();
	stylizeSelect();

	if (localStorage.getItem('todoList')) {
		if (localStorage.getItem('todoList') === 'empty') ul.innerHTML = '';
		else ul.innerHTML = localStorage.getItem('todoList');
	}

	if (localStorage.getItem('todoBtn')) {
		todoBtn.className = localStorage.getItem('todoBtn');
	}

	if (localStorage.getItem('todoModal')) {
		todoModal.className = localStorage.getItem('todoModal');
	}
}

function checkPlaceholder() {
	if (nameField.value) nameField.placeholder = '';
	else nameField.placeholder = i18next.t('placeholdername');
}

window.addEventListener('DOMContentLoaded', getLocalStorage);
window.addEventListener('DOMContentLoaded', initTranslate);
window.addEventListener('DOMContentLoaded', checkPlaceholder);
nameField.addEventListener('input', checkPlaceholder);

/* Slider BG */

let randomNum;
getRandomNum();

function getRandomNum() {
	min = 1;
	max = 20;
	randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
}

async function setBg() {
	const timeOfDay = getTimeOfDay();
	const bgNum = String(randomNum).padStart(2, '0');
	const img = new Image();
	switch (select.value) {
		case '1': {
			img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
			break;
		}
		case '2': {
			let tags1 = userTags ? userTags : `nature,${timeOfDay}`;
			const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tags1}&client_id=91jsucWaUvG6cg9QW9c4-SRMtvxnrArbcqLsW86o6nw`;
			const res = await fetch(url);
			if (res.ok) {
				const data = await res.json();
				img.src = data.urls.regular;
			} else errorField.innerHTML = i18next.t('errorfield');
			break;
		}
		case '3': {
			let tags;
			let url;
			const galleryArr = {
				morning: '72157720069530982',
				afternoon: '72157720111881805',
				evening: '72157720111880160',
				night: '72157720062587146',
			};
			if (userTags) {
				tags = userTags;
				url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=2c35d105e6641b98fec1b87ceed3d9e0&tags=${tags}&tag_mode=all&extras=url_l&format=json&nojsoncallback=1`;
			} else {
				url = `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=2c35d105e6641b98fec1b87ceed3d9e0&gallery_id=${galleryArr[timeOfDay]}&extras=url_l&format=json&nojsoncallback=1`;
			}
			const res = await fetch(url);
			const data = await res.json();
			flickrArr = [];

			if (data.photos.photo.length < 1) {
				errorField.innerHTML = i18next.t('errorfield');
				return;
			}
			for (let obj of data.photos.photo) {
				if (obj.url_l) flickrArr.push(obj.url_l);
			}

			let min = 0;
			let max = flickrArr.length - 1;
			flickrNum = Math.floor(Math.random() * (max - min + 1)) + min;
			img.src = flickrArr[flickrNum];
			break;
		}
		default: {
			img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
			break;
		}
	}
	img.onload = () => {
		body.style.backgroundImage = `url('${img.src}')`;
	};
}

function setBgFlickrPrev() {
	flickrNum = flickrNum > 0 ? flickrNum - 1 : flickrArr.length - 1;
	const img = new Image();
	img.src = flickrArr[flickrNum];
	img.onload = () => {
		body.style.backgroundImage = `url('${img.src}')`;
	};
}

function setBgFlickrNext() {
	flickrNum = flickrNum < flickrArr.length - 1 ? flickrNum + 1 : 0;
	const img = new Image();
	img.src = flickrArr[flickrNum];
	img.onload = () => {
		body.style.backgroundImage = `url('${img.src}')`;
	};
}

function getSlideNext() {
	if (select.value === '3') {
		setBgFlickrNext();
	} else {
		randomNum = randomNum < 20 ? randomNum + 1 : 1;
		setBg();
	}
}

function getSlidePrev() {
	if (select.value === '3') {
		setBgFlickrPrev();
	} else {
		randomNum = randomNum > 1 ? randomNum - 1 : 20;
		setBg();
	}
}

slidePrev.addEventListener('click', getSlidePrev);
slideNext.addEventListener('click', getSlideNext);

/* weather */

weatherError.textContent = '';

async function getWeather() {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${i18next.t(
		'weatherlang',
	)}&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
	const res = await fetch(url);
	const data = await res.json();
	if (data.cod === '400' || data.cod === '404') {
		weatherError.textContent = i18next.t('weathererror', { cityname: city.value });
		weatherIcon.className = '';
		temperature.textContent = '';
		weatherDescription.textContent = '';
		wind.textContent = '';
		humidity.textContent = '';
	} else {
		weatherError.textContent = '';
		weatherIcon.className = 'weather-icon owf';
		weatherIcon.classList.add(`owf-${data.weather[0].id}`);
		temperature.textContent = `${Math.round(data.main.temp)}°C`;
		weatherDescription.textContent = data.weather[0].description;
		wind.textContent = i18next.t('windspeed', { windspeed: Math.round(data.wind.speed) });
		humidity.textContent = i18next.t('humidity', { h: Math.round(data.main.humidity) });
	}
}

function checkPlaceholderCity() {
	if (city.value) city.placeholder = '';
	else city.placeholder = i18next.t('placeholdercity');
	localStorage.setItem('city', city.value);
}

city.addEventListener('change', getWeather);
city.addEventListener('input', checkPlaceholderCity);

/* Quotes */

async function getQuotes() {
	let path = i18next.t('quotespath');
	const res = await fetch(path);
	const data = await res.json();
	const count = data.length;
	const min = 0;
	const max = count - 1;
	const quoteNum = Math.floor(Math.random() * (max - min + 1)) + min;
	quote.textContent = data[quoteNum].text;
	author.textContent = !data[quoteNum].author ? 'Unknown author' : data[quoteNum].author;
}

changeQuoteBtn.addEventListener('click', getQuotes);

/* Player */

const audio = new Audio();

function buildAudio() {
	audio.src = playList[playNum].src;
	playerTitle.textContent = playList[playNum].title;
}

buildAudio();

function playAudio() {
	if (!isPlay) {
		audio.play();
		isPlay = true;
	} else {
		audio.pause();
		isPlay = false;
	}
	stylePlayList();
}

function createPlayList() {
	playList.forEach((el) => {
		const li = document.createElement('li');
		li.classList.add('play-item');
		li.textContent = el.title;
		playListContainer.append(li);
	});
}
createPlayList();

const items = document.querySelectorAll('.play-item');

function playNext() {
	removePausedClass();
	playNum = playNum < playList.length - 1 ? playNum + 1 : 0;
	audio.src = playList[playNum].src;
	playerTitle.textContent = playList[playNum].title;
	audio.play();
	playBtn.classList.add('pause');
	isPlay = true;
	stylePlayList();
}

function playPrev() {
	removePausedClass();
	playNum = playNum > 0 ? playNum - 1 : playList.length - 1;
	audio.src = playList[playNum].src;
	playerTitle.textContent = playList[playNum].title;
	audio.play();
	playBtn.classList.add('pause');
	isPlay = true;
	stylePlayList();
}

function togglePlay() {
	if (!isPlay) {
		playBtn.classList.add('pause');
		items[playNum].classList.remove('paused');
	} else {
		playBtn.classList.remove('pause');
		removePausedClass();
		items[playNum].classList.add('paused');
	}
}

playBtn.addEventListener('click', togglePlay);

function stylePlayList() {
	for (let i = 0; i < items.length; i++) {
		if (playNum === i) {
			items[i].classList.add('item-active');
		} else {
			items[i].classList.remove('item-active');
		}
	}
}

playBtn.addEventListener('click', playAudio);
playBtn.addEventListener('click', togglePlay);
playPrevBtn.addEventListener('click', playPrev);
playNextBtn.addEventListener('click', playNext);
audio.addEventListener('ended', playNext);

soundVolume.addEventListener('input', function () {
	let value = this.value;
	audio.volume = Math.floor(value) / 100;
	this.style.background = `linear-gradient(to right, #fff 0%, #fff ${value}%, rgba(255,255,255, .5) ${value}%, rgba(255,255,255, .5) 100%)`;
	volumeUpdate();
});

progress.addEventListener('input', function () {
	let value = this.value;
	if (value >= 100) value = 99;
	this.style.background = `linear-gradient(to right, #fff 0%, #fff ${value}%, rgba(255,255,255, .5) ${value}%, rgba(255,255,255, .5) 100%)`;
	audio.currentTime = Math.floor((value * audio.duration) / 100);
});

function handleProgress() {
	timer.textContent = formatTime(audio.currentTime);
	duration.textContent = playList[playNum].duration;

	let percent = Math.round((audio.currentTime / audio.duration) * 100);
	if (Number.isNaN(percent)) {
		percent = 0;
	}
	progress.value = percent;
	progress.style.background = `linear-gradient(to right, #fff  0%, #fff  ${progress.value}%, rgba(255,255,255, .5) ${progress.value}%, rgba(255,255,255, .5) 100%)`;
}

function formatTime(secs) {
	let minutes = Math.floor(secs / 60) || 0;
	let seconds = Math.floor(secs - minutes * 60) || 0;
	return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

function volumeUpdate() {
	if (audio.volume == 0) {
		volumeBtn.style.opacity = '0.3';
	} else {
		volumeBtn.style.opacity = '0.8';
	}
}

function toggleVolume() {
	if (audio.volume == 0) {
		audio.volume = soundVolume.value / 100;
	} else audio.volume = 0;
	volumeUpdate();
}

audio.addEventListener('timeupdate', handleProgress);
volumeBtn.addEventListener('click', toggleVolume);

function removePausedClass() {
	for (let i = 0; i < items.length; i++) {
		items[i].classList.remove('paused');
	}
}

let isFirstPlay = false;

items.forEach((item, index) =>
	item.addEventListener('click', function () {
		if (playNum !== index || !isFirstPlay) {
			playNum = index;
			audio.src = playList[index].src;
			playerTitle.textContent = playList[index].title;
			audio.play();
			items[index].classList.remove('paused');
			playBtn.classList.add('pause');
			isPlay = true;
			isFirstPlay = true;
			stylePlayList();
		} else {
			if (isPlay) {
				removePausedClass();
				items[index].classList.add('paused');
				playBtn.classList.remove('pause');
				audio.pause();
				isPlay = false;
			} else {
				items[index].classList.remove('paused');
				playBtn.classList.add('pause');
				audio.play();
				isPlay = true;
			}
		}
	}),
);

/* Settings */

function openSettingsModal() {
	settingsModal.classList.toggle('open');
	settingsBtn.classList.toggle('open');
}

settingsBtn.addEventListener('click', openSettingsModal);

function stylizeSelect() {
	let x, i, j, selElmnt, a, b, c;
	x = document.getElementsByClassName('custom-select');
	for (i = 0; i < x.length; i++) {
		selElmnt = x[i].getElementsByTagName('select')[0];
		a = document.createElement('div');
		a.setAttribute('class', 'select-selected');
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		x[i].appendChild(a);
		b = document.createElement('DIV');
		b.setAttribute('class', 'select-items select-hide');
		for (j = 0; j < selElmnt.length; j++) {
			c = document.createElement('DIV');
			c.innerHTML = selElmnt.options[j].innerHTML;
			c.addEventListener('click', function (e) {
				let y, i, k, s, h;
				s = this.parentNode.parentNode.getElementsByTagName('select')[0];
				h = this.parentNode.previousSibling;
				for (i = 0; i < s.length; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						y = this.parentNode.getElementsByClassName('same-as-selected');
						for (k = 0; k < y.length; k++) {
							y[k].removeAttribute('class');
						}
						this.setAttribute('class', 'same-as-selected');
						break;
					}
				}
				h.click();
				toggleTagsInput();
				setBg();
			});
			b.appendChild(c);
		}
		x[i].appendChild(b);
		a.addEventListener('click', function (e) {
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle('select-hide');
			this.classList.toggle('select-arrow-active');
		});
	}
}

function closeAllSelect(elmnt) {
	let x,
		y,
		i,
		arrNo = [];
	x = document.getElementsByClassName('select-items');
	y = document.getElementsByClassName('select-selected');
	for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i);
		} else {
			y[i].classList.remove('select-arrow-active');
		}
	}
	for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add('select-hide');
		}
	}
}

document.addEventListener('click', closeAllSelect);

function toggleShowTime() {
	if (showTimeBtn.checked) time.classList.remove('hide');
	else time.classList.add('hide');
}

function toggleShowDate() {
	if (showDateBtn.checked) dateField.classList.remove('hide');
	else dateField.classList.add('hide');
}

function toggleShowGreeting() {
	if (showGreetingBtn.checked) greetingContainer.classList.remove('hide');
	else greetingContainer.classList.add('hide');
}

function toggleShowWeather() {
	if (showWeatherBtn.checked) weather.classList.remove('hide');
	else weather.classList.add('hide');
}

function toggleShowQuotes() {
	if (showQuotesBtn.checked) quoteWrapper.classList.remove('hide');
	else quoteWrapper.classList.add('hide');
}

function toggleShowAudio() {
	if (showAudioBtn.checked) player.classList.remove('hide');
	else {
		player.classList.add('hide');
		if (isPlay) {
			playBtn.classList.remove('pause');
			removePausedClass();
			items[playNum].classList.add('paused');
			audio.pause();
			isPlay = false;
		}
	}
}

function toggleShowTodo() {
	if (showTodoBtn.checked) todoWrapper.classList.remove('hide');
	else todoWrapper.classList.add('hide');
}

showTimeBtn.addEventListener('change', toggleShowTime);
showDateBtn.addEventListener('change', toggleShowDate);
showGreetingBtn.addEventListener('change', toggleShowGreeting);
showWeatherBtn.addEventListener('change', toggleShowWeather);
showQuotesBtn.addEventListener('change', toggleShowQuotes);
showAudioBtn.addEventListener('change', toggleShowAudio);
showTodoBtn.addEventListener('change', toggleShowTodo);

/* bg from API */

function setBgTagsInput() {
	errorField.innerHTML = '';
	userTags = bgTagsInput.value;
	userTags = userTags.replace(/\s/g, '');
	if (select.value === '3') {
		userTags = userTags.split(',').join(',+');
	}
	localStorage.setItem('usertags', userTags);
	setBg();
}

function toggleTagsInput() {
	if (select.value === '1') {
		bgTagsInput.disabled = true;
		bgTagsInput.style.background = '#e9e9e9';
	} else {
		bgTagsInput.disabled = false;
		bgTagsInput.style.background = 'transparent';
	}
}

bgTagsInput.addEventListener('focus', function () {
	errorField.innerHTML = i18next.t('prompt');
});

bgTagsInput.addEventListener('blur', function () {
	if (errorField.innerHTML === i18next.t('prompt')) {
		errorField.innerHTML = '';
	}
});

bgTagsInput.addEventListener('keydown', function (e) {
	if (e.keyCode === 13) {
		setBgTagsInput();
	}
});

/* TODO */

function openTodoModal() {
	todoModal.classList.toggle('open');
	todoBtn.classList.toggle('open');
}

todoBtn.addEventListener('click', openTodoModal);

function createTodo() {
	const li = document.createElement('li');
	const textSpan = document.createElement('span');
	textSpan.classList.add('todo-text');
	const newTodo = todoInput.value;
	textSpan.append(newTodo);

	const deleteBtn = document.createElement('span');
	deleteBtn.classList.add('todo-trash');
	const icon = document.createElement('i');
	icon.classList.add('fas', 'fa-trash-alt');
	deleteBtn.appendChild(icon);

	ul.appendChild(li).append(textSpan, deleteBtn);
	todoInput.value = '';
}

todoInput.addEventListener('keypress', (keyPressed) => {
	const keyEnter = 13;
	if (keyPressed.which == keyEnter) {
		createTodo();
	}
});

ul.addEventListener(
	'click',
	function (ev) {
		if (ev.target.tagName === 'LI') {
			ev.target.classList.toggle('checked');
		}
		if (ev.target.classList.contains('todo-trash')) {
			ev.target.parentElement.remove();
			ev.stopPropagation();
		}
	},
	false,
);

clearBtn.addEventListener('click', function () {
	ul.innerHTML = '';
});

function checkAll() {
	let str = ul.getElementsByTagName('li');
	for (let i = 0; i < str.length; i++) {
		str[i].classList.add('checked');
	}
}

checkAllBtn.addEventListener('click', checkAll);

/* Translate */

function changeLang() {
	if (!langBtn.checked) {
		appLang = 'ru';
	} else {
		appLang = 'en';
	}
	i18next.changeLanguage(appLang);
	localStorage.setItem('applang', appLang);
}

function updateContent() {
	showGreeting();
	settingsTitle.innerHTML = i18next.t('settings');
	langTitle.innerHTML = i18next.t('language');
	langEng.innerHTML = i18next.t('langeng');
	langRu.innerHTML = i18next.t('langru');
	bgImgTitle.innerHTML = i18next.t('bgimg');
	bgSourceTitle.innerHTML = i18next.t('bgsource');
	bgTagsTitle.innerHTML = i18next.t('bgtags');
	showTitle.innerHTML = i18next.t('show');
	showTimeTitle.innerHTML = i18next.t('showtime');
	showDateTitle.innerHTML = i18next.t('showdate');
	showGreetingTitle.innerHTML = i18next.t('showgreeting');
	showQuotesTitle.innerHTML = i18next.t('showquotes');
	showWeatherTitle.innerHTML = i18next.t('showweather');
	showAudioTitle.innerHTML = i18next.t('showaudio');
	showTodoTitle.innerHTML = i18next.t('showtodo');
	bgTagsInput.title = i18next.t('tagstitle');
	bgTagsInput.placeholder = i18next.t('tagsplaceholder');
	todoBtn.innerHTML = i18next.t('todobtn');
	clearBtn.innerHTML = i18next.t('clearbtn');
	checkAllBtn.innerHTML = i18next.t('checkallbtn');
	todoTitle.innerHTML = i18next.t('todotitle');
	todoInput.placeholder = i18next.t('todoinput');
	errorField.innerHTML = errorField.innerHTML ? i18next.t('errorfield') : '';
	if (!localStorage.getItem('city')) {
		city.value = i18next.t('defaultcity');
	}
	showDate();
	getWeather();
	getQuotes();
	nameField.placeholder = i18next.t('placeholdername');
	city.placeholder = i18next.t('placeholdercity');
}

langBtn.addEventListener('change', changeLang);
