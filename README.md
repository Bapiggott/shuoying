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
- Attribute-based encryption (ABE):  ABE is a particular category of public-key crypto-system.
The private key of a specific user depends on the attributes of that user, such as age, date of birth, and position. The idea of encryption attribute was first published in Fuzzy Identity-Based Encryption and then developed as Attribute-Based Encryption for Fine-Grained Access Control of
Encrypted Data.

- Ciphertext-Policy Attribute-Based Encryption (CP-ABE) [2]: In many situations, when a user
encrypts sensitive data, she must establish a specific access control policy on who can decrypt
this data. Suppose that the FBI public corruption offices in Knoxville and San Francisco investigate an allegation of bribery involving a San Francisco lobbyist and a Tennessee congressman. The head FBI agent may want to encrypt a sensitive memo so that only personnel with specific credentials or attributes can access it. For instance, the head agent may specify the following access structure for accessing this information: (("Public Corruption Office" AND
("Knoxville" OR "San Francisco")) OR (management-level > 5) OR "Name: Charlie Eppes"). By doing this, the head agent could mean that the memo should only be read by agents who work at the public corruption offices in Knoxville or San Francisco, FBI officials very high up in the management chain, and a consultant named Charlie Eppes.

- Key-policy attribute-based encryption (KP-ABE) [3]: KP-ABE is another class of ABE, in which
ciphertext is labeled with sets of attributes and private keys are associated with access structures. The access structures control which ciphertext a user should be able to decrypt. KP-ABE has essential applications in data sharing on untrusted cloud storage

## Task 1: Lab Set-up
For this lab, it's suggested to use the pre-built Docker container with OpenABE already installed. Follow the commands listed in [Figure 1](#figure-1-the-command-lines-to-pull-and-run-the-docker-image) to pull and run the Docker image.

**Deliverable 1:** Include a screenshot demonstrating that OpenABE is functioning.

## CP-ABE Exercises
### 4.1 A Case Study of CP-ABE
**Users List:**
| Name  | Age | Department   |
|-------|-----|--------------|
| Alice | 24  | Swimming club |
| Bob   | 21  | Karate club  |
| Cindy | 25  | Karate club  |
Before working on your lab tasks, read the following example to understand CP-ABE and
OpenABE better. A confidential document about Karate is encrypted, whose content is only readable by those who belong to Karate club and older than 24. In this example, of course, only Cindy
can decrypt the file, while neither Alice nor Bob can.

[Continue reading...](#cp-abe-exercises)

...

## Appendices
### A. Install Docker Engine on Ubuntu
For those having difficulty installing Docker on Ubuntu Linux, follow the instructions provided [here](install_docker.md).

[Continue reading...](#appendices)

## References
- [1] R. Sandhu, E. Coyne, H. Feinstein, C. Youman, Role-based access control models, Computer 29 (2) (1996) 38–47. doi:10.1109/2.485845.
- [2] J. Bethencourt, A. Sahai, B. Waters, Ciphertext-policy attribute-based encryption, in: 2007 IEEE Symposium on Security and Privacy (SP ’07), 2007, pp. 321–334. doi:10.1109/
SP.2007.11.
- [3] V. Goyal, O. Pandey, A. Sahai, B. Waters, Attribute-based encryption for fine-grained access control of encrypted data, CCS ’06, Association for Computing Machinery, New York, NY, USA, 2006, p. 89–98. doi:10.1145/1180405.1180418. URL https://doi.org/10.1145/1180405.118041

[More references...](#references)

## Figures
### Figure 1: The command lines to pull and run the Docker image
```plaintext
docker pull yangzhou301/abe-lab
docker run --rm -it yangzhou301/abe-lab
