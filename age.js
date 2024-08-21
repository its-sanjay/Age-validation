const form=document.getElementById("form");
const age=document.getElementById("myName");

form.addEventListener('submit',e=>{
    e.preventDefault();
    checkAge();
});

function checkAge(){
    const ageV=age.value;

    if(ageV==""){
        setError(age,"please fill your age");
    }

    else if(ageV<=15){
        setChild(age,"You are Child");
    }
    else if(ageV<=35){
        setTeen(age,"Ooops!!! you are Teenager");
    }else{
        setOlder(age,"sorry You are old!");
    }

    function setError(input,msg){
        const formControl=input.parentElement;
        console.log(formControl,"fc");
        const small=formControl.querySelector("small");
        console.log(small,"small");
        formControl.className="fields empty";
        small.innerText=msg;
    }

    function setChild(input,msg){
        const formControl=input.parentElement;
        const small=formControl.querySelector("small");
        formControl.className="fields child";
        small.innerText=msg;
    }
        function setTeen(input,msg){
            const formControl=input.parentElement;
            const small=formControl.querySelector("small");
            formControl.className="fields teen";
            small.innerText=msg;
    }
    function setOlder(input,msg){
        const formControl=input.parentElement;
        const small=formControl.querySelector("small");
        formControl.className="fields older";
        small.innerText=msg;
    }

}