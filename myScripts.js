"use strict";
const myArrayItemHolder = []; //this is the global array but I use it inside the createArray() function
const myObjectHolder = {};

function getStr() {
    let inptValue = document.getElementById("ipt-str").value;
    let htmlOutput = document.getElementById("Output-1");
    let ifStatment = false;
    if (inptValue.trim() === "") {
        switch (true) {
            case inptValue.trim() === "":
                window.alert("the input is fucking empty");
                break;
            case typeof inptValue == 'undefined':
                window.alert("your input type is: " + typeof inptValue + " insert the right shit");
                break;
            default:
                window.alert("What the fuck are you doing? I dont even know that kind of eror!!!");
                break;
        }
    } else {
        ifStatment = true;
    }
    if (ifStatment == true) {
        let y = inptValue;
        htmlOutput.innerHTML = y;
    }
}

function cutStrToChar() {
    let inptValue = document.getElementById("ipt-str").value;
    let numberInput0 = document.getElementById("CharAt-Number").value;
    let numberInput = parseInt(numberInput0);
    let jsOutput = document.getElementById("Output-2");
    let ifStatment = false;
    if (isNaN(numberInput) || numberInput >= inptValue.length || inptValue.trim() == "") {
        switch (true) {
            case inptValue.trim() == "":
                window.alert("insert the fucking input than cut it");
                break;
            case numberInput0.trim() === '':
                window.alert("Please insert a number inside the form! your input is empty");
                break;
            case numberInput0 === 'string':
                window.alert("Please insert a number inside the form! your input is string!");
                break;
            case numberInput >= inptValue.length:
                window.alert("Your number is begger than the your input string lenght!");
                break;
            case isNaN(numberInput):
                window.alert("Please insert a number inside the form! your input not a number");
                break;
            case typeof numberInput === 'undefined':
                window.alert("Please insert a number inside the form! your input is undefind");
                break;
            default:
                window.alert("What the fuck are you doing? I dont even know that kind of eror!!!");
                break;
        }
    } else {
        ifStatment = true;
    }
    if (ifStatment == true) {
        let y = inptValue;
        let x = numberInput;
        jsOutput.innerHTML = y.charAt(x);
    }
}

function trmStr() {
    let inputText = document.getElementById("text-area-input").value;
    let showTrm = document.getElementById("Output-3");
    if (typeof inputText !== undefined && inputText !== "" && inputText.trim() !== "") {
        window.alert("your input have " + inputText.length + " character");
        showTrm.innerHTML = inputText.trim();
        let showLenght = inputText.trim();
        window.alert("now your input have " + showLenght.length + " character");
    } else {
        switch (true) {
            case inputText == "":
                window.alert("The fucking input is empty");
                break;
            case inputText.trim() == "":
                window.alert("you insert the fucking whitespace");
                break;
            default:
                window.alert("What the fuck are you doing? I dont even know that kind of eror!!!");
                break;
        }
    }
}

function getArray() {
    let arrayItemInsert = document.getElementById("Array-input");
    let newArrayItem = document.getElementById("Array-input").value.trim();
    if (newArrayItem !== "") {
        let isArrayFind = myArrayItemHolder instanceof Array;
        myArrayItemHolder.push(arrayItemInsert.value);
        console.log(newArrayItem + " inserted inside array");
        console.log("your insert value is: " + arrayItemInsert.value);
        console.log("it's an array? " + isArrayFind);
        console.log("your array lenght is: " + myArrayItemHolder.length);
        printArrayItem();
        clearInput();
    } else {
        switch (true) {
            case newArrayItem.trim() == "":
                window.alert("cannot insert nothing!");
                break;
            default:
                window.alert("What the fuck are you doing? I dont even know that kind of eror!!!");
                break;
        }
        clearInput();
    }
}

function clearInput() {
    document.getElementById("Array-input").value = "";
}

function clearInputDel() {
    document.getElementById("Delete-Array-Input").value = "";
}

