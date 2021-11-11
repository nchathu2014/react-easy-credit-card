/**
 * The react-easy-credit-card component
 *
 * @version 1.0.0
 * @author ashane2e
 */
import "./CreditCard.css";
import React, { useState } from "react";
import CreditCardInput from "react-credit-card-input";
import { Card } from "react-bootstrap";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const ImageCard = (props) => {
  const [cardnumber, setCardnumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [texpiry, setTExpiry] = useState("");
  const [focus, setFocus] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardname, setCardname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let valObj = {
      cardnumber,
      expiry,
      cvc,
      cardname,
    };

    props.onsubmitfunc(valObj);
  };

  return (
    <Card
      style={{
        margin:"15px",
        paddingTop: "15px",
        alignItems: "left",
        textAlign: "left",
        borderRadius: "20px",
        width: "100%"
      }}
    >
      <form id="paymentForm" className="form-group col-12 col-lg-12" onSubmit={handleSubmit}>
        <div className="form-group col-lg-12">
          <div className="row">
            <div className="col-12 col-sm-12 col-lg-4 card-attribute-group">
              <Cards cvc={cvc} expiry={expiry.replace("/", "")} focused={focus} name={cardname} number={cardnumber} />
            </div>
            <div className="col-12 col-sm-12 col-lg-8 row card-attribute-group card-attribute-input-group">
              <div className="col-12 col-sm-12 col-lg-12 row">
                <label className="col-12 col-sm-12 col-lg-3 card-attribute">Card Number</label>
                <CreditCardInput containerClassName="credit-card-container col-12 col-sm-7 col-lg-8 card-attribute" inputStyle={{ border: "0px #c0c0c0 solid", padding: "10px 2px", width: "200px" }} dangerTextClassName="pay-is-invalid" cardNumberInputProps={{ name: "number", value: cardnumber, label: "Card number", onChange: (e) => setCardnumber(e.target.value), onFocus: (e) => setFocus(e.target.name), required: true }} cardExpiryInputProps={{ hidden: true }} cardCVCInputProps={{ hidden: true }} fieldClassName="card-data-input" />
              </div>
              <div className="col-12 col-sm-12 col-lg-12 row">
                <label className="col-12 col-sm-12 col-lg-3 card-attribute">Date Of Expiry</label>
                <input
                  className="col-12 col-sm-6 col-lg-4 card-attribute"
                  id="expiry"
                  value={texpiry}
                  type="month"
                  name="expiry"
                  min={props.expiryMinMonth}
                  onFocus={(e) => {
                    setFocus(e.target.name);
                  }}
                  onChange={(e) => {
                    var month = e.target.value.split("-")[1];
                    var year = e.target.value.split("-")[0];
                    setTExpiry(e.target.value);
                    setExpiry(month + "/" + year.substring(2, 4));
                  }}
                  required
                />
              </div>

              <div className="col-12 col-sm-12 col-lg-12 row">
                <label className="col-12 col-sm-12 col-lg-3 card-attribute">CVC</label>
                <input
                  className="col-12 col-sm-12 col-lg-3 name-on-card card-attribute"
                  placeholder="Accepts only 3 or 4 digits"
                  id="cvc"
                  maxLength="4"
                  type="text"
                  name="cvc"
                  pattern="^([0-9]{3}|[0-9]{4})$"
                  value={cvc}
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "").replace(/(\..*)\./g, "$1");
                    setCvc(e.target.value);
                  }}
                  onFocus={(e) => setFocus(e.target.name)}
                  required
                />
              </div>

              <div className="col-12 col-lg-12 row">
                <label className="col-12 col-sm-12 col-lg-3 card-attribute">Name On Card</label>
                <input
                  className="col-12 col-sm-12 col-lg-8 name-on-card card-attribute"
                  placeholder="Accepts only letters"
                  id="card-name"
                  name="name"
                  type="text"
                  value={cardname}
                  onFocus={(e) => setFocus(e.target.name)}
                  onChange={(e) => {
                    e.target.value = e.target.value.replace(/[^a-zA-Z. ]/g, "").replace(/(\..*)\./g, "$1");
                    setCardname(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
          </div>
          {/* <hr /> */}
          <button type="submit" className="submit-button btn btn-warning btn-lg" style={{ float: "right" }}>
            {props.submitbuttontext}
          </button>
          <br />
        </div>
      </form>
    </Card>
  );
};

export default ImageCard;
