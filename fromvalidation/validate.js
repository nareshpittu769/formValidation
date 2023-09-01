function uvalidate(){
    let unum = document.getElementById('uname')
    let uerror = document.getElementById('uerror')
    uerror.innerHTML = ''
    unum.style.border = 'none'
}
function evalidate(){
    let emailid = document.getElementById('emailid')
    let emerror = document.getElementById('emerror')
    emerror.innerHTML = ''
    emailid.style.border = 'none'
}
function pvalidate(){
   
    let pwd = document.getElementById('pwd')
    let pwderror = document.getElementById('pwderror')
    pwderror.innerHTML = ''
    pwd.style.border = 'none'
    // }
    // else{
    //     let pwd = document.getElementById('pwd')
    //     let epwd = document.getElementById('pwderror')
    //     epwd.innerHTML = 'password must be 8 letters';
    //     epwd.style.color = 'red'
    //     pwd.style.border = '2px solid red'
    // }
    
}

function cpvalidate(){
    var pwd = document.getElementById('pwd').value
    let cpwd = document.getElementById('cpwd')
    let cpwderror = document.getElementById('cpwderror')

    if (pwd == document.getElementById('cpwd').value){
        cpwderror.innerHTML = ''
        cpwd.style.border = 'none'
    }else{
        cpwderror.innerHTML = 'password not matched!'
        cpwderror.style.color = 'red'
        cpwd.style.border = '2px solid red'
    }
    
}

function lenvalidate(){
    var pwd = document.getElementById('pwd').value

    let pwdele = document.getElementById('pwd')
    let pwderror = document.getElementById('pwderror')

    if (pwd.length >= 8){
        pwderror.innerHTML = ''
        pwdele.style.border = 'none'
    }else{
        pwderror.innerHTML = 'password must be 8 letters'
        pwderror.style.color = 'red'
        pwdele.style.border = '2px solid red'
    }

}

var visible = false;

function show(){
    var ele =  document.getElementById('pwd')
    var icon = document.getElementsByClassName('fa-eye')[0]
    if(visible){
        ele.type = 'password'
        visible = false;
        icon.style.color = 'black'
    }else{
        ele.type = 'text'
        visible = true;
        icon.style.color = 'red'
    }
}

function validateform(){
    let uname = document.getElementById('uname').value
    let emailid = document.getElementById('emailid').value
    let pwd = document.getElementById('pwd').value
    let cpwd = document.getElementById('cpwd').value

    if (uname === '' || uname === null){
        let unum = document.getElementById('uname')
        let uerror = document.getElementById('uerror')
        uerror.innerHTML = 'Must be filled!';
        uerror.style.color = 'red'
        unum.style.border = '2px solid red'
    }
    if (emailid === '' || emailid === null){
        let emailid = document.getElementById('emailid')
        let emerror = document.getElementById('emerror')
        emerror.innerHTML = 'Must be filled!';
        emerror.style.color = 'red'
        emailid.style.border = '2px solid red'
    }
    if (pwd === '' || pwd === null){
        let pwd = document.getElementById('pwd')
        let epwd = document.getElementById('pwderror')
        epwd.innerHTML = 'Must be filled!';
        epwd.style.color = 'red'
        pwd.style.border = '2px solid red'
    }
    if (cpwd === '' || cpwd === null){
        let cpwd = document.getElementById('cpwd')
        let cpwderror = document.getElementById('cpwderror')
        cpwderror.innerHTML = 'Must be filled!';
        cpwderror.style.color = 'red'
        cpwd.style.border = '2px solid red'
    }
    
    let data = JSON.parse(localStorage.getItem('formdata')) || [];
    var user = false
    var email = false;
    data.forEach(obj => {
        if ((obj.username == document.getElementById('uname').value)){
            user = true
        }
        if((obj.emailid == document.getElementById('emailid').value)){
            email = true
        }

    });

    if (user){
        let uerror = document.getElementById('uerror')
        uerror.innerHTML = 'username taken!';
        uerror.style.color = 'red'
    }else if(email){
        let emerror = document.getElementById('emerror')
        emerror.innerHTML = 'Email taken!';
        emerror.style.color = 'red'
    }
    else{

        let formdata = JSON.parse(localStorage.getItem('formdata')) || [];
        formdata.push({
            username:uname,
            emailid :emailid,
            password:pwd
        });
        localStorage.setItem('formdata',JSON.stringify(formdata));

        document.getElementById('uname').value = ''
        document.getElementById('emailid').value = ''
        document.getElementById('pwd').value =''
        document.getElementById('cpwd').value ='';
        alert('Account Created');
    };
    
    event.preventDefault()
}