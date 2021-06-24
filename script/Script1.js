
class Product {
    constructor(src, style, text, price) {

        this.src = src;
        this.style = style;
        this.text = text;
        this.price = price;
        this.category = "product";
    }
}
class Accessories extends Product {
    constructor(src, style, text, price) {
        super(src, style, text, price);
        this.category = "accesories";
    }
}

class Set extends Product {
    constructor(src, style, text, price, head) {
        super(src, style, text, price);
        this.head = head;
        this.category = "set";
    }
}
let productsArr = [
    new Accessories("../images/m1.jpg", "accessories", "�����", "89"),
    new Accessories("../images/m15.jpg", "accessories", "���� �����", "60"),
    new Accessories("../images/m2.jpg", "accessories", "��� �����", "89"),
    new Accessories("../images/m3.jpg", "accessories", "��� �����", "90"),
    new Accessories("../images/m4.jpg", "accessories", "��� �����", "100"),
    new Accessories("../images/m5.jpg", "accessories", "���� ����� �����", "77"),
    new Accessories("../images/m6.jpg", "accessories", "��� �����", "69"),
    new Accessories("../images/m7.jpg", "accessories", "������ ����", "50"),
    new Accessories("../images/m8.jpg", "accessories", "����� �����", "69"),
    new Accessories("../images/m9.jpg", "accessories", "����", "80"),
    new Accessories("../images/m10.jpg", "accessories", "�����", "69"),
    new Accessories("../images/m11.jpg", "accessories", "����� �����", "69"),
    new Accessories("../images/m12.jpg", "accessories", "�������", "69"),
    new Accessories("../images/m13.jpg", "accessories", "��� �����", "69"),
    new Accessories("../images/m14.jpg", "accessories", "��� ����", "69"),
    new Set("../images/room1.jpg", "set", "���� ����� �� ���� ��� �������� ����� ������. ���� 3 ���� ������ �� ����� �-5 �� �����.", "2289", "�� ����� ���� ������� ��� '�����"),
    new Set("../images/room2.jpg", "set", "�� �� ���� ������ ����� ������ ����", "4500", "�� ����� ���� ������� ��� '������"),
    new Set("../images/room3.jpg", "set", "���� ���� ��� ����� ���� �����", "3225", "�� ����� ���� ������� ��� '������'"),
    new Set("../images/room4.jpg", "set", "�� ����� ��� ������", "1150", "�� ����� ���� ������� ��� '�����'"),
    new Set("../images/room5.jpg", "set", "��� ��� �� ���� ��� ��� ��� ��� �����", "2590", "�� ����� ���� ������� ��� '��� ���'"),
    new Set("../images/room6.jpg", "set", "����� ��� ���� ����� +��� ��� ���� ���� �����", "4050", "�� ����� ���� ������� ��� '���� ���'"),
    new Product("../images/magevet.jpg", "product", "���� ���� ������ ����'� ������ ����� �������", "89"),
    new Product("../images/magevet2.jpg", "product", "���� ���� ������ ��� ��������", "110"),
    new Product("../images/magevet3.png", "product", "���� ���� �� ����� ������ - ������", "63"),
    new Product("../images/ambat.jpg", "product", "������ ������ �� ����� �������", "190"),
    new Product("../images/ambat2.jpg", "product", "������ ������� ������ �� ��� ��� ������!", "250"),
    new Product("../images/ambat3.jpg", "product", "������ ������ ����� �����", "230"),
    new Product("../images/tipuch.jpg", "product", "����� ������ ������ �� ������ �����", "40"),
    new Product("../images/tipuch2.jpg", "product", "���� ����� ������ ������", "40"),
    new Product("../images/tipuch3.jpg", "product", "�� ����� ������", "45")
];

function loadCart() {
    document.getElementById("father").style.display = "none";
    document.getElementById("aboutTextId").style.display = "none";
    document.getElementById("a1").style.display = "none";
    document.getElementById("cart").style.display = "block";
    // document.getElementById("cart").innerHTML = cartText;
}

