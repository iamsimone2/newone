/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  .uib_w_3 */
    
    
        /* listitem  .uib_w_3 */
    $(document).on("click", ".uib_w_3", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* listitem  #pancakes */
    $(document).on("click", "#pancakes", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
