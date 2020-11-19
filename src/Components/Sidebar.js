import React, { Component } from 'react'
import SidebarItem from './SidebarItem'
import { EditNode } from './EditNode'

class Sidebar extends Component {
	constructor({ data }) {
        super();
        this.nodes = data.nodes;
    }

    render() {
        
        const { NodesIsNotVisible } = this.props;

        const nodes = this.nodes.map((node, index) => (
            <SidebarItem
                key={index}
                type={node.type}
                ports={node.ports}
                properties={node.properties}
                handleNodeClick={this.handleNodeClick}
            />
        ));

    	return (
            <div className="Sidebar">
            	{!NodesIsNotVisible
                ? nodes
                : (
                    <EditNode
                        selectedNode={this.props.selectedNode}
                        connections={this.props.connections}
                        saveNode={this.props.saveNode}
                        cancelEdit={this.props.cancelEdit}
                        onChange={this.props.onChange}
                    />
                )}
            </div>
		)
			
    }
}

export default Sidebar

