import React from 'react';

export class EditNode extends React.Component {
    state = {
        ...this.props.selectedNode,
    }

    componentDidMount() {
        const condition = Object.entries(this.state.properties.fields).length;
        for (let i = 0; i < condition; i++) {
            this.setState({
                ...this.state,
                ['value_' + i]: '',
            });
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            ['value_' + name]: value,
        })
    }

    render() {
        const node = this.state.properties;
        const fields = Object.entries(node.fields);

        return (
            <>
                <h2>{node.title}</h2>
                <p>{node.description}</p>
                {fields.map((field, index) => {
                    return (
                        <React.Fragment key={index}>
                            <label htmlFor={field[0]}>{field[0]}:</label>
                            <input
                                id={field[0]}
                                name={index}
                                type={field[1].type}
                                required={field[1].is_required}
                                value={this.state['value_' + index]}
                                onChange={this.handleChange}
                            ></input>
                        </React.Fragment>
                    )
                })}
            </>
        )
    }
}
