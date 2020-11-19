import React from 'react'
import { cloneDeep, mapValues } from 'lodash'
import { FlowChartWithState } from '@mrblenny/react-flow-chart'
import * as actions from '@mrblenny/react-flow-chart'

import Sidebar from './Sidebar'
import Content from './Holst'
import NodeInnerCustom from './NodeInnerCustom'
import { chartSimple, nodes} from '../constants'

import 'bootstrap/dist/css/bootstrap.min.css';

class Tkit extends React.PureComponent {

    constructor() {
        super()
        this.state = cloneDeep(chartSimple)
    }

    selectNode = (node) => {
        const x = this.state.nodes[node.id] ? this.state.nodes[node.id] : node
        this.setState({
            ...this.state,
            selected: x,
            NodesIsNotVisible: true
        });
    }

    saveNode = (node) => {
        this.setState((state) => ({
            ...this.state,
            selected: {},
            NodesIsNotVisible: false,
            nodes: {
                ...state.nodes,
                [node.id]: node
            }
        }));
    }

    cancelEdit = () => {
        this.setState((state) => ({
            ...this.state,
            selected: {},
            NodesIsNotVisible: false,
        }));
    }

    onChange = (event) => {
        const { value, name } = event.target;

        this.setState((state) => ({
            ...this.state,
            selected: {
                ...state.selected,
                properties: {
                    ...state.selected.properties,
                    fields: {
                        ...state.selected.properties.fields,
                        [name]: {
                            ...state.selected.properties.fields[name],
                            value: value,
                        }
                    }
                }
            }
        }))

    }

    render() {
        const chart = this.state;

        const stateActions = mapValues(actions, (any) =>
            (...args) => this.setState(...args))

        return(

            <div className="Page">

                <Content>
                    <FlowChartWithState initialValue={chart} config={{
                        snapToGrid: true,
                        selectNode: this.selectNode,
                        currentNode: chart.selected
                    }} Components={{
                        NodeInner: NodeInnerCustom, //ADD PORT CUSTOM
                    }} callbacks={stateActions} 
                    />
                </Content>
                <Sidebar
                    data={nodes}
                    NodesIsNotVisible={chart.NodesIsNotVisible}
                    selectedNode={chart.selected}
                    saveNode={this.saveNode}
                    cancelEdit={this.cancelEdit}
                    onChange={this.onChange}
                    connections={chart}
                />
            </div>
        )
    }
}


const App = () => {

    return (
        <Tkit/>
    )
}

export default App

