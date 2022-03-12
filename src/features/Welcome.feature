@WelcomePage
Feature: Welcome Page

  @Components
  Scenario Outline: Faladdin should see Components on the Welcome Page
    Given Faladdin is open the App
    Then Faladdin should see Icon on the Welcome Page
    Then Faladdin should see Welcome: "<welcome>" on the Welcome Page
    Then Faladdin should see Description: "<description>" on the Welcome Page
    Then Faladdin should see Expolore Button: "<button>" on the Welcome Page
    Then Faladdin should see Video View on the Welcome Page
    Examples:
      | welcome | description                                             | button  |
      | Welcome | Reveal your future through fortune telling & astrology! | Explore |

  @Expore
  Scenario: Faladdin taps Explore Button on the Welcome Page
    Given Faladdin is on the Welcome Page
    When Faladdin taps to Explore Button on the Welcome Page
    Then Faladdin should see the Home Page