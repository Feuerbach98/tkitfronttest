import React from 'react'

const Node = ({ node, handleNodeClick}) => {

    return (
        <div className="node" onClick={() => handleNodeClick(node)}>
            {node.properties.title}
        </div>
    )
}

class NodeInnerCustom extends React.Component {

    constructor({ node, config, currentNode }) {
        super();
        this.node = currentNode ? currentNode : node;
        this.config = config;
    }

    render() {
        switch (this.node.type) {
            case 'command':
                return (
                    <Node node={this.node} handleNodeClick={() => this.config.selectNode(this.node)}/>
                )
            case 'state':
                return (
                    <Node node={this.node} handleNodeClick={() => this.config.selectNode(this.node)} />
                )
            case 'action':
                return (
                    <Node node={this.node} handleNodeClick={() => this.config.selectNode(this.node)} />
                )
            case 'condition':
                return (
                    <Node node={this.node} handleNodeClick={() => this.config.selectNode(this.node)} />
                )

            default:
                return (
                    <div></div>
                )

        }
    }
}

export default NodeInnerCustom
