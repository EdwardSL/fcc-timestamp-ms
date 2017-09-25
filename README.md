# Timestamp Microservice

这个repository是用来完成freecodecamp的一个叫做“Timestamp Microservice”的api project，更多细节请访问：

[https://www.freecodecamp.cn/challenges/timestamp-microservice](https://www.freecodecamp.cn/challenges/timestamp-microservice)

### User Stories

1. 把一个字符串作为参数，判断该字符串是不是一个 Unix 时间，或者一个公历日期（例如：January 1, 2016）；

2. 如果是，那么它同时返回 Unix 时间戳和公历日期；

3. 如果不是，那么它返回 null。

### Example Input

    https://freecodecamp-timestamp-microservice-imukit007.c9users.io/December%2015,%202015
    
或

    https://freecodecamp-timestamp-microservice-imukit007.c9users.io/1450137600

### Example Output

    { 
        "unix": 1450137600, 
        "natural": "December 15, 2015" 
    }

或

    { 
        "unix": null, 
        "natural": null 
    }