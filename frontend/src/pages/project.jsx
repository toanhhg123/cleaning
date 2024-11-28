import Footer from "../components/footer";
import Header from "../components/header";

const Project = () => {
  return (
    <>
      <Header />

      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Our Projects</h2>
            </div>
            <div className="col-12">
              <a href="#/">Home</a>
              <a href="#/">Our Projects</a>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Portfolio Start */}
      <div className="portfolio">
        <div className="container">
          <div className="section-header">
            <p>Our Project</p>
            <h2>Visit Our Running Project</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".completed">Completed</li>
                <li data-filter=".ongoing">Ongoing</li>
                <li data-filter=".upcoming">Upcoming</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item completed">
              <div className="portfolio-wrap">
                <figure>
                  <img src="/img/portfolio-1.jpg" alt="Portfolio " />
                  <a
                    href="img/portfolio-1.jpg"
                    className="link-preview"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a href="/#" className="link-details">
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="/#">
                    Project Name Here
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item ongoing">
              <div className="portfolio-wrap">
                <figure>
                  <img src="/img/portfolio-2.jpg" alt="Portfolio " />
                  <a
                    href="img/portfolio-2.jpg"
                    className="link-preview"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a href="/#" className="link-details">
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="/#">
                    Project Name Here
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item upcoming">
              <div className="portfolio-wrap">
                <figure>
                  <img src="/img/portfolio-3.jpg" alt="Portfolio " />
                  <a
                    href="img/portfolio-3.jpg"
                    className="link-preview"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a href="/#" className="link-details">
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="/#">
                    Project Name Here
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item completed">
              <div className="portfolio-wrap">
                <figure>
                  <img src="/img/portfolio-1.jpg" alt="Portfolio " />
                  <a
                    href="img/portfolio-1.jpg"
                    className="link-preview"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a href="/#" className="link-details">
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="/#">
                    Project Name Here
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item ongoing">
              <div className="portfolio-wrap">
                <figure>
                  <img src="/img/portfolio-2.jpg" alt="Portfolio " />
                  <a
                    href="img/portfolio-2.jpg"
                    className="link-preview"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a href="/#" className="link-details">
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="/#">
                    Project Name Here
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item upcoming">
              <div className="portfolio-wrap">
                <figure>
                  <img src="/img/portfolio-3.jpg" alt="Portfolio " />
                  <a
                    href="img/portfolio-3.jpg"
                    className="link-preview"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a href="/#" className="link-details">
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="/#">
                    Project Name Here
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item completed">
              <div className="portfolio-wrap">
                <figure>
                  <img src="/img/portfolio-1.jpg" alt="Portfolio " />
                  <a
                    href="img/portfolio-1.jpg"
                    className="link-preview"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a href="/#" className="link-details">
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="/#">
                    Project Name Here
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item ongoing">
              <div className="portfolio-wrap">
                <figure>
                  <img src="/img/portfolio-2.jpg" alt="Portfolio " />
                  <a
                    href="img/portfolio-2.jpg"
                    className="link-preview"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a href="/#" className="link-details">
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="/#">
                    Project Name Here
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item upcoming">
              <div className="portfolio-wrap">
                <figure>
                  <img src="/img/portfolio-3.jpg" alt="Portfolio " />
                  <a
                    href="img/portfolio-3.jpg"
                    className="link-preview"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a href="/#" className="link-details">
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="/#">
                    Project Name Here
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item completed">
              <div className="portfolio-wrap">
                <figure>
                  <img src="/img/portfolio-1.jpg" alt="Portfolio " />
                  <a
                    href="img/portfolio-1.jpg"
                    className="link-preview"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a href="/#" className="link-details">
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="/#">
                    Project Name Here
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item ongoing">
              <div className="portfolio-wrap">
                <figure>
                  <img src="/img/portfolio-2.jpg" alt="Portfolio " />
                  <a
                    href="img/portfolio-2.jpg"
                    className="link-preview"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a href="/#" className="link-details">
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="/#">
                    Project Name Here
                  </a>
                </figure>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item upcoming">
              <div className="portfolio-wrap">
                <figure>
                  <img src="/img/portfolio-3.jpg" alt="Portfolio " />
                  <a
                    href="img/portfolio-3.jpg"
                    className="link-preview"
                    data-lightbox="portfolio"
                  >
                    <i className="fa fa-eye" />
                  </a>
                  <a href="/#" className="link-details">
                    <i className="fa fa-link" />
                  </a>
                  <a className="portfolio-title" href="/#">
                    Project Name Here
                  </a>
                </figure>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 load-more">
              <a className="btn" href="/#">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Start */}

      <Footer />
    </>
  );
};

export default Project;
