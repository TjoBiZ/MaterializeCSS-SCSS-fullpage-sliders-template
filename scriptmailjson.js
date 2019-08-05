let cookieValueFirstVisit = document.cookie.replace(/(?:(?:^|.*;\s*)firstvisited\s*\=\s*([^;]*).*$)|^.*$/, "$1"); //Парсим есть ли данная запись в cookie - на первый визит сайта.
    if(!cookieValueFirstVisit) { //Если нету, то создаем cookie со временем о первом визите и запускаем-создаем счетчик просмотренных страниц.//
        let timenow = new Date();
        let firsttime ='firstvisited=' + timenow.toString();
        document.cookie = firsttime + "; domain=." + document.domain + "; path=/; expires=Thu, 01 Jan 2030 00:00:00 UTC;";
        document.cookie = "countpages=1 ; domain=." + document.domain + "; path=/; expires=Thu, 01 Jan 2030 00:00:00 UTC;";
    } else { //Увеличиваем счетчик на единиц
			  window.cookieValueCountPages = document.cookie.replace(/(?:(?:^|.*;\s*)countpages\s*\=\s*([^;]*).*$)|^.*$/, "$1");
			  document.cookie = "countpages=" + ++window.cookieValueCountPages + "; domain=." + document.domain + "; path=/; expires=Thu, 01 Jan 2030 00:00:00 UTC;";
    }
    // Читаем куку содержащую Client ID
    function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    let google_id = getCookie('_ga') ? getCookie('_ga').slice(6) : '';
    var timerIdJS = setInterval(function(countinteration) {
    google_id = getCookie('_ga') ? getCookie('_ga').slice(6) : '';
    }, 900);
    // через 10 сек остановить повторы
    setTimeout(function() {
    clearInterval(timerIdJS);
    }, 10000);

let materializesforms = ["RecordViewingForm", "MobileCallBack"]; //let materializesforms = ["FormJSON", "AnotherFormJSON"]; // Перечисляем индификаторы форм, которые нужно обработать.

materializesforms.forEach(function(pagesforms, materializesforms) {

    let contactForm = document.getElementById(pagesforms); //получаем объект обрабатываемой формы

    contactForm.addEventListener('submit', function(event) { //отлавливаем событие нажатие на кнопку у формы
        event.preventDefault(); //отменяем все действия выполняемые по умолчанию браузером после этого события

        let dataf = new FormData(contactForm); // Передаем объект в функцию FormData
        //console.log(Array.from(dataf)); // - так можно посмотреть, что передлось

        //console.log('Действия пред отправкой JSON после нажатия'); // Тут можно задать действия сразу после нажатия кнопкп ПЕРЕД отправкаой JSON - "подождите сообщение отправляется."
            let mobileAnswer;
            if (this.id == "MobileCallBack") {
            mobileAnswer = document.getElementById("middleform")
            } else {
            mobileAnswer = contactForm
            }
        mobileAnswer.innerHTML = '<div class="waitingmessage center"> <div class="preloader-wrapper big active"> <div class="spinner-layer spinner-blue-only"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div></div><div class="textwaiting">Подождите чуть-чуть, Ваше сообщение в пути.</div></div>';


        let request = new XMLHttpRequest();
        let url = "jsonmailformjsajax.php";
        request.open("POST", url, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) { // сценарий скриптов после ответа от сервера.
                let jsonData = JSON.parse(request.response);
                console.log(jsonData);
                console.log(request.response);
                let messageconcatination = '';
                let usersName = '';
                if (jsonData['name'] === null || jsonData['name'] === '') {
                    usersName = '!';
                } else {
                    usersName = ", " + jsonData['name'] + "!";
                }
                if (jsonData['message'] === null || jsonData['message'] === '') {
                } else { messageconcatination = ': <em style="color:#516eee">' + jsonData['message'] + '</em>' }
                mobileAnswer.innerHTML = "<div class='center'><h3>Спасибо за Ваш интерес" + usersName + '</h3><br> Ваше сообщение' + messageconcatination + ' отправлено. <br><br> Мы уже увидели вашу заявку и в ближайшие 24 часа с Вами свяжется наш специалист. <br> Если у Вас есть срочный вопрос, Вы можете связаться с нами по телефонам:<br><a href="tel:+78007755760">8 800 775 57 60</a><br><a href="tel:+66620960110">+66 62096 0110 </a><br><a href="tel:+66652030555">+66 65203 0555</a></div>';
            }
        };

        let current_datetime = new Date(); // Время и часовой пояс на компьютере клиента

        //Дополняем объект FormData нужными дополнительными данными полученные из необработанных форм и других источников.

        let varcheck; //Временная переменная с полученными значениями из форм.
        let multipleoptions; ( varcheck = contactForm.querySelector(".multipleoptions .select-wrapper input")) ? multipleoptions = varcheck.value : multipleoptions = false; // получаем данные старым способом
        dataf.append('multipleoptions', multipleoptions);
        let name; ( varcheck = contactForm.querySelector('input[name="name"]')) ? name = varcheck.value : name = false;
        let radiochoice; if (contactForm.querySelector('input[type="radio"]')) {let groupnameradio = contactForm.querySelector('input[type="radio"]').name;
        let rates = document.getElementsByName(groupnameradio); // Только в document дереве, в переменной не работает уникализируем в html через атрибут name, который группирует объекты radio!
            for(var i = 0; i < rates.length; i++){
                if(rates[i].checked){
                    dataf.append('radiochoice', rates[i].id);
                }
            }
        } else {
            dataf.append('radiochoice', "false");
        }
        dataf.append('browser', navigator.userAgent);
        dataf.append('language', navigator.language);
        dataf.append('firstvititedsite', cookieValueFirstVisit);
        dataf.append('time', current_datetime.toString());
        if (typeof cookieValueCountPages === "undefined") { window.cookieValueCountPages = 1; }
        dataf.append('countpages', cookieValueCountPages);
        dataf.append('GoogleClientID', google_id);

        let arrayformdata = {};
        dataf.forEach((value, key) => {arrayformdata[key] = value}); // Преобразуем FormData объект в массив по стандарту ES6
        let jsonformdata = JSON.stringify(arrayformdata); // Полученный массив в JSON Формат

        //console.log(Array.from(dataf));// Посмотреть собранный массив данных с формы
        request.send(jsonformdata); // request.send(dataf); - можно и отправить на сервер зашифрованный FormData объект XHR - 2  версии
    });

});


let opencallmobileback = document.getElementById("controlphonebtnopen");
let callmobileclose = document.getElementById("controlphonebtnclose");
let formcallback = document.getElementById("windowfixedform");
opencallmobileback.addEventListener('click', function () {
    opencallmobileback.style.display = 'none';
    callmobileclose.style.display = 'block';
    formcallback.style.transform = 'scale(1)  translate(0px, 0px)';
});
callmobileclose.addEventListener('click', function () {
    opencallmobileback.style.display = 'block';
    callmobileclose.style.display = 'none';
    formcallback.style.transform = 'scale(0) translate(100%, 100%)';
});