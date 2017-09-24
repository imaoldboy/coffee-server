>/home/monitor/coffee-server/server.log
/bin/chown monitor:monitor /home/monitor/coffee-server/server.log
nohup node /home/monitor/coffee-server/server.js > /home/monitor/coffee-server/server.log 2>&1 &
