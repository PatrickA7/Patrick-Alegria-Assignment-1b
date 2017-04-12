/**
* Scripts for Assignment 1b
*
* author: Patrick Alegria
* student number: s290816
*/

/* Fading in the form when scrolling to the bottom using jQuery */

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.mailInput').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},800);
                    
            }
        }); 
        
        $('.mailingListDescription').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
        }); 
    
    });
    
});


/*Database manipulation and form validation*/
var input = document.getElementById('userInput');
var output = document.getElementById('output');

var enterBtn = document.getElementById('write');
var readBtn = document.getElementById('read');
var resetBtn = document.getElementById('reset');

var storageIndex = 0;

enterBtn.addEventListener('click', storeTextHandler);
readBtn.addEventListener('click', readDBHandler);
resetBtn.addEventListener('click', resetDBHandler);


function storeTextHandler (){  
/* Mail validation tutorial from http://www.w3resource.com/javascript/form/email-validation.php*/
    
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/* Checking if the submitted email address follows correct email syntax */  
if(userInput.value.match(mailformat))  {  
    output.textContent = 'Submission successful!';
    localStorage.setItem(storageIndex++, input.value);
    document.mailingList.userInput.focus(); 
    input.value = '';
    return true; 
    } else {   
        output.textContent = 'Please enter a valid email address';
        document.mailingList.userInput.focus();  
        return false;  
        } 
    
}  

function readDBHandler() {
    var returnText = '';
    
    if(localStorage.length == 0){
       returnText = 'No emails available';
        } else {
			/* loop through localStorage and add values to returnText */
			for (var i = 0; i < localStorage.length; i++) {
				returnText += i + ": " + localStorage.getItem(i) + "\n";
			}
    }
    output.textContent = returnText;

}

function resetDBHandler() {
    localStorage.clear();
    output.textContent = 'Database cleared';
    /* reset the index */
	storageIndex = 0;

}