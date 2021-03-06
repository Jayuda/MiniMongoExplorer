import React, { Component, PropTypes } from 'react';

export default class Textarea extends Component {
    static propTypes = {
        error:    PropTypes.bool.isRequired,
        onChange: PropTypes.func.isRequired,
        title:    PropTypes.string.isRequired,
        value:    PropTypes.string.isRequired
    };

    state = { value: '' };

    componentDidMount = () =>
        this.setState({ value: this.props.value })
    ;

    componentWillReceiveProps = props =>
        this.setState({ value: props.value })
    ;

    render = () =>
        <textarea
            className={`form-control${this.props.error ? ' form-error' : ''}`}
            onChange={event => this.onChange(event.currentTarget.value)}
            rows="1"
            spellCheck={false}
            title={this.props.title}
            value={this.state.value}
        />
    ;

    onChange = value =>
        this.setState({ value }, () => this.props.onChange(value))
    ;
}
