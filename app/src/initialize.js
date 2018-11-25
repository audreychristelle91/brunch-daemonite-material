var $ = jQuery = require('jquery');
require('textillate');

var app = {
  init: function(){
	//	alert("Coucou, c'est moi, c'est Lapinou");
		$('.test').textillate({ in: { effect: 'flip' } });
	//	$('#myNavdrawer').navdrawer();
		$("form[name='registration']").validate({
	    // Specify validation rules
	    rules: {
	      // The key name on the left side is the name attribute
	      // of an input field. Validation rules are defined
	      // on the right side
	      champ1: "required",
	    },
	    // Specify validation error messages
	    messages: {
	      champ1: "Please enter your firstname",
	    },
	    // Make sure the form is submitted to the destination defined
	    // in the "action" attribute of the form when valid
	    submitHandler: function(form) {
	      form.submit();
	    }
	  });


  }

};

$(app.init);
