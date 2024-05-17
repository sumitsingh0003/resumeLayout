import React from "react";
import Sidebar from "./Sidebar";
import PremIocn from "../assets/img/career.png";
import userMain from "../assets/img/userMain.png";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";

const ResumeLayout = () => {
  return (
    <>
      <section className="mainSection">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="templateSec">
          <div className="container">
            <div className="premiumMessge">
              <div className="row">
                <div className="col-md-2">
                  <div className="premiumIcon">
                    <img src={PremIocn} alt="" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="premiumContent">
                    <h2>Premium Account</h2>
                    <p>
                      You have a premium account, granting you access to all the
                      remarkable features offered by ResumeDone. With this
                      privilege, you can indulge in the freedom of downloading
                      an unlimited number of resumes and cover letters in both
                      PDF and Word formats.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="informationForm">
              <h2>Personal Information</h2>
              {/* <form>
                <div className="row mb-4">
                  <div className="col">
                    <div data-mdb-input-init className="form-outline">
                      <input
                        type="text"
                        id="form6Example1"
                        className="form-control"
                      />
                      <label className="form-label" for="form6Example1">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <div data-mdb-input-init className="form-outline">
                      <input
                        type="text"
                        id="form6Example2"
                        className="form-control"
                      />
                      <label className="form-label" for="form6Example2">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form6Example3" className="form-control" />
                  <label className="form-label" for="form6Example3">
                    Company name
                  </label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="form6Example4" className="form-control" />
                  <label className="form-label" for="form6Example4">
                    Address
                  </label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="email" id="form6Example5" className="form-control" />
                  <label className="form-label" for="form6Example5">
                    Email
                  </label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="number"
                    id="form6Example6"
                    className="form-control"
                  />
                  <label className="form-label" for="form6Example6">
                    Phone
                  </label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <textarea
                    className="form-control"
                    id="form6Example7"
                    rows="4"
                  ></textarea>
                  <label className="form-label" for="form6Example7">
                    Additional information
                  </label>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form6Example8"
                    checked
                  />
                  <label className="form-check-label" for="form6Example8">
                    Create an account?
                  </label>
                </div>

                <button
                  data-mdb-ripple-init
                  type="button"
                  className="btn btn-primary btn-block mb-4"
                >
                  Place order
                </button>
              </form> */}

              <div className="row">
                <div className="col-md-10">
                  <div className="formSec">
                    <form>
                      <MDBRow className="mb-4">
                        <MDBCol>
                          <MDBInput id="fname" label="First name" />
                        </MDBCol>
                        <MDBCol>
                          <MDBInput id="lname" label="Last name" />
                        </MDBCol>
                      </MDBRow>

                      <MDBRow className="mb-4">
                        <MDBCol>
                          <MDBInput id="City" label="City" />
                        </MDBCol>
                        <MDBCol>
                          <MDBInput id="postal-code" label="Postal Code" />
                        </MDBCol>
                      </MDBRow>

                      <MDBInput
                        wrapperClass="mb-4"
                        id="Address"
                        label="Address"
                      />

                      <MDBRow className="mb-4">
                        <MDBCol>
                          <MDBInput type="email" id="email" label="Email" />
                        </MDBCol>
                        <MDBCol>
                          <MDBInput type="tel" id="Phone" label="Phone" />
                        </MDBCol>
                      </MDBRow>

                      <MDBRow className="mb-4">
                        <MDBCol>
                          <MDBInput
                            type="password"
                            id="password"
                            label="Password"
                          />
                        </MDBCol>
                        <MDBCol></MDBCol>
                      </MDBRow>
                      <p>
                        Use this email to log in to your{" "}
                        <a href="#.">resumedone.io</a> account and receive
                        notifications.
                      </p>
                      <MDBBtn className="submitButton" type="submit" block>
                        Save
                      </MDBBtn>
                    </form>

                    <p className="showProfile">
                      <input type="checkbox" />
                      Show my profile to serious employers on{" "}
                      <a href="#.">hirethesbest.io</a> for free notifications.
                    </p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="userImage">
                    <img src={userMain} alt="" />
                  </div>
                </div>
              </div>

              <div className="deletAccSec">
                <h4>Delete account</h4>
                <p >
                  If you delete your account you’ll be permanently removing it
                  from our systems - you can’t undo it.
                </p>
                <span>Yes, Delete my account</span>
              </div>

              <p className="feedback">
                <a href="#.">Get in touch with our support team</a> if you have
                any question or want to leave some feedback.{" "}
              </p>
              <p className="feedback">We’ll be happy to hear from you.</p>

              <div className="menuBar">
                <ul>
                  <li>
                    <a href="#.">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#.">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#.">FAQ</a>
                  </li>
                  <li>
                    <a href="#.">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumeLayout;
