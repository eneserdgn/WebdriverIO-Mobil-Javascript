@HomePage
Feature: Home Page

  @Icons
  Scenario: Faladdin should see Faladdin and Login Icon on the Home Page
    Given Faladdin is on the Welcome Page
    When Faladdin taps to Explore Button on the Welcome Page
    Then Faladdin should see Faladdin Icon the Home Page
    Then Faladdin should see Login Icon the Home Page

  @Credits
  Scenario Outline: Faladdin should see Credits on the Home Page
    Given Faladdin is on the Welcome Page
    When Faladdin taps to Explore Button on the Welcome Page
    Then Faladdin should see Credit Icon the Home Page
    Then Faladdin should see Credit: "<credit>" the Home Page
    Examples:
      | credit |
      | 0      |

  @Horoscope
  Scenario Outline: Faladdin should see Horoscope on the Home Page
    Given Faladdin is on the Welcome Page
    When Faladdin taps to Explore Button on the Welcome Page
    Then Faladdin should see Product Title: "<productTitle>" the Home Page
    Then Faladdin should see Horoscope Title: "<horoscopeTitle>" the Home Page
    Then Faladdin should see Horoscope Date: "<horoscopeDate>" the Home Page
    Then Faladdin should see Horoscope Read More: "<horoscopeReadMore>" the Home Page
    Examples:
      | productTitle      | horoscopeTitle   | horoscopeDate                 | horoscopeReadMore |
      | Today's Horoscope | Your Zodiac Sign | What do the stars say to you? | Find Out Now      |

  @Products
  Scenario Outline: Faladdin should see Products on the Home Page
    Given Faladdin is on the Welcome Page
    When Faladdin taps to Explore Button on the Welcome Page
    Then Faladdin should see Product Title: "<productTitle>" the Home Page
    Then Faladdin should see Tv Title: "<tvTitle1>" the Home Page
    Then Faladdin should see Tv Title: "<tvTitle2>" the Home Page
    Then Faladdin should see Tv Title: "<tvTitle3>" the Home Page
    Then Faladdin should see Tv Title: "<tvTitle4>" the Home Page
    Examples:
      | productTitle | tvTitle1    | tvTitle2     | tvTitle3  | tvTitle4       |
      | Readings     | Tarot Cards | Clairvoyance | The Genie | Coffee Reading |

  @NavigationButtons
  Scenario Outline: Faladdin should see Navigation Buttons on the Home Page
    Given Faladdin is on the Welcome Page
    When Faladdin taps to Explore Button on the Welcome Page
    Then Faladdin should see selected Navigation Button: "<selectedNav>" the Home Page
    Then Faladdin should see unselected Navigation Button: "<unSelectedNav1>" the Home Page
    Then Faladdin should see unselected Navigation Button: "<unSelectedNav2>" the Home Page
    Then Faladdin should see unselected Navigation Button: "<unSelectedNav3>" the Home Page
    Examples:
      | selectedNav | unSelectedNav1 | unSelectedNav2 | unSelectedNav3 |
      | Home        | Inbox          | Horoscope      | Store          |
