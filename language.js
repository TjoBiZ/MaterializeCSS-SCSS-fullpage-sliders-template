var arrLang = {
    'us': {
        'about': 'About Us',
        'descriptiongoal': 'Elite complex Andaman Rivera <br>\n' +
            '                       We offer you apartment options ranging from 33.67 - 54.04 sq.m.\n' +
            '                       Prices from 3.xx million Thai Baht, including high-quality finishes using expensive and high-quality materials.\n' +
            '                       We also offer guaranteed income in the form of 24% for 3 years.\n' +
            '                       The end of construction in the fall of 2020.'
    },
    'ru': {
        'about': 'О компании',
        'descriptiongoal': 'Элитный комплекс Andaman Rivera<br>\n' +
            '                      Предлагаем вам варианты апартаментов площадью от 33.67 - 54.04 кв.м.\n' +
            '                      Цены от 3.хх млн. Тайских Бат, включая высококачественную отделку с использованием дорогих и качественных материалов.\n' +
            '                      Так же мы предлагаем гарантированный доход в виде 24% за 3 года.\n' +
            '                      Окончание строительства осенью 2020 года.'
    },
    'ch': {
        'about': '關於我們',
        'descriptiongoal': '精英複雜安達曼里維拉<br>\n' +
            '                       我們為您提供33.67  -  54.04平方米的公寓選擇。\n' +
            '                       價格為3.xx百萬泰銖，包括使用昂貴和優質材料的高品質飾面。\n' +
            '                       我們還提供24％的保證收入，為期3年。\n' +
            '                       2020年秋季建設結束。'
    },
    'th': {
        'about': 'เกี่ยวกับเรา',
        'descriptiongoal': 'อีลิทคอมเพล็กซ์อันดามันริเวร่า <br>\n' +
            '                       เราเสนอทางเลือกอพาร์ทเมนท์ให้คุณตั้งแต่ 33.67 - 54.04 ตร.ม.\n' +
            '                       ราคาเริ่มต้น 3.xx ล้านบาทรวมทั้งงานคุณภาพสูงด้วยวัสดุราคาแพงและคุณภาพสูง\n' +
            '                       เรายังเสนอรับประกันรายได้ในรูปแบบ 24% เป็นเวลา 3 ปี\n' +
            '                       สิ้นสุดการก่อสร้างในฤดูใบไม้ร่วงปี 2020'
    }
};



// event click flag and cookie
document.querySelector('#language').onclick = function (event) {
        document.querySelectorAll('.flag').forEach(function(flag) {
            if (flag.id == event.target.id) {
                document.cookie = "lang=" + flag.id + "; domain=." + document.domain + "; path=/; expires=Thu, 01 Jan 2030 00:00:00 UTC;";
                return changelanguage();
            }
        });
    }


function changelanguage() {
    let fl =  document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    document.querySelectorAll('.lang').forEach(function(element) {
        //       console.log(element.dataset.lan);
        element.innerHTML = arrLang[fl][element.dataset.lan];
        //       console.log(arrLang[fl][element.dataset.lan]);
    });
}
