$(document).ready(function() {
    // Простая система входа с использованием localStorage
    $('#login-btn').click(function(e) {
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();

        if (username === "admin" && password === "admin123") {
            localStorage.setItem('user', 'admin');
            window.location.href = 'admin.html';
        } else if (username === "user" && password === "user123") {
            localStorage.setItem('user', 'user');
            window.location.href = 'home.html';
        } else {
            alert("Неверное имя пользователя или пароль!");
        }
    });

    // Проверка прав администратора
    if (window.location.pathname.includes("admin.html") && localStorage.getItem('user') !== 'admin') {
        alert("Доступ запрещён! Только для администраторов.");
        window.location.href = 'login.html';
    }

    // Адаптивное меню для мобильных устройств
    $('.menu-toggle').click(function() {
        $('nav ul').toggleClass('active');
    });
});