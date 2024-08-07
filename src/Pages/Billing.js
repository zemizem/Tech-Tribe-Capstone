import React from 'react';
import '../Pages/Billing.css';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/MainFooter';

/*Youtube tutorial for accepting credit card*/
function Billing() {

  return(
    <>
      <NavigationBar />
      <nav className="bill_container">
        <h2>Billing Information</h2>
        <form action="#" method="post">
          <div className="bill_form">
                <label htmlFor="name">Full Name:</label>
                <input type="text" id="name" name="name" required />
                </div>
          <div className="bill_form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                </div>
          <div className="bill_form">
                <label htmlFor="address">Billing Address:</label>
                <input type="text" id="address" name="address" required />
                </div>
            <div className="bill_form">
                <label for="city">City:</label>
                <input type="text" id="city" name="city" required />
                </div>
            <div class="bill_form">
                <label for="state">State:</label>
                <input type="text" id="state" name="state" required />
                    </div>
            <div className="bill_form">
                <label for="zip">ZIP Code:</label>
                <input type="text" id="zip" name="zip" required />
                </div>
            <div className="bill_form">
                <label for="card">Credit Card Number:</label>
                <input type="text" id="card" name="card" required />
                </div>
            <div className="bill_form">
                <label for="expiry">Expiration Date:</label>
                <input type="text" id="expiry" name="expiry" required />
                </div>     
            <div className="bill_form">
                <label for="cvv">CVV:</label>
                <input type="text" id="cvv" name="cvv" required /> 
                </div>
            <button type="submit">Submit</button>
        </form>
      </nav>
      <Footer />
    </>
  )
}

export default Billing;