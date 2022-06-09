## 1. User module

### 1.1 User module interface design

#### 1.1.1 Register new user

| request address | /register |
| --------------- | --------- |
| request method  | POST      |
<img width="799" alt="image" src="https://user-images.githubusercontent.com/42907149/172748338-c94b7618-a004-4fa4-90b9-eaea491887ee.png">

#### 1.1.2 Log in

| request address | /login |
| --------------- | ------ |
| request method  | POST   |
<img width="798" alt="image" src="https://user-images.githubusercontent.com/42907149/172748240-99cfe014-57b1-46a0-be39-92d192511691.png">

#### 1.1.3 Update personal signature 

| request add    | /user/update |
| -------------- | ------------ |
| request method | POST         |
<img width="804" alt="image" src="https://user-images.githubusercontent.com/42907149/172748435-aaa4df57-52a2-4562-be57-58a078bb9d75.png">

#### 1.1.4 sign out

| request address | /user/logout |
| --------------- | ------------ |
| request method  | POST         |

<img width="793" alt="image" src="https://user-images.githubusercontent.com/42907149/172748465-48082ed8-6653-4df3-80a5-fe4a6369b9bd.png">

#### 1.1.5 Admin login

| request address | /adminLogin |
| --------------- | ----------- |
| request method  | POST        |

<img width="811" alt="image" src="https://user-images.githubusercontent.com/42907149/172748486-f37de69c-114c-4e98-a3fe-91c3294e1d14.png">

## 2. product classification module

### 2.1 Back:

#### 2.1.1 Add catalog classification

| request address | /admin/category/add |
| --------------- | ------------------- |
| request method  | POST                |

**parameter：**

| **parameter：** | Parameter meaning      | Example      | Remark                                   |
| --------------- | ---------------------- | ------------ | ---------------------------------------- |
| name            | directory name         | fresh fruits |                                          |
| type            | directory hierarchy    | 1            | no more than level 3                     |
| parentId        | ID of parent directory | 2            | The parentId of a level 1 directory is 0 |
| orderNum        | sort                   | 5            | Sorting of sibling directories           |

<img width="758" alt="image" src="https://user-images.githubusercontent.com/42907149/172748517-84fa012a-8f1e-4acb-9333-49b1e8404247.png">


#### 2.1.2 Update catalog classification

| request address | /admin/category/update |
| --------------- | ---------------------- |
| request method  | POST                   |

**parameter：**

| **parameter：** | Parameter meaning      | Example      | Remark                                   |
| --------------- | ---------------------- | ------------ | ---------------------------------------- |
| id              | id of the directory    | 4            |                                          |
| name            | directory name         | fresh fruits |                                          |
| type            | directory hierarchy    | 1            | no more than level 3                     |
| parentId        | ID of parent directory | 2            | The parentId of a level 1 directory is 0 |
| orderNum        | sort                   | 5            | Sorting of sibling directories           |

<img width="798" alt="image" src="https://user-images.githubusercontent.com/42907149/172748555-9fddd8f1-0002-46c7-9fa1-3289e1debd06.png">

#### 2.1.3 Delete category

| request address | /admin/category/delete |
| --------------- | ---------------------- |
| request method  | POST                   |

| **parameter：** | Parameter meaning   | Example | Remark |
| --------------- | ------------------- | ------- | ------ |
| id              | id of the directory | 4       |        |

#### 2.1.4 Category List (Tiles)

| request address | /admin/category/list?pageNum=1&pageSize=10 |
| --------------- | ------------------------------------------ |
| request method  | GET                                        |

<img width="800" alt="image" src="https://user-images.githubusercontent.com/42907149/172748578-9605245c-85f2-4b2e-a2eb-db859bcdb96d.png">

## 2.2 Front :

#### 2.2.1 **List of categories (recursive)** 

<img width="796" alt="image" src="https://user-images.githubusercontent.com/42907149/172748597-cc75a4d2-54b0-4890-a120-5951dda194d7.png">

## 3. commodity module

### 3.1 Backstage management：

#### 3.1.1 add merchandise

| request address | /admin/product/add |
| --------------- | ------------------ |
| request method  | POST               |

**parameter：**

| Parameter  | Parameter meaning   | Example                                    | Remark |
| ---------- | ------------------- | ------------------------------------------ | ------ |
| name       | product name        | kiwi                                       |        |
| categoryId | Directory ID        | 5                                          |        |
| price      | Price               | 1000                                       |        |
| stock      | inventory           | 10                                         |        |
| detail     | Product description | New Zealand yellow heart, golden kiwifruit |        |
| image      | Product image       |                                            |        |

