const express = require('express');
const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");
const cors = require('cors');
require('dotenv').config();
const server = express();
server.use(express.json());
server.use(cors());

const MODEL_NAME = "models/chat-bison-001";

const client = new DiscussServiceClient({
    authClient: new GoogleAuth().fromAPIKey(process.env.API_KEY),
});

server.listen(process.env.PORT,()=>{
    console.log('sever is activated');
})

server.post('/completitions',async (req,res) => {

    const data = req.body.message;
    try {
        const result = await client.generateMessage({
            model: MODEL_NAME,
            temperature: 0.5,
            candidateCount: 1,
            prompt: {
              messages: [{ content: `${data}` }],
            },
          });

        const message = result[0].candidates[0].content;
        res.status(200).json({
            statusCode:200, 
            message,
        });
    } catch (error) {
        console.log('while making post request to open AI server');
        res.status(500).json({
            statusCode:500,
            errMessage: "Internal server error try again later !"
        });
    }
});