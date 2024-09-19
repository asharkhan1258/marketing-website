import React from 'react';
import Link from 'next/link';

const AboutOne = () => {
    return (
      <>
        {/* about one start */}
        <div className="about-three">
          <div className="container custom-container-1">
            <div className="row g-0">
              <div className="about-three__wrapper">
                <div className="col-xxl-12">
                  <div className="tabs-one">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-search-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-search"
                          type="button"
                          role="tab"
                          aria-controls="pills-search"
                          aria-selected="true"
                        >
                          <img
                            src="/assets/img/icon/globe.svg"
                            className="no-active"
                            alt="icon"
                          />
                          <img
                            src="/assets/img/icon/globe-white.svg"
                            className="active-tab-icon"
                            alt="icon"
                          />
                          <span>Search Engine</span>
                        </button>
                      </li>
                      {/* <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-analytics-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-analytics"
                          type="button"
                          role="tab"
                          aria-controls="pills-analytics"
                          aria-selected="false"
                        >
                          <img
                            src="/assets/img/icon/list.svg"
                            className="no-active"
                            alt="icon"
                          />
                          <img
                            src="/assets/img/icon/list-white.svg"
                            className="active-tab-icon"
                            alt="icon"
                          />
                          <span>Analytics</span>
                        </button>
                      </li> */}
                      {/* <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-social-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-social"
                          type="button"
                          role="tab"
                          aria-controls="pills-social"
                          aria-selected="false"
                        >
                          <img
                            src="/assets/img/icon/like-tag.svg"
                            className="no-active"
                            alt="icon"
                          />
                          <img
                            src="/assets/img/icon/like-tag-white.svg"
                            className="active-tab-icon"
                            alt="icon"
                          />
                          <span>Social Media</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-marketing-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-marketing"
                          type="button"
                          role="tab"
                          aria-controls="pills-marketing"
                          aria-selected="false"
                        >
                          <img
                            src="/assets/img/icon/pen.svg"
                            className="no-active"
                            alt="icon"
                          />
                          <img
                            src="/assets/img/icon/pen-white.svg"
                            className="active-tab-icon"
                            alt="icon"
                          />
                          <span>Content Marketing</span>
                        </button>
                      </li> */}
                      {/* <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-management-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-management"
                          type="button"
                          role="tab"
                          aria-controls="pills-management"
                          aria-selected="false"
                        >
                          <img
                            src="/assets/img/icon/trend-up.svg"
                            className="no-active"
                            alt="icon"
                          />
                          <img
                            src="/assets/img/icon/trend-up-white.svg"
                            className="active-tab-icon"
                            alt="icon"
                          />
                          <span>Management</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-optimization-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-optimization"
                          type="button"
                          role="tab"
                          aria-controls="pills-optimization"
                          aria-selected="false"
                        >
                          <img
                            src="/assets/img/icon/keyboard-open.svg"
                            className="no-active"
                            alt="icon"
                          />
                          <img
                            src="/assets/img/icon/keyboard-open-white.svg"
                            className="active-tab-icon"
                            alt="icon"
                          />
                          <span>Optimization</span>
                        </button>
                      </li> */}
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-digital-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-digital"
                          type="button"
                          role="tab"
                          aria-controls="pills-digital"
                          aria-selected="false"
                        >
                          <img
                            src="/assets/img/icon/status-up.svg"
                            className="no-active"
                            alt="icon"
                          />
                          <img
                            src="/assets/img/icon/status-up-white.svg"
                            className="active-tab-icon"
                            alt="icon"
                          />
                          <span>Digital Googls Ads Marketing</span>
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                      <button
                          className="nav-link"
                          id="pills-optimization-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-optimization"
                          type="button"
                          role="tab"
                          aria-controls="pills-optimization"
                          aria-selected="false"
                        >
                          <img
                            src="/assets/img/icon/keyboard-open.svg"
                            className="no-active"
                            alt="icon"
                          />
                          <img
                            src="/assets/img/icon/keyboard-open-white.svg"
                            className="active-tab-icon"
                            alt="icon"
                          />
                          <span>Meta Ads Marketing</span>
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-search"
                        role="tabpanel"
                        aria-labelledby="pills-search-tab"
                        tabindex="0"
                      >
                        <div className="about-three__single">
                          <div className="about-three__animation-1">
                            <img
                              src="/assets/img/shape/12.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="about-three__animation-2">
                            <img
                              src="/assets/img/shape/14.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="about-three__animation-3">
                            <img
                              src="/assets/img/shape/11.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="row">
                            <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                              <div className="about-three__single-content">
                                <h2> Search Engine Optimization</h2>
                                <div className="list">
                                  <ul className="list-unstyled">
                                    <li>
                                      Enhance your online visibility with proven
                                      SEO techniques.
                                    </li>
                                    <li>
                                      We optimize your website to rank higher in
                                      search results.
                                    </li>
                                    <li>
                                      This drives organic traffic and increases
                                      conversion potential.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                              <div className="about-three__single-img">
                                <img
                                  src="/assets/img/about/about-3-1.png"
                                  alt="about img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-analytics"
                        role="tabpanel"
                        aria-labelledby="pills-analytics-tab"
                        tabindex="0"
                      >
                        <div className="about-three__single">
                          <div className="about-three__animation-1">
                            <img
                              src="/assets/img/shape/12.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="about-three__animation-2">
                            <img
                              src="/assets/img/shape/14.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="about-three__animation-3">
                            <img
                              src="/assets/img/shape/11.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="row">
                            <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                              <div className="about-three__single-content">
                                <h2>Analytics & Insights</h2>
                                <div className="list">
                                  <ul className="list-unstyled">
                                    <li>
                                      Unlock powerful insights with in-depth
                                      analytics services.
                                    </li>
                                    <li>
                                      We track key metrics to measure and
                                      improve your performance.
                                    </li>
                                    <li>
                                      Use data-driven insights to maximize ROI
                                      and optimize strategies.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                              <div className="about-three__single-img">
                                <img
                                  src="/assets/img/about/about-3-1.png"
                                  alt="about img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-social"
                        role="tabpanel"
                        aria-labelledby="pills-social-tab"
                        tabindex="0"
                      >
                        <div className="about-three__single">
                          <div className="about-three__animation-1">
                            <img
                              src="/assets/img/shape/12.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="about-three__animation-2">
                            <img
                              src="/assets/img/shape/14.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="about-three__animation-3">
                            <img
                              src="/assets/img/shape/11.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="row">
                            <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                              <div className="about-three__single-content">
                                <h2>Social Media Marketing</h2>
                                <div className="list">
                                  <ul className="list-unstyled">
                                    <li>
                                      Grow your online community through
                                      targeted social media campaigns.
                                    </li>
                                    <li>
                                      We create engaging content and manage your
                                      profiles for better engagement.
                                    </li>
                                    <li>
                                      Our tailored ads help increase brand
                                      awareness and audience reach.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                              <div className="about-three__single-img">
                                <img
                                  src="/assets/img/about/about-3-1.png"
                                  alt="about img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-marketing"
                        role="tabpanel"
                        aria-labelledby="pills-marketing-tab"
                        tabindex="0"
                      >
                        <div className="about-three__single">
                          <div className="about-three__animation-1">
                            <img
                              src="/assets/img/shape/12.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="about-three__animation-2">
                            <img
                              src="/assets/img/shape/14.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="about-three__animation-3">
                            <img
                              src="/assets/img/shape/11.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="row">
                            <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                              <div className="about-three__single-content">
                                <h2>Content Marketing Solutions</h2>
                                <div className="list">
                                  <ul className="list-unstyled">
                                    <li>
                                      Develop meaningful connections with
                                      tailored content strategies.
                                    </li>
                                    <li>
                                      We deliver high-quality blogs, articles,
                                      and multimedia content.
                                    </li>
                                    <li>
                                      This boosts engagement and builds your
                                      brand's authority.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                              <div className="about-three__single-img">
                                <img
                                  src="/assets/img/about/about-3-1.png"
                                  alt="about img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-management"
                        role="tabpanel"
                        aria-labelledby="pills-management-tab"
                        tabindex="0"
                      >
                        <div className="about-three__single">
                          <div className="about-three__animation-1">
                            <img
                              src="/assets/img/shape/12.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="about-three__animation-2">
                            <img
                              src="/assets/img/shape/14.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="about-three__animation-3">
                            <img
                              src="/assets/img/shape/11.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="row">
                            <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                              <div className="about-three__single-content">
                                <h2>Digital Marketing Management</h2>
                                <div className="list">
                                  <ul className="list-unstyled">
                                    <li>
                                      Take control of your online presence with
                                      expert management.
                                    </li>
                                    <li>
                                      We handle strategy, execution, and
                                      analysis for seamless integration.
                                    </li>
                                    <li>
                                      Our goal is to ensure effective
                                      coordination across all digital platforms.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                              <div className="about-three__single-img">
                                <img
                                  src="/assets/img/about/about-3-1.png"
                                  alt="about img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-optimization"
                        role="tabpanel"
                        aria-labelledby="pills-optimization-tab"
                        tabindex="0"
                      >
                        <div className="about-three__single">
                          <div className="about-three__animation-1">
                            <img
                              src="/assets/img/shape/12.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="about-three__animation-2">
                            <img
                              src="/assets/img/shape/14.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="about-three__animation-3">
                            <img
                              src="/assets/img/shape/11.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="row">
                            <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                              <div className="about-three__single-content">
                                <h2>Meta Ads Marketing</h2>
                                <div className="list">
                                  <ul className="list-unstyled">
                                    <li>
                                    Utilize Meta's (Facebook and Instagram) advanced targeting options, including demographics, interests, behaviors, and custom audiences, to reach the most relevant audience for your business.
                                    </li>
                                    <li>
                                    Maximize your ad budget with effective campaign strategies like split testing, lookalike audiences, and campaign budget optimization (CBO) to ensure you're getting the best ROI.
                                    </li>
                                    <li>
                                    Offer a variety of ad formats such as carousel ads, video ads, collection ads, and dynamic ads to engage users across Meta platforms.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                              <div className="about-three__single-img">
                                <img
                                  src="/assets/img/about/about-3-1.png"
                                  alt="about img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-digital"
                        role="tabpanel"
                        aria-labelledby="pills-digital-tab"
                        tabindex="0"
                      >
                        <div className="about-three__single">
                          <div className="about-three__animation-1">
                            <img
                              src="/assets/img/shape/12.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="about-three__animation-2">
                            <img
                              src="/assets/img/shape/14.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="about-three__animation-3">
                            <img
                              src="/assets/img/shape/11.svg"
                              alt="shape icon"
                            />
                          </div>
                          <div className="row">
                            <div className="col-xxl-6 col-xl-7 col-lg-6 col-md-12 col-sm-12">
                              <div className="about-three__single-content">
                                <h2> Comprehensive Google Ads Marketing</h2>
                                <div className="list">
                                  <ul className="list-unstyled">
                                    <li>
                                    We take the time to understand your business goals, competition, and target market.
                                    </li>
                                    <li>
                                    Based on your needs, we develop a tailored Google Ads strategy to generate leads and conversions.
                                    </li>
                                    <li>
                                    Our team sets up and manages your campaigns to ensure optimal performance and continuous improvement.
                                    </li>
                                   <li>
                                   Ongoing Optimization We monitor performance, analyze data, and adjust strategies to achieve the best possible outcomes.
                                   </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-12 col-sm-12 text-end text-md-center">
                              <div className="about-three__single-img">
                                <img
                                  src="/assets/img/about/about-3-1.png"
                                  alt="about img"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about one end */}
      </>
    );
}

export default AboutOne;