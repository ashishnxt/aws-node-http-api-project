# 🚀 AWS Node.js HTTP API Project (Serverless Framework)

A fully serverless CRUD API built using **AWS Lambda**, **API Gateway (HTTP API)**, and **DynamoDB**, deployed using the **Serverless Framework (IaC with CloudFormation)**.

---

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

After deployment, you will receive an API endpoint URL.

---


# 🔌 API Endpoints

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
