let colorsArray = []

document.addEventListener('click', function(e){
  if(e.target.dataset.hex){
    copyFunction(e.target.dataset.hex)
  }
})

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
           html += `<div class="column" style="background-color:${color.hex.value}">
            <button id="btn" data-hex="${color.hex.value}">
              ${color.hex.value}
          </button>
          </div>`
        }
        document.getElementById("color-list").innerHTML = html
        
    })
})

async function copyFunction(hex_code) {
  
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(hex_code);
       // Alert the copied text
  alert("Copied the text: " + hex_code) ;
    }
  } catch (err) {
    console.error(err);
  }
 
}