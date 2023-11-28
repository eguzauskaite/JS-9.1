
const vardasElement = document.getElementById('vardas');

vardasElement.addEventListener('mouseover', function(){
    if(!vardasElement.classList.contains('clicked')){
        vardasElement.classList.add('hovered');
    }
   
  });

vardasElement.addEventListener('click', function(){
    vardasElement.classList.toggle('clicked');
    vardasElement.classList.remove('hovered');
});