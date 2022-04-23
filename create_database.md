```bash

npx sequelize-cli model:generate --name customer --attributes name:string,key:string,phone:string,address:string,image:string

npx sequelize-cli model:generate --name food --attributes name:string,price:integer,image:string

npx sequelize-cli model:generate --name order --attributes status:string,customerId:integer,foodId:integer


```