function printInputArray() {
    let exportArray = document.getElementById("Array-Output");
    exportArray.innerHTML = "";
}

function printArrayItem() {
    let exportArray = document.getElementById("Array-Output");
    exportArray.innerHTML = "";
    for (let i = 0; i < myArrayItemHolder.length; i++) {
        let x = myArrayItemHolder[i];
        exportArray.innerHTML += "<li>" + x + "</li>";
    }
}

function delArrayItem() {
    let deleteNumber = document.getElementById("Delete-Array-Input").value.trim();
    clearInputDel();
    let exportArray = document.getElementById("Array-Output");
    exportArray.innerHTML = "";
    for (let i = 0; i < myArrayItemHolder.length; i++) {
        let x = myArrayItemHolder[i];
        let del = Number(deleteNumber);
        if (myArrayItemHolder.indexOf(x) !== del) {
            exportArray.innerHTML += "<li>" + x + "</li>";
            console.log(x);
            console.log(del);
            console.log(myArrayItemHolder.indexOf(x));
            console.log(myArrayItemHolder.indexOf(x).value);
        }
    }
}

function showFabric() {
    document.getElementById("Fabric-Array").innerHTML = "";
    console.log("export");
    myArrayItemHolder.forEach(printArray);
    function printArray(value) {
        let exportArray = document.getElementById("Fabric-Array");
        exportArray.innerHTML += "<li>" + value + "</li>";
    }
}

function mapTheArray() {
    document.getElementById("Fabric-Array").innerHTML = "";
    console.log("export");
    myArrayItemHolder.map(mapArray);
    function mapArray(value) {
        let exportArray = document.getElementById("Fabric-Array");
        exportArray.innerHTML += "<li>" + value + " mapped" + "</li>";
    }
}

function cutArray() {
    let startValue = document.getElementById("Start-Number").value.trim();
    let startVal = Number(startValue);
    let endValue = document.getElementById("End-Number").value.trim();
    let endVal = Number(endValue);
    let exportArray = document.getElementById("Array-Output");
    exportArray.innerHTML = "";
    myArrayItemHolder.filter(printArray);
    function printArray(value, index, array) {
        if (index >= startVal && index <= endVal) {
            exportArray.innerHTML += "<li>" + value + " cut" + "</li>";
            console.log("cut");
            console.log(startValue);
            console.log(endValue);
            console.log(value);
            console.log(index);
            console.log(array);
        } else {
            console.log("can't");
        }
    }
}

function reduceTotal() {
    const max = myArrayItemHolder.reduce((total, currentValue) => {
        if (total > currentValue.length) {
            console.log("total: " + total);
            return total;
        } else {
            console.log("currentValue: " + currentValue);
            return currentValue;
        }
    });
    console.log(max);
}


function setDefaultArray() {
    myArrayItemHolder.push("z", "zz", "zzz", "zzzz");
    printArrayItem();
}

function callEvery() {
    let moreThanNumber = document.getElementById("More-Than").value;
    console.log(moreThanNumber);
    let condition = myArrayItemHolder.every((element) => {
        return element.length > moreThanNumber;
    });
    console.log(condition);
}

function createObject() {
    let objectExport = document.getElementById('Object-Output');
    objectExport.innerHTML = "";
    let objectName = document.getElementById("Object-Name-Input").value;
    let objectValue = document.getElementById("Object-Value-Input").value;
    function MyObject(name, value, def) {
        this.objValNam = name;
        this.objval = value;
        this.def = "default";
    }
    if (objectName !== "" && objectValue !== "") {
        const createObjet = new MyObject(objectName, objectValue);
        objectExport.innerHTML += "<li>" + "Name: " + createObjet.objValNam + " value: " + createObjet.objval + "</li>";
        console.log(objectName);
        console.log(objectValue);
        console.log(createObjet.objValNam);
        console.log(createObjet.objval);
    } else {
        console.log("wrong");
    }


}