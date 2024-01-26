const btnCalculate=document.querySelector('.btnCalculate');
const progZone=document.getElementById('progZone')
const resultGround=document.querySelector('.resultGround');
const pers=document.querySelector('.pers');
let name1=document.getElementById('p1')
let name2=document.getElementById('p2')


btnCalculate.addEventListener('click',(e)=>{
    e.preventDefault();
    pers.innerHTML="";
    calculateLove();
})



function calculateLove() {
    
    let n1=name1.value
    let n2=name2.value

    if(n1 ==="" | n2 ===""){
        alert('All fields are required !!')
        return
    }else
    if(n1 == n2){
        setTimeout(()=>{
        pers.classList.remove('pers')
        pers.innerHTML="100%" 
        progZone.classList.add('progZone')
    },6000)
    }

    progZone.classList.remove('progZone')
    let r1=Math.floor((Math.random()*100)+1)

    setTimeout(()=>{
        pers.classList.remove('pers')
        pers.innerHTML=r1 + '%' 
        progZone.classList.add('progZone')
    },6000)


}
