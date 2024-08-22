// import React from "react";

import Test from "../../svg/Test";
import Test2 from "../../svg/Test2";

const Friends = () => {
  return (
    <div className="container">
      <div className="flex flex-1 justify-center mt-28">
        <div className="stack-wrapper">
          <div className="stack-list">
            <div data-testid="journey-stack-item">
              <div
                data-testid="journey-stack-item-side"
                className="highlighted-card highlighted-card-0 active"
              >
                <div className="highlighted-card-top-side">
                  <div className="highlighted-card-text-wrapper">
                    <span className="highlighted-card-text font-mono">
                      Discovery1
                    </span>
                  </div>
                </div>
                <div>
                  <Test />
                </div>
                {/* <div className="highlighted-card-bottom-side"></div> */}
              </div>
            </div>
          </div>
          <div className="stack-list">
            <div data-testid="journey-stack-item">
              <div
                data-testid="journey-stack-item-side"
                className="highlighted-card highlighted-card-0 active"
              >
                <div className="highlighted-card-top-side">
                  <div className="highlighted-card-text-wrapper">
                    <span className="highlighted-card-text font-mono">
                      Discovery2
                    </span>
                  </div>
                </div>
                <div>
                  <Test />
                </div>
                {/* <div className="highlighted-card-bottom-side"></div> */}
              </div>
            </div>
          </div>
          <div className="stack-list">
            <div data-testid="journey-stack-item">
              <div
                data-testid="journey-stack-item-side"
                className="highlighted-card highlighted-card-0 active"
              >
                <div className="highlighted-card-top-side">
                  <div className="highlighted-card-text-wrapper">
                    <span className="highlighted-card-text font-mono">
                      Discovery3
                    </span>
                  </div>
                </div>
                <div>
                  <Test />
                </div>
                {/* <div className="highlighted-card-bottom-side"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
{
  /* <div className="unhighlighted-card unhighlighted-card-0 active">
                <div className="unhighlighted-card-top-side">
                  <div className="unhighlighted-card-text-wrapper">
                    <span className="unhighlighted-card-text font-mono">
                      Discovery
                    </span>
                  </div>
                </div>
                <div>
                  <Test2 />
                </div>
                <div className="unhighlighted-card-bottom-side"></div>
              </div> */
}
