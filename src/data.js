export const API_KEY ='AIzaSyDYuxyKmNPRzKmPel_gmUwM4NWjklJO-LI';

export const value_convertor=(value)=>{
   if(value>=100000){
       return Math.floor(value/100000)+"M"
   } else if(value>=1000){
       return value/1000 +"K"
   }else{
       return value; 
   }
}