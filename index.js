const fs = require('fs');
const args = process.argv.slice(2);

// Define the file path for our JSON data
const filePath = 'data.json';

// Create a new item
if (args[0] === 'create') {
    const data = fs.readFileSync(filePath, 'utf8');
    const items = JSON.parse(data);
    const newItem = {
        id: parseInt(args[1]),
        name: args[2]
    };
    items.push(newItem);
    fs.writeFileSync(filePath, JSON.stringify(items));
    console.log(`Item with ID ${newItem.id} created successfully!`);
}

// Read an item
if (args[0] === 'read') {
    const data = fs.readFileSync(filePath, 'utf8');
    const items = JSON.parse(data);
    const item = items.find((item) => item.id === parseInt(args[1]));
    console.log(item);
}

// Update an item
if (args[0] === 'update') {
    const data = fs.readFileSync(filePath, 'utf8');
    const items = JSON.parse(data);
    const itemIndex = items.findIndex((item) => item.id === parseInt(args[1]));
    items[itemIndex].name = args[2];
    fs.writeFileSync(filePath, JSON.stringify(items));
    console.log(`Item with ID ${args[1]} updated successfully!`);
}

// Delete an item
if (args[0] === 'delete') {
    const data = fs.readFileSync(filePath, 'utf8');
    const items = JSON.parse(data);
    const filteredItems = items.filter((item) => item.id !== parseInt(args[1]));
    fs.writeFileSync(filePath, JSON.stringify(filteredItems));
    console.log(`Item with ID ${args[1]} deleted successfully!`);
}
