# KP-ABE Exercises
## A Case Study of KP-ABE

For the KP-ABE crypto-system, the security policies are associated with users, which are specified as their private keys. The attributes are associated with ciphertext. A user can decrypt a ciphertext if and only if her private key satisfies the ciphertext’s security attributes.

For example, as an employee of Amazon.com, Bob can only access emails sent to him during his employment at Amazon.com, say, from August 1 to August 31, 2019, which has been constituted in his private key. All emails circulated within Amazon.com are encrypted with some attributes, such as from, to, date, etc.

#### Construct a KP-ABE crypto-system with "amazon" as the prefix of file names.
```bash
$ oabe_setup -s KP -p amazon
```
#### Generate key slice for Bob.
```bash
$ oabe_keygen -s KP -p amazon -i "(To:Bob and (Date = Aug 1-31, 2019))"
-o bob_KP
```
#### Encrypt emails with different metadata in emails.
```bash
$ echo "How do you like Loki?" > input1.txt
$ oabe_enc -s KP -p amazon -e "From:Thor|To:Bob|Date=Aug 10,2019"
-i input1.txt -o input1.kpabe
$ echo "Invitation to my small apartment this weekend." > input2.txt
$ oabe_enc -s KP -p amazon -e "From:Batman|To:Bob|Date=May 14,2021"
-i input2.txt -o input2.kpabe
$ echo "Let’s go to have a cup of coffee!" > input3.txt
$ oabe_enc -s KP -p amazon -e "From:Cindy|To:Bob|Date=Aug 14,2020"
-i input3.txt -o input3.kpabe
```

Then, we can check the result of decryption as follows:
#### decrypt the first email -- should pass
```bash
$ oabe_dec -s KP -p amazon -k bob_KP.key -i input1.kpabe -o input1_plain.txt
$ cat input1_plain.txt
```
#### decrypt the second email -- should fail (date mismatch)
```bash
$ oabe_dec -s KP -p amazon -k bob_KP.key -i input2.kpabe -o input2_plain.txt
```
#### decrypt the second email -- should fail (receiver mismatch)
```bash
$ oabe_dec -s KP -p amazon -k bob_KP.key -i input3.kpabe -o input3_plain.txt
```

### **<u>Deliverable 5:</u>** 
Please include a screenshot that demonstrates the results of executing the decryption commands.

<p align="right"><a href="KP-ABE_ps.md">Continue to next section...</a></p>
