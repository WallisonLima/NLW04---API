import express from "express"

const app = express();

app.get("/", (request, response) =>{
    return response.json({message: "Hello World - NLW04"})
})

app.post("/", (request, responde) =>{
    return responde.json({message: "Os dados foram salvos com sucesso!"})
})




app.listen(8080, () => console.log("Server is running!") )