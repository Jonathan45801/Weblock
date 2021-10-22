import React,{Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LogoImage = styled.img`
height:180px;
width : 180px;`;

class LogoNav extends Component{
    constructor(props)
    {
        super(props);
        this.notify = this.notify.bind(this);
    }
    notify()
    {
        const { alternate } = this.props;
        console.log(alternate);
        fetch(process.env.SLACK_URL, {
          credentials: 'omit',
          method: 'POST',
          body: JSON.stringify({ text: `🚀 ${alternate}` }),
        });
    }

  render() {
    const { imgURL, alternate, redirectURL } = this.props;
    return (
      <a href={redirectURL} onClick={this.notify} target="_blank" rel="noopener noreferrer">
        <LogoImage src={imgURL} alt={alternate} />
      </a>

    );
  }
}


LogoNav.propTypes = {
  imgURL: PropTypes.string.isRequired,
  alternate: PropTypes.string.isRequired,
  redirectURL: PropTypes.string.isRequired,
};

export default LogoNav;