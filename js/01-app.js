
// Notificaciones Nativas en Javascript

const notificar = document.querySelector('#notificar');

notificar.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(r => {
            console.log('El resultado es', r);
        });
})

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        let nombre = 'Manuel';
       const notificacion = new Notification(`Bienvenido ${nombre}` , {
            icon: 'img/ccj.png',
            body: 'Aprende JS Moderno'
        });

        notificacion.onclick = function() {
            window.open('https://github.com/Mannue25')
        }
    }
})