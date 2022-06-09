<img width="686" alt="image" src="https://user-images.githubusercontent.com/42907149/172749961-f5846fca-8c62-4ed9-b674-f1f9209a14a0.png">

## 1. User module

### 1.1 Login feature analysis

- The login status needs to be maintained
- Session implementation: After logging in, the user information will be saved to session. After the visit, the user information is obtained from the session before the business logic is executed.

## 2. Product classification module

### 2.1 Classification hierarchy

In the product classification, you need to continue to do **classification operation**

> Classification is set to three levels

Disadvantages of too deep a hierarchy: 

- One is not very user-friendly and is not conducive to finding
- Second, it is not friendly to the background management personnel and is not convenient for management

## 2.2 The main features of the classification module 

- Classification of data settings
- Affiliation and association of goods with categories

### 2.3 Summarize the difficulties of the commodity classification module:

- Swagger
- Parameter validation
- Redis integration
- Debugging function

### 2.4 Summarize common mistakes in the commodity classification module:

- Manual validation of parameters
- Items do not need to be cached
- Log debugging


## 3. Commodity module

#### 3.1 Image upload

- File name UUID
- Universally Unique Identifier 
- Prevent duplicate names and prevent crawling
- Generation rules: date and time, MAC address, HashCode, random number

#### 3.2 Customize the static resource mapping directory

- Echo after uploading images
- Configure SpringBootWebMvcConfigurer 
- Mapping of static resources to local directories
- Demo open picture

#### 3.3 Updates and new products

- Merge writing is not advisable 
- Clear and independent business logic

#### 3.4 Batch loading and unloading

- MyBatis traverses the List 
- where sentence stitching

**Product list: Search function**

<img width="612" alt="image" src="https://user-images.githubusercontent.com/42907149/172752070-03e20887-3386-4f72-b1ba-7b7ed8ae131a.png">

#### Front Desk: List of goods

- Sort function
- MyBatis PageHelper
- Enumeration: order by

#### Summary Commodity Module:

1. Difficult points: search, sorting, catalog query of products
2. Common error: Updates and additions are placed on the same interface, and the sort field does not need to be enumerated


##4. Shopping cart module development

<img width="664" alt="image" src="https://user-images.githubusercontent.com/42907149/172758196-bffc6253-05ff-48e1-a09a-e82f5c80e3df.png">

## 5. Order module development

#### 5.1 Generate orders - the user places an order

- Into the ginseng
- Find items that have been ticked from your shopping cart
- Determine if an item is on sale

#### 5.2 Generate orders - the user places an order

- Judge inventory, guarantee not to oversell, deduct inventory
- Database transactions
- The ACID of the transaction

#### 5.3 Generate orders - the user places an order

- Delete the corresponding item in the shopping cart
- Generate orders
- Order number generation rules
- Cycle through each item to order_item table

#### 5.4 pay
<img width="707" alt="image" src="https://user-images.githubusercontent.com/42907149/172758819-917f7f1b-f66f-44bc-ad78-493de73636b2.png">

Order status：

- 0 User canceled
- 10 Unpaid (initial status after placing an order) 
- 20 Paid
- 30 Shipped 
- 40 Transactions completed
