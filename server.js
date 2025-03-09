const express = require('express');
const fetch = require('node-fetch');
const FormData = require('form-data');
const app2 = express();

// Разрешаем обработку JSON
app2.use(express.json());

// Маршрут для отправки фото
app2.post('/send-photo', async (req, res) => {
    const { botToken, chatId, image } = req.body;

    // Преобразуем base64 в Buffer
    const buffer = Buffer.from(image.split(',')[1], 'base64');

    // Создаем FormData
    const formData = new FormData();
    formData.append('photo', buffer, { filename: 'qr_code.jpg' });

    // Отправляем изображение через Telegram Bot API
    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto?chat_id=${chatId}`, {
            method: 'POST',
            body: formData,
            headers: formData.getHeaders() // Добавляем заголовки FormData
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Запуск сервера
app2.listen(3000, () => console.log('Сервер запущен на http://localhost:3000'));