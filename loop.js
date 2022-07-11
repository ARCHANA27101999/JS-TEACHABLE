let items=[
    {
         email:'John@gmail.com',
         username:'johnd',
         password:'m38rmF$',
         name:{
             firstname:'John',
             lastname:'Doe'
         },
         address:{
             city:'kilcoole',
             street:'7835 new road',
             number:3,
             zipcode:'12926-3874',
             geolocation:{
                 lat:'-37.3159',
                 long:'81.1496'
             }
         },
         phone:'1-570-236-7033'
     }
]
items.forEach (myfunction);
function myfunction(val,item,index) {
    for(var v in val)
    console.log(val.email);
    console.log(val.phone);
    console.log(val.name.firstname);
    console.log(val.name.lastname);
  
   
       
        // for(var v in val)
        
        // console.log(v.phone);
        
            // console.log(`fname:${v.firstname}`);
        //     for (var val in value){
        //         console.log(value[val]);
                
                
        //     }

            
        
    }
    