const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const btn = accordion.querySelector('.btn')
    const ans = accordion.querySelector('.answer');

    accordion.addEventListener('click',()=>{
        if(btn.classList.contains('active')){
            btn.classList.remove('active');
            ans.style.maxHeight = null;
        }else{
            btn.classList.add('active');
            ans.style.maxHeight = ans.scrollHeight+'px';
            
        }
    })
});