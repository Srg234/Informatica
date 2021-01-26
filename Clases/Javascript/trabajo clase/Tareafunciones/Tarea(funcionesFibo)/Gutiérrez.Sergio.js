function Fibonacci(number){
    let counter=1
    let counterant=1
    
    let ncounter=2
    
        if(number<0){
    return("no es posible")
    }
    
    if(number==1){
    return(1)
    }
    if(number==0){
        return(0)
        }
    if(number>1){
    
    
    
    if(number==2){
        return(counter)
    }
    do{
    ncounter=1+ncounter
    counter=counter+counterant
    counterant=counter-counterant
    
    
    
    
    }while(ncounter<number)
    return(counter)
    }
    }

    function imprMasLarga(c,d){
        if(c.length>d.length){
        console.log(c)
        
        
        }
        if(c.length==d.length){
        console.log("son igual de largas")    
        }
        else{
            console.log(d)
        }}
        function masLarga(c,d){
            if(c.length>d.length){
            return(c)
            
            
            }
            if(c.length==d.length){
            console.log("son igual de largas")    
            }
            else{
               return(d)
            }
            }

            function Maxnumber(a,b){
                if(a<b){
                return(b)
                }
                else{
                return(a)    
                }
                }
                function volEsfera(r){
                    let result=(4/3)*Math.PI*((r)*(r)*(r))
                    return(result)}
                    function areCircle(radius){
                        let pi= Math.PI
                        let result=pi*radius
                        return(result)}