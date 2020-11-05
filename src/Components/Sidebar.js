import React, { Component } from 'react'
import SidebarItem from './SidebarItem'

class Sidebar extends Component {

	constructor({isNodeEditMode, data, node}) {
        super();
        this.isNodeEditMode = isNodeEditMode;
        this.nodes = data.nodes;
        this.node = node;
    }

    render() {

    	console.log(this.isNodeEditMode, 'isNodeEditMode')

    	if (this.isNodeEditMode) {
    		return(
    			<div>
    				{this.node.id}
    			</div>
    		)
    	} else {
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
}

export default Sidebar

