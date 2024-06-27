# HNG_Project_Stage0

# Oluwamayowa Olawumi's Static Website

Welcome to my static website project! This site showcases my personal profile as part of the HNG Internship. The site is built with HTML, CSS, and JavaScript, and it includes features like a button to toggle additional information about me.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Deployment](#setup-and-deployment)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Deployment](#deployment)
- [Contact](#contact)
- [License](#license)

## Overview

This project involves deploying a static website on a cloud platform using a web server. The website includes basic information about me, Oluwamayowa Olawumi, and mentions the HNG Internship with a link to the HNG website.

## Features

- Simple and clean design
- Responsive layout
- JavaScript functionality to toggle additional information
- Links that open in a new tab

## Technologies Used

- HTML
- CSS
- JavaScript
- AWS EC2 (for deployment)
- NGINX (as the web server)

## Setup and Deployment

### Prerequisites

- AWS account
- Basic knowledge of HTML, CSS, JavaScript, and command line
- SSH client (e.g., Terminal on macOS, PuTTY on Windows)

### Installation

1. Clone the repository (if applicable) or download the project files to your local machine.
```on bash
git clone https://github.com/codewithmayor/HNG_Project_Stage0.git
cd HNG_Project_Stage0
2. Ensure you have your static website files (index.html, styles.css, script.js) in the project directory.
Deployment
Launch an AWS EC2 Instance
Go to the AWS Management Console and log in.
Navigate to EC2 and click "Launch Instance".
Choose an Amazon Machine Image (AMI), such as Amazon Linux 2 AMI (HVM).
Select an instance type (e.g., t2.micro).
Configure instance details and add storage (default settings are usually fine).
Add tags (optional) and configure the security group:
Allow SSH access (port 22) from your IP.
Allow HTTP access (port 80) from anywhere.
Review and launch the instance, then download the key pair.

### Connect to Your EC2 Instance
Use SSH to connect to your instance. Replace your-key-file.pem and your-ec2-public-dns with your key file and EC2 public DNS name.
chmod 400 your-key-file.pem
ssh -i "your-key-file.pem" ec2-user@your-ec2-public-dns

Update the package lists and install NGINX:
sudo yum update -y
sudo amazon-linux-extras install nginx1.12
sudo systemctl start nginx
sudo systemctl enable nginx

### Deploy Your Static Website
Remove the default NGINX files:
sudo rm /usr/share/nginx/html/index.html
Transfer your local files to the EC2 instance using SCP (run this command on your local machine):
scp -i "your-key-file.pem" -r /path/to/your/website/* ec2-user@your-ec2-public-dns:/usr/share/nginx/html/
Adjust the permissions (run this on your EC2 instance):
sudo chown -R nginx:nginx /usr/share/nginx/html
Verify Your Deployment
Open a web browser and navigate to your EC2 instance's public IP address. You should see your deployed static website.

Contact
Name: Oluwamayowa Olawumi
