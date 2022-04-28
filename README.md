## TUGAS BACK-END MINI PROJECT - BOOTCAMP FULLSTACK NODE JS CODE.ID

> _⏰_ START : **~21 APRIL 2022 || DEADLINE : 28 APRIL 2022 - 23.59.59 WIB~** *FINISHED*


### TASK SUMMARY

Buatlah sebuah aplikasi yang memiliki relasi database Many To Many. Tema bebas dapat dipilih sesuai masing-masing. Misal : Toko Buku, Toy Store, dll.
Presentasi kan hasil kerja kalian pada hari Kamis. Berikut adalah topik yang harus kalian buat :

a.	5W1H mengenai aplikasi kalian  

b.	ERD yang telah dibuat  

c.	Technology Stack yang digunakan  

d.	Endpoint yang diperlukan / API Document  

e.	Demo apps  


### REQUIREMENT

1.	Technology Stack : 
-   Node.js, Express, Postgres (DBMS), Many To Many, Sequelize (ORM), Basic Query / CRUD (WAJIB), Validations, Hooks, EJS (Template Engne), CSS framework boleh menggunakan Bootstrap

2.	Entity Relational Diagram / ERD (WAJIB!!)
-   Sertakan diagram relasi dan alurnya

3.	API Documentation (WAJIB!!)
-   Dapat dibuat secara manual dalam README.md di github, Bisa menggunakan Swagger

4.	Upload to cloud with Heroku

5.	File ppt dengan format : BE-[nama_apps]-[nama]


### SPRINT PLANNING :

Day 1 : Cari tema, Analisis table / menemukan relasi, Buat ERD, Buat folder dan init apps, Create dan migrate db

Day 2 : App.js, Routes, Controller, Testing di postman, Dst

Day 3 : API Documentation, EJS, CSS Framework (optional)


# ASSIGNMENT RESULTS :

## ERD
+ Many to Many Relationship
![textblob](https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/ERD_Food_Order.png)

### POWERPOINT : https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/PPT%20-%20Food%20Order.pptx
## SCREENSHOOTS APPS : https://github.com/chanlyseptian/back-end-mini-project-Food-Order/tree/main/Screenshoot%20Application%20Food%20Order
### 1. Home
+ a. Home Page
![textblob](https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/Screenshoot%20Application%20Food%20Order/1a.%20Home%20Page.png)
+ b. Home Page - Menu List
![textblob](https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/Screenshoot%20Application%20Food%20Order/1.b%20Home%20Page%20-%20Menu%20list%20Food.png)
### 2. Customer Page
+ a. Customer Page - Login
![textblob](https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/Screenshoot%20Application%20Food%20Order/2a.%20Customer%20Page%20-%20Login.png)
+ b. Customer Page - Register
![textblob](https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/Screenshoot%20Application%20Food%20Order/2b.%20Customer%20Page%20-%20Register.png)
+ c. Customer Page - Profil Information Page
![textblob](https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/Screenshoot%20Application%20Food%20Order/2c.%20Customer%20Page%20-%20Profil%20Information%20Page.png)
+ d. Customer Page - Edit Information User Page
![textblob](https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/Screenshoot%20Application%20Food%20Order/2d.%20Customer%20Page%20-%20Edit%20Information%20User%20Page.png)
+ e. Customer Page - Order Food for Customer Page
![textblob](https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/Screenshoot%20Application%20Food%20Order/2e.%20Customer%20Page%20-%20Order%20Food%20for%20Customer%20Page.png)
+ f. Customer Page - Order Status Customer Page
![textblob](https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/Screenshoot%20Application%20Food%20Order/2f.%20Customer%20Page%20-%20Order%20Status%20Customer%20Page.png)
### 3. Admin Page
+ a. Admin Page - Orders Management
![textblob](https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/Screenshoot%20Application%20Food%20Order/3a.%20Admin%20Page%20-%20Orders%20Management.png)
+ b. Admin Page - Edit Order status
![textblob](https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/Screenshoot%20Application%20Food%20Order/3b.%20Admin%20Page%20-%20Edit%20Order%20status.png)
+ c. Admin Page - Food Management
![textblob](https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/Screenshoot%20Application%20Food%20Order/3c.%20Admin%20Page%20-%20Food%20Management%20.png)
+ d. Admin Page - Edit Food
![textblob](https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/Screenshoot%20Application%20Food%20Order/3d.%20Admin%20Page%20-%20Edit%20Food.png)
+ e. Admin Page - Add Food
![textblob](https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/Screenshoot%20Application%20Food%20Order/3e.%20Admin%20Page%20-%20Add%20Food.png)
+ f. Admin Page - Show List Customer and can delete customer
![textblob](https://github.com/chanlyseptian/back-end-mini-project-Food-Order/blob/main/Screenshoot%20Application%20Food%20Order/3f.%20Admin%20Page%20-%20Show%20List%20Customer%20and%20can%20delete%20customer.png)

## API Documentation 

### Home Page

`GET /index`

    http://localhost:3000/

+ Halaman menu dan akan menampilkan list food

### Customer Page

`GET /customers`

    http://localhost:3000/customers

+ Halaman admin dan akan menampilkan list customer

`GET /customers/login`

    http://localhost:3000/customers/login

+ Halaman customer dan akan menampilkan form login customer

`GET /customers/register`

    http://localhost:3000/customers/register

+ Halaman customer dan akan menampilkan form register customer

`POST /customers/register`

    http://localhost:3000/customers/register

+ Untuk membuat akun customer

`GET /customers/customerPage`

    http://localhost:3000/customers/customerPage?name='...'&key='...'

+ Halaman untuk menampilkan informasi user 

`GET /customers/editPage`

    http://localhost:3000/customers/editPage/:id

+ Halaman untuk menampilkan form edit user 

`POST /customers/editPage`

    http://localhost:3000/customers/editPage/:id

+ Halaman mengupdate informasi user 

`GET /customers/delete`

    http://localhost:3000/customers/delete/:id

+ Untuk menghapus customer


### Order Page

`GET /orders/`

    http://localhost:3000/orders/

+ Halaman untuk menampilkan list order di admin page

`GET /orders/order`

    http://localhost:3000/orders/order/:id

+ Halaman menampilkan form order food di customer page

`POST /orders/create`

    http://localhost:3000/orders/create

+ Untuk membuat order

`GET /orders/information`

    http://localhost:3000/orders/information/:id

+ Halaman menampilkan list order untuk di customer page

`GET /orders/deleteOrder`

    http://localhost:3000/orders/delete/:id

+ Untuk menghapus order

`GET /orders/edit`

    http://localhost:3000/orders/edit/:id

+ Halaman menampilkan form edit order di admin page 

`POST /orders/edit`

    http://localhost:3000/orders/edit/:id

+ Untuk mengupdate status order

### Food Page

`GET /foods/`

    http://localhost:3000/foods/

+ Halaman untuk menampilkan list food di admin page

`GET /foods/create`

    http://localhost:3000/foods/create

+ Halaman untuk menampilkan form create food di admin page

`POST /foods/create`

    http://localhost:3000/foods/create

+ Untuk membuat food

`GET /foods/delete`

    http://localhost:3000/foods/delete/:id

+ Untuk menghapus food


`GET /foods/edit`

    http://localhost:3000/foods/edit/:id

+ Untuk menampilkan halaman edit food di admin page

`POST /foods/edit`

    http://localhost:3000/foods/edit/:id

+ Untuk mengupdate food

