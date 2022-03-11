Feature: Login Page

  Scenario: Faladdin should see Components on the Login Page
    Given Faladdin is on the Home Page
    When Faladdin taps to Login on the Home Page
    Then Faladdin should see Icon on the Login Page
    Then Faladdin should see Create Your Account Text: "<createAccount>" on the Login Page
    Then Faladdin should see Continue with Facebook Text: "<facebook>" on the Login Page
    Then Faladdin should see Facebook Icon on the Login Page
    Then Faladdin should see Continue with Google Text: "<google>" on the Login Page
    Then Faladdin should see Google Icon on the Login Page
    Then Faladdin should see Continue with Email Text: "<email>" on the Login Page
    Then Faladdin should see Terms And Policy Text: "<termsAndPolicy>" on the Login Page
    Then Faladdin should see Close Button on the Login Page

  Scenario: Faladdin taps Close Button on the Login Page
    Given Faladdin is on the Login Page
    When Faladdin taps to Close Button on the Login Page
    Then Faladdin should see Home Page

  Scenario: Faladdin taps Phone Back on the Login Page
    Given Faladdin is on the Login Page
    When Faladdin taps to Phone Back
    Then Faladdin should see Home Page

  Scenario: Faladdin should see Components on the Login Page with Email
    Given Faladdin is on the Login Page
    When Faladdin taps to Continue with Email on the Login Page
    Then Faladdin should see Description: "<description>" on the Login Page with Email
    Then Faladdin should see Edit Box Text: "<editBox>" on the Login Page with Email
    Then Faladdin should see Send Button Text: "<sendButton>" on the Login Page with Email
    Then Faladdin should see Back Button on the Login Page with Email

  Scenario: Faladdin taps send with Email: <eMail> on the Login Page with Email
    Given Faladdin is on the Login Page with Email
    When Faladdin type Email: "<eMail>" and taps Send Button on the Login Page with Email
    Then Faladdin should see Description: "<description>" on the Login Page with Email
