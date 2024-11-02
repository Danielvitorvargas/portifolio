document.addEventListener('DOMContentLoaded', ()=>{
    new TypeIt(".animated", {  
        speed: 100 ,
        loop: true
        
    })
 
    .type(' Portifólio.' ,{delay: 900})
    .delete(10)
    .go()
})