const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { Configuration, OpenAIApi } = require('openai');

const openAiApiKey = import.meta.env.VITE_OPENAI_KEY_SECRET;

const config = new Configuration({
    openAiApiKey,
})

const openai = new OpenAIApi(config);

// Setup server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGpt
app.post('/chat'), async(req, res) => {
    
    const { prompt } = req.body;

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        max_tokens: 512,
        temperature: 0,
        prompt: prompt,
    });

    res.send(completion.data.choices[0].text);
}

const port = 5173;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});