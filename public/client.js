const socket = io();

console.log(socket);

let name;
do {

    name = prompt('Please Name');
}while(!name)

$('.msg_send_btn').click(function(){
    var msg = $('.write_msg').val();
    $('.write_msg').val('');
     let data = {
         username:name,
         message:msg
     }
    //  sendMessage(data);
    socket.emit('message',data);

});

function sendMessage(msg){
    $('.msg_history').append(`
      <div class="outgoing_msg">
        <div class="sent_msg">
        <p>${msg.message}</p><span class="time_date">${msg.username} 11:01 AM | Today</span>
        </div>
      </div>`);
    var target = $('.msg_history');
    $('.msg_history').scrollTop(1000);
}

socket.on('message',(msg) => {
    sendMessage(msg);
  });