import React from 'react';
import Link from 'next/link';

const FooterOne = () => {
  return (
    <>
      {/* footer start */}
      <footer>
        <div className="footer-style-1">
          <div className="footer-style-1__animation1">
            <img src="/assets/img/footer/dot-line.svg" alt="shape" />
          </div>
          <div className="footer-style-1__animation2">
            <img src="/assets/img/footer/angle.svg" alt="shape" />
          </div>
          <div className="footer-style-1__animation3">
            <img src="/assets/img/footer/squre.svg" alt="shape" />
          </div>
          <div className="footer-style-1__animation4">
            <img src="/assets/img/footer/star.svg" alt="shape" />
          </div>
          <div className="footer-style-1__animation5">
            <img src="/assets/img/footer/dot-line-2.svg" alt="shape" />
          </div>
          <div className="container">
            <div className="footer-top pt-120 pb-55">
              <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                  <div className="footer__widget footer-col-1 mb-30">
                    <div className="footer-widget__column footer-widget__about">
                      <div className="footer-widget__about-logo">
                        <Link href="/">
                          <h4>thesalepoint.com</h4>
                        </Link>
                      </div>
                      <p>                     <b>   RAI TECHNOLOGIES LLC</b>

                      </p>
                      <p><b>rairechnologies@outlook.com</b></p>
                      <p >

                      <b>  312 W 2nd St, STE # 5083,
                      Casper WY 82601</b>

                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-5">
                  <div className="footer__widget mb-30">
                    <h3 className="footer-widget__title">Services</h3>
                    <ul>
                      <li>
                        <Link href="/">Google ads marketing</Link>
                      </li>
                      <li>
                        <Link href="/">meta ads marketing</Link>
                      </li>
                      <li>
                        <Link href="/">Seo Marketing</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                  <div className="footer__widget footer-col-4 mb-30">
                    <h3 className="footer-widget__title">
                      Subscribe Newsletter
                    </h3>
                    <div className="footer-subscriber-form">
                      <form action="#">
                        <input type="text" placeholder="Enter your email" />
                        <button className="">
                          <i className="fa-light fa-arrow-right"></i>
                        </button>
                      </form>
                    </div>
                    <div className="subscriber-agreement">
                      <input type="checkbox" name="agree" id="agree" />
                      <p>
                        I agree to the <Link href="/">Privacy Policy</Link>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="copyright">
                    <p>© 2024 This website is owned and operated by RAI Technologies LLC and rairechnologies@outlook.com </p>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-bottom-menu">
                    <ul>
                      <li>
                        <Link href="/">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link href="/">Term of Service</Link>
                      </li>
                      <li>
                        <Link href="/"> disclaimer</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
}

export default FooterOne;