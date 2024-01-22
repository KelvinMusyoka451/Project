document.addEventListener('DOMContentLoaded',poster)
function poster(){
  fetch(' https://my-json-server.typicode.com/KelvinMusyoka451/Project')
  .then(response => response.json())
  .then(shopping =>shopping.forEach((item)=>{
    let container = document.getElementById('home')
    let div=document.createElement('div');
    div.className='product';
    div.innerHTML = `
    <div class = 'post'>
      <img src=${item.source} width=300,height=500> 
      <h2>${item.name}</h2>
      <p>Artist: ${item.artist}</p>
      <p>Price : ${item.price}</p>
      <button onclick='showBoughtMessage()'>Buy</button>
    </div>
    
    `
    container.appendChild(div);
  }))

}
function showBoughtMessage(){
  let btn=document.querySelector('.post button')
  btn.addEventListener('click',()=>alert('Added to cart'))
}
