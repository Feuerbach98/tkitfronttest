import React from 'react'

// const PortDefaultOuter = (props) => {
//     return (
//         <div className="PortDefaultOuter">{props.children}</div>
//     )
// }

// const PortCustom = (props) => (
//     <PortDefaultOuter>
//         { props.port.properties && props.port.properties.value === 'yes' && (
//             <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
//                 <path fill="white" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
//             </svg>
//         )}
//         { props.port.properties && props.port.properties.value === 'no' && (
//             <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
//                 <path fill="white" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
//             </svg>
//         )}
//         { !props.port.properties && (
//             <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
//                 <path fill="white" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
//             </svg>
//         )}
//     </PortDefaultOuter>
// )

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
        this.state = { value: '' }; //пусть инпут изначально пустой
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        console.log(this.state.value);
        console.log(this.node);
    }

    render() {

        switch (this.node.type) {
            case 'command':
                return (
                    <Node node={this.node} />
                )
            // case 'state':
            //     return (
            //         <Node node={this.node} handleClickEvent={this.handleClickEvent} />
            //     )
            // case 'action':
            //     return (
            //         <Node node={this.node} handleClickEvent={this.handleClickEvent} />
            //     )
            // case 'condition':
            //     return (
            //         <Node node={this.node} handleClickEvent={this.handleClickEvent} />
            //     )

            default:
                return (
                    <div></div>
                )

        }
    }
}

export default NodeInnerCustom