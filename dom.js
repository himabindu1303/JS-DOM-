let contentdiv = document.getElementById("seemorecontent"); 
function see() {
    for (let i = 1; i <= 5; i++) { 
        setTimeout(function() {
            const newdiv = document.createElement('div');
            newdiv.innerHTML = `<h1>Joggers</h1> 
                <div style="display:flex; flex-direction:column">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8vtM-LzoiA0rhdThn-W-CVi1K3aneLDcHQ&s" width="300" 
                             height="200">
                    <button style="width:20vw">Add to Cart</button>
                </div>`;
            contentdiv.append(newdiv);
        }, 3000 ) 
    }
}

