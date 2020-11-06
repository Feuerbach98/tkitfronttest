import React, { Component } from 'react'
import SidebarItem from './SidebarItem'

class Sidebar extends Component {

	constructor({isNodeEditMode, data}) {
        super();
        this.nodes = data.nodes;
    }

    render() {
    	return(
            <div className="Sidebar">
            	{this.nodes.map((node, index) => (
                    <SidebarItem
                        key={index}
                        type={node.type}
                        ports={node.ports}
                        properties={node.properties}
                        handleNodeClick={this.handleNodeClick}
                    />
                ))}
            </div>            
		)
			
    }
}

export default Sidebar

