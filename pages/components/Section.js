import Styles from "../../styles/Section.module.css";
import Image from "next/image";
import Controller from "../../public/controller.png";
import GooglePayButton from "@google-pay/button-react";

function Section() {
  return (
    <div className={Styles.row}>
      <div className={Styles.col1}>
        <h2>
          PS4 V2 <br /> Dualshock 4
        </h2>
        <h3>Wireless Controller for Playstation 4</h3>
        <p>(Compatible/Generic)</p>
        <h4>Rs 4,000/-</h4>
        <button className={Styles.btn} type="button">
          Buy Now{" "}
        </button>
        <GooglePayButton
          buttonType="buy"
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGatewayMerchantId",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Demo Merchant",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: "100.00",
              currencyCode: "USD",
              countryCode: "US",
            },
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log("load payment data", paymentRequest);
          }}
        />
      </div>
      <div className={Styles.col2}>
        <Image src={Controller} />
        <div class={Styles.colorbox}></div>
        {/* <img src="./Playstation_Img/controller.png" className="controller"> */}
      </div>
    </div>
  );
}

export default Section;
