

# CP-ABE Exercises
## CP-ABE Problem Solving

As mentioned before, a CP-ABE crypto-system specifies attributes associated with users and uses policies associated with ciphertext. A user can decrypt a ciphertext if and only if her attributes satisfy the policy. Let’s use the scenarios of ”Harry Potter and the Philosopher’s Stone” to practice the CP-ABE.

#### Users List

| User Name         | DOB           | Hair Color | Level   |
|-------------------|---------------|------------|---------|
| Harry Potter      | July 31, 1980 | Black      | Student |
| Ron Weasley       | March 1, 1980 | Blond      | Student |
| Quirinus Quirrell | September 26, 1970 | Black | Professor |

Let’s say a confidential document is encrypted by Hermione Granger, whose content is only viewable by Harry Potter and Ron Weasley. In other words, only Harry and Ron can decrypt and read the document, while Professor Quirrell cannot. You should create a random document for your own and demonstrate this scenario.

### Deliverable 3
Let’s say you are Hermione Granger. Please provide command lines that encrypt the document. Also, please include the screenshot(s) to demonstrate that the document has been encrypted successfully.

### Deliverable 4
Please provide command lines that show Harry Potter and Ron Weasley can decrypt the ciphertext. Also, provide the command line(s) that show Professor Quirrell cannot decrypt the ciphertext or decrypts with failure. You should include a screenshot(s) that demonstrates it.
