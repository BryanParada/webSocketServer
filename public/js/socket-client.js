//Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

//socket del cliente / Navegador!
const socket = io();

socket.on('connect', () =>{ 
    console.log('Connected'); 

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () =>{ 
    console.log('Disconnected from Server');
    
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});