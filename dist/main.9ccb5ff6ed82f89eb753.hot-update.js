require("source-map-support").install();
exports.id = "main";
exports.modules = {

/***/ "./src/server/previews.js":
/*!********************************!*\
  !*** ./src/server/previews.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  basic: {
    "interaction-behaviour-mode": {
      title: "交互-模式与行为",
      code: `<script type="text/babel">
  const { Graph, G6, NodeMapper, EdgeMapper } = window['g6-for-react'];
  // 注册鼠标进入节点变红的行为
  G6.registerBehaviour('mouseEnterFillRed', function(graph) {
    graph.behaviourOn('node:mouseenter', function(ev) {
      graph.update(ev.item, {
        color: 'red'
      });
    });
  });

  // 注册鼠标进入节点变绿的行为
  G6.registerBehaviour('mouseEnterFillGreen', function(graph) {
    graph.behaviourOn('node:mouseenter', function(ev) {
      graph.update(ev.item, {
        color: 'green'
      });
    });
  });

  // 注册鼠标移出节点变原色的行为
  G6.registerBehaviour('mouseLeaveResetFill', function(graph) {
    graph.behaviourOn('node:mouseleave', function(ev) {
      graph.update(ev.item, {
        color: '#1890FF'
      });
    });
  });
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: '事件',
            x: 80,
            y: 150
          }, {
            id: '行为',
            x: 200,
            y: 150
          }, {
            id: '模式',
            x: 320,
            y: 150
          }],
          edges: [{
            source: '事件',
            target: '行为',
            label: '组成'
          }, {
            source: '行为',
            target: '模式',
            label: '组成'
          }]
        },
        mode: 'red'
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <div><button onClick={() => {
              if (this.state.mode === 'red') {
                this.setState({ mode: 'green' });
              } else {
                this.setState({ mode: 'red' });
              }
            }}>切换模式</button></div>
            <Graph 
              fitView="cc" 
              height={window.innerHeight} 
              data={this.state.data}
              modes={{
                red: ['mouseEnterFillRed', 'mouseLeaveResetFill'],
                green: ['mouseEnterFillGreen', 'mouseLeaveResetFill']
              }}
              mode={this.state.mode}
              onGetG6Instance={graph => this.graph = graph}
            >
              <NodeMapper label={model => model.id}/>
              <EdgeMapper style={() => ({ endArrow: true })}/>
            </Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "custom-anchor": {
      title: "自定义-锚点",
      code: `<script type="text/babel">
  const { Graph, G6, NodeMapper } = window['g6-for-react'];
  // 设置右边中点为连接锚点
  G6.registerNode('node2', {
    anchor: [
    // 右边中点
    [1, 0.5]]
  });

  // 设置相交盒模型为矩形
  G6.registerNode('node3', {
    anchor: {
      intersectBox: 'rect'
    }
  });
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 250,
            y: 250
          }, {
            id: 'node2',
            x: 250,
            y: 100
          }, {
            id: 'node3',
            x: 50,
            y: 400
          }, {
            id: 'node5',
            x: 450,
            y: 400
          }],
          edges: [{
            id: 'edge1',
            target: 'node2',
            source: 'node1'
          }, {
            id: 'edge2',
            target: 'node3',
            source: 'node1'
          }, {
            id: 'edge4',
            target: 'node5',
            source: 'node1'
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" height={window.innerHeight} data={this.state.data}>
              <NodeMapper label={model => model.id} shape={model => model.id}/>
            </Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "graph-animate": {
      title: "图-动画",
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fitView: 'cc',
        height: window.innerHeight,
        animate: true,
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200,
            label: '节点1'
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data} onGetG6Instance={graph => this.graph = graph}></Graph>
          </div>
        </div>
      );
    }
  
    componentDidMount() {
      setTimeout(() => {
        this.graph.update('node1', {
          x: 50,
          y: 50
        });
      }, 800);
      setTimeout(() => {
        this.setState({ data: { nodes: [{
          id: 'node1',
          x: 200,
          y: 50,
          label: '节点1'
        }] } });
      }, 1400);
      setTimeout(() => {
        this.setState({ data: { nodes: [] } });
      }, 2000);
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "default-node": {
      title: "默认-边",
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200,
            size: 40,
            label: '节点1'
          }, {
            id: 'node2',
            x: 300,
            y: 200,
            color: '#eb2f96',
            label: '节点2'
          }],
          edges: [{
            id: 'edge1',
            target: 'node2',
            source: 'node1'
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data}></Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "default-edge": {
      title: '默认-边',
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200
          }, {
            id: 'node2',
            x: 300,
            y: 200
          }],
          edges: [{
            source: 'node1',
            target: 'node2',
            label: '普通边'
          }, {
            source: 'node1',
            target: {
              x: 100,
              y: 50
            },
            label: '单向悬空边'
          }, {
            source: {
              x: 150,
              y: 50
            },
            target: {
              x: 150,
              y: 100
            },
            label: '双向悬空边'
          }, {
            source: 'node1',
            target: {
              x: 100,
              y: 280
            },
            style: {
              endArrow: true
            },
            label: '箭头'
          }, {
            source: 'node1',
            target: {
              x: 10,
              y: 200
            },
            sizesize: 4,
            label: '粗细'
          }, {
            source: 'node2',
            target: {
              x: 400,
              y: 200
            },
            color: 'red',
            label: '颜色'
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data}></Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    },
    "default-group": {
      title: '默认-分组',
      code: `<script type="text/babel">
  const { Graph } = window['g6-for-react'];
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {
          nodes: [{
            id: 'node1',
            x: 100,
            y: 200,
            label: '节点1',
            parent: 'group1'
          }, {
            id: 'node2',
            x: 300,
            y: 200,
            label: '节点2',
            parent: 'group1'
          }, {
            id: 'node3',
            x: 100,
            y: 300,
            label: '节点3',
            parent: 'group2'
          }, {
            id: 'node4',
            x: 300,
            y: 300,
            label: '节点4',
            parent: 'group2'
          }],
          edges: [{
            id: 'edge1',
            target: 'node2',
            source: 'node1'
          }],
          groups: [{
            id: 'group1',
            label: '展开群组'
          }, {
            id: 'group2',
            label: '折叠群组',
            collapsed: true
          }]
        }
      };
    }
  
    render() {
      return (
        <div className="graph">
          <div className="graph-basic">
            <Graph fitView="cc" animate={true} height={window.innerHeight} data={this.state.data}></Graph>
          </div>
        </div>
      );
    }
  }
  ReactDOM.render(<Demo />, document.getElementById('mountNode'));
</script>`
    }
  }
});

/***/ })

};
//# sourceMappingURL=main.9ccb5ff6ed82f89eb753.hot-update.js.map