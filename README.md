## Getting Started

First, Install the dependencies :

```bash
npm i
 

Then Add 2 File in the root folder only :
1- .env
2- .env.local 

Add The variables for the following:-
1. For .env File :-
DATABASE_URL 
(Add Mongodb Atlas url)

2. For .env.local File :-
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/signin
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/signin

Add Your Own Public Key And Secret key only And otherwise just paste the same as it is

NOTE:-
Go to this link :-
https://clerk.com/

Make an account and then make a project and then in that project you will get your Secret and Public Key

For Running the project :-

```bash
npm run dev

For Running the prisma :- 

```bash
npx prisma studio