function planobj(area) {
    switch (area) {
        case 33.67:
            return "/build/img/svg/3367.png"
        case 38.2:
            return "/build/img/svg/382.png"
        case 52:
            return "/build/img/svg/52.png"
        case 73:
            return "/build/img/svg/73.png"
        default:
            return '/src/img/svg/apartment.svg';
    }
}
function linkPopup(id) {
    let lp = '<a class="waves-effect waves-light btn-small modal-trigger" data-id="' + id + '" href="#apartment01"><span class="hide-on-small-and-down clickapart lang" data-id="' + id + '" data-lan="tbdetail">DETAIL </span><strong data-id="' + id + '">&#8594;</strong></a>';
    return lp;
}
let apartmentDescripton = [];
let viewToWindow = [];
let sortDirection = false;

function ApartRoom (apartment, beds, floor, area, price, view, linkPopup) {
    this.apartment = apartment;
    this.beds = beds;
    this.floor = floor;
    this.area = area;
    this.price = price;
    this.view = view;
    this.linkpopupwindow = linkPopup;
}
ApartRoom.prototype.convertCurrency = function() { // конвертируем в нужную валюту в зависимости от языка
    let flagcurrency =  document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1"); //From language.js file what language need choose cookie or navigator.language. return fl variable with language
    let priceconv = this.price;
    switch (true) {
        case flagcurrency === 'ru':
            let rub = ((Math.ceil(this.price * currencythbphpcron.thbrub))/1000);
            priceconv = (Math.ceil(rub + rub*2/100))*1000;
            break;
        case flagcurrency === 'us':
            let usd = ((Math.ceil(this.price * currencythbphpcron.thbusd))/100);
            priceconv = (Math.ceil(usd + usd*2/100))*100;
            break;
        case flagcurrency === 'ch':
            let cny = ((Math.ceil(this.price * currencythbphpcron.thbcny))/100);
            priceconv = (Math.ceil(cny + cny*2/100))*100;
            break;
        case flagcurrency === 'th':
            priceconv = this.price;
            break;
            default:
            break;
    }
    return priceconv;
}

