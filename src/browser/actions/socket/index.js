import io from "socket.io-client";
class SocketServer{

    constructor(){
        this.socketIo = null;
        this.socket = io('http://127.0.0.1:1987',{transports:['websocket','xhr-polling','jsonp-polling']});
        console.log('11111')
    }
    static Instance;
    static get Instance() {
        if (null == SocketServer.instance) {
            SocketServer.instance = new SocketServer();
        }
        return SocketServer.instance;
    }
    connectIo(){
        // let socket = io('http://127.0.0.1:3000',{transports:['websocket','xhr-polling','jsonp-polling']});
        // socket.emmit()用户客户端向服务端发送消息，服务端与之对应的是socket.on()来接收信息。
        this.socket.emit('pvp', {msg:'hi, server'});
        this.socket.on('pvp', (data)=>{
            console.log(data)
        });
        // socket.on()用于接收服务端发来的消息
        this.socket.on('connect',  ()=>{
            console.log('client connect server');
        });
        this.socket.on('disconnect', ()=>{
            console.log('client disconnect');
        });
    }
}
export default SocketServer;