# HNG_Project_Stage0: Oluwamayowa Olawumi's Static Website

## Overview

Welcome to my static website project! This site showcases my brief personal profile as part of the HNG Internship. The site is built with HTML, CSS, and JavaScript, and it includes features like a button to toggle additional information about me.

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

This project involves deploying a static website on a cloud platform using a web server. The website includes basic information about me, Oluwamayowa Olawumi, and mentions the HNG Internship with a link to the [HNG website](https://hng.tech).

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

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/codewithmayor/HNG_DevOps_Project_Stage0
    cd HNG_DevOps_Project_Stage0
    ```

2. **Setup AWS EC2 Instance:**
   - Launch an EC2 instance on AWS.
   - Connect to the instance using your SSH client.

3. **Install NGINX:**

    ```bash
    sudo apt update
    sudo apt install nginx
    ```

4. **Deploy the Website:**
   - Upload your website files to the EC2 instance. You can use `scp` or any other file transfer method.
   - Place your website files in the NGINX default directory:

    ```bash
    sudo cp -r <local-website-files>/* /var/www/html/
    ```

5. **Restart NGINX:**

    ```bash
    sudo systemctl restart nginx
    ```

### Deployment

Your website should now be live and accessible via the public IP address of your EC2 instance. You can visit the site using the IP address in your web browser.

## Contact

Name: Oluwamayowa Olawumi

Email: codewithmayor@gmail.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

