🚀 MEAN Stack Application – Dockerized Deployment with Nginx

This project is a full-stack MEAN (MongoDB, Express, Angular, Node.js) application that is fully containerized using Docker and deployed on an Ubuntu VM.
An Nginx reverse proxy is used to route traffic between the frontend and backend services.

📌 Project Overview

Frontend: Angular (served via Nginx container)

Backend: Node.js + Express REST API

Database: MongoDB

Reverse Proxy: Nginx (Dockerized)

Containerization: Docker & Docker Compose

Deployment: Ubuntu VM (Cloud)

CI/CD Ready: Docker images pushed to Docker Hub

🗂️ Project Structure
Project/
├── frontend/
│   ├── Dockerfile
│   ├── angular.json
│   └── src/
│
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   └── routes/
│
├── nginx/
│   └── default.conf
│
├── docker-compose.yml
└── README.md

🧱 Architecture Diagram (Logical)
Client Browser
      |
      v
 Nginx (Reverse Proxy)
      |
 ┌───────────────┬───────────────┐
 |               |               |
Frontend       Backend        MongoDB
(Angular)   (Node/Express)

⚙️ Technologies Used

Angular

Node.js

Express

MongoDB

Nginx

Docker

Docker Compose

Ubuntu Linux
🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

2️⃣ Build and Run with Docker Compose
docker-compose up -d --build


This will start:

Frontend container

Backend container

MongoDB container

Nginx reverse proxy

🌐 Access the Application
Service	URL
Frontend	http://<SERVER_PUBLIC_IP>
Backend API	http://<SERVER_PUBLIC_IP>/api
🔁 Nginx Reverse Proxy Configuration

Nginx routes traffic using Docker container names:

location / {
    proxy_pass http://frontend:80;
}

location /api/ {
    proxy_pass http://backend:3000/;
}


This ensures:

Frontend served at /

Backend API accessible at /api

🐳 Docker Images

Docker images are built and pushed to Docker Hub:

Frontend Image
abhinavv2004/mean-frontend:latest

Backend Image
abhinavv2004/mean-backend:latest

🧪 Useful Commands

Check running containers:

docker ps


View logs:

docker logs backend
docker logs frontend
docker logs nginx-proxy


Restart services:

docker-compose restart

🔐 Security & Networking

Containers communicate using Docker bridge networking

No hardcoded credentials

Nginx exposes only port 80

MongoDB runs internally (not exposed publicly
