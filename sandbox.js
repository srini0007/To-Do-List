
const v=document.querySelector('body > div > form:nth-child(3)');

const adding=document.querySelector('body > div > ul');

console.log(v);
console.log(adding);

v.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(v.addi.value);
    adding.innerHTML+=`<li class="dimension block"><span class="start">${v.addi.value} </span><i class="fa fa-trash-o delete" style="font-size:18px"></i></li>`;
    v.addi.value="";
});

adding.addEventListener('click',(e)=>{
    console.log(e);
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const search=document.querySelector('body > div > form');
console.log(search);


search.addEventListener('input',()=>{
    console.log(search.find.value);
    // Array.from(adding.children).forEach((val)=>{
    //     val.classList.remove('filtered');
    // });
    Array.from(adding.children).forEach((val)=>{
        console.log(adding.children12);
        if(val.textContent.toLowerCase().includes(search.find.value)){
            val.classList.remove('filtered');
        }
        else{
            val.classList.add('filtered');
        }
    });
});
