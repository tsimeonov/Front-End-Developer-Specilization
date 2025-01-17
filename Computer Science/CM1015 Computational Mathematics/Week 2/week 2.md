### Lesson 1.3 Conversion of non-integer numbers between bases

<h5>Conversion of non-integer numbers between bases</h5>

### 1.4: Operations with binary numbers

<h5>Operations with binary numbers - addition</h5>

```lua
      01101
   +  10111
   --------
     100100
```

- 1+1=10 → write down 0, carry over 1
- 0+1+1=10 -> write down 0, carry over 1
- 1+1+1=11 -> write down 1, carry over 1
- 1+0+1=10 -> write down 0, carry over 1
- 0+1=1 (with the caarry from previous addition) -> write down 1

Binary addition rules

|  x  |  y  |            x+y             |
| :-: | :-: | :------------------------: |
|  0  |  0  |             0              |
|  0  |  1  |             1              |
|  1  |  0  |             1              |
|  1  |  1  | 0 (one is carried forward) |

<h5>Operations with binary numbers - substraction</h5>

Binary substraction rules

- 0–0=0
- 0–1=1, ( with a borrow of 1)
- 1–0=1
- 1–1=0

```markdown
101111
-010101

---

011010
```

<h5>Operations with binary numbers - multiplication</h5>

Multiplication rules

| Binary Numbers | Multiplication Value |
| :------------: | :------------------: |
|     0 x 0      |          0           |
|     1 x 0      |          0           |
|     0 x 1      |          0           |
|     1 x 1      |          1           |

Multiplication of binary numbers

11101 x 1001

Let's look a the actual multiplication

|     |     |     |     | 1   | 1   | 1   | 0   | 1   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     |     | x   | 1   | 0   | 0   | 1   |
|     |     |     |     | 1   | 1   | 1   | 0   | 1   |
|     |     |     | 0   | 0   | 0   | 0   | 0   | x   |
| +   | 1   | 1   | 1   | 0   | 1   | x   | x   | x   |
| 1   | 0   | 0   | 0   | 0   | 0   | 1   | 0   | 1   |

Multiplication of Binary Numbers with Decimal Points

1011.01 and 110.1

|     |     |     |     | 1   | 0   | 1   | 1   | 0   | 1   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|     |     |     |     |     | x   | 1   | 1   | 0   | 1   |
|     |     |     |     | 1   | 0   | 1   | 1   | 0   | 1   |
|     |     |     | 0   | 0   | 0   | 0   | 0   | 0   | x   |
|     |     | 1   | 0   | 1   | 1   | 0   | 1   | x   | x   |
| +   | 1   | 0   | 1   | 1   | 0   | 1   | x   | x   | x   |
| 1   | 0   | 0   | 1   | 0   | 0   | 1   | 0   | 0   | 1   |

<h5>Number representation</h5>

### 1.5: Topic summary

<h5>Topic 1 - looking back</h5>
