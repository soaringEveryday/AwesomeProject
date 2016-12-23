package com.awesomeproject.nativemodule;

import com.awesomeproject.widget.GlideImageView;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by cht on 2016/12/23.
 */

public class NativeUIGlideImageViewManager extends SimpleViewManager<GlideImageView> {

    @Override
    public String getName() {
        return "GlideImageView";
    }

    @Override
    protected GlideImageView createViewInstance(ThemedReactContext reactContext) {
        return new GlideImageView(reactContext);
    }

    @ReactProp(name = "url")
    public void setUrl(GlideImageView view, String url){
        view.loadWithUrl(url);
    }
}
