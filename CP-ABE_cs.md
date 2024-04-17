
# CP-ABE Exercises

## A Case Study of CP-ABE
**Users List:**
| Name   | Age | Department    |
|--------|-----|---------------|
| Alice  | 24  | Swimming club |
| Bob    | 21  | Karate club   |
| Cindy  | 25  | Karate club   |

Before working on your lab tasks, read the following example to understand CP-ABE and OpenABE better. A confidential document about Karate is encrypted, whose content is only readable by those who belong to Karate club and are older than 24. In this example, only Cindy can decrypt the file, while neither Alice nor Bob can.

#### Construct a CP-ABE crypto-system with "grizzly" as the prefix of the file name.
```bash
$ oabe_setup -s CP -p grizzly
```
#### Generate keys for Alice, Bob, and Cindy with their attributes.
```bash
$ oabe_keygen -s CP -p grizzly -i "Age=24|Swimming-club" -o alice_key
$ oabe_keygen -s CP -p grizzly -i "Age=21|Karate-club" -o bob_key
$ oabe_keygen -s CP -p grizzly -i "Age=25|Karate-club" -o cindy_key
```
#### Write a secret message into input.txt
```bash
$ echo "114514" > input.txt
```
#### Encrypt the file
```bash
$ oabe_enc -s CP -p grizzly -e "((Age > 22) and (Karate-club))" -i input.txt -o output.cpabe
```

### See Also
For more information about how to use the OpenABE command, please refer to [OpenABE CLI README](https://github.com/zeutro/openabe/blob/master/cli/README.md) and the following documents for details:
- [OpenABE API Guide Document](https://github.com/zeutro/openabe/blob/master/docs/libopenabe-v1.0.0-api-doc.pdf): explains how to install and use the library.
- [OpenABE CLI Util Document](https://github.com/zeutro/openabe/blob/master/docs/libopenabe-v1.0.0-cli-doc.pdf): shows how to use the included command-line tools, including benchmarking.
- [OpenABE Design Document](https://github.com/zeutro/openabe/blob/master/docs/libopenabe-v1.0.0-design-doc.pdf): explains in detail the functionalities and algorithms implemented.

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
### **<u>Deliverable 2:</u>**
Please include a screenshot that demonstrates that Cindy can successfully decrypt and read  _cindy_plain.txt_.

<p align="right">[Continue to next section](CP-ABE_ps.md)</p>
<p align="right"><a href="CP-ABE_ps.md">Continue to next section</a></p>

