import React from 'react';
import Request from 'superagent';

class Results extends React.Component {
    constructor() {
        super();
        this.state = {
            language: "English"
        };
    }
    
    componentWillMount() {
        let query = /*document.getElementById("input-text").innerHTML*/ "hello";
        let key = "83cdcfd2deda75bf68da7358bf61c215";
        let url = /*"http://apilayer.net/api/detect?access_key=" + key + "&query=" + query*/ "http://apilayer.net/api/detect?access_key=83cdcfd2deda75bf68da7358bf61c215&query=my%20name%20is";
        Request.post(url).then((data) => {
            this.setState({
                language: data.success,
                probability: data.success,
                percentage: data.success
            });
        });
    }
    
    render() {
        console.log(this.state.language);
        return (
            <div id="results">
                <ul>
                    <li>{this.state.language}</li>
                    <li>{this.state.probability}</li>
                    <li>{this.state.percentage}</li>
                </ul>
            </div>
        );
    }
}

export default Results;