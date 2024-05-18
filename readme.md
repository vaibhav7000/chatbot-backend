### Prerequisites
Before you begin, ensure you have the following installed on your machine
1. To check whether nodeJS is installed on your machine (run command -> node --version and npm --version) if you get any version you are good to go further
2. Installtion of git (run command -> git --version) if you get any version you are good to go for installation


### Installation
1. clone the remote repository into your local system (run command -> git clone https://github.com/vaibhav7000/chatbot-backend.git )
2. change directory (run command -> cd chatbot-backend) or open that folder using editor (vscode)
3. Bring all required npm packages (run command -> npm install)
4. Start the project on local system (run command -> npm run dev)

### Project Description
For the creation of HTTP servers I have used expressJS which under the hood uses nodeJS http module for creating server. Along with that for creation of chat I have used google Palm API for generating text and along with that uses cors so that server does not block any request from client as amiddleware