Feature: Ecommerce validations
    
    @Regresion
    Scenario: Placing the Order
        Given a login to Ecommerce aplication with "elpitu102@gmail.com" and "Pitu22pitu"
        When Add "ADIDAS ORIGINAL" to Cart
        Then Verify "ADIDAS ORIGINAL" is displayed in the Cart
        When Enter valid details and Place the Order
        Then Verify order in present in the OrderHistory

    @Validations
    Scenario Outline: Placing the Order
        Given a login to Ecommerce2 aplication with "<username>" and "<password>"
        Then Verify Error message is displayed

    Examples:
    | username              |   password    |
    | elpitu102@gmail.com   |   Pitu22pitu  |
    | prueba2@gmail.com     |   Prueba2     |