function loadManager() {
    document.getElementById("father").style.display = "none";
    document.getElementById("aboutTextId").style.display = "none";
    document.getElementById("cart").style.display = "none";
    document.getElementById("a1").style.display = "block";
    document.getElementById("a1").innerHTML = managerText;
}

function loadAbout() {
    document.getElementById("father").style.display = "none";
    document.getElementById("a1").style.display = "none";
    document.getElementById("cart").style.display = "none";
    document.getElementById("aboutTextId").style.display = "block";
    document.getElementById("aboutTextId").innerHTML = aboutTextVar;
}

function loadProd() {

    productsDiv = "";
    for (var i = 0; i < productsArr.length; i++) {
        if (productsArr[i].category == "product")
            productsDiv += addProd(productsArr[i], i);
    }

    console.log("productsDiv " + productsDiv);
    document.getElementById("aboutTextId").style.display = "none";
    document.getElementById("a1").style.display = "none";
    document.getElementById("cart").style.display = "none";
    document.getElementById("father").style.display = "flex";
    document.getElementById("father").innerHTML = productsDiv;
}
function loadSet() {
    productsDiv = "";
    for (var i = 0; i < productsArr.length; i++) {
        if (productsArr[i].category == "set")
            productsDiv += addProd(productsArr[i], i);
    }
    document.getElementById("aboutTextId").style.display = "none";
    document.getElementById("a1").style.display = "none";
    document.getElementById("cart").style.display = "none";
    document.getElementById("father").style.display = "flex";
    document.getElementById("father").innerHTML = productsDiv;
}
function loadAcc() {
    console.log("loadAcc");
    productsDiv = "";
    for (var i = 0; i < productsArr.length; i++) {
        if (productsArr[i].category == "accesories")
            productsDiv += addProd(productsArr[i], i);
    }
    document.getElementById("aboutTextId").style.display = "none";
    document.getElementById("a1").style.display = "none";
    document.getElementById("cart").style.display = "none";
    document.getElementById("father").style.display = "flex";
    document.getElementById("father").innerHTML = productsDiv;
}
let t = 0;
function addProd(product, t) {
    let currProd = "";
    currProd = `<div class="${product.style} card" data-place="${t}">
        <img src="${product.src}" class="${product.style}" style="width:100%">
        <p>${product.text}</p>
       <p class="price"> ${product.price}</p>
        <button type="button" onclick="cart()" >Add to Cart </button>
        </div>`;
    return currProd;
}



function addSet(product, t) {
    let currProd = "";
    currProd = `<div class="${product.style}  card" data-place="${t}">
        <img src="${product.src}" class="${product.style}" style="width:100%">
        <h4>${product.head}</h4>
        <p>${product.text}</p>
       <p> ${product.price}</p>
        <button type="button" onclick="cart()"> Add to Cart </button>
        
        </div>`;
    return currProd;

}

function addAccs(product, t) {
    let currProd = "";
    currProd = `<div class="${product.style}  card" data-place="${t}">
        <img src="${product.src}" class="${product.style}" style="width:100%">
        <p>${product.text}</p>
         <p> ${product.price}</p>
  <button type="button" onclick="cart()"  > Add to Cart </button>
       
        </div>`;

    return currProd;
}

//add a product
function add() {
    var x0 = document.getElementById("1").value;

    var x2 = document.getElementById("3").value;
    var x3 = document.getElementById("4").value;
    var x4 = document.getElementById("7").value;

    p = new Product(x0, "product", x2, x3, x4);
    productsArr.push(p);

}

function add1() {
    var x5 = document.getElementById("8").value;
    var x7 = document.getElementById("10").value;
    var x8 = document.getElementById("11").value;
    var x9 = document.getElementById("12").value;

    p = new Accessories(x5, "accessories", x7, x8, x9);
    productsArr.push(p);
}
function add2() {
    var x10 = document.getElementById("13").value;
    var x12 = document.getElementById("15").value;
    var x13 = document.getElementById("16").value;
    var x14 = document.getElementById("17").value;
    var x15 = document.getElementById("18").value;

    p = new set(x10, "set", x12, x13, x14, x15);
    productsArr.push(p);
}