#### 3.1.2 upload image

| request address | /admin/upload/file |
| --------------- | ------------------ |
| request method  | POST               |

parameter:

The type of body is form-data, the key is file, and the value is a file of type file:

<img width="404" alt="image" src="https://user-images.githubusercontent.com/42907149/172748618-7bf5095f-b8b9-46bb-a67b-1fb73457b52e.png">

#### 4.1.3 update item

| request address | /admin/product/update |
| --------------- | --------------------- |
| request method  | POST                  |

**parameter：**

| Parameter  | Parameter meaning   | Example                                    | Remark |
| ---------- | ------------------- | ------------------------------------------ | ------ |
| id         | product ID          | 1                                          |        |
| name       | product name        | kiwi                                       |        |
| categoryId | Directory ID        | 5                                          |        |
| price      | Price               | 1000                                       |        |
| stock      | inventory           | 10                                         |        |
| detail     | Product description | New Zealand yellow heart, golden kiwifruit |        |
| image      | Product image       |                                            |        |

#### 4.1.4 delete item

| request addressre | /admin/product/delete |
| ----------------- | --------------------- |
| request method    | POST                  |

**parameter：**

| Parameter | Parameter meaning | Example | Remark |
| --------- | ----------------- | ------- | ------ |
| id        | product ID        | 1       |        |

#### 4.1.5 Bulk drop-off products

| request addressre | /admin/product/delete |
| ----------------- | --------------------- |
| request method    | POST                  |



| Parameter  | Parameter meaning            | Example | Remark                                |
| ---------- | ---------------------------- | ------- | ------------------------------------- |
| ids        | The id of the item to change | 1,2,4   | array                                 |
| sellStatus | Unloading state              | 1       | 1 is on the shelf, 0 is off the shelf |

#### 4.1.6 Product list (backstage)

| request addressre | /admin/product/list |
| ----------------- | ------------------- |
| request method    | GET                 |

**parameter：**

| Parameter | Parameter meaning | Example | Remark                                                       |
| --------- | ----------------- | ------- | ------------------------------------------------------------ |
| pageNum   | number of pages   | 1       | By default, it will be sorted in reverse order by modification time. |
| pageSize  | Articles per page | 10      |                                                              |

## 5. Front desk:

#### 5. 1 Product list

| request addressre | /product/list |
| ----------------- | ------------- |
| request method    | GET           |

| Parameter  | Parameter meaning   | Example    | Remark                    |
| ---------- | ------------------- | ---------- | ------------------------- |
| orderBy    | sort by             | price desc | price desc 或者 price asc |
| categoryId | Product Category Id | 1          |                           |
| keyword    | search keywords     | 桃         |                           |
| pageNum    | number of pages     | 1          |                           |
| pageSize   | Articles per page   | 10         |                           |

#### 5.2 product details

| request addressre | /product/detail |
| ----------------- | --------------- |
| request method    | GET             |

| parameter | Parameter meaning | Example | Remark |
| --------- | ----------------- | ------- | ------ |
| id        | Product ID        | 2       |        |

## 6. Shopping cart module (both in the front desk)

#### 6.1 shopping cart list

<img width="798" alt="image" src="https://user-images.githubusercontent.com/42907149/172748638-64ffa7ee-47a2-4f22-b9d5-ad9fc52d59c2.png">

#### 6.2 Add item to cart

<img width="821" alt="image" src="https://user-images.githubusercontent.com/42907149/172748683-d0318ff6-5844-4698-8278-a3e42df310f9.png">

| parameter | Parameter meaning | Example | Remark |
| --------- | ----------------- | ------- | ------ |
| productId | Product ID        | 5       |        |
| count     | quantity          | 1       |        |

#### 6.3 Update the quantity of an item in the shopping cart

<img width="794" alt="image" src="https://user-images.githubusercontent.com/42907149/172748700-7646f74c-fc3f-4c25-85e9-8ddc8985e3cd.png">

| parameter | Parameter meaning | Example | Remark |
| --------- | ----------------- | ------- | ------ |
| productId | Product ID        | 5       |        |
| count     | quantity          | 1       |        |

#### 6.4  Delete an item from the cart

| request addressre | /cart/delete |
| ----------------- | ------------ |
| request method    | POST         |

| Parameter | Parameter meaning | Example | Remark |
| --------- | ----------------- | ------- | ------ |
| productId | Product ID        | 5       |        |



