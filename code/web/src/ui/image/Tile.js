// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Component
class Tile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    };
  }

  componentDidMount() {
    const image = new Image();
    image.onload = () => {
      console.log(image);
      this.setState({
        width: image.width,
        height: image.height,
        display: "block"
      });
    };
    image.src = this.props.src;
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
          background-size: 100% auto;
          box-shadow: ${shadow ? shadow : 'none'};
        }
      `}</style>
      </div>
    );
  }
}

const Tile1 = (props) => {

  // this will re render the view with new data

  return (
    <div style={Object.assign({ height, width }, style)} {...others}>
      {children}

      {/* language=CSS */}
      <style jsx>{`
        div {
          background-image:url('${src}');
          background-size: 100% auto;
          box-shadow: ${shadow ? shadow : 'none'};
        }
      `}</style>
    </div>
  )
}

// Component Properties
Tile.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  shadow: PropTypes.string
};
Tile.defaultProps = {
  style: {},
  width: '100%',
  height: '100%'
};

export default Tile