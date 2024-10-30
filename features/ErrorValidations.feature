Feature: Ecommerce validations
    
    @Validations
    @foo
    Scenario Outline: Placing the Order
        Given a login to Ecommerce2 aplication with "<username>" and "<password>"
        Then Verify Error message is displayed

    Examples:
    | username              |   password    |
    | elpitu102@gmail.com   |   Pitu22pitu  |
    | prueba2@gmail.com     |   Prueba2     |