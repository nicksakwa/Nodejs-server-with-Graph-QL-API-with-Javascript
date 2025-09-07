const fetch = require('node-fetch');
const API_URL = 'http://localhost:4000/';

const runQuery = async () => {
    // 1. Use backticks for the multi-line query string
    const query = `
        query {
            books {
                title
                author
            }
        }
    `;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            // 2. Add a comma between the headers and body properties
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
        });

        const data = await response.json();
        console.log('Query Result:', data.data);
    } catch (error) {
        console.error('Error executing query:', error);
    }
};

const runMutation = async () => {
    // 3. Use backticks for the multi-line mutation string
    const mutation = `
        mutation {
            addBook(title: "Nick life", author: "Nick") {
                title
                author
            }
        }
    `;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            // 4. Add a comma between the headers and body properties
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: mutation }), // 5. The key for the body is `query`, not `mutation`
        });

        const data = await response.json();
        console.log('Mutation result:', data.data);
    } catch (error) {
        console.error('Mutation error:', error);
    }
};

const main = async () => {
    console.log('=== Running Query ===');
    await runQuery();
    console.log('\n=== Running Mutation ===');
    await runMutation();
    console.log('\n=== Running Query Again ===');
    await runQuery();
};

main();