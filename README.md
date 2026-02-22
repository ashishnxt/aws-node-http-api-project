<img width="3199" height="1999" alt="Screenshot 2026-02-22 163137" src="https://github.com/user-attachments/assets/8d0c43d5-3b17-4977-a789-8231a03e3c7b" /># 🚀 AWS Node.js HTTP API Project (Serverless Framework)

A fully serverless CRUD API built using **AWS Lambda**, **API Gateway (HTTP API)**, and **DynamoDB**, deployed using the **Serverless Framework (IaC with CloudFormation)**.

---

<img width="1813" height="1232" alt="Screenshot 2026-02-22 174145" src="https://github.com/user-attachments/assets/f061719e-83bb-4315-931a-bd411c038d89" />

## 📌 Architecture Overview

This project automatically provisions:

* ✅ AWS Lambda functions
* ✅ API Gateway (HTTP API)
* ✅ DynamoDB table
* ✅ IAM roles & permissions
* ✅ CloudWatch logs
* ✅ S3 deployment bucket

Everything is managed using Infrastructure as Code (IaC).

---

# 🛠 Tech Stack

* Node.js 18.x
* Serverless Framework v3
* AWS Lambda
* AWS API Gateway (HTTP API)
* AWS DynamoDB
* AWS CloudFormation

---

# 📂 Project Structure

```
.
├── serverless.yml
├── package.json
└── src/
    ├── hello.js
    ├── kaamBharo.js
    ├── kaamDikhao.js
    ├── kaamKhatamKaro.js
    └── delete.js
```

---

<img width="3196" height="1999" alt="Screenshot 2026-02-22 165914" src="https://github.com/user-attachments/assets/aafb155c-af98-4460-afd2-6a13ddb019a9" />

# ⚙️ Serverless Configuration

## `serverless.yml`

```yaml
org: ashishaxm 
app: aws-node-http-api-project
service: aws-node-http-api-project
frameworkVersion: '3'

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1
  iamRoleStatements:
    - Effect: Allow
      Action:
        - dynamodb:*
      Resource:
        - arn:aws:dynamodb:us-east-1:727115979605:table/KaamKaro

functions:
  hello:
    handler: src/hello.handler
    events:
      - httpApi:
          path: /
          method: get

  kaamBharo:
    handler: src/kaamBharo.handler
    events:
      - httpApi:
          path: /kaam
          method: post

  kaamDikhao:
    handler: src/kaamDikhao.handler
    events:
      - httpApi:
          path: /kaam
          method: get

  kaamKhatamKaro:
    handler: src/kaamKhatamKaro.handler
    events:
      - httpApi:
          path: /kaam/{id}
          method: put

  kaamDeleteKaro:
    handler: src/delete.handler
    events:
      - httpApi:
          path: /kaam/{id}
          method: delete

resources:
  Resources:
    KaamKaro:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: KaamKaro
        BillingMode: PAY_PER_REQUEST
        AttributeDefinitions:
          - AttributeName: id
            AttributeType: S
        KeySchema:
          - AttributeName: id
            KeyType: HASH
```

---

# 📥 Setup & Deployment

## 1️⃣ Install Dependencies

```bash
npm install
```

## 2️⃣ Configure AWS Credentials

```bash
aws configure
```

## 3️⃣ Login to Serverless

```bash
serverless login
```

## 4️⃣ Deploy the Project

```bash
serverless deploy
```

<img width="3199" height="1999" alt="Screenshot 2026-02-22 163137" src="https://github.com/user-attachments/assets/33e4b070-2ccf-4aff-b069-b97d29e93b5c" />

After deployment, you will receive an API endpoint URL.

---


# 🔌 API Endpoints

<img width="3196" height="1999" alt="Screenshot 2026-02-22 165229" src="https://github.com/user-attachments/assets/9b77d5b2-57c1-44ea-b424-048bbf44ce88" />

## 1️⃣ GET `/` – Test API

```yaml
functions:
  hello:
    handler: src/hello.handler
    events:
      - httpApi:
          path: /
          method: get
```

---

<img width="3199" height="1999" alt="Screenshot 2026-02-22 165240" src="https://github.com/user-attachments/assets/fbaf7498-634b-48fc-9ad4-1fc81286d1b4" />

## 2️⃣ POST `/kaam` – Create Item

```yaml
functions:
  kaamBharo:
    handler: src/kaamBharo.handler
    events:
      - httpApi:
          path: /kaam
          method: post
```

---

## 3️⃣ GET `/kaam` – Get All Items

```yaml
functions:
  kaamDikhao:
    handler: src/kaamDikhao.handler
    events:
      - httpApi:
          path: /kaam
          method: get
```

---

## 4️⃣ PUT `/kaam/{id}` – Update Item

```yaml
functions:
  kaamKhatamKaro:
    handler: src/kaamKhatamKaro.handler
    events:
      - httpApi:
          path: /kaam/{id}
          method: put
```

---

## 5️⃣ DELETE `/kaam/{id}` – Delete Item

```yaml
functions:
  kaamDeleteKaro:
    handler: src/delete.handler
    events:
      - httpApi:
          path: /kaam/{id}
          method: delete
```

---

<img width="3199" height="1999" alt="Screenshot 2026-02-22 165033" src="https://github.com/user-attachments/assets/ccb52202-a9f7-453c-8a74-bbc01d59325e" />

# 🗄 DynamoDB Table

```yaml
resources:
  Resources:
    KaamKaro:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: KaamKaro
        BillingMode: PAY_PER_REQUEST
        AttributeDefinitions:
          - AttributeName: id
            AttributeType: S
        KeySchema:
          - AttributeName: id
            KeyType: HASH
```

---

# 🔐 IAM Permission

```yaml
provider:
  iamRoleStatements:
    - Effect: Allow
      Action:
        - dynamodb:*
      Resource:
        - arn:aws:dynamodb:us-east-1:727115979605:table/KaamKaro
```

---

# 🧪 API Testing (Postman)

1. Copy the API Gateway endpoint from deployment output
2. Open Postman
3. Select method (GET, POST, PUT, DELETE)
4. Send request with JSON body (for POST/PUT)

Example POST body:

```json
{
  "id": "1",
  "title": "Learn Serverless"
}
```

---

<img width="2583" height="521" alt="Screenshot 2026-02-22 170039" src="https://github.com/user-attachments/assets/b6506699-4849-4589-a093-c945f6b5094b" />

# 🗑 Remove All Infrastructure

To completely delete all AWS resources:

```bash
serverless remove
```

This will delete:

* Lambda functions
* API Gateway
* DynamoDB table
* CloudFormation stack
* S3 deployment bucket

---

# 💡 Key Learnings

* Infrastructure as Code using CloudFormation
* Serverless deployment workflow
* CRUD operations using Lambda + DynamoDB
* IAM role permissions
* HTTP API integration

---
