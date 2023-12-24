document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  

    if (username === 'septian0803033' && password === '1122334455') {
      alert('Login Sukses');

      window.location.href = 'loginss.html';
    } else {
      alert('Login Gagal');
      document.getElementById('result').innerHTML = '<h1>Login Gagal</h1>';
    }
  });
  