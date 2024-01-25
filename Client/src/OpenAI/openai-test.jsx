import React from 'react'
import OpenAI from 'openai'

const openai = new OpenAI();

async function main() {
    const completion = await open.chait.completions.create({
        messages: [{ role: 'system', content: 'You are a helpful assistant'}],
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
}

main();