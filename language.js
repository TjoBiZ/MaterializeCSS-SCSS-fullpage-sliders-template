var arrLang = {
    'us': {
        //first block
        'about': 'About Us',
        'descriptiongoal': 'Elite complex Andaman Rivera <br>\n' +
            '  We offer you apartment options ranging from 33.67 - 54.04 sq.m. Prices from 3.xx million Thai Baht, including high-quality finishes using expensive and high-quality materials. We also offer guaranteed income in the form of 24% for 3 years. The end of construction in the fall of 2020.',
        'btnaskquestion': 'Ask a Question',
        //second block
        //third block
        'tbchooseapart': 'Choose your apartment',
        'tbapartment': 'Apartment',
        'tbbeds': 'Beds',
        'tbfloor': 'Floor',
        'tbaprtarea': 'Apartment area',
        'tbprice': 'Price $',
        'tbview': 'View',
        'tbforest': 'Forest',
        'tbgarden': 'Garden',
        'tbmountain': 'Mountain',
        'tbpool': 'Pool',
        'tbseaview': 'Seaview',
        'tbdetail': 'Detail'
        //forth block
    },
    'ru': {
        //first block
        'about': 'О компании',
        'descriptiongoal': 'Элитный комплекс Andaman Rivera <br>\n' +
            ' Предлагаем вам варианты апартаментов площадью от 33.67 - 54.04 кв.м. Цены от 3.хх млн. Тайских Бат, включая высококачественную отделку с использованием дорогих и качественных материалов. Так же мы предлагаем гарантированный доход в виде 24% за 3 года. Окончание строительства осенью 2020 года.',
        'btnaskquestion': 'Задать вопрос',
        //second block
        //third block
        'tbchooseapart': 'Выберите Ваши апартаменты',
        'tbapartment': 'Апартаменты',
        'tbbeds': 'Кровати',
        'tbfloor': 'Этаж',
        'tbaprtarea': 'Площадь',
        'tbprice': 'Цена руб.',
        'tbview': 'Вид',
        'tbforest': 'Лес',
        'tbgarden': 'Сад',
        'tbmountain': 'Горы',
        'tbpool': 'Бассейн',
        'tbseaview': 'Океан',
        'tbdetail': 'Подробнее'
        //forth block
    },
    'ch': {
        //first block
        'about': '關於我們',
        'descriptiongoal': '精英複雜安達曼里維拉<br>\n' +
            '  我們為您提供33.67  -  54.04平方米的公寓選擇。  價格為3.xx百萬泰銖，包括使用昂貴和優質材料的高品質飾面。 我們還提供24％的保證收入，為期3年。 2020年秋季建設結束。',
        'btnaskquestion': '問一個問題',
        //second block
        //third block
        'tbchooseapart': '選擇你的公寓',
        'tbapartment': '公寓',
        'tbbeds': '床',
        'tbfloor': '地板',
        'tbaprtarea': '公寓區',
        'tbprice': '價錢 CNY',
        'tbview': '視圖',
        'tbforest': '森林',
        'tbgarden': '花園',
        'tbmountain': '山',
        'tbpool': '池',
        'tbseaview': '海洋',
        'tbdetail': '詳情'
        //forth block
    },
    'th': {
        //first block
        'about': 'เกี่ยวกับเรา',
        'descriptiongoal': 'อีลิทคอมเพล็กซ์อันดามันริเวร่า <br>\n' +
            '  เราเสนอทางเลือกอพาร์ทเมนท์ให้คุณตั้งแต่ 33.67 - 54.04 ตร.ม. ราคาเริ่มต้น 3.xx ล้านบาทรวมทั้งงานคุณภาพสูงด้วยวัสดุราคาแพงและคุณภาพสูง เรายังเสนอรับประกันรายได้ในรูปแบบ 24% เป็นเวลา 3 ปี สิ้นสุดการก่อสร้างในฤดูใบไม้ร่วงปี 2020',
        'btnaskquestion': 'ถามคำถาม',
        //second block
        //third block
        'tbchooseapart': 'เลือกอพาร์ตเมนต์ของคุณ',
        'tbapartment': 'อพาร์ทเม้น',
        'tbbeds': 'เตียง',
        'tbfloor': 'ชั้น',
        'tbaprtarea': 'พื้นที่อพาร์ทเม้น',
        'tbprice': 'ราคา THB',
        'tbview': 'ดู',
        'tbforest': 'ป่า',
        'tbgarden': 'สวน',
        'tbmountain': 'ภูเขา',
        'tbpool': 'สระ',
        'tbseaview': 'มหาสมุทร',
        'tbdetail': 'รายละเอียด'

        //forth block
    }
};



// event click flag and cookie
document.querySelector('#language').onclick = function (event) {
        document.querySelectorAll('.flag').forEach(function(flag) {
            if (flag.id === event.target.id) {
                document.cookie = "lang=" + flag.id + "; domain=." + document.domain + "; path=/; expires=Thu, 01 Jan 2030 00:00:00 UTC;";
                return changelanguage();
            }
        });
    }


function changelanguage() {
    let fl =  document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1");
     if (fl === '') { //firsts visit site then choose local language groupe for put cookie lang
         fl = (navigator.language.match(/^.{2}/g)[0]).toLocaleLowerCase();
         switch (true) {
             case fl === 'ru' || 'hy' || 'am' || 'az' || 'be' || 'by' || 'et' || 'ee' || 'kk' || 'kz' || 'lv' || 'tg' || 'cyrl' || 'tt' || 'uk' || 'ua' || 'uz':
                 fl = 'ru';
                 break;
             case fl === 'en' || 'us' || 'gb' || 'au' || 'ca' || 'jm' || 'nz' || 'ph'|| 'fil' || 'cg' || 'za'|| 'ga' || 'ie' || 'mi':
                 fl = 'us';
                 break;
             case fl === 'ch' || 'cn' || 'zh' || 'tw':
                 fl = 'ch';
                 break;
             case fl === 'th':
                 fl = 'th';
                 break;
             default:
                 fl = 'us';
                 break;
         }
         document.cookie = "lang=" + fl + "; domain=." + document.domain + "; path=/; expires=Thu, 01 Jan 2030 00:00:00 UTC;";
         //сделать switch, для языка по умолчанию при первой загрузке и автоматическом выборе
     }
    document.querySelectorAll('.lang').forEach(function(element) {
        //       console.log(element.dataset.lan);
        element.innerHTML = arrLang[fl][element.dataset.lan];
        //       console.log(arrLang[fl][element.dataset.lan]);
    });
}
