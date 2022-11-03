import React, { Component } from "react";
export default class Testimonials extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Tools Used</span>
              </h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {resumeData.tools &&
                    resumeData.tools.map((item) => {
                      return (
                        <li>
                          <blockquote>
                            <p>{item.description}</p>
                            <cite>{item.name}</cite>
                          </blockquote>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
