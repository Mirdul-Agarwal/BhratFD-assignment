# BharatFD - FAQ Management API

## Project Overview
This is a backend API designed for managing Frequently Asked Questions (FAQs). The API supports multiple languages and uses Redis for caching translations. It provides an admin interface using AdminJS and allows dynamic CRUD operations for FAQs.


## Features
- **CRUD operations** for managing FAQs.
- **Multi-language support** (automated translations using Google Translate API).
- **Caching mechanism** using Redis.
- **Admin interface** with AdminJS for managing FAQs.
- **WYSIWYG Editor support** for FAQs.

## Installation Steps

1. Clone the Repository
    git clone https://github.com/your-username/BharatFD.git
2. Navigate to the Project Directory
    cd BharatFD
3. Install Dependencies
    cd backend
    npm install
4. Set Up Environment Variables
    cp .env.example .env
    Example of env:
        MONGO_URI=mongodb://localhost:27017/bharatfd
        REDIS_HOST=localhost
        PORT=5000
5. Start the Server
    npm start

## API Usage Examples
   Example for a POST request (Create FAQ):

   Invoke-WebRequest -Uri "http://localhost:5000/api/faqs" `
    -Method POST `
    -ContentType "application/json" `
    -Body '{"question": "What is Node.js?", "answer": "Node.js is a JavaScript runtime."}'

    Example Response:
    
    StatusCode        : 201
    StatusDescription : Created
    Content           : {"question":"What is Node.js?","answer":"Node.js is a JavaScript runtime.","translations":{"hi":"Node.js क्या 
                        है?","bn":"নোড.জেএস কী?"},"_id":"679f15f0fe0d19384bb20e6b","__v":0}
    RawContent        : HTTP/1.1 201 Created
                        Access-Control-Allow-Origin: *
                        Connection: keep-alive
                        Keep-Alive: timeout=5
                        Content-Length: 207
                        Content-Type: application/json; charset=utf-8
                        Date: Sun, 02 Feb 2025 06:51:28...
    Forms             : {}
    Headers           : {[Access-Control-Allow-Origin, *], [Connection, keep-alive], [Keep-Alive, timeout=5], [Content-Length, 207]...}    
    Images            : {}
    InputFields       : {}
    Links             : {}
    ParsedHtml        : mshtml.HTMLDocumentClass
    RawContentLength  : 207

    Example for a GET request (Get All FAQs):

    Invoke-WebRequest -Uri "http://localhost:5000/api/faqs"


##  Contribution Guidelines
Feel free to fork the repository, make changes, and create a pull request.
1. *Fork the repository.
2. *Create a new branch (git checkout -b feature/your-feature-name).
3. *Commit your changes (git commit -am 'Add new feature').
4. *Push to the branch (git push origin feature/your-feature-name).
5. *Create a pull request.


## License
    Key Improvements:
1. *Clearer Project Overview** with additional features listed.
2. *Installation Steps** with explicit commands for setting up the       environment.
3. *Example API Usage** improved with multiple examples and responses.
4. *Contribution Guidelines** added for clarity.
#   B h r a t F D - a s s i g n m e n t  
 #   B h r a t F D - a s s i g n m e n t  
 