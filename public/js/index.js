function init() {
  var serverBaseUrl = document.domain;
  var socket = io.connect(serverBaseUrl);
  var sessionId = '';

  function updateParticipants(participants) {
    var $participants_collection = _.map(participants, function (participant) {
      var $participant = $('<span id="' + participant.id + '"></span>');
      $participant.text(participant.name + '<br/>');

      return $participant;
    });

    $('#participants').html($participants_collection);
  }

  socket.on('connect', function () {
    sessionId = socket.io.engine.id;
    console.log('connected ' + sessionId);
    socket.emit('newUser', { id: sessionId, name: $('#name').val() });
  });

  socket.on('newConnection', function (data) {
    updateParticipants(data.participants);
  });

  socket.on('userDisconnected', function (data) {
    $('#' + data.id).remove();
  });

  socket.on('nameChanged', function (data) {
    $('#' + data.id).text(data.name);
  });

  socket.on('imcomingMessage', function (data) {
    var $message = $('<b>' + data.name + '</b>' + data.message + '<br/>');
    $('#messages').prepend($message);
  });

  socket.on('error', function (reason) {
    console.log('Error: ' + reason);
  });

  function sendMessage() {
    var outgoingMessage = $('#outgoingMessage').val();
  }
}

$(document).on('ready', init);
