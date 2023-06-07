class sportsPage {
    get cookiesAccept () {
        return $('#onetrust-accept-btn-handler');
    }
    get inPlayTab () {
        return $('/html/body/div[1]/div[2]/div[2]/nav/ol/li[2]/a');
    }
    get selectTennis () {
        return $('/html/body/div[1]/div[2]/div[3]/div[2]/nav/div/ul/li[2]/a');
    }
    get settingsTab () {
        return $('#root > div._b7a7fe8 > div:nth-child(2) > nav > ol > li._21bc1d3._0a83cee > a > span');
    }
    get homeTab () {
        return $('/html/body/div[1]/div[2]/div[2]/nav/ol/li[1]/a/span');
    }
    get firstLiveGameOdds () {
        return $('/html/body/div[1]/div[2]/div[3]/div[2]/div[2]/div[1]/ul/li[1]/div/button/span/span/span/strong');
    }
    get buttonLabelFractional () {
        return $('#react-aria4883598271-4 > label:nth-child(1)');
    }
    get buttonLabelDecimal () {
        return $('#react-aria4883598271-4 > label:nth-child(2)');
    }
    get buttonLabelAmerican () {
        return $('#react-aria4883598271-4 > label:nth-child(3)');
    }
    get AzSportsSection () {
        return $('#root > div._b7a7fe8 > div._fe5ae1c > div._18a5872 > div > nav > ul:nth-child(4)');
    }
    get AzSportsList () {
        return $('#root > div._b7a7fe8 > div._fe5ae1c > div._18a5872 > div > nav > ul:nth-child(4)').$$('li');
    }
    get AzSportsListAmericanFootball () {
        return $('#root > div._b7a7fe8 > div._fe5ae1c > div._18a5872 > div > nav > ul:nth-child(4) > li:nth-child(1) > a');
    }
    get betSlip () {
        return $('#root > div._b7a7fe8 > div._fe5ae1c > div._078ae5d > div > form > div._893e0fe > div > div._628df00 > div');
    }
    get betCard () {
        return $('#root > div._b7a7fe8 > div._fe5ae1c > div._078ae5d > div > form > div._893e0fe > div > div._628df00 > details');
    }
    get removeBet () {
        return $('#root > div._b7a7fe8 > div._fe5ae1c > div._078ae5d > div > form > div._893e0fe > div > div._628df00 > details > div > div > div > div._4c18d4c._5d0737f > div._abd8013 > button');
    }
    get enterStake () {
        return $('#root > div._b7a7fe8 > div._fe5ae1c > div._078ae5d > div > form > div._893e0fe > div > div._628df00 > details > div > div > div > div._10f2c80 > div > div > input');
    }
    get stakeExceptionError () {
        return $('#root > div._b7a7fe8 > div._fe5ae1c > div._078ae5d > div > form > div._893e0fe > div > div._628df00 > details > div > div > div._alert_87yry_1._passive-warning_87yry_22._7bb99fa > div > span');
    }
}
module.exports = new sportsPage();