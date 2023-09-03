import { Link } from "react-router-dom";

export const AboutUsContainer = () => {
  return (
    <div className="wcs-area bg-dark text-light">
      <div className="container-full">
        <div className="row">
          <div
            className="col-md-6 thumb bg-cover"
            style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
          >
            {/* Start Video Area
      ============================================= */}
            <div
              className="video-area padding-xl text-center bg-fixed text-light shadow dark-hard"
              style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2">
                    <div className="video-heading">
                      <h2>Know More About Seoak in a short video.</h2>
                      {/* <p>
                        Tolerably behaviour may admitting daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. Merits ye if mr narrow points. Melancholy particular devonshire alteration it favourable appearance
                    </p> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="video-info">
                    <div className="overlay-video">
                      <Link className="popup-youtube video-play-button" to="#">
                        <i className="fa fa-play" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Video Area */}
          </div>
          <div className="col-md-6 content">
            <div className="site-heading text-left">
              <h2>About SEOAK</h2>
              {/* <p>
                        Discourse assurance estimable applauded to so. Him everything melancholy uncommonly but solicitude inhabiting projection off. Connection stimulated estimating excellence an to impression. 
                    </p> */}
            </div>
            {/* item */}
            <div className="item">
              <div className="icon">
                <i className="flaticon-trending" />
              </div>
              <div className="info">
                <h4>
                  <Link to="#">Vision</Link>
                </h4>
                <p>
                  To become the largest online learning ecosystem for continuing
                  education, in partnership with corporates and academia.
                </p>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className="item">
              <div className="icon">
                <i className="flaticon-books" />
              </div>
              <div className="info">
                <h4>
                  <Link to="#">Mission</Link>
                </h4>
                <p>
                  By deploying our world class team of industry experts, we aim
                  to educate our learners with the skills they need to advance
                  their professional life to the next level.{" "}
                </p>
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className="item">
              <div className="icon">
                <i className="flaticon-professor" />
              </div>
              <div className="info">
                <h4>
                  <Link to="#">Goals</Link>
                </h4>
                <p>
                  To create an alternate platform for students who wish to
                  continue and complete courses by attending live online
                  courses, using a team of ridiculously committed educators who
                  will stop at nothing to impart education, helped by a 24 x 7
                  support system.{" "}
                </p>
              </div>
            </div>
            {/* item */}
          </div>
        </div>
      </div>
    </div>
  );
};
