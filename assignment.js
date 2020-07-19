
  
 const divs = document.querySelectorAll('div')
 const body = document.querySelector('body')
 divs.forEach(function(div){
   div.addEventListener('click', function(event){
    let clickedDiv = event.target
    let parentDiv = event.target.parentElement
    clickedDiv.classList.add('yellow')
    parentDiv.classList.add('blue')
    if(div !== clickedDiv && div!== parentDiv){
        div.classList.add('white')
    }
    div.addEventListener('mouseout', function(event){
      div.classList.remove('white','yellow','blue')
    })
  })
  body.classList.add('white')
})


  
