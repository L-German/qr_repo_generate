const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: '10mb' })); // Увеличиваем лимит на размер тела запроса

const token = '7650373965:AAFUdBo-eMpIVIn_wXngV7TUs7lWtt1Lqq8';
const bot = new TelegramBot(token, { polling: true });

// Обработка команды /start
/*bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Я бот.');
});*/

// Обработка отправки изображения
app.post('/send-photo', (req, res) => {
    const chatId = 'YOUR_CHAT_ID'; // Замените на ID чата, куда хотите отправить изображение
    const imageData = req.body.image;

    // Извлекаем base64 данные
    const base64Data = imageData.replace(/^data:image\/png;base64,/, "");

    // Отправляем изображение в Telegram
    bot.sendPhoto(chatId, { source: Buffer.from(base64Data, 'base64') })
        .then(() => {
            res.json({ success: true, message: 'Изображение отправлено!' });
        })
        .catch((error) => {
            console.error('Ошибка при отправке изображения:', error);
            res.status(500).json({ success: false, message: 'Ошибка при отправке изображения.' });
        });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
