console.log('Script runs')

const fetchData = async () => {
    const notionToken = 'secret_fWybE89RgzRJOLE5QI5yJwVlfoBzv86GvcS18CqMjoS';
    const databaseId = '718e19df5d4241bbb98bfd85b5fc4dc9';

    try {
        const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${notionToken}`,
                'Notion-Version': '2022-06-28',
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from Notion API');
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        // Handle error appropriately, e.g., show error message to the user
    }
}

fetchData()