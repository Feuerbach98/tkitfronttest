import React from 'react'

const Node = ({ node, handleNodeClick}) => {

    return (
        <div className="node">
            {node.properties.title}
        </div>
    )
}

class NodeInnerCustom extends React.Component {

    constructor({ node, config}) {
        super();
        this.node = node;
        this.config = config;
    }

    render() {

        switch (this.node.type) {
            case 'command':
                return (
                    <Node node={this.node} />
                )
            case 'state':
                return (
                    <Node node={this.node} handleClickEvent={this.handleClickEvent} />
                )
            case 'action':
                return (
                    <Node node={this.node} handleClickEvent={this.handleClickEvent} />
                )
            case 'condition':
                return (
                    <Node node={this.node} handleClickEvent={this.handleClickEvent} />
                )

            default:
                return (
                    <div></div>
                )

        }
    }
}

export default NodeInnerCustom