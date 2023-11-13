
const OpenTextBox=()=>{
    let GetElement=document.getElementById('TextSearch')
    let child=GetElement.children
    if (window.getComputedStyle(child[1]).display == 'none') {
        child[1].style.transition= "2s"
        child[1].style.display = 'block'
    } else {
        child[1].style.display = 'none'
    }
    

    
    
    
    
    
    
}