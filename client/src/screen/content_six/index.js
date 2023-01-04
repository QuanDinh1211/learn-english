import React from "react";

import "./contentSix.scss";
import Buttom from "../../components/layout/buttom";

const ContentSix = () => {
  return (
    <div className="content-six-container">
      <div className="content-six-wrapper">
        <div className="content-six-header">
          <h2>
            And In Case You’re Wondering Whether My Free Content Can Compete
            With My Paid Content... Here’s Some Proof 👇
          </h2>
        </div>
        <div className="content-six-body">
          <div className="content-six-body-wrapper">
            <div className="content-six-body-list-item">
              <div className="content-six-body-item">
                <div className="content-six-body-item-icon">
                  <img
                    src={require("../../assets/img/sixicon.png")}
                    alt="icon"
                  />
                </div>
                <div className="content-six-body-item-text">
                  <span>
                    I've learned so much today! This is the best FREE training
                    I've watched in my 3years of Freelancing life. Thank you
                    Vanessa for being so generous, you gave me so much clarity!
                  </span>
                  <span className="content-six-body-item-author">
                    - Mary B.
                  </span>
                </div>
              </div>
              <div className="content-six-body-item">
                <div className="content-six-body-item-icon">
                  <img
                    src={require("../../assets/img/sixicon.png")}
                    alt="icon"
                  />
                </div>
                <div className="content-six-body-item-text">
                  <span>
                    Your free training is INVALUABLE. 💯 It's less than 2hrs,
                    but I spent twice as long on it because I wanted to soak in
                    EVERYTHING!
                  </span>
                  <span className="content-six-body-item-author">
                    @teachertransformed
                  </span>
                </div>
              </div>
              <div className="content-six-body-item">
                <div className="content-six-body-item-icon">
                  <img
                    src={require("../../assets/img/sixicon.png")}
                    alt="icon"
                  />
                </div>
                <div className="content-six-body-item-text">
                  <span>
                    I'm blown away at how great this webinar is. I did not
                    expect to want to watch it all the way through. Actually,
                    I'm ticked I didn't make more time to watch it.
                  </span>
                  <span className="content-six-body-item-author">
                    - Courtney C.
                  </span>
                </div>
              </div>
            </div>
            <div className="content-six-body-list-item">
              <div className="content-six-body-item">
                <div className="content-six-body-item-icon">
                  <img
                    src={require("../../assets/img/sixicon.png")}
                    alt="icon"
                  />
                </div>
                <div className="content-six-body-item-text">
                  <span>
                    I finished that training video you sent me. I took massive
                    notes from each slide... you suggested it was 90 mins but I
                    made it like 3 hours from all the notes you provided.
                  </span>
                  <span className="content-six-body-item-author">
                    - Elijah F.
                  </span>
                </div>
              </div>
              <div className="content-six-body-item">
                <div className="content-six-body-item-icon">
                  <img
                    src={require("../../assets/img/sixicon.png")}
                    alt="icon"
                  />
                </div>
                <div className="content-six-body-item-text">
                  <span>
                    I attended your free webinar and there are more useful
                    resources in that webinar. I too attended many free webinars
                    from others but this one is awesome!!!
                  </span>
                  <span className="content-six-body-item-author">
                    @agashvi16
                  </span>
                </div>
              </div>
              <div className="content-six-body-item">
                <div className="content-six-body-item-icon">
                  <img
                    src={require("../../assets/img/sixicon.png")}
                    alt="icon"
                  />
                </div>
                <div className="content-six-body-item-text">
                  <span>
                    I'm really shocked by this webinar how valuable and full of
                    true information to lead all of us. Thanks for all your
                    effort, time, and sharing desire.
                  </span>
                  <span className="content-six-body-item-author">- Ekinsu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-six-footer">
          <div className="content-six-footer-btn">
            <Buttom value="SAVE YOUR SEAT" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSix;
