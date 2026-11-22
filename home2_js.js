let name=window.prompt("أدخل الاسم؟");
let age=window.prompt("ادخل العمر ؟");
if (age < 18)
    alert("عمرك لايسمح يا "+ name);
else
    document.getElementById("hel").textContent="Hello "+name;
let city=prompt("من اي دولة ؟");
 switch(city)
    {
        case "اليمن": 
            document.getElementById("city").textContent="عاصمة دولة اليمن صنعاء ";
            break;
        case "مصر": 
            document.getElementById("city").textContent=" عاصمة دولة مصر القاهرة";
            break;
        case "العراق": 
            document.getElementById("city").textContent="عاصمة دولة العراق بغداد";
            break;
        case "الأردن":
            document.getElementById("city").textContent="عاصمة دولة الأردن عمان "; 
            break;
        case "السودان":
            document.getElementById("city").textContent="عاصمة دولة السودان الخرطوم "; 
            break;
        case "سوريا": 
            document.getElementById("city").textContent=" عاصمة دولة سوريا دمشق";
            break;
        case "فلسطين":
            document.getElementById("city").textContent="عاصمة دولة فلسطين القدس"; 
            break;
        default: 
            document.writeln(" الدولة التي أدخلتها ليست من ضمن الخيارات المتاحة ");
    }
document.write("<hr>");
let con = window.confirm(" هل تريد معرفة عدد السلسة التي ستدخلها؟");
let st=prompt("ادخل السلسلة ؟")
if( con == true){
    alert(st.length)
}else{
    console.log("false");
}
function square() {
    let x = 5;
    let s = gets(x);
    var ee = document.getElementById("btn");
    ee.innerText = s; 
    return s;
}
function gets(y) {
    return y * y;
}
function showDate() {
    date = document.getElementById("btn2");
    let currentDate = new Date();
    date.innerText = currentDate.toString();
}
function addNewElement() {
    let box = document.getElementById("myBox");
    let newP = document.createElement("p");
    let result= square();
    newP.textContent = "مربع العدد هو " +result;
    box.appendChild(newP);
}
function showMenu() {
    let menu = document.getElementById("sweetsContainer");
    menu.style.display = "block";
    menu.style.background= "red";
}
function hideMenu() {
    let menu = document.getElementById("sweetsContainer");
    menu.style.display = "none"; }

var student = new Array("Ahmed", "khalid", "Mohammed");
for (var k = 0; k < student.length; k++) {
    document.write(student[k] + "<br/>");
}
var info = [1, "Ahmed", 24, "yemen"];
for (let i = 0; i < info.length; i++) {
    document.write(info[i] + "\t");
}
document.write("<br/>");
var names = [];
names[0] = "Ahmed";
names[1] = "Saleh";
names[2] = "Khalid";

for (i = 0; i < names.length; i++) {
    document.write(names[i] + "\t");
}
document.write("<br/>");

names.pop();
names.push("Sami", "Hassan");
for (i = 0; i < names.length; i++) {
    document.write(names[i] + "\t");
}
document.write("<br/>");
names.shift();
names.unshift("Abdullah");
for (i = 0; i < names.length; i++) {
    document.write(names[i] + "\t");
}
document.write("<br/>");
for (i = 0; i < names.length; i++) {
    document.write(names[i] + "\t");
}
document.write("<br/>");
names.reverse();
for (i = 0; i < names.length; i++) {
    document.write(names[i] + "\t");
}
document.write("<br/>");
let arr = [[1, 3, 5, 7], [9, 11, 13, 15], [17, 19, 21, 23]];
for (i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        document.write(arr[i][j] + " ");
    }
    document.write("<br/>");
}