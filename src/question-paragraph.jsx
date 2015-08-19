var React = require('react');

var QuestionParagraph = React.createClass({
    render: function() {
        var className = (this.props.className) ?
            "paragraph " + this.props.className :
            "paragraph";
        return <div className={className} data-key={this.props.key_}>
            {this.props.children}
        </div>;
    }
});

module.exports = QuestionParagraph;
