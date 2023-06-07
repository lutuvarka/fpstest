Feature: Test that each radio button changes how the odds are displayed as bets

  We will be implementing scenario outline to apply the best practice in test case creation

    Scenario Outline: Each radio button changes how odds are being displayed
      Given User has selected their odds <type>
      When User visits the bets section
      Then <odds> are displayed with correct conversion
      Examples:
        | type                                                                      | odds |
        | /html/body/div[1]/div[2]/div[3]/div[2]/div/section/div/div/label[1]/input | /    |
        | /html/body/div[1]/div[2]/div[3]/div[2]/div/section/div/div/label[2]/input | .    |
        | /html/body/div[1]/div[2]/div[3]/div[2]/div/section/div/div/label[3]/input | +    |