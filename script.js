const inpID = document.getElementById("ID")
const inpname= document.getElementById("name")
const inpsurname = document.getElementById("surname")
const btn = document.getElementById("btn")
const tbl =document.getElementById("tbl")
const tr = document.createElement("tr")
const th1 = document.createElement("th")
th1.innerHTML = "ID"
const th2 = document.createElement ("th")
th2.innerHTML = "name"
const th3 = document.createElement ("th")
th3.innerHTML = "surname"
tr.append(th1,th2,th3)
tbl.append(tr)

 btn.addEventListener("click", function () {
    const tr = document.createElement("tr")
    const td1 = document.createElement("td")
    const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    td1.innerHTML=inpID.value 
    td2.innerHTML=inpname.value 
    td3.innerHTML=inpsurname.value 
    tr.append(td1,td2,td3)
    tbl.append(tr)
 })
