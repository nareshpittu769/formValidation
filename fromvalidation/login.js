function validatelogin(){
    var user = false
    var password = false
    let data = JSON.parse(localStorage.getItem('formdata')) 
    data.forEach(obj => {
        if ((obj.username == document.getElementById('uname').value)){
            user = true
        }
        if(obj.password === document.getElementById('pwd').value){
            password = true
        }

    });
    if(user){
        if(password){
            alert("Your are in now home page")
        }
        else{
            let emerror = document.getElementById('pwderror')
            emerror.innerHTML = 'Incorrect!';
            emerror.style.color = 'red'
            setTimeout(() => {
                emerror.innerHTML = '';
                emerror.style.color = 'none'
            }, 3000);

        }
    }else{
        let uerror = document.getElementById('uerror')
        uerror.innerHTML = 'Incorrect user'
        uerror.style.color = 'red'
        setTimeout(() => {
            uerror.innerHTML = '';
            uerror.style.color = 'none'
        }, 3000);
    }

    event.preventDefault()
}