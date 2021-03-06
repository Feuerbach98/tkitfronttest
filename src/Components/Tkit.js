import React from 'react'
import { cloneDeep, mapValues } from 'lodash'
import { FlowChartWithState } from '@mrblenny/react-flow-chart'
import * as actions from '@mrblenny/react-flow-chart'

import Sidebar from './Sidebar'
import Content from './Holst'
import NodeInnerCustom from './NodeInnerCustom'
import { chartSimple, nodes} from '../constants'

class Tkit extends React.Component {

    constructor() {
        super()
        this.state = cloneDeep(chartSimple)
    }

    render() {
        const chart = this.state

        const stateActions = mapValues(actions, (any) =>
            (...args) => this.setState(...args))

        return(

            <div className="Page">

                <Content>
                    <FlowChartWithState initialValue={chart} config={{
                        snapToGrid: true,
                    }} Components={{
                        NodeInner: NodeInnerCustom, //ADD PORT CUSTOM

                    }} callbacks={stateActions} />
                </Content>
                <Sidebar data={nodes}/>
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

