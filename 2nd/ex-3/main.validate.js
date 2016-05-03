$(document).ready(function() {

$('#send').click( function(){
      $("input[name^='send_']")
      .val('')
        .prop( 'readonly', ! $(this).prop( 'checked' ) );
});

jQuery.validator.addMethod( "zipcodePL", function( value, element ) {
	return this.optional(element) || /^\d{2}-\d{3}$/.test(value);
}, "Wprowadź poprawny kod pocztowy" );

jQuery.validator.addMethod( "strongPassword", function( value, element ) {
	return this.optional(element) || /^(?=.{6,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]{2,})(?=.*[!@#$%^&*\(\)]).*$/g.test(value);
}, "Wprowadź silniejsze hasło" );

    var _form = $("#regForm");

    var validator = _form.validate({
          debug: true,
          
          errorLabelContainer: "#messageErrors",
          wrapper: "li",
          errorElement: "span",    
          
        //ignore: [],
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            surname: {
                required: true,
                rangelength: [3, 20]
            }, 
            password: {
                required: true,
                minlength: 6,
                strongPassword: true
            },
            password2: {
                required: true,
                minlength: 6,
				equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            url: {
                url: true
            },

            address: {
                required: true,
                minlength: 5
            },
            zip: {
                required: true,
                zipcodePL: true
            },  
            city: {
                required: true,
                minlength: 3
            },
            send_address: {
                required: function(element) { return $("#send").is(":checked") },
                minlength: {
                    param: 5,
                    depends: function(element) {
                      return $("#send").is(":checked");
                    }
                }                    
            },
            send_zip: {
                required: function(element) { return $("#send").is(":checked") },
                zipcodePL: function(element) { return $("#send").is(":checked") }
            },  
            send_city: {
                required: function(element) { return $("#send").is(":checked") },
                minlength: {
                    param: 3,
                    depends: function(element) {
                      return $("#send").is(":checked");
                    }
                }
            },            
            reg: {
                required: true
            },            
        },
        messages: {
			
				name: {
					required: 'Pole imię wymagane',
					minlength: 'Wpisz conajmniej {0} znaki',
				},
				surname: {
					required: 'Pole nazwisko wymagane',
					rangelength: 'Wpisz od {0} do {1} znaków',
				},
				password2: {
					equalTo: 'Hasła muszą być takei same',
				},				
				email: {
					required: 'Pole wymagane',
					email: 'Wpisz poprawny adres email',
				},
				url: {
					url: 'Wpisz poprawny adres URL',
				},
				reg: {
					required: 'Proszę zaakceptować regulamin',
				}                
        }
		/*
		,
        errorPlacement: function(error, element) {
            error.insertBefore(element.prev());
        }
		*/
    });

});


