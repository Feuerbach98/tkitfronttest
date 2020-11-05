import React, { Component } from 'react'
import { REACT_FLOW_CHART } from "@mrblenny/react-flow-chart"

class SidebarItem extends Component {
    render() {
        const {
            type,
            ports,
            properties,
        } = this.props;
        return (
            <div draggable='true' className="SidebarItem" onDragStart={(event) => {
                event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports, properties }))
            }}
            >{properties.title}</div>
        )
    }
}

export default SidebarItem
