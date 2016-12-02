/**
 * Copyright © 2016 Viro Media. All rights reserved.
 */
package com.viromedia.bridge.component.node.control;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ThemedReactContext;
import com.viromedia.bridge.component.node.NodeManager;

/**
 * BoxManager for building a {@link Box}
 * corresponding to the ViroBox.js control.
 */
public class BoxManager extends NodeManager<Box> {
    private final ReactApplicationContext mContext;

    public BoxManager(ReactApplicationContext context){
        mContext = context;
    }

    @Override
    public String getName() {
        return "VRTBox";
    }

    @Override
    protected Box createViewInstance(ThemedReactContext reactContext) {
        return new Box(mContext);
    }

}