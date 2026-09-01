// Import the File System (fs) module
const fs = require("fs");

// Delete the student.txt file
fs.unlink("student.txt", (err) => {
    
    // Check for error
    if (err) {
        console.log("Error deleting file:", err);
        return;
    }
    
    console.log("File deleted successfully!");
});