require("express-async-errors")


const AppError = require("./utils/AppError")
//É como se eu tivesse pegando toda a pasta do express em node_modules e despejando na variavel
const express = require("express");
//iniciando o express para utilizar ele.

const routes = require("./routes")

const app = express();
app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            stauts: "error",
            message: error.message
        });
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
}); 

//Porta criada
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));