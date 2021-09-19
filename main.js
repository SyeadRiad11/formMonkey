const monkeyImg = document.querySelector(".monkeyImg img");
const icon = document.querySelector("#icon");
const iconFont = document.querySelector("#icon .i");
const pass_inp = document.querySelector(".pass_inp input");



pass_inp.addEventListener('input' , (e)=>{

    e.preventDefault();

        monkeyImg.src = './img/3.png'

        if(pass_inp.value==""){
            monkeyImg.src = './img/001.png'
        }else{
            monkeyImg.src = './img/3.png'
        }
});



icon.addEventListener('click', (event) => {

    event.preventDefault();

    if (monkeyImg.src.match('./img/3.png')) {
        monkeyImg.src = './img/4.png'
    } else {
        monkeyImg.src = './img/3.png'
    }

    if (pass_inp.type.match("text")) {
        pass_inp.type = "password"
             // monkeyImg.src = '4.png'
    } else {
        pass_inp.type = "text"
          // monkeyImg.src = '3.png'
    }
    if (icon.innerHTML.match('<i class="fas fa-eye"></i>')) {
        icon.innerHTML = '<i class="fas fa-eye-slash"></i>'
    } else {
        icon.innerHTML = '<i class="fas fa-eye"></i>'
    }
    pass_inp.addEventListener('input' , (e)=>{

        e.preventDefault();
        
                monkeyImg.src = './img/4.png'
                if(pass_inp.value==""){
                    monkeyImg.src = './img/001.png'
                }
                else if(pass_inp.type.match("text")){
                    monkeyImg.src = './img/3.png'
                }else{
                    monkeyImg.src='./img/4.png'
                }
        })

});

