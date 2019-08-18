function planobj(area) {
    switch (area) {
        case 33.67:
            return "/src/img/svg/apartment3367.svg"
        case 38.2:
            return "/src/img/svg/apartment382.svg"
        case 52:
            return "/src/img/svg/apartment52.svg"
        case 73:
            return "/src/img/svg/apartment73.svg"
        default:
            return '/src/img/svg/apartment.svg';
    }
}
function linkPopup(id) {
    let lp = '<a class="waves-effect waves-light btn-small modal-trigger" data-id="' + id + '" href="#apartment01"><span class="hide-on-small-and-down">DETAIL </span>&#8594;</a>';
    return lp;
}
let apartmentDescripton = [];
let viewToWindow = [];
let sortDirection = false;

let apartmentsData = [
    {apartment: 108, beds: 1, floor: 1, area: 33.67, price: 3900003, view: "Forest", linkpopupwindow: linkPopup(108) },
    {apartment: 109, beds: 1, floor: 1, area: 33.67, price: 3900003, view: "Forest", linkpopupwindow: linkPopup(109) },
    {apartment: 202, beds: 1, floor: 2, area: 33.67, price: 4246460, view: "Pool", linkpopupwindow: linkPopup(202) },
    {apartment: 207, beds: 1, floor: 2, area: 38.2, price: 5139000, view: "Garden", linkpopupwindow: linkPopup(207) },
    {apartment: 327, beds: 1, floor: 3, area: 73, price: 8724960, view: "Forest", linkpopupwindow: linkPopup(327) },
    {apartment: 328, beds: 1, floor: 3, area: 73, price: 8724960, view: "Forest", linkpopupwindow: linkPopup(328) },
    {apartment: 329, beds: 1, floor: 3, area: 52, price: 7240007, view: "Mountain", linkpopupwindow: linkPopup(329) },
    {apartment: 330, beds: 1, floor: 3, area: 52, price: 7240007, view: "Mountain", linkpopupwindow: linkPopup(330) },
    {apartment: 401, beds: 1, floor: 4, area: 33.67, price: 4446460, view: "Seaview", linkpopupwindow: linkPopup(401) },
    {apartment: 402, beds: 1, floor: 4, area: 33.67, price: 4446460, view: "Seaview", linkpopupwindow: linkPopup(402) },
    {apartment: 403, beds: 1, floor: 4, area: 33.67, price: 4446460, view: "Seaview", linkpopupwindow: linkPopup(403) },
    {apartment: 404, beds: 1, floor: 4, area: 33.67, price: 4446460, view: "Seaview", linkpopupwindow: linkPopup(404) },
    {apartment: 405, beds: 1, floor: 4, area: 33.67, price: 4446460, view: "Seaview", linkpopupwindow: linkPopup(405) },
    {apartment: 406, beds: 1, floor: 4, area: 33.67, price: 4446460, view: "Seaview", linkpopupwindow: linkPopup(406) },
    {apartment: 407, beds: 1, floor: 4, area: 38.2, price: 5339000, view: "Forest", linkpopupwindow: linkPopup(407) },
    {apartment: 408, beds: 1, floor: 4, area: 33.67, price: 4077100, view: "Forest", linkpopupwindow: linkPopup(408) },
    {apartment: 409, beds: 1, floor: 4, area: 33.67, price: 4077100, view: "Forest", linkpopupwindow: linkPopup(409) },
    {apartment: 410, beds: 1, floor: 4, area: 33.67, price: 4077100, view: "Forest", linkpopupwindow: linkPopup(410) },
    {apartment: 411, beds: 1, floor: 4, area: 33.67, price: 4077100, view: "Forest", linkpopupwindow: linkPopup(411) },
    {apartment: 420, beds: 1, floor: 4, area: 38.2, price: 5148000, view: "Forest", linkpopupwindow: linkPopup(420) },
    {apartment: 421, beds: 1, floor: 4, area: 33.67, price: 4446460, view: "Mountain", linkpopupwindow: linkPopup(421) },
    {apartment: 422, beds: 1, floor: 4, area: 33.67, price: 4446460, view: "Mountain", linkpopupwindow: linkPopup(422) },
    {apartment: 423, beds: 1, floor: 4, area: 33.67, price: 4446460, view: "Mountain", linkpopupwindow: linkPopup(423) },
    {apartment: 424, beds: 1, floor: 4, area: 33.67, price: 4446460, view: "Mountain", linkpopupwindow: linkPopup(424) },
    {apartment: 425, beds: 1, floor: 4, area: 33.67, price: 4446460, view: "Mountain", linkpopupwindow: linkPopup(425) },
    {apartment: 426, beds: 1, floor: 4, area: 33.67, price: 4446460, view: "Mountain", linkpopupwindow: linkPopup(426) },
    {apartment: 427, beds: 1, floor: 4, area: 73, price: 8824970, view: "Forest", linkpopupwindow: linkPopup(427) },
    {apartment: 428, beds: 1, floor: 4, area: 73, price: 8824970, view: "Forest", linkpopupwindow: linkPopup(428) },
    {apartment: 508, beds: 1, floor: 5, area: 33.67, price: 4177100, view: "Forest", linkpopupwindow: linkPopup(508) },
    {apartment: 509, beds: 1, floor: 5, area: 33.67, price: 4177100, view: "Forest", linkpopupwindow: linkPopup(509) },
    {apartment: 511, beds: 1, floor: 5, area: 33.67, price: 4177100, view: "Forest", linkpopupwindow: linkPopup(511) },
    {apartment: 512, beds: 1, floor: 5, area: 33.67, price: 4177100, view: "Forest", linkpopupwindow: linkPopup(512) },
    {apartment: 513, beds: 1, floor: 5, area: 33.67, price: 4177100, view: "Forest", linkpopupwindow: linkPopup(513) },
    {apartment: 515, beds: 1, floor: 5, area: 33.67, price: 4177100, view: "Forest", linkpopupwindow: linkPopup(515) },
    {apartment: 523, beds: 1, floor: 5, area: 33.67, price: 4546460, view: "Mountain", linkpopupwindow: linkPopup(523) },
    {apartment: 524, beds: 1, floor: 5, area: 33.67, price: 4546460, view: "Mountain", linkpopupwindow: linkPopup(524) },
    {apartment: 525, beds: 1, floor: 5, area: 33.67, price: 4546460, view: "Mountain", linkpopupwindow: linkPopup(525) },
    {apartment: 526, beds: 1, floor: 5, area: 33.67, price: 4546460, view: "Mountain", linkpopupwindow: linkPopup(526) },
    {apartment: 527, beds: 1, floor: 5, area: 73, price: 8924987, view: "Forest", linkpopupwindow: linkPopup(527) },
    {apartment: 528, beds: 1, floor: 5, area: 73, price: 8924987, view: "Forest", linkpopupwindow: linkPopup(528) },
    {apartment: 529, beds: 1, floor: 5, area: 52, price: 7440004, view: "Mountain", linkpopupwindow: linkPopup(529) },
    {apartment: 530, beds: 1, floor: 5, area: 52, price: 7440004, view: "Mountain", linkpopupwindow: linkPopup(530) },
    {apartment: 603, beds: 1, floor: 6, area: 33.67, price: 4646460, view: "Seaview", linkpopupwindow: linkPopup(603) },
    {apartment: 604, beds: 1, floor: 6, area: 33.67, price: 4646460, view: "Seaview", linkpopupwindow: linkPopup(604) },
    {apartment: 608, beds: 1, floor: 6, area: 33.67, price: 4277100, view: "Forest", linkpopupwindow: linkPopup(608) },
    {apartment: 609, beds: 1, floor: 6, area: 33.67, price: 4277100, view: "Forest", linkpopupwindow: linkPopup(609) },
    {apartment: 610, beds: 1, floor: 6, area: 33.67, price: 4277100, view: "Forest", linkpopupwindow: linkPopup(610) },
    {apartment: 611, beds: 1, floor: 6, area: 33.67, price: 4277100, view: "Forest", linkpopupwindow: linkPopup(611) },
    {apartment: 612, beds: 1, floor: 6, area: 33.67, price: 4277100, view: "Forest", linkpopupwindow: linkPopup(612) },
    {apartment: 613, beds: 1, floor: 6, area: 33.67, price: 4277100, view: "Forest", linkpopupwindow: linkPopup(613) },
    {apartment: 614, beds: 1, floor: 6, area: 33.67, price: 4277100, view: "Forest", linkpopupwindow: linkPopup(614) },
    {apartment: 615, beds: 1, floor: 6, area: 33.67, price: 4277100, view: "Forest", linkpopupwindow: linkPopup(615) },
    {apartment: 616, beds: 1, floor: 6, area: 33.67, price: 4277100, view: "Forest", linkpopupwindow: linkPopup(616) },
    {apartment: 621, beds: 1, floor: 6, area: 33.67, price: 4646460, view: "Mountain", linkpopupwindow: linkPopup(621) },
    {apartment: 622, beds: 1, floor: 6, area: 33.67, price: 4646460, view: "Mountain", linkpopupwindow: linkPopup(622) },
    {apartment: 624, beds: 1, floor: 6, area: 33.67, price: 4646460, view: "Mountain", linkpopupwindow: linkPopup(624) },
    {apartment: 625, beds: 1, floor: 6, area: 33.67, price: 4646460, view: "Mountain", linkpopupwindow: linkPopup(625) },
    {apartment: 626, beds: 1, floor: 6, area: 33.67, price: 4646460, view: "Mountain", linkpopupwindow: linkPopup(626) },
    {apartment: 627, beds: 1, floor: 6, area: 73, price: 9024990, view: "Forest", linkpopupwindow: linkPopup(627) },
    {apartment: 628, beds: 1, floor: 6, area: 73, price: 9024990, view: "Forest", linkpopupwindow: linkPopup(628) },
    {apartment: 629, beds: 1, floor: 6, area: 52, price: 7540000, view: "Mountain", linkpopupwindow: linkPopup(629) },
    {apartment: 630, beds: 1, floor: 6, area: 52, price: 7540000, view: "Mountain", linkpopupwindow: linkPopup(630) },
    {apartment: 701, beds: 1, floor: 7, area: 33.67, price: 4377100, view: "Pool", linkpopupwindow: linkPopup(701) },
    {apartment: 702, beds: 1, floor: 7, area: 33.67, price: 4377100, view: "Pool", linkpopupwindow: linkPopup(702) },
    {apartment: 703, beds: 1, floor: 7, area: 33.67, price: 4377100, view: "Pool", linkpopupwindow: linkPopup(703) },
    {apartment: 704, beds: 1, floor: 7, area: 33.67, price: 4377100, view: "Pool", linkpopupwindow: linkPopup(704) },
    {apartment: 705, beds: 1, floor: 7, area: 33.67, price: 4377100, view: "Pool", linkpopupwindow: linkPopup(705) },
    {apartment: 706, beds: 1, floor: 7, area: 33.67, price: 4377100, view: "Pool", linkpopupwindow: linkPopup(706) },
    {apartment: 708, beds: 1, floor: 7, area: 33.67, price: 4377100, view: "Forest", linkpopupwindow: linkPopup(708) },
    {apartment: 709, beds: 1, floor: 7, area: 33.67, price: 4377100, view: "Forest", linkpopupwindow: linkPopup(709) },
    {apartment: 710, beds: 1, floor: 7, area: 33.67, price: 4377100, view: "Forest", linkpopupwindow: linkPopup(710) },
    {apartment: 711, beds: 1, floor: 7, area: 33.67, price: 4377100, view: "Forest", linkpopupwindow: linkPopup(711) },
    {apartment: 712, beds: 1, floor: 7, area: 33.67, price: 4377100, view: "Forest", linkpopupwindow: linkPopup(712) },
    {apartment: 713, beds: 1, floor: 7, area: 33.67, price: 4377100, view: "Forest", linkpopupwindow: linkPopup(713) },
    {apartment: 716, beds: 1, floor: 7, area: 33.67, price: 4646460, view: "Mountain", linkpopupwindow: linkPopup(716) },
    {apartment: 717, beds: 1, floor: 7, area: 33.67, price: 4646460, view: "Mountain", linkpopupwindow: linkPopup(717) },
    {apartment: 720, beds: 1, floor: 7, area: 33.67, price: 4646460, view: "Mountain", linkpopupwindow: linkPopup(720) },
    {apartment: 721, beds: 1, floor: 7, area: 73, price: 9125000, view: "Forest", linkpopupwindow: linkPopup(721) },
    {apartment: 722, beds: 1, floor: 7, area: 73, price: 9125000, view: "Forest", linkpopupwindow: linkPopup(722) },
    {apartment: 723, beds: 1, floor: 7, area: 52, price: 7540000, view: "Mountain", linkpopupwindow: linkPopup(723) },
    {apartment: 724, beds: 1, floor: 7, area: 52, price: 7540000, view: "Mountain", linkpopupwindow: linkPopup(724) },
];

window.onload = () => {
    loadTableData(apartmentsData);
}

 function loadTableData( apartmentsData ) {
    const tableBoby = document.getElementById('tableData');
    let dataHTML = '';
    for (let data of apartmentsData) {
        dataHTML += `<tr>
              <td>${data.apartment}</td>
              <td class="hide-on-med-and-down">${data.beds}</td>
              <td class="hide-on-med-and-down">${data.floor}</td>
              <td>${data.area} m<sup><small>2</small></sup></td>
              <td>${data.price}</td>
              <td class="hide-on-small-and-down">${data.view}</td>
              <td>${data.linkpopupwindow}</td>
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


