const axios = require('axios');
const fs = require('fs');

async function sendToTelegramBot(dataURL) {
    const base64Data = dataURL.replace(/^data:image\/jpeg;base64,/, "");

    // Сохраняем изображение на сервере
    fs.writeFile('qr_code.jpg', base64Data, 'base64', async (err) => {
        if (err) throw err;

        // Отправляем изображение в Telegram
        const chatId = '1685702823'; // Замените на ваш chat_id
        const token = '7650373965:AAFUdBo-eMpIVIn_wXngV7TUs7lWtt1Lqq8'; // Замените на ваш токен бота

        const url = `https://api.telegram.org/bot${token}/sendPhoto`;

        const formData = new FormData();
        formData.append('chat_id', chatId);
        formData.append('photo', fs.createReadStream('qr_code.jpg'));

        await axios.post(url, formData, {
            headers: formData.getHeaders()
        });
    });
}
