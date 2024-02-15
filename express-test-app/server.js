import express from 'express';
import fetch from 'node-fetch'; // Import the fetch library to make HTTP requests
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(express.json());



// Define an endpoint that makes requests to the Notion API
app.get('/notion-data', async (req, res) => {
    try {
        const NOTION_TOKEN = 'secret_fWybE89RgzRJOLE5QI5yJwVlfoBzv86GvcS18CqMjoS'; // Replace with your Notion integration token
        const DATABASE_ID = '718e19df5d4241bbb98bfd85b5fc4dc9'; // Replace with your Notion database ID

        const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${NOTION_TOKEN}`,
                'Notion-Version': '2022-06-28',
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from Notion API');
        }

        const data = await response.json();
        res.json(data); // Send the retrieved data as JSON response
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
