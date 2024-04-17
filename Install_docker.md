# Install Docker Engine on Ubuntu

If you're facing difficulty installing Docker on Ubuntu Linux, follow these instructions carefully. The steps outlined below are adapted from the [official Docker documentation](https://docs.docker.com/engine/install/ubuntu/).

### Prerequisites
Ensure you have administrative privileges on your Ubuntu system.

### Step 1: Remove Existing Docker Installations
```bash
$ sudo apt-get remove docker docker-engine docker.io containerd runc
```

### Step 2: Update Package Index
```bash
$ sudo apt-get update
```

### Step 3: Install Dependencies
```bash
$ sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release
```

### Step 4: Add Docker’s GPG Key
```bash
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

### Step 5: Add Docker Repository
```bash
$ echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### Step 6: Update Package Index (again)
```bash
$ sudo apt-get update
```

### Step 7: Install Docker Engine
```bash
$ sudo apt-get install docker-ce docker-ce-cli containerd.io
```

### Step 8: Verify Installation
Ensure Docker is installed properly by running:
```bash
$ docker version
```

### Step 9: Grant Docker Access to Current User
To avoid using sudo with Docker commands, add the current user to the docker group:
```bash
$ sudo groupadd docker
$ sudo usermod -aG docker $USER
$ newgrp docker
```

### Step 10: Pull and Run Lab Image
Finally, pull the lab image and run it with Docker:
```bash
$ docker pull yangzhou301/abe-lab
$ docker run -it yangzhou301/abe-lab
```

That's it! You've successfully installed Docker Engine on your Ubuntu system. You can now utilize Docker for your containerized applications.

<p align="right"><a href="README.md">Return home...</a></p>
