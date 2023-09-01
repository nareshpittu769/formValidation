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
        }
    }else{
        let uerror = document.getElementById('uerror')
        uerror.innerHTML = 'Incorrect user'
        uerror.style.color = 'red'
    }

    event.preventDefault()
}