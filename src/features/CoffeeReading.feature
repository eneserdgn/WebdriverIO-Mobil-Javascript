Feature: Coffee Reading

  Scenario: Faladdin should see Components on the Coffee Reading Modal
    Given Faladdin is on the Home Page
    When Faladdin taps to Product: "<productTitle>" on the HomePage
    Then Faladdin should see Message: "<modalMessage>" on the Coffee Reading Modal
    Then Faladdin should see Yes Button Text: "<yesButton>" on the Coffee Reading Modal
    Then Faladdin should see Yes Button Image on the Coffee Reading Modal
    Then Faladdin should see No Button Text: "<noButton>" on the Coffee Reading Modal
    Then Faladdin should see No Button Image on the Coffee Reading Modal
    Then Faladdin should see Close Button on the Coffee Reading Modal

  Scenario: Faladdin taps Close Button on the Coffee Reading Modal
    Given Faladdin is on the Coffee Reading Modal
    When Faladdin taps to Close Button on the Coffee Reading Modal
    Then Faladdin should see Home Page

  Scenario: Faladdin taps Phone Back on the Coffee Reading Modal
    Given Faladdin is on the Coffee Reading Modal
    When Faladdin taps to Phone Back
    Then Faladdin should see Home Page

  Scenario: Faladdin should see Components on the Coffee Reading Yes Modal
    Given Faladdin is on the Coffee Reading Modal
    When Faladdin taps to Yes Button on the Coffee Reading Modal
    Then Faladdin should see Descriptiom: "<descriptiom>" on the Coffee Reading Yes Modal
    Then Faladdin should see Cards: "<cardOpenGalary>" on the Coffee Reading Yes Modal
    Then Faladdin should see Cards Image: "<cardOpenGalary>" on the Coffee Reading Yes Modal
    Then Faladdin should see Cards: "<cardOpenCamera>" on the Coffee Reading Yes Modal
    Then Faladdin should see Cards Image: "<cardOpenGalary>" on the Coffee Reading Yes Modal
    Then Faladdin should see Close Button on the Coffee Reading Yes Modal

  Scenario: Faladdin taps Close Button on the Coffee Reading Yes Modal
    Given Faladdin is on the Coffee Reading Yes Modal
    When Faladdin taps to Close Button on the Coffee Reading Yes Modal
    Then Faladdin should see Coffee Reading Modal

  Scenario: Faladdin taps Phone Back on the Coffee Reading Yes Modal
    Given Faladdin is on the Coffee Reading Yes Modal
    When Faladdin taps to Phone Back
    Then Faladdin should see Coffee Reading Modal

  Scenario: Faladdin should see Components on the Coffee Reading No Page
    Given Faladdin is on the Coffee Reading Modal
    When Faladdin taps to No Button on the Coffee Reading Modal
    Then Faladdin should see Description: "<description>" on the Coffee Reading No Page
    Then Faladdin should see Image One on the Coffee Reading No Page
    Then Faladdin should see Image Two on the Coffee Reading No Page
    Then Faladdin should see Image Three on the Coffee Reading No Page
    Then Faladdin should see Video View on the Coffee Reading No Page
    Then Faladdin should see Continue Button Text: "<button>" on the Coffee Reading No Page
    Then Faladdin should see Back Button on the Coffee Reading No Page

  Scenario: Faladdin taps Close Button on the Coffee Reading No Page
    Given Faladdin is on the Coffee Reading No Page
    When Faladdin taps to Back Button on the Coffee Reading No Page
    Then Faladdin should see the Home Page

  Scenario: Faladdin taps Phone Back on the Coffee Reading No Page
    Given Faladdin is on the Coffee Reading Yes Modal
    When Faladdin taps to Phone Back
    Then Faladdin should see the Home Page

  Scenario: Faladdin should see Login Page via the Coffee Reading No Page
    Given Faladdin is on the Coffee Reading No Page
    When Faladdin taps to Continue Button on the Coffee Reading No Page
    Then Faladdin should see the Login Page