import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FaqTwo = () => {

    return (
      <>
        {/* faq two start */}
        <div className="faq-two">
          <div className="row g-0 align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12">
              <div className="faq-two-content__wrapper">
                <div className="faq-two__animation1">
                  <img src="/assets/img/shape/arrow-snack.svg" alt="shape" />
                </div>
                <div className="faq-two__animation2">
                  <img src="/assets/img/shape/6.svg" alt="shape" />
                </div>
                <div className="faq-two__animation3">
                  <img src="/assets/img/shape/5.svg" alt="shape" />
                </div>
                <div className="faq-two__animation4">
                  <img src="/assets/img/shape/11.svg" alt="shape" />
                </div>
                <div className="faq-two__animation5">
                  <img
                    src="/assets/img/shape/arrow-circle-line-2.png"
                    alt="shape"
                  />
                </div>
                <div className="fac-two__content">
                  <h2 className="section-title__one-title">
                    Recover From Google <br /> Penalties.
                  </h2>
                  <div className="faq-two__faq">
                    <div className="accordion" id="accordionExample">
                      <Accordion defaultActiveKey="1">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            Identify and Resolve Penalty Issues
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="accrodion-content">
                              <div className="text">
                                <div className="list">
                                  <ul>
                                    <li>
                                      <p>
                                        Our team conducts a thorough audit to
                                        pinpoint the exact cause of your Google
                                        penalty and implement effective
                                        solutions to restore your website's
                                        ranking.
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            Restore Your Website’s Visibility{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="accrodion-content">
                              <div className="text">
                                <div className="list">
                                  <ul>
                                    <li>
                                      <p>
                                        We help you recover lost traffic by
                                        optimizing your site with
                                        penalty-compliant strategies, ensuring
                                        long-term ranking stability.
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>
                            Protect Against Future Penalties
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="accrodion-content">
                              <div className="text">
                                <div className="list">
                                  <ul>
                                    <li>
                                      <p>
                                        With ongoing monitoring and proactive
                                        adjustments, we safeguard your site from
                                        future Google penalties and keep it in
                                        line with the latest algorithm updates.
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>
                            Swift Recovery for Maximum Impact
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="accrodion-content">
                              <div className="text">
                                <div className="list">
                                  <ul>
                                    <li>
                                      <p>
                                        Our experts work quickly to address
                                        penalties, helping your website regain
                                        its rankings and recover lost traffic in
                                        the shortest time possible.
                                      </p>
                                    </li>
                                   
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12">
              <div className="faq-two__right wow fadeInUp" data-wow-delay=".3s">
                <div className="faq-two__right-img">
                  <img src="/assets/img/faq/faq-1.png" alt="faq img" />
                  <div className="faq-two__right-img1">
                    <img src="/assets/img/faq/faq-2.png" alt="faq img" />
                  </div>
                  <div className="faq-two__right-img2">
                    <img src="/assets/img/faq/faq-3.png" alt="faq img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* faq two end */}
      </>
    );
}

export default FaqTwo;