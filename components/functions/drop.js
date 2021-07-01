export {drop};

function drop(){
  document.querySelectorAll('.drop__button').forEach(button =>{
    button.addEventListener('click', () =>{

      button.classList.toggle('active');
    }
    )})}

