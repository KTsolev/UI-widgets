let loginData;
let login = {};
$('#greetingDiv').hide();

$('#Login').click(function() {
   login.firstName = $('#firstName').val();
   login.lastName =  $('#lastName').val();

   loginData = G$(login.firstName, login.lastName);
    $('#loginDiv').hide();
    $('#greetingDiv').show();

   loginData.setLang($('#langSet').val()).htmlGreeting('#greeting', true).log();
});

$('#AddGretting').click(function() {
    const msg = $('#msg').val();
    const lang =  $('#lang').val();
    const isFormal =  $('#formal').is(':checked');
    const parent = $('#inFormalGrts');
    const formalparent = $('#formalGrts');

    loginData.addGreeting(lang, msg, isFormal);

    if (isFormal) {
       loginData.printGreetings(true, formalparent);
    } else {
       loginData.printGreetings(false, parent);
    }
 });