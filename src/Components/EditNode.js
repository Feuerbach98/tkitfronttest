import React from 'react';

export class EditNode extends React.Component {
    state = {
        ...this.props.selectedNode,
    }

    render() {
        const node = this.props.selectedNode
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
                                value={node.properties.fields[field[0]].value}
                                onChange={this.props.onChange}
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
