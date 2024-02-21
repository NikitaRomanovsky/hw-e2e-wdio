# hw-e2e-wdio
This project covers 4 E2E test cases.  
2 tests are focused on testing user authentication and 2 tests are focused on testing product adding to the cart.  
Which then are automated using WDIO.  
  
To make project work run the following command after clonning the repo:  
  
- yarn install  
  
In package.json file I created a script to run Cart tests and Authentication tests separately.    
  
To run a Cart tests:  
  
- yarn cart
  
To run an Authentication tests:
  
- yarn authentication  
    
To run all test cases, use the following command:  
  
- yarn wdio  
  
It is expected that all tests are passed (green).  
NB: The email in registration steps file should be changed to not used one. You can adjust the number in the email by adding +1 to it, so the email is uniqe each time.  