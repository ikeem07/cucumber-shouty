Feature: Hear shout
  Scenario: Lucy is located 15 meters from Sean
    Given Lucy is located 15 meters from Sean
    When Sean shouts "free bagels at Sean's"
    Then Lucy hears Sean's message

  Scenario: Lucy is located 1 meter from Sean
    Given Lucy is located 15 meters from Sean
    When Sean shouts "Free coffee!"
    Then Lucy hears Sean's message