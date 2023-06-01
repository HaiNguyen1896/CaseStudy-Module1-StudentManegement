let loginInput = document.getElementById('loginAccount');
let passwordInput = document.getElementById('loginPassword');
let loginInputAccount = ['admin'];
let loginInputPassword = ['admin'];

function login() {
    if (loginInput.value === '' || passwordInput.value === '') {
        document.getElementById('alertLoginInput').innerHTML = 'Tên đăng nhập hoặc mật khẩu là bắt buộc';
        document.getElementById('alertPassInput').innerHTML = 'Tên đăng nhập hoặc mật khẩu là bắt buộc';
    } else if (loginInput.value !== '' || passwordInput.value !== '') {
        for (let i = 0; i < loginInputAccount.length; i++) {
            if (loginInputAccount[i] === loginInput.value && loginInputPassword[i] === loginInput.value) {
                window.location.href = "StudentInformation.html";
            } else {
                document.getElementById('alertLoginInput').innerHTML = 'Bạn nhập sai tên đăng nhập hoặc mật khẩu';
                document.getElementById('alertPassInput').innerHTML = 'Bạn nhập sai tên đăng nhập hoặc mật khẩu';
            }
        }
    }
}

let countclick = 2;

function register() {
    let transform = document.querySelector('.form-heading');

    if (countclick % 2 === 0) {
        transform.innerText = 'Đăng ký';
    } else {
        transform.innerText = 'Login';
        loginInputAccount.push(loginInput.value);
        loginInputPassword.push(passwordInput.value);
        alert('Bạn đã đăng ký thành công');
        //console.log(loginInputAccount);
        //console.log(loginInputAccount);
        loginInput.value='';
        passwordInput.value='';
        document.getElementById('alertLoginInput').innerHTML = '';
        document.getElementById('alertPassInput').innerHTML = '';
    }
    countclick++;
}
