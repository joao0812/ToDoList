const add = document.getElementById('add')
const list = document.getElementById('list')
const activity = document.getElementById('activity')

var num = 1



const addActivity = () => {
    list.innerHTML += `<div id="item${num}" class="itens"> <h4 class="itensText">${activity.value.toUpperCase()}</h4>  <img onclick="deleta(${num})" src="https://cdn-icons-png.flaticon.com/512/1257/1257490.png?w=740" alt="bin" </div>`;
    list.style.display = 'flex';
    num++;
    activity.value = ''
}


const deleta = (evento) => {
    document.getElementById(`item${evento}`).remove()
    if (document.querySelectorAll('[id*=item]').length == 0) {
        list.style.display = 'none'
    }
    
    
}

add.addEventListener('click', addActivity)


