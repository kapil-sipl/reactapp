// Import package references
import React from 'react';

// Import images
import video from '../../images/video.png';
import products from '../../images/products/product-thumb-1.jpg';


// Component
const HomePage = () => (
    <main className="container">
        <div className="row">
        <div className="col-md-6">
            <h5>PlutoBank</h5>
            <h2>Products</h2>
            <h4>& Solutions</h4>
            <button>Learn More</button>
        </div>
        <div className="col-md-6">
            <img className="img-responsive" src={video} alt="Banner Video" />
        </div>
    </div>
    <div className="row">
        <div className="col-md-12">
            FIND THE RIGHT CARD FOR YOU
        </div>
    </div>
    <div className="row">
        <div className="col-lg-12"><h4 align="center">Products</h4></div>
        <div className="col-lg-4">
            <div className="blog-menu mt-4">
                <img className="img-fluid" src={products} alt="Products" />
                    <div>
                        <h5 className="mt-4">UI &amp; UX Design</h5>
                        <h4><a href="" className="blog-title">Web Developer Bootcamp</a></h4>
                        <p className="mt-2 text-muted">Lorem ipsum dolor consectetur elit adipiscing tha seding do eiusmod tempor.</p>
                        <div className="mt-3">
                            <a href="" className="read-btn">Read More 
                                <i className="mdi mdi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        <div className="col-lg-4">
            <div className="blog-menu mt-4">
                <img className="img-fluid" src={products} alt="Products" />
                    <div>
                        <h5 className="mt-4">UI &amp; UX Design</h5>
                        <h4><a href="" className="blog-title">Web Developer Bootcamp</a></h4>
                        <p className="mt-2 text-muted">Lorem ipsum dolor consectetur elit adipiscing tha seding do eiusmod tempor.</p>
                        <div className="mt-3">
                            <a href="" className="read-btn">Read More 
                                <i className="mdi mdi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        <div className="col-lg-4">
            <div className="blog-menu mt-4">
                <img className="img-fluid" src={products} alt="Products" />
                    <div>
                        <h5 className="mt-4">UI &amp; UX Design</h5>
                        <h4><a href="" className="blog-title">Web Developer Bootcamp</a></h4>
                        <p className="mt-2 text-muted">Lorem ipsum dolor consectetur elit adipiscing tha seding do eiusmod tempor.</p>
                        <div className="mt-3">
                            <a href="" className="read-btn">Read More 
                                <i className="mdi mdi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div className="row">
        SOLUTIONS
        <div className="col-md-4">1
        </div>
        <div className="col-md-4">2
        </div>
        <div className="col-md-4">3
        </div>
    </div>
    <div className="row">
        Wider sections
        <div className="col-md-6">
            Section Left
        </div>
        <div className="col-md-6">
            Section Right
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">
            Section Left
        </div>
        <div className="col-md-6">
            Section Right
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">
            Section Left
        </div>
        <div className="col-md-6">
            Section Right
        </div>
    </div>
    <div className="row">
        News & Stories
        <div className="col-md-12">
        </div>
    </div>
    </main>
);
export { HomePage };