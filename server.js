const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

// Middleware для обслуживания статических файлов
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Маршрут для обслуживания вашего BoldCars.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Маршрут для обработки POST-запроса от кнопки
app.post('/run-script', (req, res) => {
    console.log("req.body",req.body);
    const { subject, body } = req.body;

    // Формируем команду с передачей параметров в mailer.js
    const command = `node mailer.js "${subject}" "${body}"`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing script: ${error}`);
            res.status(500).json({ error: 'Failed to send email' });
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        res.json({ message: 'Email sent successfully' });
    });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});