import axios from "axios"

export async function loadExperiences(){

    //call for the CMS 
    const response = await axios.get("http://localhost:1337/api/experience");
    const experiences=response.data.data.RajeenBalasuriya.data;
    console.log(experiences);
    return experiences;
}

