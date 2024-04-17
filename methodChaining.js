// Method Chaining
/*

*/

function dstring(str){
    console.log(str);
return {

    fname:"Joshua",
    lname:"Rice",
    age:36,

    dnum : function(num){

        console.log(num);

            return {

                dsymbol: function(sym){

                    console.log(sym);
    

            }
            
                
            }

    }

}

}

dstring("testing").dnum(1000).dsymbol("&$#@");