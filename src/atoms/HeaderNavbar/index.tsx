import "../../index.css";
import logo from "../../assets/img/logo.png";
import { ChevronDown } from "react-feather";
import { styled } from "styled-components";
import { Card } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbarcontainer = styled.div`
  position: sticky;
  gap: 4px;
  display: flex;
  align-items: center;
  color: #333333;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  .dropdown-show {
    display: none;
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
  }

  .navbar-container:hover .dropdown-show {
    display: block;
  }
`;
const MobileMenue = styled(Card)`
  width: 100vw;
  position: absolute;
  margin-left: -15px;
  overflow-y: auto;
  z-index: 1200;
  background-color: red;
  .navbar-content {
    color: #333333;
    background-color: transparent !important;
    text-transform: uppercase;
    font-weight: 600;
  }
  .active-tile {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    gap: 25px;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    border-bottom: solid 1px #e0e0e0;
    border-top: solid 1px #e0e0e0;
    margin-bottom: -1px;
  }
`;

const navbarTiles = [
  {
    tile: "Home",
    icon: null,
  },
  {
    tile: "About Us",
    icon: null,
  },
  {
    tile: "Certified Courses",
    icon: <ChevronDown size={14} />,
    courses: [
      {
        coursetitle: "c language",
      },
      {
        coursetitle: "c language",
      },
      {
        coursetitle: "c language",
      },
      {
        coursetitle: "c language",
      },
      {
        coursetitle: "c language",
      },
      {
        coursetitle: "c language",
      },
    ],
  },
  {
    tile: "Live Training Courses",
    icon: <ChevronDown size={14} />,
    courses: [
      {
        coursetitle: "c language",
      },
      {
        coursetitle: "c language",
      },
      {
        coursetitle: "c language",
      },
      {
        coursetitle: "c language",
      },
      {
        coursetitle: "c language",
      },
      {
        coursetitle: "c language",
      },
    ],
  },
  {
    tile: "Contact",
    icon: null,
  },
];

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [courseAccordian, setCourseAccordian] = useState(false);
  // const [livecourse, setLiveCourse] = useState(false);
  const handleRoute = (course: string) => {
    // navigate(`/${course}`);
    // setLiveCourse((p) => !p);
    setCourseAccordian((p) => !p);
    console.log(course);
  };
  // useEffect(()=>{

  // })
  return (
    <header id="home">
      <nav className="navbar navbar-default navbar-sticky bootsnav">
        <div className="container">
          <div className="row">
            <div className="top-search">
              <div className="input-group">
                <form action="#">
                  <input
                    type="text"
                    name="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <button type="submit">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle">
              <i
                className="fa fa-bars"
                onClick={() => setMobileMenu((p) => !p)}
              />
            </button>
            <Link className="navbar-brand" to="/">
              <img src={logo} className="logo" alt="Logo" />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right">
              <Navbarcontainer>
                {navbarTiles.map((item) => (
                  <div key={item.tile} className="navbar-container">
                    <Navbarcontainer>
                      <Link onClick={() => handleRoute(item.tile)} to={""}>
                        {item.tile}
                      </Link>
                    </Navbarcontainer>
                    {item.courses && (
                      <div className="dropdown-show">
                        {item.courses.map((iter) => (
                          <li key={iter.coursetitle}>
                            <Link
                              onClick={() => handleRoute(iter.coursetitle)}
                              className="dropdown-option"
                              to={""}
                            >
                              {iter.coursetitle}
                            </Link>
                          </li>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </Navbarcontainer>
            </ul>
          </div>
          {mobileMenu && (
            <MobileMenue>
              <ul>
                <div className="active-tile">
                  {navbarTiles.map((item) => (
                    <div key={item.tile} className="">
                      <div>
                        <Link onClick={() => handleRoute(item.tile)} to={""}>
                          {item.tile}
                        </Link>
                      </div>
                      {item.courses && courseAccordian && (
                        <div className="dropdown-show">
                          {item.courses.map((iter) => (
                            <li key={iter.coursetitle}>
                              <Link
                                onClick={() => handleRoute(iter.coursetitle)}
                                className="dropdown-option"
                                to={""}
                              >
                                {iter.coursetitle}
                              </Link>
                            </li>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ul>
            </MobileMenue>
          )}
        </div>
      </nav>
    </header>
  );
};