let apartmentsData = [
    new ApartRoom( 108, 1, 1, 33.67, 3900003, "Forest", linkPopup(108) ),
    new ApartRoom( 109, 1, 1, 33.67, 3900003, "Forest", linkPopup(109) ),
    new ApartRoom( 202, 1, 2, 33.67, 4246460, "Pool", linkPopup(202) ),
    new ApartRoom( 207, 1, 2, 38.2, 5139000, "Garden", linkPopup(207) ),
    new ApartRoom( 327, 1, 3, 73, 8724960, "Forest", linkPopup(327) ),
    new ApartRoom( 328, 1, 3, 73, 8724960, "Forest", linkPopup(328) ),
    new ApartRoom( 329, 1, 3, 52, 7240007, "Mountain", linkPopup(329) ),
    new ApartRoom( 330, 1, 3, 52, 7240007, "Mountain", linkPopup(330) ),
    new ApartRoom( 401, 1, 4, 33.67, 4446460, "Seaview", linkPopup(401) ),
    new ApartRoom( 402, 1, 4, 33.67, 4446460, "Seaview", linkPopup(402) ),
    new ApartRoom( 403, 1, 4, 33.67, 4446460, "Seaview", linkPopup(403) ),
    new ApartRoom( 404, 1, 4, 33.67, 4446460, "Seaview", linkPopup(404) ),
    new ApartRoom( 405, 1, 4, 33.67, 4446460, "Seaview", linkPopup(405) ),
    new ApartRoom( 406, 1, 4, 33.67, 4446460, "Seaview", linkPopup(406) ),
    new ApartRoom( 407, 1, 4, 38.2, 5339000, "Forest", linkPopup(407) ),
    new ApartRoom( 408, 1, 4, 33.67, 4077100, "Forest", linkPopup(408) ),
    new ApartRoom( 409, 1, 4, 33.67, 4077100, "Forest", linkPopup(409) ),
    new ApartRoom( 410, 1, 4, 33.67, 4077100, "Forest", linkPopup(410) ),
    new ApartRoom( 411, 1, 4, 33.67, 4077100, "Forest", linkPopup(411) ),
    new ApartRoom( 420, 1, 4, 38.2, 5148000, "Forest", linkPopup(420) ),
    new ApartRoom( 421, 1, 4, 33.67, 4446460, "Mountain", linkPopup(421) ),
    new ApartRoom( 422, 1, 4, 33.67, 4446460, "Mountain", linkPopup(422) ),
    new ApartRoom( 423, 1, 4, 33.67, 4446460, "Mountain", linkPopup(423) ),
    new ApartRoom( 424, 1, 4, 33.67, 4446460, "Mountain", linkPopup(424) ),
    new ApartRoom( 425, 1, 4, 33.67, 4446460, "Mountain", linkPopup(425) ),
    new ApartRoom( 426, 1, 4, 33.67, 4446460, "Mountain", linkPopup(426) ),
    new ApartRoom( 427, 1, 4, 73, 8824970, "Forest", linkPopup(427) ),
    new ApartRoom( 428, 1, 4, 73, 8824970, "Forest", linkPopup(428) ),
    new ApartRoom( 508, 1, 5, 33.67, 4177100, "Forest", linkPopup(508) ),
    new ApartRoom( 509, 1, 5, 33.67, 4177100, "Forest", linkPopup(509) ),
    new ApartRoom( 511, 1, 5, 33.67, 4177100, "Forest", linkPopup(511) ),
    new ApartRoom( 512, 1, 5, 33.67, 4177100, "Forest", linkPopup(512) ),
    new ApartRoom( 513, 1, 5, 33.67, 4177100, "Forest", linkPopup(513) ),
    new ApartRoom( 515, 1, 5, 33.67, 4177100, "Forest", linkPopup(515) ),
    new ApartRoom( 523, 1, 5, 33.67, 4546460, "Mountain", linkPopup(523) ),
    new ApartRoom( 524, 1, 5, 33.67, 4546460, "Mountain", linkPopup(524) ),
    new ApartRoom( 525, 1, 5, 33.67, 4546460, "Mountain", linkPopup(525) ),
    new ApartRoom( 526, 1, 5, 33.67, 4546460, "Mountain", linkPopup(526) ),
    new ApartRoom( 527, 1, 5, 73, 8924987, "Forest", linkPopup(527) ),
    new ApartRoom( 528, 1, 5, 73, 8924987, "Forest", linkPopup(528) ),
    new ApartRoom( 529, 1, 5, 52, 7440004, "Mountain", linkPopup(529) ),
    new ApartRoom( 530, 1, 5, 52, 7440004, "Mountain", linkPopup(530) ),
    new ApartRoom( 603, 1, 6, 33.67, 4646460, "Seaview", linkPopup(603) ),
    new ApartRoom( 604, 1, 6, 33.67, 4646460, "Seaview", linkPopup(604) ),
    new ApartRoom( 608, 1, 6, 33.67, 4277100, "Forest", linkPopup(608) ),
    new ApartRoom( 609, 1, 6, 33.67, 4277100, "Forest", linkPopup(609) ),
    new ApartRoom( 610, 1, 6, 33.67, 4277100, "Forest", linkPopup(610) ),
    new ApartRoom( 611, 1, 6, 33.67, 4277100, "Forest", linkPopup(611) ),
    new ApartRoom( 612, 1, 6, 33.67, 4277100, "Forest", linkPopup(612) ),
    new ApartRoom( 613, 1, 6, 33.67, 4277100, "Forest", linkPopup(613) ),
    new ApartRoom( 614, 1, 6, 33.67, 4277100, "Forest", linkPopup(614) ),
    new ApartRoom( 615, 1, 6, 33.67, 4277100, "Forest", linkPopup(615) ),
    new ApartRoom( 616, 1, 6, 33.67, 4277100, "Forest", linkPopup(616) ),
    new ApartRoom( 621, 1, 6, 33.67, 4646460, "Mountain", linkPopup(621) ),
    new ApartRoom( 622, 1, 6, 33.67, 4646460, "Mountain", linkPopup(622) ),
    new ApartRoom( 624, 1, 6, 33.67, 4646460, "Mountain", linkPopup(624) ),
    new ApartRoom( 625, 1, 6, 33.67, 4646460, "Mountain", linkPopup(625) ),
    new ApartRoom( 626, 1, 6, 33.67, 4646460, "Mountain", linkPopup(626) ),
    new ApartRoom( 627, 1, 6, 73, 9024990, "Forest", linkPopup(627) ),
    new ApartRoom( 628, 1, 6, 73, 9024990, "Forest", linkPopup(628) ),
    new ApartRoom( 629, 1, 6, 52, 7540000, "Mountain", linkPopup(629) ),
    new ApartRoom( 630, 1, 6, 52, 7540000, "Mountain", linkPopup(630) ),
    new ApartRoom( 701, 1, 7, 33.67, 4377100, "Pool", linkPopup(701) ),
    new ApartRoom( 702, 1, 7, 33.67, 4377100, "Pool", linkPopup(702) ),
    new ApartRoom( 703, 1, 7, 33.67, 4377100, "Pool", linkPopup(703) ),
    new ApartRoom( 704, 1, 7, 33.67, 4377100, "Pool", linkPopup(704) ),
    new ApartRoom( 705, 1, 7, 33.67, 4377100, "Pool", linkPopup(705) ),
    new ApartRoom( 706, 1, 7, 33.67, 4377100, "Pool", linkPopup(706) ),
    new ApartRoom( 708, 1, 7, 33.67, 4377100, "Forest", linkPopup(708) ),
    new ApartRoom( 709, 1, 7, 33.67, 4377100, "Forest", linkPopup(709) ),
    new ApartRoom( 710, 1, 7, 33.67, 4377100, "Forest", linkPopup(710) ),
    new ApartRoom( 711, 1, 7, 33.67, 4377100, "Forest", linkPopup(711) ),
    new ApartRoom( 712, 1, 7, 33.67, 4377100, "Forest", linkPopup(712) ),
    new ApartRoom( 713, 1, 7, 33.67, 4377100, "Forest", linkPopup(713) ),
    new ApartRoom( 716, 1, 7, 33.67, 4646460, "Mountain", linkPopup(716) ),
    new ApartRoom( 717, 1, 7, 33.67, 4646460, "Mountain", linkPopup(717) ),
    new ApartRoom( 720, 1, 7, 33.67, 4646460, "Mountain", linkPopup(720) ),
    new ApartRoom( 721, 1, 7, 73, 9125000, "Forest", linkPopup(721) ),
    new ApartRoom( 722, 1, 7, 73, 9125000, "Forest", linkPopup(722) ),
    new ApartRoom( 723, 1, 7, 52, 7540000, "Mountain", linkPopup(723) ),
    new ApartRoom( 724, 1, 7, 52, 7540000, "Mountain", linkPopup(724) ),
];
// apartmentsData.object().prototype.firstProto = function (  ) {
//     return console.log(this.area + this.apartment);
// }

 function loadTableData( apartmentsData ) {
    const tableBoby = document.getElementById('tableData');
    let dataHTML = '';
    for (let data of apartmentsData) {
        dataHTML += `<tr>
              <td>${data.apartment}</td>
              <td class="hide-on-med-and-down">${data.beds}</td>
              <td class="hide-on-med-and-down">${data.floor}</td>
              <td>${data.area} m<sup><small>2</small></sup></td>
              <td>${data.convertCurrency()}</td>
              <td class="hide-on-small-and-down">${data.view}</td>
              <td class="eventloadinfopopup">${data.linkpopupwindow}</td>
             </tr>`;
    }
    tableBoby.innerHTML = dataHTML;
}

