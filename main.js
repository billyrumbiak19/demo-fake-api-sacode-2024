const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

const divResult = document.getElementById("result")

btn1.addEventListener("click", () => {

    clear()

    const url = "https://reqres.in/api/users"
    const promise = fetch(url)
    .then((response) => response.json())
    .then(({data}) => data.forEach(d => {
        console.log(d.first_name + " " + d.last_name)

        const paragrafs = document.createElement("p")
        paragrafs.textContent = d.first_name + " " + d.last_name
        divResult.appendChild(paragrafs)

    }))

})

btn2.addEventListener("click", async function getPhoto(){

    clear()

    const url = "https://reqres.in/api/users"
    const promise = await fetch(url)
    const respone = await promise.json()
    
    respone.data.forEach(d => {

        console.log(d.avatar)
        
        const img = document.createElement("img")
        img.src = d.avatar
        img.style.width = "100px"
        const a = document.createElement("a")
        a.href = d.avatar
        a.target = "_blank"
        a.textContent = d.avatar
        divResult.appendChild(img)
        divResult.appendChild(a)
        divResult.appendChild(document.createElement("br"))

    })

})

btn3.addEventListener("click", async function getEmail(){

    clear()

    const url = "https://reqres.in/api/users"
    const respone = await fetch(url)
    const data = await respone.json()

    data.data.forEach(d => {
        const paragrafs = document.createElement("p")
        paragrafs.textContent = d.email
        divResult.appendChild(paragrafs)
    })

})

function clear() {
    while (divResult.firstChild) {
        divResult.removeChild(divResult.firstChild)
    }
}