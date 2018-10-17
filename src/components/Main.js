import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
  render() {
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    return (

      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        {this.props.cfData.map(trick => (


          <article id="intro" className={`${this.props.article === trick.node.slug ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">{trick.node.title}</h2>
          <span className="image main"><img src={trick.node.image.file.url} alt="" /></span>
          <div
            dangerouslySetInnerHTML={{
              __html: trick.node.copy.childMarkdownRemark.html,
            }}
          />
          {close}
          </article>
      ))}

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
  cfData: PropTypes.array.isRequired
}

export default Main

