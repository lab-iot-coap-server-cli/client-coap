# client-coap

## The dinamic CoAP cliente

[![NPM](https://nodei.co/npm/coap.png?downloads=true)](https://nodei.co/npm/coap/)  

More examples: https://github.com/mcollina/node-coap

- consumes CoAP server
- real time
- dinamic interface

The app was created in the context of a work in the discipline IoT laboratory in PESC/COPPE/UFRJ.

## Requirements

* Node 10
* Server side ON (https://github.com/lab-iot-coap-server-cli/coap-server)

## Common setup

Clone the repo and install the dependencies.

```bash
https://github.com/lab-iot-coap-server-cli/client-coap.git
cd client-coap
```
Set domain of server side. 
Change in /routes/index.js

```bash
var host_coap = "192.168.0.106";
```
to 

```bash
var host_coap = "YOUR_IP";
```
Install dependeces
```bash
npm install
```

## Steps for run

To start the express server, run the following

```bash
npm start
```

Open [http://localhost:5000](http://localhost:5000) and take a look around.
