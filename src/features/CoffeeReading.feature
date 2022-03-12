@CoffeeReading
Feature: Coffee Reading

  @Modal
  Scenario Outline: Faladdin should see Components on the Coffee Reading Modal
    Given Faladdin is on the Home Page
    When Faladdin taps to Tv Title: "<productTitle>" on the HomePage
    Then Faladdin should see Message: "<modalMessage>" on the Coffee Reading Modal
    Then Faladdin should see Yes Button Text: "<yesButton>" on the Coffee Reading Modal
    Then Faladdin should see Yes Button Image on the Coffee Reading Modal
    Then Faladdin should see No Button Text: "<noButton>" on the Coffee Reading Modal
    Then Faladdin should see No Button Image on the Coffee Reading Modal
    Then Faladdin should see Close Button on the Coffee Reading Modal
    Examples:
      | productTitle   | modalMessage                | yesButton | noButton |
      | Coffee Reading | Do you have Turkish Coffee? | Yes       | No       |

  @Close
  Scenario: Faladdin taps Close Button on the Coffee Reading Modal
    Given Faladdin is on the Coffee Reading Modal
    When Faladdin taps to Close Button on the Coffee Reading Modal
    Then Faladdin should see the Home Page

  @PhoneBack
  Scenario: Faladdin taps Phone Back on the Coffee Reading Modal
    Given Faladdin is on the Coffee Reading Modal
    When Faladdin taps to Phone Back
    Then Faladdin should see the Home Page

  @YesModal @Components
  Scenario Outline: Faladdin should see Components on the Coffee Reading Yes Modal
    Given Faladdin is on the Coffee Reading Modal
    When Faladdin taps to Yes Button on the Coffee Reading Modal
    Then Faladdin should see Description: "<description>" on the Coffee Reading Yes Modal
    Then Faladdin should see Cards: "<cardOpenGalary>" on the Coffee Reading Yes Modal
    Then Faladdin should see Cards: "<cardOpenCamera>" on the Coffee Reading Yes Modal
    Then Faladdin should see Close Button on the Coffee Reading Yes Modal
    Examples:
      | description                               | cardOpenGalary | cardOpenCamera |
      | Please choose a way to upload your photos | Open Gallery   | Open Camera    |

  @YesModal @Close
  Scenario: Faladdin taps Close Button on the Coffee Reading Yes Modal
    Given Faladdin is on the Coffee Reading Yes Modal
    When Faladdin taps to Close Button on the Coffee Reading Yes Modal
    Then Faladdin should see Coffee Reading Modal

  @YesModal @PhoneBack
  Scenario: Faladdin taps Phone Back on the Coffee Reading Yes Modal
    Given Faladdin is on the Coffee Reading Yes Modal
    When Faladdin taps to Phone Back
    Then Faladdin should see Coffee Reading Modal

  @NoModal @Components
  Scenario Outline: Faladdin should see Components on the Coffee Reading No Page
    Given Faladdin is on the Coffee Reading Modal
    When Faladdin taps to No Button on the Coffee Reading Modal
    Then Faladdin should see Description: "<description>" on the Coffee Reading No Page
    Then Faladdin should see Image One on the Coffee Reading No Page
    Then Faladdin should see Image Two on the Coffee Reading No Page
    Then Faladdin should see Image Three on the Coffee Reading No Page
    Then Faladdin should see Video View on the Coffee Reading No Page
    Then Faladdin should see Continue Button Text: "<button>" on the Coffee Reading No Page
    Then Faladdin should see Back Button on the Coffee Reading No Page
    Examples:
      | description                | button   |
      | Let Faladdin drink for you | Continue |

  @NoModal @Close
  Scenario: Faladdin taps Close Button on the Coffee Reading No Page
    Given Faladdin is on the Coffee Reading No Page
    When Faladdin taps to Back Button on the Coffee Reading No Page
    Then Faladdin should see the Home Page

  @NoModal @PhoneBack
  Scenario: Faladdin taps Phone Back on the Coffee Reading No Page
    Given Faladdin is on the Coffee Reading Yes Modal
    When Faladdin taps to Phone Back
    Then Faladdin should see the Home Page

  @DirectedLogin
  Scenario: Faladdin should see Login Page via the Coffee Reading No Page
    Given Faladdin is on the Coffee Reading No Page
    When Faladdin taps to Continue Button on the Coffee Reading No Page
    Then Faladdin should see the Login Page