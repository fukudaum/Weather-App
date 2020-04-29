const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if(!location){
    console.log('Location need to be provided')

}
else{
    geocode(location, (error, {latitude, longitude, location} = {}) => {
        if(error){
            console.log('Error', error)
        }
        else{
            console.log(location)
            forecast(latitude, longitude, (error, data) => {
                if(error){
                    console.log('Error', error)
                }
                else{
                    console.log(data)
                }
            })
        }
    })
    
}

