// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Component
class Tile extends React.Component {

  constructor(props) {
    super(props);
    if (!props.width || !props.height) {
      this.state = { display: 'none' };
    } else {
      this.state = {
        width: props.width,
        height: props.height,
        display: "block"
      }
    }
  }

  componentDidMount() {
    if (!this.state.width || !this.state.height) {
      const image = new Image();
      image.onload = () => {
        this.setState({
          width: image.width,
          height: image.height,
          display: "block"
        });
      };
      image.src = this.props.src;
    }
  }

  render() {
    const { children, src, style, shadow, ...others } = this.props;
    let { display, height, width } = this.state;
    return (
      <div style={Object.assign({ height, width, display }, style)} {...others}>
        {children}

        {/* language=CSS */}
        <style jsx>{`
        div {
          background-image:url('${src}');
          background-size: cover;
          background-position: 50%, 50%;
          box-shadow: ${shadow ? shadow : 'none'};
        }
      `}</style>
      </div>
    );
  }
}

export default Tile