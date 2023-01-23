# 📍 Minion Mart

A fake e-commerce app to buy Minions action figures. The project was made to explore some AWS services and most important, learn the basics of a serverless app architecture.

## Features
- Login flow
- Product catalog list
- Product cart
- Finish an order (This will just send an email to the user with the order details)
- Order history

## Built with
- Frontend
	- [React](https://reactjs.org/) - To build the app
	- [React Router](https://reactrouter.com/) - To handle app's routing/navigation
	- [AWS Amplify](https://aws.amazon.com/amplify/) - To connect to AWS services
	- [Bootstrap](https://getbootstrap.com/) - To create a few components

- Backend
	- [Serverless Framework](https://www.serverless.com/) - To help building AWS infrastructure
	- [AWS Lambda](https://aws.amazon.com/lambda/) - To execute the services
	- [AWS API Gateway](https://aws.amazon.com/api-gateway/) - To handle the requests
	- [AWS S3](https://aws.amazon.com/s3/) - To store product images and the Website
	- [DynamoDB](https://aws.amazon.com/dynamodb/) - To store app data
	- [Cognito](https://aws.amazon.com/cognito/) - To handle authentication
	- [AWS StepFunctions](https://aws.amazon.com/step-functions/) - To orchestrate multiple services
	- [SendGrid](https://sendgrid.com/) - To handle email sending
	- [UUID](https://github.com/uuidjs/uuid) - To help creating unique ID's
	
## Images
![Preview-Screens](https://github.com/PedroDousseau/minion-shop/blob/assets/minionmart-screens.jpg)
