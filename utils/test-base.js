const base = require('@playwright/test');

exports.customtest = base.test.extend(
    {
        testDataForOrder :     {
            username: "elpitu102@gmail.com",
            password: "Pitu22pitu",
            productName: "ADIDAS ORIGINAL"
        }
    }
)