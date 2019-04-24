$(document).ready(function() {
    $('#modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var recipient = button.data('whatever');
        var modal = $(this);
        modal.find('.modal-title').text(recipient);
        modal.find('.modal-body #feedbackType').val(recipient);
    })
});