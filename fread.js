// Import the File System (fs) module
const fs = require("fs");

// Create a file named student.txt
fs.readFile("student.txt", "utf8", (err, data) => {
    // Check if an error occurred
    if (err) {
        console.log("Error reading           file:", err);
        return;
    }
    
    console.log("File content:", data);
});