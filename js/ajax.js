$(document).ready(function () {
    $('#btn').on('click', function () {
        var user = $('#name').val();
        setName(user);
        var age = $('#age').val();
        var key = /^\d+$/.test(age);
        setAge(key);
        var nickname = $('#nick').val();
        if (!user) {
            $('.alert-danger').fadeIn(500).append('Error: <br> - Name is empty <br>');
        }
        if (!key) {
            $('.alert-danger').fadeIn(500).append('- Age shall be a number <br>');
        }
        var nicknames = false;
        for(let i=0; i<nickname.length;i++){
            if(nickname[i] = nickname[i].toUpperCase() && nickname.length > 9){
                nicknames = true;
                setSuccess('nick');
                break;
            }
        }
        if(!nicknames){
            $('.alert-danger').fadeIn(500).append('- Nickname shall contain one uppercass char');
            setError('nick')
        }
        if(user && key && nicknames){
            $('.alert-success').fadeIn(500).append('Success');
        }
    });

});
function setSuccess(success) {
    $('#' + success).addClass('border-success').removeClass('border-danger');
}
function setError(error) {
    $('#' + error).addClass('border-danger').removeClass('border-success');

}
function setAge(ages) {
    ages ? setSuccess('age') : setError('age');

}
function setName(names) {
    names ? setSuccess('name') : setError('name');
}