const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


router.post('/reference-answer', function (req, res) {

  refNumber = req.session.data['reference-number']
  var postcodeRef = req.session.data['postcode-ref']

  if (refNumber == "001"){
    res.redirect('/ownerPageReference')
  } else if (refNumber == "002") {
        res.redirect('/occupierPageReference')
  } else if (refNumber == "003") {
        res.redirect('/agentPageReference')
  } else if (refNumber == "004") {
        res.redirect('/otherPageReference')
  } else if (refNumber == "005") {
        res.redirect('/saveForLater')
  } else if (refNumber == "100") {
        res.redirect('/still-connected')
  } else if (refNumber == "999") {
        res.redirect('/still-connected')
  } else if (refNumber == "6010" && postcodeRef == "BN12 4AX") {
        res.redirect('/still-connected-standard')
  } else if (refNumber == "6015" && postcodeRef == "BN12 4AX") {
        res.redirect('/still-connected-standard')
  } else if (refNumber == "6020" && postcodeRef == "BN12 4AX") {
        res.redirect('/still-connected-standard')
  } else if (refNumber == "6030" && postcodeRef == "BN12 4AX") {
        res.redirect('/still-connected-standard')
  } else if (refNumber == "6045" && postcodeRef == "BN12 4AX") {
        res.redirect('/still-connected-standard')
  } else if (refNumber == "6076" && postcodeRef == "BN12 4AX") {
        res.redirect('/still-connected-standard')
  } else if (refNumber == "6028" && postcodeRef == "BN12 4AX") {
        res.redirect('/still-connected-standard')
  } else if (refNumber == "6031" && postcodeRef == "BN12 4AX") {
        res.redirect('/still-connected-standard')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/lettings-details-answer-6020', function (req, res) {

  var lettingsDetails6020 = req.session.data['lettings-details-6020']

  if (lettingsDetails6020 == "Automated teller machine (ATM)"){
    res.redirect('/lettings-details-choice-atm-6020')
  } else if (lettingsDetails6020 == "Telecom mast") {
        res.redirect('/lettings-details-choice-telecom-6020')
  } else if (lettingsDetails6020 == "Advertising right") {
        res.redirect('/lettings-details-choice-advertising-6020')
  } else if (lettingsDetails6020 == "Other (garage workshop, for example)") {
        res.redirect('/lettings-details-choice-other-6020')
  } else {
    res.redirect('/error-page')
  }

})

// duplicated below: can likely delete this :)
//router.post('/website-answer', function (req, res) {
//  var websiteYes6010 = req.session.data['is-a-website']
//
//  if (websiteYes6010 == "Yes"){
//    res.redirect('/website-yes')
//  } else if (websiteYes6010 == "No" && refNumber == "6010") {
//    res.redirect('/regularly-sell-alcohol')
//  } else if (websiteYes6010 == "No" && refNumber == "6045") {
//    res.redirect('/trading-details-one')
//  } else if (websiteYes6010 == "No" && refNumber == "6015") {
//    res.redirect('/trading-details-one')
//  } else {
//    res.redirect('/error-page')
//  }

//h})

// Going from website question
router.post('/website-answer', function (req, res) {
  var websiteYes6010 = req.session.data['is-a-website']

  if (refNumber == "6010"){
    res.redirect('/regularly-sell-alcohol')
  } else if (refNumber == "6045") {
    res.redirect('/explain-business-tax-year-6045')
  } else if (refNumber == "6015") {
    res.redirect('/premise-licence-6015')
  } else {
    res.redirect('/error-page')
  }

})

//Going from website "Yes"
router.post('/trading-whichform', function (req, res) {
  var websiteYes6015 = req.session.data['is-a-website-6015']

  if (refNumber == "6015"){
    res.redirect('/premise-licence-6015')
  } else if (refNumber == "6045") {
    res.redirect('/explain-business-tax-year-6045')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/regularly-sell-alcohol-answer', function (req, res) {
  var regularlySellAlcohol = req.session.data['regularly-sell-alcohol']

  if (regularlySellAlcohol == "Yes"){
    res.redirect('/regularly-sell-alcohol-yes')
  } else if (regularlySellAlcohol == "No") {
    res.redirect('/premises-licence')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/tied-goods-answer', function (req, res) {
  var tiedGoods = req.session.data['tied-goods']

  if (tiedGoods == "Yes"){
    res.redirect('/tied-goods-yes')
  } else if (tiedGoods == "No") {
    res.redirect('/trading-details-one')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/enforcement-action-answer', function (req, res) {
  var enforcementAction = req.session.data['enforcement-action']

  if (enforcementAction == "Yes"){
    res.redirect('/enforcement-action-yes')
  } else if (enforcementAction == "No") {
    res.redirect('/tied-goods')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/premises-licence-answer', function (req, res) {
  var premisesLicence6010 = req.session.data['premises-licence']

  if (premisesLicence6010 == "Yes"){
    res.redirect('/premises-licence-yes')
  } else if (premisesLicence6010 == "No") {
    res.redirect('/enforcement-action')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/about-you-answer', function (req, res) {
	
 

    if (refNumber == "6010"){
      res.redirect('/about-the-property-6010')
    } else if (refNumber == "6015") {
          res.redirect('/about-the-property-6015')
    } else if (refNumber == "6020") {
          res.redirect('/about-the-property-6020')
    } else if (refNumber == "6030") {
          res.redirect('/about-the-property-6030')
    } else if (refNumber == "6045") {
          res.redirect('/about-the-property-6045')
    } else if (refNumber == "6076") {
          res.redirect('/about-the-property-6076')
    } else if (refNumber == "6031") {
          res.redirect('/about-the-property-6031')
    } else {
      res.redirect('/error-page')
    }

})

 

router.post('/trading-details-whichform', function (req, res) {

    if (refNumber == "6045"){
      res.redirect('/trading-static-caravans')
    } else if (refNumber == "6010") {
          res.redirect('/trading-details-years-one')
    } else if (refNumber == "6015") {
          res.redirect('/explain-business-tax-year-6015')
    } else if (refNumber == "6020") {
          res.redirect('/about-the-property-6020')
    } else if (refNumber == "6030") {
          res.redirect('/about-the-property-6030')
    } else if (refNumber == "6045") {
          res.redirect('/about-the-property-6045')
    } else if (refNumber == "6076") {
          res.redirect('/about-the-property-6076')
    } else {
      res.redirect('/error-page')
    }

})

router.post('/trading-details-one', function (req, res) {

    var year2022 = req.session.data['passport-issued-year']

    if (year2022 == "2022"){
      res.redirect('/trading-three-columns-2022-6010')
    } else if (year2022 == "2021") {
      res.redirect('/trading-two-columns-6010')
    } else {
    res.redirect('/trading-three-columns-6010')
    }

  })
  
  router.post('/trading-three-columns-6076-answer', function (req, res) {

     

      if (renewtype == "INT"){
        res.redirect('/trading-three-columns-6076-two-int')
      } else if (renewtype == "BAS") {
      res.redirect('/trading-three-columns-6076-two')
	  } else {
	    res.redirect('/error-page')
	  }
	})
  
 
  

  
  router.post('/renew-answer', function (req, res) {
	  
	    renewtype = req.session.data['renewable']

      if (renewtype){
        res.redirect('/plant-and-technology')
	  } else {
	    res.redirect('/error-page')
	  }
	})
  
  
  



router.post('/explain-business-tax-year-6015', function (req, res) {
  var year2022 = req.session.data['passport-issued-year']

  if (year2022 == "2022"){
    res.redirect('/trading-three-columns-2022-6015')
  } else {
    res.redirect('/trading-three-columns-6015')
    } 

})

router.post('/explain-business-tax-year-6045', function (req, res) {
  var year2022 = req.session.data['passport-issued-year']

  if (year2022 == "2022DISABLED"){
    res.redirect('/trading-three-columns-2022-6045')
  } else {
    res.redirect('/static-caravans')
    } 

})

router.post('/static-yes-or-no', function (req, res) {
  var staticstatus = req.session.data['static']

  if (staticstatus == "Yes"){
    res.redirect('/static-open')
  } else {
    res.redirect('/holiday-other')
    } 

})

router.post('/holiday-yes-or-no', function (req, res) {
  var staticstatus = req.session.data['static']

  if (staticstatus == "Yes"){
    res.redirect('/holiday-open')
  } else {
    res.redirect('/pitches')
    } 

})

router.post('/pitches-yes-or-no', function (req, res) {
  var staticstatus = req.session.data['static']

  if (staticstatus == "Yes"){
    res.redirect('/pitches-open')
  } else {
    res.redirect('/additional-activities')
    } 

})

router.post('/additional-yes-or-no', function (req, res) {
  var staticstatus = req.session.data['static']

  if (staticstatus == "Yes"){
    res.redirect('/trading-three-columns-additional-6045')
  } else {
    res.redirect('/concession-franchise-6045')
    } 

})

router.post('/concessions-yes-or-no', function (req, res) {
  var staticstatus = req.session.data['static']

  if (staticstatus == "Yes"){
    res.redirect('/lettings-6045')
  } else {
    res.redirect('/lettings-6045')
    } 

})





router.post('/about-the-property-answer', function (req, res) {
  var propertyType = req.session.data['property-type']

  if ((propertyType == "Public house" || propertyType == "Wine bar or cafe" || propertyType == "Other bar" || propertyType == "Pub and restaurant" || propertyType == "Licensed restaurant" || propertyType == "Hotel" || propertyType == "Disco or nightclub" || propertyType == "Other (please specify)")){
    res.redirect('/website')
  } else {
    res.redirect('/error-page')
  }
})


router.post('/still-connected-answer', function (req, res) {
  var stillConnected = req.session.data['still-connected-address']

  if (stillConnected == "yes-connected"){
    res.redirect('/about-you')
  } else if (stillConnected == "yes-edit-address") {
        res.redirect('/edit-connected-address')
  } else if (stillConnected == "no-connected") {
        res.redirect('/ever-connected')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/still-connected-answer-6015', function (req, res) {
  var stillConnected6015 = req.session.data['still-connected-address-6015']

  if (stillConnected6015 == "yes-connected"){
    res.redirect('/about-you-6015')
  } else if (stillConnected6015 == "yes-edit-address") {
        res.redirect('/edit-connected-address-6015')
  } else if (stillConnected6015 == "no-connected") {
        res.redirect('/ever-connected')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/still-connected-answer-6020', function (req, res) {
  var stillConnected6020 = req.session.data['still-connected-address-6020']

  if (stillConnected6020 == "yes-connected"){
    res.redirect('/about-you-6020')
  } else if (stillConnected6020 == "yes-edit-address") {
        res.redirect('/edit-connected-address-6020')
  } else if (stillConnected6020 == "no-connected") {
        res.redirect('/ever-connected')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/still-connected-answer-6030', function (req, res) {
  var stillConnected6020 = req.session.data['still-connected-address-6020']

  if (stillConnected6020 == "yes-connected"){
    res.redirect('/about-you-6030')
  } else if (stillConnected6020 == "yes-edit-address") {
        res.redirect('/edit-connected-address')
  } else if (stillConnected6020 == "no-connected") {
        res.redirect('/ever-connected')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/still-connected-answer-standard', function (req, res) {
  var stillConnectedStandard = req.session.data['still-connected-address-standard']
	

  if (stillConnectedStandard == "yes-connected" && refNumber == "6010" || stillConnectedStandard == "yes-connected" && refNumber == "6031"){
    res.redirect('/property-connection')
  } else if (stillConnectedStandard == "yes-edit-address") {
        res.redirect('/edit-connected-address')
  } else if (stillConnectedStandard == "No") {
        res.redirect('/ever-connected')
  } else {
    res.redirect('/about-you-standard')
  }
  
 
  
 

})

router.post('/still-connected-answer-standard', function (req, res) {
  var stillConnectedStandard = req.session.data['still-connected-address-standard']

  if (stillConnectedStandard == "yes-connected" && refNumber == "6010"){
    res.redirect('/property-connection')
  } else if (stillConnectedStandard == "yes-edit-address") {
        res.redirect('/edit-connected-address')
  } else if (stillConnectedStandard == "no-connected") {
        res.redirect('/ever-connected')
  } else {
    res.redirect('/about-you-standard')
  }

})

router.post('/connection-answer', function (req, res) {
  occupier = req.session.data['representative']

  if (occupier == "OWA" || occupier == "OWT"){
    res.redirect('/task-list-initial-owner')
  } else {
    res.redirect('/task-list-initial-lessee')
  }

})

router.post('/rent-include-vat-answer-6020', function (req, res) {
  var vatPayable6020 = req.session.data['vat-payable-6020']

  if (vatPayable6020 == "Yes"){
    res.redirect('/rent-first-become-payable-6020')
  } else if (vatPayable6020 == "No") {
        res.redirect('/rent-include-vat-no-6020')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/trading-details-answer', function (req, res) {
  var tradingDetailsOne = req.session.data['trading-details-last-3-years']

  if (tradingDetailsOne == "Yes"){
    res.redirect('/trading-details-years-one')
  } else if (tradingDetailsOne == "No") {
        res.redirect('/sub-lettings')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/trading-details-answer-6015', function (req, res) {
  var tradingDetailsOne = req.session.data['trading-details-last-3-years']

  if (tradingDetailsOne == "Yes"){
    res.redirect('/trading-details-years-one-6015')
  } else if (tradingDetailsOne == "No") {
        res.redirect('/payments-lieu-6015')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/trading-details-answer-6030', function (req, res) {
  var tradingDetailsOne = req.session.data['trading-details-last-3-years-6030']

  if (tradingDetailsOne == "Yes"){
    res.redirect('/trading-details-years-one-6030')
  } else if (tradingDetailsOne == "No") {
        res.redirect('/trading-details-years-three-page-two-6030')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/trading-details-two-answer', function (req, res) {
  var tradingDetailsTwo = req.session.data['trading-details-two']

  if (tradingDetailsTwo == "Yes"){
    res.redirect('/trading-details-years-two')
  } else if (tradingDetailsTwo == "No") {
        res.redirect('/sub-lettings')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/trading-details-two-answer-6015', function (req, res) {
  var tradingDetailsTwo = req.session.data['trading-details-two']

  if (tradingDetailsTwo == "Yes"){
    res.redirect('/trading-details-years-two-6015')
  } else if (tradingDetailsTwo == "No") {
        res.redirect('/payments-lieu-6015')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/trading-details-two-answer-6030', function (req, res) {
  var tradingDetailsTwo = req.session.data['trading-details-two-6030']

  if (tradingDetailsTwo == "Yes"){
    res.redirect('/trading-details-years-two-6030')
  } else if (tradingDetailsTwo == "No") {
        res.redirect('/trading-details-years-three-page-two-6030')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/trading-details-three-answer', function (req, res) {
  var tradingDetailsThree = req.session.data['trading-details-three']

  if (tradingDetailsThree == "Yes"){
    res.redirect('/trading-details-years-three')
  } else if (tradingDetailsThree == "No") {
        res.redirect('/sub-lettings')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/trading-details-three-answer-6015', function (req, res) {
  var tradingDetailsThree = req.session.data['trading-details-three']

  if (tradingDetailsThree == "Yes"){
    res.redirect('/trading-details-years-three-6015')
  } else if (tradingDetailsThree == "No") {
        res.redirect('/payments-lieu-6015')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/trading-details-three-answer-6030', function (req, res) {
  var tradingDetailsThree = req.session.data['trading-details-three-6030']

  if (tradingDetailsThree == "Yes"){
    res.redirect('/trading-details-years-three-6030')
  } else if (tradingDetailsThree == "No") {
        res.redirect('/trading-details-years-three-page-two-6030')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-received-answer', function (req, res) {
  var rentReceived = req.session.data['rent-received']

  if (rentReceived == "Yes"){
    res.redirect('/rent-received-yes')
  } else if (rentReceived == "No") {
        res.redirect('/tenancy-lease-agreement-6010')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-received-6015-answer', function (req, res) {
  var rentReceived6015 = req.session.data['rent-received-6015']

  if (rentReceived6015 == "Yes"){
    res.redirect('/sub-lettings-details-6015')
  } else if (rentReceived6015 == "No") {
        res.redirect('/tenancy-lease-agreement-6015')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/three-years-answer', function (req, res) {
  var tenancyThreeYears = req.session.data['within-three-years']
  var agreedThreeYears = req.session.data['altered-three-years']
  var reviewNegotiated = req.session.data['rent-review']

  if (tenancyThreeYears == "no" && agreedThreeYears == "no" && reviewNegotiated == "no"){
    res.redirect('/rent-review-within-12-months')
  } else if ((tenancyThreeYears == "yes" && agreedThreeYears == "no" && reviewNegotiated == "no") || (tenancyThreeYears == "no" && agreedThreeYears == "yes" && reviewNegotiated == "no") || (tenancyThreeYears == "no" && agreedThreeYears == "no" && reviewNegotiated == "yes") || (tenancyThreeYears == "yes" && agreedThreeYears == "no" && reviewNegotiated == "yes") || (tenancyThreeYears == "yes" && agreedThreeYears == "yes" && reviewNegotiated == "no") || (tenancyThreeYears == "yes" && agreedThreeYears == "yes" && reviewNegotiated == "yes") || (tenancyThreeYears == "no" && agreedThreeYears == "yes" && reviewNegotiated == "yes")){
    res.redirect('/current-annual-rent')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/three-years-answer-6015', function (req, res) {
  var tenancyThreeYears = req.session.data['within-three-years']
  var agreedThreeYears = req.session.data['altered-three-years']
  var reviewNegotiated = req.session.data['rent-review']

  if (tenancyThreeYears == "no" && agreedThreeYears == "no" && reviewNegotiated == "no"){
    res.redirect('/rent-review-within-12-months-6015')
  } else if ((tenancyThreeYears == "yes" && agreedThreeYears == "no" && reviewNegotiated == "no") || (tenancyThreeYears == "no" && agreedThreeYears == "yes" && reviewNegotiated == "no") || (tenancyThreeYears == "no" && agreedThreeYears == "no" && reviewNegotiated == "yes") || (tenancyThreeYears == "yes" && agreedThreeYears == "no" && reviewNegotiated == "yes") || (tenancyThreeYears == "yes" && agreedThreeYears == "yes" && reviewNegotiated == "no") || (tenancyThreeYears == "yes" && agreedThreeYears == "yes" && reviewNegotiated == "yes") || (tenancyThreeYears == "no" && agreedThreeYears == "yes" && reviewNegotiated == "yes")){
    res.redirect('/current-annual-rent-6015')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/three-years-answer-6015', function (req, res) {
  var tenancyThreeYears = req.session.data['within-three-years']
  var agreedThreeYears = req.session.data['altered-three-years']
  var reviewNegotiated = req.session.data['rent-review']

  if (tenancyThreeYears == "no" && agreedThreeYears == "no" && reviewNegotiated == "no"){
    res.redirect('/rent-review-within-12-months-6015')
  } else if ((tenancyThreeYears == "yes" && agreedThreeYears == "no" && reviewNegotiated == "no") || (tenancyThreeYears == "no" && agreedThreeYears == "yes" && reviewNegotiated == "no") || (tenancyThreeYears == "no" && agreedThreeYears == "no" && reviewNegotiated == "yes") || (tenancyThreeYears == "yes" && agreedThreeYears == "no" && reviewNegotiated == "yes") || (tenancyThreeYears == "yes" && agreedThreeYears == "yes" && reviewNegotiated == "no") || (tenancyThreeYears == "yes" && agreedThreeYears == "yes" && reviewNegotiated == "yes") || (tenancyThreeYears == "no" && agreedThreeYears == "yes" && reviewNegotiated == "yes")){
    res.redirect('/current-annual-rent-6015')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/three-years-answer-6030', function (req, res) {
  var tenancyThreeYears = req.session.data['within-three-years']
  var agreedThreeYears = req.session.data['altered-three-years']
  var reviewNegotiated = req.session.data['rent-review']

  if (tenancyThreeYears == "no" && agreedThreeYears == "no" && reviewNegotiated == "no"){
    res.redirect('/rent-review-within-12-months-6030')
  } else if ((tenancyThreeYears == "yes" && agreedThreeYears == "no" && reviewNegotiated == "no") || (tenancyThreeYears == "no" && agreedThreeYears == "yes" && reviewNegotiated == "no") || (tenancyThreeYears == "no" && agreedThreeYears == "no" && reviewNegotiated == "yes") || (tenancyThreeYears == "yes" && agreedThreeYears == "no" && reviewNegotiated == "yes") || (tenancyThreeYears == "yes" && agreedThreeYears == "yes" && reviewNegotiated == "no") || (tenancyThreeYears == "yes" && agreedThreeYears == "yes" && reviewNegotiated == "yes") || (tenancyThreeYears == "no" && agreedThreeYears == "yes" && reviewNegotiated == "yes")){
    res.redirect('/current-annual-rent-6030')
  } else {
    res.redirect('/error-page')
  }

})



router.post('/lease-agreement-answer', function (req, res) {
  var tenancyLease = req.session.data['tenancy-lease-occupy']

  if (tenancyLease == "Yes"){
    res.redirect('/lease-agreement-details-yes')
  } else if (tenancyLease == "No") {
        res.redirect('/check-your-answers')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/throughput-and-turnover-page-one-answer-6020', function (req, res) {
  var throughputThreeYears = req.session.data['throughput-3-years-6020']

  if (throughputThreeYears == "Yes"){
    res.redirect('/throughput-and-turnover-page-one-6020')
  } else if (throughputThreeYears == "No") {
        res.redirect('/tenancy-lease-agreement-6020')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/throughput-and-turnover-two-page-one-answer-6020', function (req, res) {
  var throughputPageTwoAnswer = req.session.data['throughput-page-two-total-fuel-6020']

  if (throughputPageTwoAnswer == "Yes"){
    res.redirect('/throughput-and-turnover-two-page-one-6020')
  } else if (throughputPageTwoAnswer == "No") {
        res.redirect('/tenancy-lease-agreement-6020')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/throughput-and-turnover-three-page-one-answer-6020', function (req, res) {
  var throughputPageTwoAnswer = req.session.data['throughput-page-three-total-fuel-6020']

  if (throughputPageTwoAnswer == "Yes"){
    res.redirect('/throughput-and-turnover-three-page-one-6020')
  } else if (throughputPageTwoAnswer == "No") {
        res.redirect('/tenancy-lease-agreement-6020')
  } else {
    res.redirect('/error-page')
  }

})



router.post('/rent-open-marker-answer', function (req, res) {
  var openMarketValue = req.session.data['open-market-value']

  if (openMarketValue == "Yes"){
    res.redirect('/rent-open-market-yes')
  } else if (openMarketValue == "No") {
    res.redirect('/rent-open-market-no')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-open-market-value-6020-answer', function (req, res) {
  var openMarketValue6020 = req.session.data['rent-open-market-6020']

  if (openMarketValue6020 == "Yes"){
    res.redirect('/ultimately-responsible-6020')
  } else if (openMarketValue6020 == "No") {
    res.redirect('/rent-open-market-no-6020')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-open-market-value-6015-answer', function (req, res) {
  var openMarketValue6015 = req.session.data['rent-open-market-6015']

  if (openMarketValue6015 == "Yes"){
    res.redirect('/rent-increase-annually-6015')
  } else if (openMarketValue6015 == "No") {
    res.redirect('/rent-calculated-6015')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-open-market-value-6010-answer', function (req, res) {
  var openMarketValue6010 = req.session.data['rent-open-market-6010']

  if (openMarketValue6010 == "Yes"){
    res.redirect('/rent-increase-annually')
  } else if (openMarketValue6010 == "No") {
    res.redirect('/rent-calculated')
  } else {
    res.redirect('/error-page')
  }

})

// router.post('/rent-open-market-value-6030-answer', function (req, res) {
//   var openMarketValue6020 = req.session.data['rent-open-market-6030']
//
//   if (openMarketValue6020 == "Yes"){
//     res.redirect('/rent-calculated-6030')
//   } else if (openMarketValue6020 == "No") {
//     res.redirect('/rent-calculated-6030')
//   } else {
//     res.redirect('/error-page')
//   }
//
// })

router.post('/rent-payable-vary-answer', function (req, res) {
  var rentPayableVary6010 = req.session.data['rent-payable-vary-6010']

  if (rentPayableVary6010 == "Yes"){
    res.redirect('/rent-payable-vary-yes')
  } else if (rentPayableVary6010 == "No") {
    res.redirect('/rent-payable-vary-beers')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-payable-vary-beers-answer', function (req, res) {
  var rentPayableVary6010 = req.session.data['rent-payable-vary-beers-6010']

  if (rentPayableVary6010 == "Yes"){
    res.redirect('/rent-payable-vary-beers-yes')
  } else if (rentPayableVary6010 == "No") {
    res.redirect('/intervals-rent-reviewed-6010')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/tenants-additions-improvements-answer-6010', function (req, res) {
  var skipp = req.session.data['tenants-additions-6010']

  if (skipp == "Yes"){
    res.redirect('/tenants-additions-improvements-answer')
  } else if (skipp == "No") {
    res.redirect('/tenants-additions-improvements-split')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/tenants-additions-improvements-answer-split-6010', function (req, res) {
  var skippp = req.session.data['legal-planning-6010']

  if (skippp == "Yes"){
    res.redirect('/tenants-additions-improvements-split-answer')
  } else if (skippp == "No") {
    res.redirect('/further-info-standard')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/another-franchise', function (req, res) {
  var skip = req.session.data['report-on-page']

  if (skip == "Yes"){
    res.redirect('/sub-lettings-catering-yes')
  } else if (skip == "No") {
    res.redirect('/rent-received')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/another-letting', function (req, res) {
  var skip = req.session.data['add-another']

  if (skip == "Yes"){
    res.redirect('/rent-received-yes')
  } else if (skip == "No" && occupier == "OWA" || skip == "No" && occupier == "OWT") {
    res.redirect('/further-info-standard')
  }	else if (skip == "No") {
  res.redirect('/name-address-landlord')
  } else {
    res.redirect('/error-page')
  }

})


router.post('/rent-payable-vary-answer-6030', function (req, res) {
  var rentPayableVary = req.session.data['rent-payable-vary-6030']

  if (rentPayableVary == "Yes"){
    res.redirect('/rent-payable-vary-yes-6030')
  } else if (rentPayableVary == "No") {
    res.redirect('/rent-open-market-6030')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-include-fittings-answer-6020', function (req, res) {
  var rentPayableVary = req.session.data['rent-include-fittings-6020']

  if (rentPayableVary == "Yes"){
    res.redirect('/rent-include-fixture-fittings-yes-6020')
  } else if (rentPayableVary == "No") {
    res.redirect('/former-lease-agreement-6020')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-include-services-answer', function (req, res) {
  var rentIncludeService = req.session.data['rent-include-services']

  if (rentIncludeService == "Yes"){
    res.redirect('/rent-open-market-yes-continued')
  } else if (rentIncludeService == "No") {
    res.redirect('/rent-include-fixture-fittings')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-free-period-answer-6020', function (req, res) {
  var rentFreePeriod6020 = req.session.data['rent-free-period-6020']

  if (rentFreePeriod6020 == "Yes"){
    res.redirect('/rent-free-period-yes-6020')
  } else if (rentFreePeriod6020 == "No") {
    res.redirect('/capital-sum-or-premium-6020')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/tenants-additions-disregarded-answer-6020', function (req, res) {
  var tenantsAdditionsDisregarded6020 = req.session.data['tenants-additions-disregarded-6020']

  if (tenantsAdditionsDisregarded6020 == "Yes"){
    res.redirect('/tenants-additions-improvements-yes-6020')
  } else if (tenantsAdditionsDisregarded6020 == "No") {
    res.redirect('/works-required-present-tenancy-6020')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-uniform-business-rate-answer-6020', function (req, res) {
  var rentUniform6020 = req.session.data['rent-uniform-6020']

  if (rentUniform6020 == "Yes"){
    res.redirect('/rent-uniform-business-rate-yes-6020')
  } else if (rentUniform6020 == "No") {
    res.redirect('/rent-payable-affected-factors-6020')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-payable-affected-answer-6020', function (req, res) {
  var rentPayableAffected6020 = req.session.data['rent-affected-6020']

  if (rentPayableAffected6020 == "Yes"){
    res.redirect('/rent-payable-affected-factors-yes-6020')
  } else if (rentPayableAffected6020 == "No") {
    res.redirect('/further-info-6020')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-include-trade-answer', function (req, res) {
  var rentIncludeTrade = req.session.data['rent-include-trade']

  if (rentIncludeTrade == "Yes"){
    res.redirect('/rent-include-trade-yes')
  } else if (rentIncludeTrade == "No") {
    res.redirect('/rent-include-fixture-fittings')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-include-trade-answer-6010', function (req, res) {
  var rentIncludeTrade6010 = req.session.data['rent-include-trade-6010']

  if (rentIncludeTrade6010 == "Yes"){
    res.redirect('/rent-include-trade-yes-6010')
  } else if (rentIncludeTrade6010 == "No") {
    res.redirect('/rent-include-fixture-fittings-6010')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-include-trade-answer-6015', function (req, res) {
  var rentIncludeTrade = req.session.data['rent-include-trade-6015']

  if (rentIncludeTrade == "Yes"){
    res.redirect('/rent-include-trade-yes-6015')
  } else if (rentIncludeTrade == "No") {
    res.redirect('/rent-include-fixture-fittings-6015')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-include-trade-answer-6020', function (req, res) {
  var rentIncludeTrade6020 = req.session.data['rent-include-trade-6020']

  if (rentIncludeTrade6020 == "Yes"){
    res.redirect('/rent-include-trade-yes-6020')
  } else if (rentIncludeTrade6020 == "No") {
    res.redirect('/rent-include-fixture-fittings-6020')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-include-fixture-answer', function (req, res) {
  var rentIncludeFixtures = req.session.data['rent-include-fittings']

  if (rentIncludeFixtures == "Yes"){
    res.redirect('/rent-include-fixture-yes')
  } else if (rentIncludeFixtures == "No") {
    res.redirect('/lease-begin')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-include-fixture-answer-6010', function (req, res) {
  var rentIncludeFixtures6010 = req.session.data['rent-include-fittings-6010']

  if (rentIncludeFixtures6010 == "Yes"){
    res.redirect('/rent-include-fixture-yes-6010')
  } else if (rentIncludeFixtures6010 == "No") {
    res.redirect('/rent-open-market-value')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/sub-lettings-catering-valid', function (req, res) {
  var test = req.session.data['tenant-name']

  if (test){
    res.redirect('/sub-lettings-catering-yes-two')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-received-valid', function (req, res) {
  var test = req.session.data['tenant-name']

  if (test){
    res.redirect('/rent-received-yes-two')
  } else {
    res.redirect('/error-page')
  }

})



router.post('/rent-include-fixture-answer-6015', function (req, res) {
  var rentIncludeFixtures6015 = req.session.data['rent-include-fittings-6015']

  if (rentIncludeFixtures6015 == "Yes"){
    res.redirect('/rent-include-fixture-yes-6015')
  } else if (rentIncludeFixtures6015 == "No") {
    res.redirect('/lease-begin-6015')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/tenants-additions-answer-6015', function (req, res) {
  var tenantAddition = req.session.data['tenants-additions-6015']

  if (tenantAddition == "Yes"){
    res.redirect('/tenants-additions-improvements-yes-6015')
  } else if (tenantAddition == "No") {
    res.redirect('/capital-sum-premium-6015')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/rent-payable-affected-answer-6015', function (req, res) {
  var rentPayable = req.session.data['rent-affected-6015']

  if (rentPayable == "Yes"){
    res.redirect('/unusual-factors-6015')
  } else if (rentPayable == "No") {
    res.redirect('/alternative-contact-details-6015')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/cost-or-gross-answer-6015', function (req, res) {
  var costOrGross = req.session.data['cost-or-gross-6015']

  if (costOrGross == "Cost of sales"){
    res.redirect('/cost-of-sales-6015')
  } else if (costOrGross == "Gross profits") {
    res.redirect('/gross-profits-6015')
  } else {
    res.redirect('/error-page')
  }

})

// sub-lettings
router.post('/reporting-answer', function (req, res) {
  var reportOnPage = req.session.data['report-on-page']

  if (reportOnPage == "Yes"){
    res.redirect('/sub-lettings-catering')
  } else if (reportOnPage == "No" && occupier == "OWA" || reportOnPage == "No" && occupier == "OWT" ) {
    res.redirect('/further-info-standard')
  }	else if (reportOnPage == "No") {
	res.redirect('/name-address-landlord')  
  } else {
    res.redirect('/error-page')
  }

})

router.post('/site-constructed-answer-6076', function (req, res) {
  var site = req.session.data['siterent']

  if (site == "Yes"){
    res.redirect('/site-constructed-yes-6076')
  } else if (site == "No") {
    res.redirect('/further-info-standard')
  } else {
    res.redirect('/error-page')
  }

})



router.post('/reporting-answer-6015', function (req, res) {
  var reportOnPage = req.session.data['report-on-page-6015']

  if (reportOnPage == "Yes"){
    res.redirect('/sub-lettings-catering-6015')
  } else if (reportOnPage == "No") {
    res.redirect('/tenancy-lease-agreement-6015')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/sub-lettings-catering-answer', function (req, res) {
  var cateringAnswer = req.session.data['catering-operation']

  if (cateringAnswer == "Yes"){
    res.redirect('/sub-lettings-catering-yes')
  } else if (cateringAnswer == "No") {
    res.redirect('/rent-received')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/sub-lettings-catering-answer-6015', function (req, res) {
  var cateringAnswer = req.session.data['catering-operation-6015']

  if (cateringAnswer == "Yes"){
    res.redirect('/sub-lettings-catering-yes-6015')
  } else if (cateringAnswer == "No") {
    res.redirect('/rent-received-6015')
  } else {
    res.redirect('/error-page')
  }

})

router.post('/premises-licence-answer-6015', function (req, res) {
  var conditions = req.session.data['premise-licence-6015']

  if (conditions == "Yes"){
    res.redirect('/conditions-restricting-6015')
  } else if (conditions == "No"){
    res.redirect('/explain-business-tax-year-6015')
  }
  else {
    res.redirect('/error-page')
  }

})

router.post('/tenancy-lease-agreement-answer-6010', function (req, res) {
  var tenancyLease6010 = req.session.data['tenancy-lease-agreement-6010']

  if (tenancyLease6010 == "Yes"){
    res.redirect('/name-address-landlord')
  } else if (tenancyLease6010 == "No"){
    res.redirect('/further-info-standard')
  }
  else {
    res.redirect('/error-page')
  }

})

router.post('/tenancy-lease-agreement-answer-6015', function (req, res) {
  var tenancyLease6020 = req.session.data['tenancy-lease-agreement-6015']

  if (tenancyLease6020 == "Yes"){
    res.redirect('/name-address-landlord-6015')
  } else if (tenancyLease6020 == "No"){
    res.redirect('/tenancy-lease-agreement-commence-6015')
  }
  else {
    res.redirect('/error-page')
  }

})

router.post('/tenancy-lease-agreement-answer-6020', function (req, res) {
  var tenancyLease6020 = req.session.data['tenancy-lease-agreement-6020']

  if (tenancyLease6020 == "Yes"){
    res.redirect('/current-annual-rent-6020')
  } else if (tenancyLease6020 == "No"){
    res.redirect('/check-your-answers-6020')
  }
  else {
    res.redirect('/error-page')
  }

})

router.post('/tenancy-lease-agreement-answer-6030', function (req, res) {
  var tenancyLease6020 = req.session.data['tenancy-lease-agreement-6030']

  if (tenancyLease6020 == "Yes"){
    res.redirect('/tenancy-lease-agreement-commence-6030')
  } else if (tenancyLease6020 == "No"){
    res.redirect('/further-info-6030')
  }
  else {
    res.redirect('/error-page')
  }

})

router.post('/connection-to-landlord-answer-6015', function (req, res) {
  var connected = req.session.data['connected-to-landlord']

  if (connected == "Yes"){
    res.redirect('/state-the-relationship-6015')
  } else if (connected == "No"){
    res.redirect('/tenancy-lease-agreement-commence-6015')
  }
  else {
    res.redirect('/error-page')
  }

})

router.post('/connection-to-landlord-answer-6020', function (req, res) {
  var connected = req.session.data['connected-to-landlord']

  if (connected == "Yes"){
    res.redirect('/state-the-relationship-6020')
  } else if (connected == "No"){
    res.redirect('/rent-received-letting-parts-6020')
  }
  else {
    res.redirect('/error-page')
  }

})


router.post('/connection-to-landlord-answer-6030', function (req, res) {
  var connected6020 = req.session.data['connected-to-landlord-6030']

  if (connected6020 == "Yes"){
    res.redirect('/state-the-relationship-6030')
  } else if (connected6020 == "No"){
    res.redirect('/trading-details-one-6030')
  }
  else {
    res.redirect('/error-page')
  }

})

router.post('/rent-received-lettings-answer-6020', function (req, res) {
  var connected = req.session.data['rent-received-letting-6020']

  if (connected == "Yes"){
    res.redirect('/lettings-details-6020')
  } else if (connected == "No"){
    res.redirect('/throughput-and-turnover-one-6020')
  }
  else {
    res.redirect('/error-page')
  }

})

router.post('/rent-received-lettings-answer-6030', function (req, res) {
  var connected = req.session.data['rent-received-letting-6030']

  if (connected == "Yes"){
    res.redirect('/lettings-details-6030')
  } else if (connected == "No"){
    res.redirect('/tenancy-lease-agreement-6030')
  }
  else {
    res.redirect('/error-page')
  }

})

router.post('/trading-details-years-one-page-two-answer-6030', function (req, res) {
  var paymentsInLieu = req.session.data['payments-in-lieu-6030']

  if (paymentsInLieu == "Yes"){
    res.redirect('/trading-details-years-one-page-two-yes-6030')
  } else if (paymentsInLieu == "No"){
    res.redirect('/trading-details-two-6030')
  }
  else {
    res.redirect('/error-page')
  }

})

router.post('/trading-details-years-two-page-two-answer-6030', function (req, res) {
  var paymentsInLieuTwo = req.session.data['payments-in-lieu-two-6030']

  if (paymentsInLieuTwo == "Yes"){
    res.redirect('/trading-details-years-two-page-two-yes-6030')
  } else if (paymentsInLieuTwo == "No"){
    res.redirect('/trading-details-three-6030')
  }
  else {
    res.redirect('/error-page')
  }

})

router.post('/trading-details-years-three-page-two-answer-6030', function (req, res) {
  var paymentsInLieuThree = req.session.data['payments-in-lieu-three-6030']

  if (paymentsInLieuThree == "Yes"){
    res.redirect('/trading-details-years-three-page-two-yes-6030')
  } else if (paymentsInLieuThree == "No"){
    res.redirect('/rent-received-letting-parts-6030')
  }
  else {
    res.redirect('/error-page')
  }

})

 router.post('/rent-review-12-months-answer-6030', function (req, res) {
   var connected = req.session.data['rent-review-12-months-6030']

   if (connected == "Yes"){
     res.redirect('/current-annual-rent-6030')
   } else if (connected == "No"){
     res.redirect('/check-your-answers-6030')
   }
   else {
     res.redirect('/error-page')
   }

 })

router.post('/s4lAnswer', function (req, res) {
var password = req.session.data['s4l-password']

if (password == "password"){
  res.redirect('/ownerPageReference')
  }
})


router.post('/what-service-answer', function (req, res) {
  var whatService = req.session.data['are-you-a']

  if (whatService == "Owner"){
    res.redirect('/ownerPage')
  } else if (whatService == "Occupier") {
        res.redirect('/occupierPage')
  } else if (whatService == "Agent (representative)") {
        res.redirect('/agentPage')
  } else if (whatService == "Other representative") {
        res.redirect('/otherPage')
  } else {
    res.redirect('/your-details')
  }

})

module.exports = router
