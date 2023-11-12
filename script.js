const cards = document.querySelectorAll('.cardContainer__card'); 

cards.forEach((card) => {
    card.addEventListener('click', function() {
            card.style.boxShadow =  '0px 7px 50px 35px red';
   
    setTimeout(function(){
        card.style.boxShadow = '0px 5px 9px 1px rgba(0, 0, 0, 0.25)';
    }, 2000); 
    });
});



