import React from "react";
import PropTypes from "prop-types";

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle();
        }}
      />
    );

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: "flex" } : { display: "none" }}
      >
        {this.props.cfData.map(trick => (
          <article
            id="intro"
            className={`${
              this.props.article === trick.node.slug ? "active" : ""
            } ${this.props.articleTimeout ? "timeout" : ""}`}
            style={{ display: "none" }}
          >
            <h2 className="major">{trick.node.title}</h2>
            <span className="image main">
              <img src={trick.node.image.file.url} alt="" />
            </span>
            <div
              dangerouslySetInnerHTML={{
                __html: trick.node.copy.childMarkdownRemark.html
              }}
            />
            {close}
          </article>
        ))}

        <article
          id="intro"
          className={`${this.props.article === "past-games" ? "active" : ""} ${
            this.props.articleTimeout ? "timeout" : ""
          }`}
          style={{ display: "none" }}
        >
          <h2 className="major">Game Log</h2>
          {this.props.cfGame.map(outerElement => (
            <React.Fragment>
              <h3 className="major">
                {outerElement.node.zodiacSign} - {outerElement.node.date}
              </h3>
              <span className="image main">
                <img
                  src={outerElement.node.image.file.url} alt={outerElement.node.image.file.fileName}
                />
              </span>
              {outerElement.node.games.map(innerElement => (
                <React.Fragment>
                  <h4>{innerElement.signTableNumber}</h4>

                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Faction</th>
                        <th>Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {innerElement.game.Players.map(playerElement => (
                        <tr>
                          <td>{playerElement.Name}</td>
                          <td>
                            {playerElement.Faction}
                           </td>
                          <td>{playerElement.Score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
          {close}
        </article>


      </div>
    );
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
  cfData: PropTypes.array.isRequired,
  cfGame: PropTypes.array.isRequired
};

export default Main;
