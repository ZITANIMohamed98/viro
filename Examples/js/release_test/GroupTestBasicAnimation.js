/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  ViroAnimatedComponent,
  ViroScene,
  ViroBox,
  ViroMaterials,
  ViroNode,
  ViroImage,
  ViroVideo,
  ViroFlexView,
  ViroUtils,
  ViroText,
  ViroSurface,
  ViroSkyBox,
  ViroSphere,
  Viro3DObject,
  ViroButton,
  ViroSpinner,
  ViroAnimations,
  ViroDirectionalLight
} from 'react-viro';

let polarToCartesian = ViroUtils.polarToCartesian;

var UriImage = {uri:"https://s3-us-west-2.amazonaws.com/viro/Explorer/360_horseshoe.jpg"};
var LocalImage = require("./res/360_park.jpg");

var Uri360Video = {uri:"https://s3-us-west-2.amazonaws.com/viro/360_surf.mp4"};
var Local360Video = require("./res/360Asteroids.mp4");

var LocalButtonImage = require("./res/icon_live.jpg");

var TOGGLE_PLAY ="Toggle Play";
var TOGGLE_PAUSE ="Toggle Pause";


var GroupTestBasicAnimation = React.createClass({
  getInitialState() {
    return {
        loopText:"Loop off",
        playText:"Play",
        delayOn:0,
        willLoop:false,
        runAnimation:false
    };
  },

  render: function() {
    return (
            <ViroScene>
                <ViroNode position={[0.8 , 0, -3.5]}>
                <ViroAnimatedComponent
                    animation="testLoopRotate"
                    run={this.state.runAnimation}
                    loop={this.state.willLoop} >

                    <Viro3DObject source={require('../res/heart.obj')}
                             scale={[1.8 , 1.8  , 1.8]}
                              position={[-2.5 , -4.3 , -1.15]}
                              materials={["heart"]}
                              onClick={this._elementClick(10)} />

                 </ViroAnimatedComponent>
                <ViroAnimatedComponent
                                    animation="testLoopMove"
                                    run={this.state.runAnimation}
                                    loop={this.state.willLoop} >

                  <ViroBox
                      position={[-1 , 1, 0]}
                      scale={[0.4 , 0.4 , 0.4]}
                      materials={["redColor"]}
                      height={1}
                      width={1}
                      length={1}
                       onClick={this._elementClick(0)}/>

                 </ViroAnimatedComponent>
                 <ViroAnimatedComponent
                         animation="testLoopScale"
                         run={this.state.runAnimation}
                         loop={this.state.willLoop} >

                  <ViroButton
                      position={[0, 1, 0]}
                      scale={[0.08, 0.08, 0.1]}
                      source={LocalButtonImage}
                      gazeSource={LocalButtonImage}
                      tapSource={LocalButtonImage}
                      onClick={this._elementClick(1)}
                      />

                </ViroAnimatedComponent>
                 <ViroAnimatedComponent
                         animation="testLoopOpacity"
                         run={this.state.runAnimation}
                         loop={this.state.willLoop} >

                  <ViroFlexView
                      position={[1, 1, 0]}
                      scale={[0.2, 0.2, 0.1]}
                      materials={["redColor"]}
                      width={3}
                      height={2}
                      onClick={this._elementClick(2)} />

                </ViroAnimatedComponent>
                 <ViroAnimatedComponent
                         animation="testLoopRotate"
                         run={this.state.runAnimation}
                         loop={this.state.willLoop} >

                  <ViroImage
                      width={1} height={1}
                      format="RGBA8" mipmap={true}
                      position={[-2, 0, 0]}
                      scale={[0.5, 0.5, 0.1]}
                      onClick={this._elementClick(3)}
                      source={{uri: "https://upload.wikimedia.org/wikipedia/commons/7/74/Earth_poster_large.jpg"}}
                      />

                </ViroAnimatedComponent>
                 <ViroAnimatedComponent
                         animation="testLoopMove"
                         run={this.state.runAnimation}
                         loop={this.state.willLoop} >

                  <ViroNode
                    position={[-1, 0, 0]}
                    scale={[0.5, 0.5, 0.1]}
                    onClick={this._elementClick(4)}
                    rotation={[0,0,0]}>
                    <ViroText
                        style={styles.baseTextTwo}
                        text="This is a text in a ViroNode" />
                  </ViroNode>

                </ViroAnimatedComponent>
                 <ViroAnimatedComponent
                         animation="testLoopScale"
                         run={this.state.runAnimation}
                         loop={this.state.willLoop} >

                  <ViroSphere
                      position={[0, 0, 0]}
                      scale={[0.3, 0.3, 0.3]}
                      widthSegmentCount={5}
                      heightSegmentCount={5}
                      radius={1}
                      onClick={this._elementClick(5)}
                      materials={["redColor"]}
                      />

                </ViroAnimatedComponent>
                 <ViroAnimatedComponent
                         animation="testLoopOpacity"
                         run={this.state.runAnimation}
                         loop={this.state.willLoop} >

                  <ViroSpinner
                      position={[1, 0, 0]}
                      scale={[0.3, 0.3, 0.1]}
                      onClick={this._elementClick(6)}/>

                </ViroAnimatedComponent>
                 <ViroAnimatedComponent
                         animation="testLoopRotate"
                         run={this.state.runAnimation}
                         loop={this.state.willLoop} >

                  <ViroSurface
                      position={[-2, -1, 0]}
                      scale={[0.5, 0.5, 0.1]}
                      materials={["redColor"]}
                      width={1}
                      onClick={this._elementClick(7)}
                      height={1}/>

                </ViroAnimatedComponent>
                 <ViroAnimatedComponent
                         animation="testLoopMove"
                         run={this.state.runAnimation}
                         loop={this.state.willLoop} >

                  <ViroText
                      position={[-1, -1, 0]}
                      scale={[0.5 , 0.5, 0.1]}
                      style={styles.baseTextTwo}
                      onClick={this._elementClick(8)}
                      text="This is a Viro Text"/>

                </ViroAnimatedComponent>
                 <ViroAnimatedComponent
                         animation="testLoopScale"
                         run={this.state.runAnimation}
                         loop={this.state.willLoop} >

                  <ViroVideo
                      position={[0 , -1,0]}
                      scale={[0.1, 0.1, 0.1]}
                      height={4} width={4}
                      onClick={this._elementClick(9)}
                      source={{"uri":"https://s3-us-west-2.amazonaws.com/viro/Climber1Top.mp4"}} />

                </ViroAnimatedComponent>

                 <ViroText
                      visible={this.state.isPlayVisible}
                      position={[-1.5 , -2, 0]}
                      scale={[1, 1, 0.1]}
                      style={styles.baseTextTwo}
                      text={this.state.playText}
                      onClick={this._togglePlay}/>

                 <ViroText
                      visible={this.state.isPlayVisible}
                       position={[0 , -2, 0]}
                       scale={[1, 1, 0.1]}
                       style={styles.baseTextTwo}
                       text={this.state.loopText}
                       onClick={this._toggleLoop}/>
                </ViroNode>
            </ViroScene>

    );
  },

  _elementClick(item){
    return () => {
        //No-op
    }
  },

    _togglePlay(){
             console.log("Daniel play");
        var newRunAnimation = !this.state.runAnimation;
        var newPlayText = "Pause";
        if (!newRunAnimation){
            newPlayText = "Play";
        }
       this.setState({
        playText:newPlayText,
        runAnimation:newRunAnimation
       });
    },

  _toggleLoop(){
     console.log("Daniel play");
    var loopText = "Loop On";
    if (this.state.willLoop){
        loopText = "Loop Off";
    }
     this.setState({
             loopText:loopText,
             willLoop:!this.state.willLoop
         });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  elementText: {
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 30,
    color: '#ffffff',
    textAlign: 'center',
  },
  baseTextTwo: {
      fontFamily: 'Arial',
      fontSize: 20,
      color: '#ffffff',
      flex: 1,
      textAlignVertical: 'center',
      textAlign: 'center',
  },
});



ViroMaterials.createMaterials({
  sunTexture: {
    diffuseTexture: require("./res/sun_2302.jpg"),
  },
  redColor: {
    diffuseColor: "#ff0000"
  },
  heart: {
      lightingModel: "Constant",
      diffuseTexture: require('../res/heart_d.jpg'),
    },
 });



ViroAnimations.registerAnimations({
    testLoopRotate:{properties:{rotateZ:"+45"}, duration:2000, easing:"EaseInEaseOut"},

    moveRight:{properties:{positionX:"+0.3"}, duration: 2000, easing:"Linear"},
    moveLeft:{properties:{positionX:"+-0.3"}, duration: 2000, easing:"Linear"},
    testLoopMove:[
        ["moveRight", "moveLeft"]
    ],

    scaleUp:{properties:{scaleX:"+0.2"}, duration: 2000, easing:"Bounce"},
    scaleDown:{properties:{scaleX:"+-0.2"}, duration: 2000, easing:"Bounce"},
    testLoopScale:[
        ["scaleUp", "scaleDown"]
    ],
    opacityUp:{properties:{opacity: 1}, duration: 2000, easing:"EaseIn"},
    opacityDown:{properties:{opacity: 0}, duration: 2000, easing:"EaseOut"},
        testLoopOpacity:[
            ["opacityDown", "opacityUp"]
        ],
});



module.exports = GroupTestBasicAnimation;