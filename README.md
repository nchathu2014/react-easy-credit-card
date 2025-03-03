# React Easy Credit Card

This is a npm package to ease out the complexities in credit card submission forms inside reactjs applications.

The package can be easily installed, and used directly by passing the custom props.

### Installation

Run the following command to install this package.

```bash
 npm install react-easy-credit-card
```

To import the library.

```bash
 import CreditCard from "react-easy-credit-card";
```

The library could be used as follows inside a react component

```bash
/*# Write your own function like this when you want to do some processing with the submitted data */
const myHandlerFunction = (submittedCardObject) => {

  console.log(submittedCardObject)
  //# prints {cardnumber: 'xxxx xxxx xxxx xxx', expiry: 'mm/yy', cvc: 'xxx', cardname: 'XXXXXX XXXXXXXXXXXXXX'}

  console.log(submittedCardObject.cardnumber)
  //# prints xxxx xxxx xxxx xxx
};

/*## The function which uses the imported npm library */
function CreditCardTest() {
  return (
    <div className="image-card-test-page-main">
      <CreditCard
        submitbuttontext="Submit card"
        onsubmitfunc={myHandlerFunction}
        expiryMinMonth="2021-10" />
    </div>
  );
}
```

## Want to play with code ?

1. Clone the repository
2. 'npm install' to install all the dependencies
3. 'npm start' to start on local environment
4. Open your browser and navigate to 'http://localhost:3000/creditcard'

## Sample Outputs

### 1. The output of v1.0.x before data is entered

![v1.0.x output](./public/output_beforedata.PNG)

### 2. The output of v1.0.x after data is entered

![v1.0.x output](./public/output_dataentered.PNG)

### 3. The output of v1.0.x when entering cvc

![v1.0.x cvc output](./public/cvv_output.PNG)

#### Make sure to download the latest release version to experience the advanced features
