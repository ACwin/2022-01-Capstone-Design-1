# 2022-01-Capstone-Design-1



## About The Project


`HIGOmall`project is an e-commerce system, including the front-end mall system and the back-end management system, based on SpringBoot+MyBatis implementation, using Docker containerized deployment. The front-end mall system includes modules such as homepage portal, product recommendation, product search, product display, shopping cart, and order process. The background management system includes modules such as commodity management, order management, operation management, content management, statistical reports, financial management, permission management, and settings.
<img width="389" alt="image" src="https://user-images.githubusercontent.com/42907149/172844838-2d8f8756-c060-4bd1-bfb5-f8dfdaba6199.png">
<img width="387" alt="image" src="https://user-images.githubusercontent.com/42907149/172844929-ac5d55ed-af19-48e6-a880-38eb399d8778.png">
<img width="379" alt="image" src="https://user-images.githubusercontent.com/42907149/172845136-22d1c474-ea10-4858-8c47-7b2bb5948bf2.png">
<img width="387" alt="image" src="https://user-images.githubusercontent.com/42907149/173035735-a4109dce-56f8-4f36-a9fe-5827c722cf06.png">



HIGOmmal:

SpringBoot + Vue + MySQL + MyBatis ==>  HIGOmmal

---------------------------

## Features 

