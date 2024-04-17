# shuoying
# ReScuE Labs - Attribute-based Encryption (ABE) Lab

## Overview
This lab helps students better understand Role-based Access Control (RBAC) and cryptographic technologies of Attribute-based Encryption (ABE). Students will be introduced to two different ABEs: Ciphertext-Policy ABE (CP-ABE) and Key-Policy ABE (KP-ABE) and their applications.

### Learning Objectives:
1. Be able to describe attribute-based encryption, including CP-ABE and KP-ABE.
2. Be able to compose security policies according to various realistic scenarios.
3. Be able to integrate security policies into crypto-keys.
4. Be able to decrypt ciphertext using correct crypto-keys.

## Background
- Attribute-based encryption (ABE): ABE is a particular category of public-key crypto-system where the private key of a user depends on the attributes of that user.
- Ciphertext-Policy Attribute-Based Encryption (CP-ABE): In CP-ABE, access control policies are associated with ciphertext.
- Key-policy Attribute-Based Encryption (KP-ABE): In KP-ABE, access structures control which ciphertext a user should be able to decrypt.

## Task 1: Lab Set-up
For this lab, it's suggested to use the pre-built Docker container with OpenABE already installed. Follow the commands listed in [Figure 1](#figure-1-the-command-lines-to-pull-and-run-the-docker-image) to pull and run the Docker image.

**Deliverable 1:** Include a screenshot demonstrating that OpenABE is functioning.

## CP-ABE Exercises
### 4.1 A Case Study of CP-ABE
Before working on lab tasks, read the provided example to understand CP-ABE and OpenABE better.

[Continue reading...](#cp-abe-exercises)

...

## Appendices
### A. Install Docker Engine on Ubuntu
For those having difficulty installing Docker on Ubuntu Linux, follow the instructions provided [here](#figure-6-the-command-lines-to-install-docker-on-ubuntu).

[Continue reading...](#appendices)

## References
- [1] R. Sandhu, E. Coyne, H. Feinstein, C. Youman, Role-based access control models, Computer 29 (2) (1996) 38–47.
- [2] J. Bethencourt, A. Sahai, B. Waters, Ciphertext-policy attribute-based encryption, in: 2007 IEEE Symposium on Security and Privacy (SP ’07), 2007, pp. 321–334.
- [3] V. Goyal, O. Pandey, A. Sahai, B. Waters, Attribute-based encryption for fine-grained access control of encrypted data, CCS ’06, Association for Computing Machinery, New York, NY, USA, 2006, p. 89–98.

[More references...](#references)

## Figures
### Figure 1: The command lines to pull and run the Docker image
```plaintext
docker pull yangzhou301/abe-lab
docker run --rm -it yangzhou301/abe-lab
