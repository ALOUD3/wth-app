

/* Global Variables */
let Url = `https://api.openweathermap.org/data/2.5/weather?zip=`;
const Key = '&appid=c1d5dc7bb21b7ed0185a8ee22b593232&units=imperial';




document.getElementById('generate').addEventListener('click', go)


function go (e){
    const NewZipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    info(Url, NewZipCode , Key)
    .then (function(data) {
        info('/add',{date:newDate,temp: data.main.temp,content:feelings})
        change()
    })

};




const mth = async (Url, NewZipCode, Key) =>{
    const response = await fetch (Url + NewZipCode + Key)
    try{
        const data = await response.json();
        return data;
    }
    catch (error){
        console.log("nooo", error)
    }
};



const info = async(Url = '/add', data = {})=>{
    const response = await fetch(Url, {
         method: 'GET', 
         });
    try{
        const newinfo = await response.json();
        console.log(newinfo)
    }catch(error){
        console.log("error",error)
    }
};



const change = async () => {
    const request = await fetch ('/weather');
    try{
        const updateAll = await request.json();
        document.getElementById('date').innerHTML= updateAll.date;
        document.getElementById('temp').innerHTML= updateAll.temp;
        document.getElementById('content').innerHTML= updateAll.content;
    } catch (error){
        console.log("noooooo", error);
    }

}







// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
