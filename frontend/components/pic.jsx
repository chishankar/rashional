const React = require('react');
const boxStyle = require('./pic.css')
const bootstrap = require('./css/bootstrap.min.css')
// const bootstrap_1 = require('./css/bootstrap-grid.css')

class Pic extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div className="description">
          Welcome to R<i>#</i>iOnal! A machine learning hack aimed at identifying rash's that would require emergency care. Please take or upload a photo!
        </div>

        <div className="image-upload">
          <label htmlFor="file-input">
            <img src="/img/camera.png"/>
          </label>
          <input id="file-input" type="file" className="input" accept="image/*;capture=camera"></input>
        </div>
      </div>
    );
  }

}

function makeRequest(method, url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({status: this.status, statusText: xhr.statusText});
      }
    };
    xhr.onerror = function() {
      reject({status: this.status, statusText: xhr.statusText});
    };
    xhr.send();
  });
}

makeRequest('POST', '/api/post/predict').then(function(datums) {
  console.log(datums);
}).catch(function(err) {
  console.error('Augh, there was an error! hehe:(', err.statusText);
});

module.exports = Pic;
