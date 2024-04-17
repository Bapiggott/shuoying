
# CP-ABE Exercises
## A Case Study of CP-ABE
**Users List:**
| Name  | Age | Department   |
|-------|-----|--------------|
| Alice | 24  | Swimming club |
| Bob   | 21  | Karate club  |
| Cindy | 25  | Karate club  |

Before working on your lab tasks, read the following example to understand CP-ABE and
OpenABE better. A confidential document about Karate is encrypted, whose content is only readableable by those who belong to Karate club and older than 24. In this example, of course, only Cindy can decrypt the file, while neither Alice nor Bob can.

## A Case Study of CP-ABE

### Users List

| Name   | Age | Department    |
|--------|-----|---------------|
| Alice  | 24  | Swimming club |
| Bob    | 21  | Karate club   |
| Cindy  | 25  | Karate club   |

Before working on your lab tasks, read the following example to understand CP-ABE and OpenABE better. A confidential document about Karate is encrypted, whose content is only readable by those who belong to Karate club and are older than 24. In this example, only Cindy can decrypt the file, while neither Alice nor Bob can.

### Construct a CP-ABE crypto-system with "grizzly" as the prefix of the file name.
```bash
$ oabe_setup -s CP -p grizzly
```
### Generate keys for Alice, Bob, and Cindy with their attributes.
```bash
$ oabe_keygen -s CP -p grizzly -i "Age=24|Swimming-club" -o alice_key
$ oabe_keygen -s CP -p grizzly -i "Age=21|Karate-club" -o bob_key
$ oabe_keygen -s CP -p grizzly -i "Age=25|Karate-club" -o cindy_key
```
### Write a secret message into input.txt
```bash
$ echo "114514" > input.txt
```
### Encrypt the file
```bash
$ oabe_enc -s CP -p grizzly -e "((Age > 22) and (Karate-club))" -i input.txt -o output.cpabe
```

### See Also
For more information about how to use the OpenABE command, please refer to [OpenABE CLI README](https://github.com/zeutro/openabe/blob/master/cli/README.md) and the following documents for details:
- OpenABE API Guide Document: explains how to install and use the library.
- OpenABE CLI Util Document: shows how to use the included command-line tools, including benchmarking.
- OpenABE Design Document: explains in detail the functionalities and algorithms implemented.

Then, you can check the result of decryption as follows:
```bash
# Alice decrypts with Alice’s key -- should fail
$ oabe_dec -s CP -p grizzly -k alice_key.key -i output.cpabe -o alice_plain.txt
# Bob decrypts with Bob’s key -- should fail
$ oabe_dec -s CP -p grizzly -k bob_key.key -i output.cpabe -o bob_plain.txt
# Cindy decrypts with Cindy’s key -- should pass
$ oabe_dec -s CP -p grizzly -k cindy_key.key -i output.cpabe -o cindy_plain.txt
$ cat cindy_plain.txt
```
### Deliverable 2
Please include a screenshot that demonstrates that Cindy can successfully decrypt and read  _cindy_plain.txt_.

### CP-ABE Problem Solving

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
