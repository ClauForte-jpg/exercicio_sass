$(document).ready(function () {
  $('#form-tarefa').on('submit', function (evento) {
    evento.preventDefault();

    const nomeTarefa = $('#nova-tarefa').val().trim();

    if (nomeTarefa !== '') {
      $('#lista-tarefas').append('<li>' + nomeTarefa + '</li>');
      $('#nova-tarefa').val('');
    }
  });

  $('#lista-tarefas').on('click', 'li', function () {
    $(this).toggleClass('feito');
  });
});