function cart() {
    let toCart = event.path[1];
    let j = toCart.getAttribute("data-place");
    console.log(toCart.getAttribute("data-place"));
    console.log(productsArr[j].text);
    console.log(productsArr[j].price);
    cartProd = ""
    cartProd = `<td>${productsArr[j].text}</td>
       <td>${productsArr[j].price}</td>
       <td>1</td> `;
    console.log(cartProd);
    document.getElementById("ordDit").innerHTML += cartProd;

}

function check() {
    var x = document.getElementById("aaa").value;
    var y = document.getElementById("bbb").value;
    if (x == "" || y == "")
        alert("Name and Password must be filled out");
    else
        if (x == "shoshi" || x == "miri")
            if (y == "123") {

                document.getElementById("a1").innerHTML = "welcome";
                window.open("../pages/manager.html");
            }
            else
                document.getElementById("a1").innerHTML = " טעותת";
}
///pages text
var managerText = `<h2>כניסת מנהל:</h2>
הקש שם משתמש:<br /> <input type="text" id="aaa" />
<br />
הקש סיסמא:<br /> <input type="password" id="bbb" />
<br />
<br />
<input type="button" value="שלח" onclick="check()" />
<input type="reset">`


var aboutTextVar = ` <img src="../images/tino.png" height="200" width="600" />

<h1>אז מי אנחנו בעצם?!</h1>
<div id="aa">
    <span id="line1">
        תינוקיאדה - החנות המקוונת הגדולה בישראל למוצרי תינוקות וילדים
    </span>

    ליהחנות המקוונת למוצרי תינוקות וילדים, עלתה לרשת האינטרנט עוד בשנת 2004 והייתה אחת מחלוצות המסחר האלקטרוני בשוק הישראלי.


    כיום, טוילנד היא הקמעונאית המקוונת הגדולה בישראל בתחום מוצרי התינוקות, הילדים, הצעצועים וכל הקשור בלידה והורות. בכל חודש מגיעים לחנות מעל ל-500,000 מבקרים.
    בטוילנד ניתן למצוא בכל רגע נתון מעל 4,000 פריטים שונים של מיטב היצרנים והמותגים המובילים בארץ ובעולם, החל מכסאות בטיחות ועגלות תינוק, דרך ריהוט לחדרי תינוקות ואביזרי בטיחות ועד לצעצועי התפתחות ועוד ועוד.
    לצד החנות המקוונת מפעילה חברת ש.ר. שילר שיווק בע"מ גם את חנות בייבי Outlet - חנות האאוטלט הגדולה בישראל למוצרי תינוקות וילדים, הממוקמת ברחוב הסדנא 7 באזור התעשייה כפר סבא. ההפעלה המקבילה של החנויות מאפשרת ללקוחת לקבל חווית קנייה רב-ערוצית אמיתית, החל משלב המחקר והחיפוש ועד לשלב המשלוח או האיסוף בחנות.
    אתר טוילנד משקיע זמן רב ומשאבים גדולים על מנת לספק לקהל ההורים והסבים את חווית הקנייה המקוונת הטובה ביותר בשוק מוצרי הילדים והתינוקות הישראלי, החל במגוון גדול ומחירים נוחים, דרך ממשק משתמש קל לתפעול במחשב ובסמארטפון, אבטחת מידע בסטנדרטים גבוהים ושירות לקוחות אדיב וקשוב, ועד לפריסת תשלומים ואפשרויות משלוח מהיר ואיסוף מהחנות.

    טלפון שירות לקוחות: 09-9511933
    שעות פעילות מחלקת שירות לקוחות טלפוני: ימים א'-ה' - 10:00-17:00.
    שעות פעילות החנות בייבי אאוטלט ואיסופים מטוילנד :ימים א'-ה' - 10:00-19:00. ימי ו' 09:00-14:00

</div>`