# ReScuE Labs - Attribute-based Encryption (ABE) Lab
# Fine-grained Access Control with Attribute-based Encryption (ABE) Lab
## Overview
This lab will help students better understand Role-based Access Control (RBAC)  <a href="#cite1">[1]</a>. and cryptographic technologies of Attribute-based Encryption (ABE). Students will be introduced to two different ABEs: Ciphertext-Policy ABE (CP-ABE) and Key-Policy ABE (KP-ABE) and their applications.

## Table of Contents

- [Overview](#overview)
- [Learning Objectives](#learning-objectives)
- [Background](#background)
- [Lab Set-up](#lab-set-up)
- [Exercises](#exercises)
- [Deliverables](#deliverables)
- [Appendices](#appendices)
- [References](#references)


## Learning Objectives:
1. Be able to describe attribute-based encryption, including CP-ABE and KP-ABE.
2. Be able to compose security policies according to various realistic scenarios.
3. Be able to integrate security policies into crypto-keys.
4. Be able to decrypt ciphertext using correct crypto-keys.

## Background
- Attribute-based encryption (ABE):  ABE is a particular category of public-key crypto-system.
The private key of a specific user depends on the attributes of that user, such as age, date of birth, and position. The idea of encryption attribute was first published in Fuzzy Identity-Based Encryption and then developed as Attribute-Based Encryption for Fine-Grained Access Control of
Encrypted Data.

- Ciphertext-Policy Attribute-Based Encryption (CP-ABE) [2]: In many situations, when a user
encrypts sensitive data, she must establish a specific access control policy on who can decrypt
this data. Suppose that the FBI public corruption offices in Knoxville and San Francisco investigate an allegation of bribery involving a San Francisco lobbyist and a Tennessee congressman. The head FBI agent may want to encrypt a sensitive memo so that only personnel with specific credentials or attributes can access it. For instance, the head agent may specify the following access structure for accessing this information: (("Public Corruption Office" AND
("Knoxville" OR "San Francisco")) OR (management-level > 5) OR "Name: Charlie Eppes"). By doing this, the head agent could mean that the memo should only be read by agents who work at the public corruption offices in Knoxville or San Francisco, FBI officials very high up in the management chain, and a consultant named Charlie Eppes.

- Key-policy attribute-based encryption (KP-ABE) [3]: KP-ABE is another class of ABE, in which
ciphertext is labeled with sets of attributes and private keys are associated with access structures. The access structures control which ciphertext a user should be able to decrypt. KP-ABE has essential applications in data sharing on untrusted cloud storage

## Lab Set-up
For this lab, we suggest you use our pre-built Docker 1 container, which already installed [OpenABE](https://github.com/zeutro/openabe). OpenABE is a cryptographic library that implements a collection of attribute-based encryption (ABE) algorithms, industry-standard cryptographic functions, and tools. Use the following commands to pull and run the Docker image:
```bash
$  docker pull yangzhou301/abe-lab
$  docker run --rm -it yangzhou301/abe-lab
```
**Deliverable 1:** Include a screenshot demonstrating that OpenABE is functioning.

## Exercises
1.  CP-ABE Exercises
   - [A Case Study of CP-ABE](CP-ABE_cs.md)
   - [CP-ABE Problem Solving](CP-ABE_ps.md)
2.  KP-ABE Exercises
   - [A Case Study of KP-ABE](KP-ABE_cs.md)
   - [KP-ABE Problem Solving](KP-ABE_ps.md)

## Deliverables
Please ensure that you have completed each deliverable according to the provided instructions.

- [Deliverable 1](README.md#lab-set-up)
   - Please include a screenshot to demonstrate that the OpenABE is functioning.

- [Deliverable 2](CP-ABE_cs.md#deliverable-2)
  - Please include a screenshot that demonstrates that Cindy can successfully decrypt and read cindy plain.txt.

- [Deliverable 3](CP-ABE_ps.md#deliverable-3)
  - Let’s say you are Hermione Granger. Please provide command lines that encrypt the document. Also, please include the screenshot(s) to demonstrate that the document has been encrypted successfully.

- [Deliverable 4](CP-ABE_ps.md#deliverable-4)
  - Please provide command lines that show Harry Potter and Ron Weasley can decrypt the ciphertext. Also, provide the command line(s) that shows Professor Quirrell cannot decrypt the ciphertext or decrypts with failure. You should include a screenshot(s) that demonstrates it.

- [Deliverable 5](KP-ABE_cs.md#deliverable-5)
  - Please include a screenshot that demonstrates the results of executing the decryption commands.

- [Deliverable 6](KP-ABE_ps.md#deliverable-6)
  - Construct a KP-ABE crypto-system and assign a secret key to Iron Man.

- [Deliverable 7](KP-ABE_ps.md#deliverable-7)
  - Compose the plain text of the four “proof-of-the-concept” (random) messages and then encrypt them with their metadata.

- [Deliverable 8](KP-ABE_ps.md#deliverable-8)
  - Which messages can be decrypted by Iron Man? Why?



## Appendices
### Install Docker Engine on Ubuntu
For those having difficulty installing Docker on Ubuntu Linux, follow the instructions provided [here](Install_docker.md).



## References
<span id="ref1"></span>[1] Citation details go here.
- [1] R. Sandhu, E. Coyne, H. Feinstein, C. Youman, Role-based access control models, Computer 29 (2) (1996) 38–47. doi:10.1109/2.485845.
- [2] J. Bethencourt, A. Sahai, B. Waters, Ciphertext-policy attribute-based encryption, in: 2007 IEEE Symposium on Security and Privacy (SP ’07), 2007, pp. 321–334. doi:10.1109/SP.2007.11.
- [3] V. Goyal, O. Pandey, A. Sahai, B. Waters, Attribute-based encryption for fine-grained access control of encrypted data, CCS ’06, Association for Computing Machinery, New York, NY, USA, 2006, p. 89–98. doi:10.1145/1180405.1180418. URL https://doi.org/10.1145/1180405.1180418


