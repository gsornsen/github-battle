var React = require('react');
var PropTypes = require('prop-types');

class Popular extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang
      }
    });
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}

function SelectLanguage (props) {
  var languages = [
    'All',
    'JavaScript',
    'Ruby',
    'Java',
    'CSS',
    'Python'
  ];
  return (
    <ul className='languages'>
      {languages.map((lang) =>
        <li
          style={lang === props.selectedLanguage ? {color: '#d0021b'}: null}
          onClick={props.onSelect.bind(null, lang)}
          key={lang}>
            {lang}
        </li>)}
    </ul>
  )
}


// Stateless Functional Component below, can be just a function as it only
// has a render function
/*
class SelectLanguage extends React.Component {
  render () {
    var languages = [
      'All',
      'JavaScript',
      'Ruby',
      'Java',
      'CSS',
      'Python'
    ];
    return (
      <ul className='languages'>
        {languages.map((lang) =>
          <li
            style={lang === this.props.selectedLanguage ? {color: '#d0021b'}: null}
            onClick={this.props.onSelect.bind(null, lang)}
            key={lang}>
              {lang}
          </li>)}
      </ul>
    )
  }
}
*/

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

module.exports = Popular;
