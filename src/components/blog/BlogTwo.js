import React from 'react';
import Link from 'next/link';
import { BlogTwoData } from '@/data/blog';

const BlogTwo = () => {
    return (
        <>
            {/* blog two start */}
            <div className="blog-two theme-gray-3 pt-110 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 text-center wow fadeInUp" data-wow-delay=".3s">
                            <h2 className="section-title__one-title">Trends and Predictions <br /> for Online Success.</h2>
                        </div>
                    </div>
                    <div className="row">
                        {BlogTwoData.map((item, i) => (
                          <div key={i} className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12">
                              <div className="blog-two__single mb-30 wow fadeInUp" data-wow-delay=".3s">
                                  <div className="blog-two__single-content">
                                      <div className="postbox__meta">
                                          <span><i className="fa-light fa-calendar-lines"></i>{item.date}</span>
                                      </div>
                                      <h2 className="blog-two__title"><Link href={item.link}>{item.heading}</Link></h2>
                                     
                                  </div>
                              </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* blog two end */}
        </>
    )
}

export default BlogTwo;