<img width="777" alt="image" src="https://user-images.githubusercontent.com/42907149/172748730-31d983f7-7096-4b6c-8e01-6c0c617244c3.png">

#### 6.5  Check/uncheck an item in the cart

| request addressre | /cart/select |
| ----------------- | ------------ |
| request method    | POST         |

<img width="810" alt="image" src="https://user-images.githubusercontent.com/42907149/172748757-d3872427-ac88-4422-ac8a-b521a9dfab8b.png">

| parameter | Parameter meaning | Example | Remark                           |
| --------- | ----------------- | ------- | -------------------------------- |
| productId | Product ID        | 5       |                                  |
| selected  | Is it selected    | 1       | 0 is not selected, 1 is selected |

#### 6.6  Select all/None of an item in the shopping cart

| request addressre | /cart/selectAll |
| ----------------- | --------------- |
| request method    | POST            |

<img width="802" alt="image" src="https://user-images.githubusercontent.com/42907149/172748783-e87a6375-1698-4084-8b01-a9e1b66c9507.png">

| parameter | Parameter meaning | Example | Remark                           |
| --------- | ----------------- | ------- | -------------------------------- |
| selected  | Is it selected    | 1       | 0 is not selected, 1 is selected |

## 7. order module

### 7.1 front display

#### 7.1.1 Foreground: Create an order

| request address | /order/create |
| --------------- | ------------- |
| request method  | POST          |

**parameter：**

| Parameter       | Parameter meaning | Example       |
| --------------- | ----------------- | ------------- |
| receiverName    | product ID        | yang          |
| receiverMobile  | Recipient's phone | 010-xxxx-xxxx |
| receiverAddress | Recipient address | xxxxx         |

#### 7.1.2 Front Desk: Order Details

| request address | /order/detail |
| --------------- | ------------- |
| request method  | GET           |

<img width="807" alt="image" src="https://user-images.githubusercontent.com/42907149/172748813-71622fdb-ec98-4743-93cf-b4b818c5e3cf.png">

#### 7.1.3 Front Desk: Order List

| request address | /order/list |
| --------------- | ----------- |
| request method  | GET         |

| Parameter | Parameter meaning | Example | Remark |
| --------- | ----------------- | ------- | ------ |
| pageNum   | number of pages   | 1       |        |
| pageSize  | Articles per page | 10      |        |

<img width="766" alt="image" src="https://user-images.githubusercontent.com/42907149/172748837-7e0bb594-c41a-4a41-a920-1ef538647355.png">

#### 7.1.4 Front desk: cancel the order

| request address | /order/cancel |
| --------------- | ------------- |
| request method  | POST          |

<img width="789" alt="image" src="https://user-images.githubusercontent.com/42907149/172748853-cd94fb25-650d-4ed7-a92b-631958fd95f7.png">

| Parameter | Parameter meaning | Example  | Remark |
| --------- | ----------------- | -------- | ------ |
| orderNo   | order number      | 10002342 |        |

#### 7.1.5  Generate payment QR code

QR code displayed during payment

| request address | /order/qrcode |
| --------------- | ------------- |
| request method  | POST          |

<img width="798" alt="image" src="https://user-images.githubusercontent.com/42907149/172748864-20e6d3a1-5d39-4021-bfb3-e2186b3c7029.png">

#### 7.1.6 Front desk: pay the order

| request address | /pay |
| --------------- | ---- |
| request method  | GET  |

<img width="799" alt="image" src="https://user-images.githubusercontent.com/42907149/172748927-34f314f9-504d-489f-b08a-f5df767749e4.png">

## 8. Backstage management

#### 8.1 Backstage: Order List

| request address | /admin/order/list |
| --------------- | ----------------- |
| request method  | GET               |

<img width="788" alt="image" src="https://user-images.githubusercontent.com/42907149/172749007-4f1005d1-d96c-4880-bfe3-5f9a4ef5c5f0.png">

#### 8.2 Background: order delivery

| request address | /admin/order/delivered |
| --------------- | ---------------------- |
| request method  | POST                   |

<img width="796" alt="image" src="https://user-images.githubusercontent.com/42907149/172748989-e29fb4fb-bf77-4585-a743-fab9d03641ba.png">

## 9. Common to the front and back

#### 9.1 order completed

| request address | /order/finish |
| --------------- | ------------- |
| request method  | POST          |

<img width="798" alt="image" src="https://user-images.githubusercontent.com/42907149/172749027-3f9e3693-e6a7-465a-9ee9-b0e0dec6d14e.png">

