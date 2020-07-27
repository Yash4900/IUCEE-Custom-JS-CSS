<script>
jQuery(document).ready(function( $ ){ 
    setTimeout(function(){
        new myCustomFieldController();
        console.log("after");
    })    
    var myCustomFieldController = Marionette.Object.extend({
        initialize() {
            // On the Form Submission's field validaiton...
            var submitChannel = Backbone.Radio.channel( 'submit' );
            this.listenTo( submitChannel, 'validate:field', this.validateall);
            console.log("init");
            // on the Field's model value change...
            var fieldsChannel = Backbone.Radio.channel( 'fields' );
            console.log("before");
            this.listenTo( fieldsChannel, 'change:modelValue', this.validateall);
        },
        validateall ( model ) {
		console.log("validate");
		    if (model.id == 18 || model.id == 19 || model.id == 21){
                if( 0 == model.get( 'required' ) ) return;
                // Check if Model has a value
                val = model.get( 'value' )
                regex = /["]|[']/g
                if( regex.test(val)) {
                    Backbone.Radio.channel( 'fields' ).request( 'add:error', model.get( 'id' ), 'custom-field-error', 'Use of single or double quotes in not allowed');
                }
                else{
                Backbone.Radio.channel( 'fields' ).request( 'remove:error', model.get( 'id' ), 'custom-field-error' );
               }
            }
            if(model.id == 23){
                if( 0 == model.get( 'required' ) ) return;
                //Check if Model has a value
                val = model.get( 'value' );
                regex = /(^[+])([\d]{2})([-]{1})([\d]{10})/g;
                if(regex.test(val)){
                  Backbone.Radio.channel( 'fields' ).request( 'remove:error', model.get( 'id' ), 'custom-field-error' );   
                }
                else {
                // Add Error to Model
                Backbone.Radio.channel( 'fields' ).request( 'add:error', model.get( 'id' ), 'custom-field-error', 'Enter valid phone number');
                }
            }
            if (model.id == 16 || model.id == 20){
                if( 0 == model.get( 'required' ) ) return;
                // Check if Model has a value
                val = model.get( 'value' )
                regex = /[0-9!@#$%^*+_=?<>;:,)(|{}'"]/g
                if( regex.test(val) || val.length <2){
                  // Add Error to Model
                  Backbone.Radio.channel( 'fields' ).request( 'add:error', model.get( 'id' ), 'custom-field-error', 'Enter valid name!! - Use only alphabets');
                }
                else {
                Backbone.Radio.channel( 'fields' ).request( 'remove:error', model.get( 'id' ), 'custom-field-error' );
                }
            }
        }
    })
});
</script>