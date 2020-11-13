import React from 'react';

export class EditNode extends React.Component {
    state = {
        ...this.props.selectedNode,
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState((state) => ({
            ...this.state,
            properties: {
                ...state.properties,
                fields: {
                    ...state.properties.fields,
                    [name]: {
                        ...state.properties.fields[name],
                        value: value,
                    }
                }
            }
        }))
    }

    render() {
        const node = this.state;
        const fields = Object.entries(node.properties.fields);

        return (
            <div className="edit-field p-3">
                <h2 className="edit-field__title">{node.properties.title}</h2>
                <p>{node.properties.description}</p>
                {fields.map((field, index) => {
                    return (
                        <React.Fragment key={index}>
                            <label
                                className="edit-field__label d-block"
                                htmlFor={field[0]}>{field[0]}:
                            </label>
                            <input
                                className="d-block"
                                id={field[0]}
                                name={field[0]}
                                type={field[1].type}
                                required={field[1].is_required}
                                value={this.state.properties.fields[field[0]].value}
                                onChange={this.handleChange}
                            ></input>
                        </React.Fragment>
                    )
                })}
                <button
                    type="sumbit"
                    onClick={() => this.props.saveNode(node)}
                    className="btn btn-primary my-3 mr-2"
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={this.props.cancelEdit}
                    className="btn btn-danger my-3"
                >
                    Cancel
                </button>
            </div>
        )
    }
}