function sortColumn(columnName) {
    const dataType = typeof apartmentsData[0][columnName];
    sortDirection = !sortDirection;

    switch (dataType) {
        case "number":
            sortNumberColumn(sortDirection, columnName);
            break;
        case "string":
            sortStringColumn(sortDirection, columnName);
            break;
    }
    loadTableData(apartmentsData);
}

function sortNumberColumn(sort, columnName) {
    apartmentsData = apartmentsData.sort((n1, n2) => {
        return sort ? n1[columnName] - n2[columnName] : n2[columnName] - n1[columnName];
    })
}

function sortStringColumn(sort, columnName) {
    apartmentsData = apartmentsData.sort((s1, s2) => {
        return sort ? ('' + s1[columnName]).localeCompare(s2[columnName]) : ('' + s2[columnName]).localeCompare(s1[columnName]);
    })
}

window.onload = () => {
    loadTableData(apartmentsData);

    function clickApartment() {
        let elementclickareaTableData = event.target;
        let idapart = elementclickareaTableData.dataset.id;
        if (idapart > 99) {
            console.log(idapart);
            document.querySelector('.roominfo .numberApartment').innerText = idapart;
            const showroom = apartmentsData.find(apart => apart.apartment == idapart);
            document.querySelector('.roominfo .price').innerText = showroom.price;
            document.querySelector('.roominfo .floorapartment').innerText = showroom.floor;
            document.querySelector('.roominfo .apsq').innerText = showroom.area;
            document.querySelector('.roominfo .viewwindow').innerText = showroom.view;
            document.getElementById('planapartment').src = planobj(showroom.area);
            document.getElementById('galaryrooms').href = '/' + Math.trunc((showroom.area)*100) + '/';
            //console.log(showroom.area.match(r).map(Number));
            //Логика формирования данных в попап окне.
            console.log (showroom);
        }
    }
    document.querySelector('#tableData').onclick = clickApartment;
    //document.querySelector('#tableData').addEventListener("onclick", clickApartment(), false)
}



