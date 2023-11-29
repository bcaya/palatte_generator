let colorsArray = []

document.getElementById("color-id").addEventListener("submit", function(e) {
  e.preventDefault()
  const colorScheme = document.getElementById("color-schemes").value
  const colorPicker = document.getElementById("color-picker").value.replace("#", "") 
  fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${colorScheme}`)
    .then(res => res.json())
    .then(data => {
        const colorsArr = data.colors.slice(0,5)
        let html = ""
        for(let color of colorsArr){
           html += `<div class="column" style="background-color:${color.hex.value}"><p class="hex-code">${color.hex.value}</p></div>`
        }
        document.getElementById("color-list").innerHTML = html
        
    })
})