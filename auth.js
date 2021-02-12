

//function login 
const login = (event)=>{

    //kita cegah page reload
    event.preventDefault()

    //mendapatkan value dari form
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    //mendapatkan value dari sessionstorage
    let user = sessionStorage.getItem('username')
    let pass = sessionStorage.getItem('password')

    //operasi perbandingan
    if(username == user && password === pass){
        alert('login berhasil')
    }else{
        alert('login gagal, silakan periksa kembali..')
    }

}

//function register 
const register = (event)=>{
    //menghadang form untuk reload
    event.preventDefault()

    //mendapatkan value dari form
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    //mendapatkan value dari sessionstorage
    let user = sessionStorage.setItem('username', username)
    let pass = sessionStorage.setItem('password', password)

    alert("registrasi berhasil")
    

}