[![jdkversions](https://img.shields.io/badge/Java-1.7%2B-yellow.svg)]()
[![vueversions](https://img.shields.io/badge/vue.js-2.2.x-brightgreen.svg)]()
![nginx 1.21.6](https://img.shields.io/badge/nginx-1.21.6-brightgreen.svg)
![mysql](https://img.shields.io/badge/mysql-5.7-brightgreen.svg)
![mybatis](https://img.shields.io/badge/mybatis-2.2-brightgreen.svg)


### 1. User Modules:
<img width="553" alt="image" src="https://user-images.githubusercontent.com/42907149/172845395-c7f0a57f-5d80-41e1-a657-621943ae37d9.png">

### 2. Commodity Classification Module:：

- 2.1 The settings for categorical data
- 2.2 Affiliation and association of goods with categories

### 3. Commodity module:
- 3.1 Image Upload
- 3.2 Customize the static resource mapping directory 
- 3.3 Updates and additions to products 
- 3.4 Batch loading and unloading 
- 3.5 Product List: Search function

### 4.Summary Commodity Module:

<img width="664" alt="image" src="https://user-images.githubusercontent.com/42907149/172758196-bffc6253-05ff-48e1-a09a-e82f5c80e3df.png">

### 5. Order module development

- 5.1 Generate orders - the user places an order
- 5.2 Generate orders - the user places an order
- 5.3 Generate orders - the user places an order
- 5.4 pay
<img width="707" alt="image" src="https://user-images.githubusercontent.com/42907149/172758819-917f7f1b-f66f-44bc-ad78-493de73636b2.png">

- **API Examples**: [API.md](https://github.com/ACwin/Node.js-Koa2-Server/blob/master/API.md)

-------------------------------------
## Technology selection

#### Back-end technology

| Technology                | Instruction                | Official website                                           |
| -------------------- | ------------------- | ---------------------------------------------- |
| SpringBoot           | Container + MVC framework        | https://spring.io/projects/spring-boot         |
| SpringSecurity       | Authentication and authorization framework      | https://spring.io/projects/spring-security     |
| MyBatis              |ORM framework             | http://www.mybatis.org/mybatis-3/zh/index.html |
| MyBatisGenerator     | Data-layer code generation      | http://www.mybatis.org/generator/index.html    |
| Elasticsearch        |search engine            | https://github.com/elastic/elasticsearch       |
| RabbitMQ             | Message Queuing            | https://www.rabbitmq.com/                      |
| Redis                | Distributed cache          | https://redis.io/                              |
| MySql                | database         | https://www.mongodb.com                        |
| LogStash             | Log collection tool        | https://github.com/elastic/logstash            |
| Kibana               | Log visualization tool  | https://github.com/elastic/kibana              |
| Nginx                | Static resource server      | https://www.nginx.com/                         |
| Docker               | Apply the container engine        | https://www.docker.com                         |
| Jenkins              | Automated deployment tools      | https://github.com/jenkinsci/jenkins           |
| Druid                | Database connection pooling        | https://github.com/alibaba/druid               |
| OSS                  | Object storage            | https://github.com/aliyun/aliyun-oss-java-sdk  |
| MinIO                | Object storage            | https://github.com/minio/minio                 |
| JWT                  | JWT login support         | https://github.com/jwtk/jjwt                   |
| Lombok               | Simplified object encapsulation tool    | https://github.com/rzwitserloot/lombok         |
| Hutool               | Java Tools Class Library        | https://github.com/looly/hutool                |
| PageHelper           | MyBatis Physical paging plug-in | http://git.oschina.net/free/Mybatis_PageHelper |
| Swagger-UI           | Document generation tools        | https://github.com/swagger-api/swagger-ui      |
| Hibernator-Validator | Validation framework            | http://hibernate.org/validator                 |

#### Front-end technology

| Technology       | Instruction                  | Official website                                   |
| ---------- | --------------------- | -------------------------------------- |
| Vue        | Front-end framework              | https://vuejs.org/                     |
| Vue-router | Routing framework              | https://router.vuejs.org/              |
| Vuex       | Global state management framework      | https://vuex.vuejs.org/                |
| Element    | Front-end UI framework            | https://element.eleme.io               |
| Axios      | Front-end HTTP framework          | https://github.com/axios/axios         |
| v-charts   | Charting framework based on Echarts | https://v-charts.js.org/               |
| Js-cookie  | Cookie management tool        | https://github.com/js-cookie/js-cookie |
| nprogress  | Progress bar control            | https://github.com/rstacruz/nprogress  |

------------

## Architecture diagram

##### System architecture diagram
<img width="508" alt="image" src="https://user-images.githubusercontent.com/42907149/173032241-c7b667e9-1925-48a2-a994-d49b5ab79fab.png">

--------------------------------------


## Environment setup

### Development tools

| Tool         | Instruction                 | Official website                                            |
| ------------- | ------------------- | ----------------------------------------------- |
| IDEA          | Develop the IDE             | https://www.jetbrains.com/idea/download         |
| RedisDesktop  | redis client connection tool | https://github.com/qishibo/AnotherRedisDesktopManager  |
| SwitchHosts   | Local host management        | https://oldj.github.io/SwitchHosts/             |
| X-shell       | Linux remote connection tool   | http://www.netsarang.com/download/software.html |
| Navicat       | Mysql client connection tool      | http://www.formysql.com/xiazai.html             |
| PowerDesigner | Database design tools      | http://powerdesigner.de/                        |
| Axure         | Prototyping tools        | https://www.axure.com/                          |
| MindMaster    | Mind Map Design Tools    | http://www.edrawsoft.cn/mindmaster              |
| ScreenToGif   | Gif recording tool        | https://www.screentogif.com/                    |
| ProcessOn     | Flowcharting tools      | https://www.processon.com/                      |
| PicPick       | Image processing tools        | https://picpick.app/zh/                         |
| Snipaste      | Screenshot tool        | https://www.snipaste.com/                       |
| Postman       | API interface debugging tool      | https://www.postman.com/                        |
| Typora        | Markdown Editor      | https://typora.io/                              |

### Development environment

| Tool          | version number | Download                                                         |
| ------------- | ------ | ------------------------------------------------------------ |
| JDK           | 1.8    | https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html |
| Mysql         | 5.7    | https://www.mysql.com/                                       |
| Redis         | 5.0    | https://redis.io/download                                    |
| Mysql         | 5.7    | https://www.mongodb.com/download-center                      |
| RabbitMQ      | 3.7.14 | http://www.rabbitmq.com/download.html                        |
| Nginx         | 1.10   | http://nginx.org/en/download.html                            |
| Elasticsearch | 7.6.2  | https://www.elastic.co/downloads/elasticsearch               |
| Logstash      | 7.6.2  | https://www.elastic.co/cn/downloads/logstash                 |
| Kibana        | 7.6.2  | https://www.elastic.co/cn/downloads/kibana                   |

---------------------------



## Setup steps

### front

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

Open your browser and enter Return: http://localhost:8080 You can see the front-end site that is rendered by the service side, of course it may be an empty data site. Specifically, you can see the article on the [API.md](https://github.com/ACwin/2022-01-Capstone-Design-1/blob/main/design%20description/API.md) interface.



### Contact 


- YANG - [@ACwin](https://github.com/ACwin) - [email@uniceyang0116@gmail.com](mailto:emailuniceyang0116@gmail.com)
- SUN - [@sjy072812138](https://github.com/sjy072812138)- [email@929420972@qq.com](mailto:929420972@qq.com)

Project Link: [https://github.com/ACwin/2022-01-Capstone-Design-1]

